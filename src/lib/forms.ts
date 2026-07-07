import { z } from "zod";

const email = z.string().trim().email("Enter a valid email address.");
const phone = z.string().trim().min(7, "Enter a valid phone number.");
const text = (label: string, min = 2) =>
  z.string().trim().min(min, `${label} is required.`);
const teamCount = z.enum(["None", "1 team", "2 teams", "3 teams", "4 teams"]);

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
  contactName: text("Contact name"),
  email,
  phone,
  u7Teams: teamCount,
  u9Teams: teamCount,
  u11Teams: teamCount,
  u13Teams: teamCount,
  u15Teams: teamCount,
  u17Teams: teamCount,
  girlsU13Teams: teamCount,
  girlsU15Teams: teamCount,
  girlsU17Teams: teamCount,
  seniorsTeams: teamCount,
  commitment: z.enum(["Yes", "No", "Other"]),
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
