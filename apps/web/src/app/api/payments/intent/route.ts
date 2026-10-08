import { auth } from "../../../../../auth";
import { db } from "@miloud-sabri/database";
import { createPaymentIntent } from "@miloud-sabri/payments";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.email) return NextResponse.json({ error: "Non authentifié." }, { status: 401 });
  const body = await request.json();
  if (!body.reference) return NextResponse.json({ error: "Référence requise." }, { status: 400 });
  const booking = await db.booking.findUnique({ where: { reference: String(body.reference) } });
  if (!booking) return NextResponse.json({ error: "Réservation introuvable." }, { status: 404 });
  const user = await db.user.findUnique({ where: { email: session.user.email } });
  if (!user || booking.userId !== user.id) return NextResponse.json({ error: "Non autorisé." }, { status: 403 });
  const result = await createPaymentIntent({ bookingReference: booking.reference, amountDzd: Number(booking.totalDzd), currency: "DZD" });
  return NextResponse.json(result, { status: result.status === "unavailable" ? 503 : 200 });
}