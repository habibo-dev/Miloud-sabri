import { searchHotels } from "@miloud-sabri/integrations";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  if (!body.cityCode || !body.checkInDate || !body.checkOutDate) return NextResponse.json({ error: "cityCode, checkInDate et checkOutDate sont requis." }, { status: 400 });
  const results = await searchHotels(body);
  return NextResponse.json({ provider: results.length ? "amadeus" : "unavailable", results });
}