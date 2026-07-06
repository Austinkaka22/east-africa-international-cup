import { createFormHandler } from "@/lib/api";
import { contactSchema } from "@/lib/forms";

export const POST = createFormHandler(contactSchema, "EAIC Contact Form");
