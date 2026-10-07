import { auth } from "../../../../../../auth";
import { db } from "@miloud-sabri/database";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Non authentifié." }, { status: 401 });
  }

  const { id } = await request.json();
  const notification = await db.notification.findFirst({
    where: { id, user: { email: session.user.email } },
  });

  if (!notification) {
    return NextResponse.json({ error: "Notification introuvable." }, { status: 404 });
  }

  await db.notification.update({
    where: { id },
    data: { readAt: new Date() },
  });

  return NextResponse.json({ ok: true });
}
