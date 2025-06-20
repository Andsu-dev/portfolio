import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  title: z.string().min(2, "Title is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message is required"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
