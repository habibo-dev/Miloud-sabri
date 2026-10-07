export type PaymentIntent = { bookingReference: string; amountDzd: number; currency?: "DZD" };
export type PaymentResult = { status: "unavailable" | "pending" | "paid" | "failed"; checkoutUrl?: string; provider?: string };

export async function createPaymentIntent(_input: PaymentIntent): Promise<PaymentResult> {
  // Algerian web payments require merchant/bank onboarding and SATIM/GIE Monétique certification.
  // Do not pretend a public API exists before the agency receives its production credentials.
  return { status: "unavailable" };
}