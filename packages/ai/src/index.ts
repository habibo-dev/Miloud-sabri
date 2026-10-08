import OpenAI from "openai";

export function getAIClient() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;
  return new OpenAI({ apiKey });
}

export async function answerTravelQuestion(question: string) {
  const client = getAIClient();
  if (!client) return "Le conseiller IA est momentanément indisponible. Contactez notre équipe pour une réponse personnalisée.";
  const response = await client.responses.create({
    model: process.env.OPENAI_MODEL || "gpt-6-luna",
    instructions: "Tu es l'assistant voyage de Miloud Sabri Voyage en Algérie. Réponds en français de façon claire et prudente. Ne promets jamais un prix, une disponibilité, un visa ou une réservation sans données vérifiées. Oriente vers un conseiller pour les informations contractuelles.",
    input: question
  });
  return response.output_text;
}