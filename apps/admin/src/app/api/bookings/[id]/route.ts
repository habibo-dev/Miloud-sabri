import { db, BookingStatus } from "@miloud-sabri/database";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await request.json();
  if (!Object.values(BookingStatus).includes(body.status)) return NextResponse.json({ error: "Statut invalide." }, { status: 400 });
  const booking = await db.booking.update({ where: { id }, data: { status: body.status } });
  return NextResponse.json(booking);
}