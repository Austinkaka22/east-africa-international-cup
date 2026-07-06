import { createFormHandler } from "@/lib/api";
import { brandingInquirySchema } from "@/lib/forms";

export const POST = createFormHandler(
  brandingInquirySchema,
  "EAIC Branding Inquiry"
);
