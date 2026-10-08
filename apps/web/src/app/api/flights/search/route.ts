import { searchFlights } from "@miloud-sabri/integrations";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  if (!body.origin || !body.destination || !body.departureDate) return NextResponse.json({ error: "origin, destination et departureDate sont requis." }, { status: 400 });
  const results = await searchFlights(body);
  return NextResponse.json({ provider: results.length ? "amadeus" : "unavailable", results });
}