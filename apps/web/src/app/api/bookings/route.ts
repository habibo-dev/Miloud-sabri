import { db } from "@miloud-sabri/database";
import { bookingSchema } from "@miloud-sabri/validators";
import { NextResponse } from "next/server";
import { sendTransactionalEmail } from "@miloud-sabri/integrations";
import { randomUUID } from "node:crypto";

function reference() { return `MSV-${randomUUID().replaceAll("-", "").slice(0, 12).toUpperCase()}`; }

export async function POST(request: Request) {
  try {
    const parsed = bookingSchema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ error: "Données invalides." }, { status: 400 });
    const pkg = await db.package.findFirst({ where: { id: parsed.data.packageId, active: true } });
    if (!pkg) return NextResponse.json({ error: "Offre introuvable." }, { status: 404 });
    const user = parsed.data.email ? await db.user.upsert({ where: { email: parsed.data.email }, update: { name: parsed.data.name, phone: parsed.data.phone }, create: { email: parsed.data.email, name: parsed.data.name, phone: parsed.data.phone } }) : null;
    const booking = await db.booking.create({ data: { reference: reference(), packageId: pkg.id, userId: user?.id, totalDzd: pkg.priceDzd, travelDate: parsed.data.travelDate ? new Date(parsed.data.travelDate) : undefined, notes: parsed.data.notes } });
    if (user) {
      await db.notification.create({
        data: { userId: user.id, bookingId: booking.id, title: "Réservation reçue", body: "Votre demande " + booking.reference + " a bien été enregistrée. Notre équipe va vous contacter." }
      });
      if (user.email) {
        try {
          await sendTransactionalEmail({
            to: user.email,
            subject: "Demande de réservation " + booking.reference,
            html: "<h2>Merci pour votre demande</h2><p>Votre demande <strong>" + booking.reference + "</strong> a été reçue par Miloud Sabri Voyage.</p><p>Notre équipe vous contactera pour confirmer les détails.</p>",
            idempotencyKey: "booking-created-" + booking.id
          });
        } catch { /* email delivery must not invalidate the booking */ }
      }
    }
    return NextResponse.json({ reference: booking.reference }, { status: 201 });
  } catch { return NextResponse.json({ error: "Impossible de créer la réservation pour le moment." }, { status: 500 }); }
}