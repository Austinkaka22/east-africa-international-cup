import { createFormHandler } from "@/lib/api";
import { vendorApplicationSchema } from "@/lib/forms";

export const POST = createFormHandler(
  vendorApplicationSchema,
  "EAIC Vendor Application"
);
