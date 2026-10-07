import { answerTravelQuestion } from "@miloud-sabri/ai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const question = typeof body.question === "string" ? body.question.trim() : "";
  if (!question || question.length > 1000) return NextResponse.json({ error: "Question invalide." }, { status: 400 });
  const answer = await answerTravelQuestion(question);
  return NextResponse.json({ answer });
}