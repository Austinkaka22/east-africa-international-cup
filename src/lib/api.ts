import { NextRequest, NextResponse } from "next/server";
import type { FormSchema } from "@/lib/forms";
import { sendSubmissionEmail } from "@/lib/email";
import { isRateLimited } from "@/lib/rate-limit";

export function createFormHandler(schema: FormSchema, subject: string) {
  return async function POST(request: NextRequest) {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "local";

    if (isRateLimited(`${subject}:${ip}`)) {
      return NextResponse.json(
        { ok: false, message: "Too many attempts. Please try again shortly." },
        { status: 429 }
      );
    }

    const body = await request.json().catch(() => null);
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please check the highlighted fields and try again.",
          errors: parsed.error.flatten().fieldErrors
        },
        { status: 400 }
      );
    }

    if (parsed.data.website) {
      return NextResponse.json(
        { ok: true, message: "Thanks. Your submission has been received." },
        { status: 202 }
      );
    }

    const result = await sendSubmissionEmail({
      subject,
      submission: parsed.data
    });

    return NextResponse.json({
      ok: true,
      preview: result.preview,
      message: result.preview
        ? "Submission received in preview mode. Configure SMTP to send live email."
        : "Thanks. Your submission has been sent to the organizing team."
    });
  };
}
