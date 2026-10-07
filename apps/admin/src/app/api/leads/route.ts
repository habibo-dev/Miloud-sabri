import { db } from "@miloud-sabri/database";
import { NextResponse } from "next/server";

export async function GET() {
  const leads = await db.lead.findMany({ orderBy: { createdAt: "desc" }, take: 100 });
  return NextResponse.json(leads);
}