import { z } from "zod";

const email = z.string().trim().email("Enter a valid email address.");
const phone = z.string().trim().min(7, "Enter a valid phone number.");
const text = (label: string, min = 2) =>
  z.string().trim().min(min, `${label} is required.`);

export const contactSchema = z.object({
  formType: z.literal("contact").default("contact"),
  name: text("Name"),
  email,
  phone: phone.optional().or(z.literal("")),
  subject: text("Subject"),
  message: text("Message", 10),
  website: z.string().optional()
});

export const teamRegistrationSchema = z.object({
  formType: z.literal("team-registration").default("team-registration"),
  academyName: text("Academy name"),
  country: text("Country"),
  discipline: text("Discipline"),
  contactName: text("Contact name"),
  email,
  phone,
  playerCount: z.coerce.number().min(1).max(25),
  notes: z.string().trim().optional(),
  website: z.string().optional()
});

export const workApplicationSchema = z.object({
  formType: z.literal("work-application").default("work-application"),
  name: text("Name"),
  email,
  phone,
  role: text("Preferred role"),
  experience: text("Experience", 10),
  availability: text("Availability"),
  website: z.string().optional()
});

export const vendorApplicationSchema = z.object({
  formType: z.literal("vendor-application").default("vendor-application"),
  businessName: text("Business name"),
  contactName: text("Contact name"),
  email,
  phone,
  category: text("Vendor category"),
  requirements: text("Requirements", 5),
  website: z.string().optional()
});

export const brandingInquirySchema = z.object({
  formType: z.literal("branding-inquiry").default("branding-inquiry"),
  organization: text("Organization"),
  contactName: text("Contact name"),
  email,
  phone,
  interest: text("Branding interest"),
  budget: z.string().trim().optional(),
  message: text("Message", 10),
  website: z.string().optional()
});

export type FormSchema =
  | typeof contactSchema
  | typeof teamRegistrationSchema
  | typeof workApplicationSchema
  | typeof vendorApplicationSchema
  | typeof brandingInquirySchema;

export type FormSubmission = Record<string, string | number | undefined>;
