import { db } from "@miloud-sabri/database";
import { leadSchema } from "@miloud-sabri/validators";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ error: "Données invalides.", issues: parsed.error.flatten() }, { status: 400 });

    const lead = await db.lead.create({ data: parsed.data });
    return NextResponse.json({ id: lead.id, message: "Demande reçue." }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Service momentanément indisponible." }, { status: 500 });
  }
}