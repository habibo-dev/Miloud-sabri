import { db } from "@miloud-sabri/database";
import { NextResponse } from "next/server";

export async function GET() {
  const packages = await db.package.findMany({ include: { destination: true }, orderBy: [{ featured: "desc" }, { createdAt: "desc" }] });
  return NextResponse.json(packages);
}