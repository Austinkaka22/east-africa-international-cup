import { createFormHandler } from "@/lib/api";
import { teamRegistrationSchema } from "@/lib/forms";

export const POST = createFormHandler(
  teamRegistrationSchema,
  "EAIC Team Registration"
);
