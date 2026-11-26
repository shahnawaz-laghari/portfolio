import { z } from "zod";

/** Shared by the contact form and the API route so both validate the same rules. */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80, "Name is too long"),
  email: z.string().trim().email("Invalid email").max(160, "Email is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Message too short")
    .max(4000, "Message is too long"),
});

export type ContactValues = z.infer<typeof contactSchema>;
