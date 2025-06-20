import emailjs from "@emailjs/browser";
import type { ContactFormValues } from "@/schemas/contact.schema";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export async function sendContactEmail(data: ContactFormValues) {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
}
