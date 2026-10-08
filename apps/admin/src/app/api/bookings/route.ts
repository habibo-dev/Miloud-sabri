import { db } from "@miloud-sabri/database";
import { NextResponse } from "next/server";

export async function GET() {
  const bookings = await db.booking.findMany({ include: { package: { include: { destination: true } }, user: true }, orderBy: { createdAt: "desc" }, take: 100 });
  return NextResponse.json(bookings);
}