import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().optional().or(z.literal("")),
  phone: z.string().trim().min(6).max(30).optional().or(z.literal("")),
  source: z.string().trim().max(50).optional(),
  message: z.string().trim().max(2000).optional()
});

export const bookingSchema = z.object({
  packageId: z.string().min(1),
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().optional().or(z.literal("")),
  phone: z.string().trim().min(6).max(30),
  travelDate: z.string().optional().or(z.literal("")),
  notes: z.string().trim().max(2000).optional()
});

export type LeadInput = z.infer<typeof leadSchema>;
export type BookingInput = z.infer<typeof bookingSchema>;