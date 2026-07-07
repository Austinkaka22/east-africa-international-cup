import nodemailer from "nodemailer";
import type { FormSubmission } from "@/lib/forms";

type SendOptions = {
  subject: string;
  submission: FormSubmission;
};

const requiredEnv = [
  "CONTACT_TO_EMAIL",
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "SMTP_FROM"
];

const fieldLabels: Record<string, string> = {
  formType: "Form type",
  academyName: "Academy or club name",
  country: "Country",
  contactName: "Contact person",
  email: "Email",
  phone: "Phone",
  u7Teams: "U7 teams",
  u9Teams: "U9 teams",
  u11Teams: "U11 teams",
  u13Teams: "U13 teams",
  u15Teams: "U15 teams",
  u17Teams: "U17 teams",
  girlsU13Teams: "Girls U13 teams",
  girlsU15Teams: "Girls U15 teams",
  girlsU17Teams: "Girls U17 teams",
  seniorsTeams: "Seniors teams",
  commitment: "Commitment response",
  notes: "Notes"
};

export function isEmailConfigured() {
  return requiredEnv.every((key) => Boolean(process.env[key]));
}

function submissionToHtml(submission: FormSubmission) {
  const rows = Object.entries(submission)
    .filter(([key]) => key !== "website")
    .map(
      ([key, value]) =>
        `<tr><th style="text-align:left;padding:8px;border-bottom:1px solid #ddd;">${fieldLabels[key] ?? key}</th><td style="padding:8px;border-bottom:1px solid #ddd;">${String(value ?? "")}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#17120b;">
      <h2>East Africa International Cup Website Submission</h2>
      <table style="border-collapse:collapse;width:100%;">${rows}</table>
    </div>
  `;
}

export async function sendSubmissionEmail({ subject, submission }: SendOptions) {
  if (!isEmailConfigured()) {
    console.info("[EAIC form preview]", subject, submission);
    return { preview: true };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transporter.sendMail({
    to: process.env.CONTACT_TO_EMAIL,
    from: process.env.SMTP_FROM,
    replyTo: typeof submission.email === "string" ? submission.email : undefined,
    subject,
    html: submissionToHtml(submission)
  });

  return { preview: false };
}
