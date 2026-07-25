import { z } from "zod";

const optionalUrl = z
  .string()
  .trim()
  .max(200, "Store URL is too long")
  .refine((value) => !value || /^https?:\/\/.+/i.test(value), "Include http:// or https://");

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(160),
  storeUrl: optionalUrl,
  problem: z.string().trim().min(2, "Select the problem you are experiencing").max(120),
  message: z.string().trim().min(20, "Please share at least 20 characters").max(3000, "Message is too long"),
  company: z.string().max(0, "Spam detected")
});

export type ContactInput = z.infer<typeof contactSchema>;
