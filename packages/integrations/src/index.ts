import { Resend } from "resend";

export type FlightSearch = { origin: string; destination: string; departureDate: string; adults?: number };
export type FlightResult = { provider: string; id: string; price: string; currency: string; raw?: unknown };
export type HotelSearch = { cityCode: string; checkInDate: string; checkOutDate: string; adults?: number };

export async function searchFlights(_input: FlightSearch): Promise<FlightResult[]> {
  if (!process.env.AMADEUS_CLIENT_ID || !process.env.AMADEUS_CLIENT_SECRET) return [];
  return [];
}

export async function searchHotels(_input: HotelSearch): Promise<unknown[]> {
  if (!process.env.AMADEUS_CLIENT_ID || !process.env.AMADEUS_CLIENT_SECRET) return [];
  return [];
}

export async function sendTransactionalEmail(input: { to: string; subject: string; html: string; idempotencyKey?: string }) {
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM) return { skipped: true as const };
  const resend = new Resend(process.env.RESEND_API_KEY);
  const result = await resend.emails.send(
    { from: process.env.RESEND_FROM, to: [input.to], subject: input.subject, html: input.html },
    input.idempotencyKey ? { idempotencyKey: input.idempotencyKey } : undefined
  );
  if (result.error) throw new Error(result.error.message);
  return { skipped: false as const, id: result.data?.id };
}