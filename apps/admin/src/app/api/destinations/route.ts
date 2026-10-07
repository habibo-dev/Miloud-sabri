import { db } from "@miloud-sabri/database";
import { NextResponse } from "next/server";

export async function GET() {
  const destinations = await db.destination.findMany({ include: { _count: { select: { packages: true } } }, orderBy: [{ featured: "desc" }, { name: "asc" }] });
  return NextResponse.json(destinations);
}