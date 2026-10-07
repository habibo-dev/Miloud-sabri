import { db } from "@miloud-sabri/database";
import { bookingSchema } from "@miloud-sabri/validators";
import { NextResponse } from "next/server";

function reference() { return `MSV-${Date.now().toString(36).toUpperCase()}`; }

export async function POST(request: Request) {
  try {
    const parsed = bookingSchema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ error: "Données invalides." }, { status: 400 });
    const pkg = await db.package.findFirst({ where: { id: parsed.data.packageId, active: true } });
    if (!pkg) return NextResponse.json({ error: "Offre introuvable." }, { status: 404 });
    const user = parsed.data.email ? await db.user.upsert({ where: { email: parsed.data.email }, update: { name: parsed.data.name, phone: parsed.data.phone }, create: { email: parsed.data.email, name: parsed.data.name, phone: parsed.data.phone } }) : null;
    const booking = await db.booking.create({ data: { reference: reference(), packageId: pkg.id, userId: user?.id, totalDzd: pkg.priceDzd, travelDate: parsed.data.travelDate ? new Date(parsed.data.travelDate) : undefined, notes: parsed.data.notes } });
    return NextResponse.json({ reference: booking.reference }, { status: 201 });
  } catch { return NextResponse.json({ error: "Impossible de créer la réservation pour le moment." }, { status: 500 }); }
}