import { sendTransactionalEmail } from "@miloud-sabri/integrations";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  if (process.env.NODE_ENV === "production") return NextResponse.json({ error: "Route désactivée en production." }, { status: 404 });
  const body = await request.json();
  if (!body.to) return NextResponse.json({ error: "Destinataire requis." }, { status: 400 });
  const result = await sendTransactionalEmail({ to: body.to, subject: "Miloud Sabri Voyage — test", html: "<p>Configuration email active.</p>", idempotencyKey: "miloud-sabri-email-test-" + body.to });
  return NextResponse.json(result);
}