import { createFormHandler } from "@/lib/api";
import { workApplicationSchema } from "@/lib/forms";

export const POST = createFormHandler(workApplicationSchema, "EAIC Work Application");
