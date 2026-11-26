import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { profile } from "@/data/profile";

/** Prevent user-supplied text from breaking out of the HTML email body. */
function escapeHtml(value: string): string {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return value.replace(/[&<>"']/g, (char) => entities[char] ?? char);
}

export async function POST(req: Request) {
  try {
    const parsed = contactSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please check the form fields and try again." },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_TO_EMAIL || profile.email;

    // Local/dev fallback required by the spec: log it, still tell the user it worked.
    if (!apiKey) {
      console.info("[contact] RESEND_API_KEY is not set. Submission logged:", {
        name,
        email,
        message,
      });
      return NextResponse.json({ ok: true, id: "logged-locally" });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
        to: recipient,
        reply_to: email,
        subject: `[Portfolio Inquiry] New message from ${name}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
            <h2 style="color: #7c3aed; margin-bottom: 8px;">New Contact Message</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Sender Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p><strong>Message:</strong></p>
            <blockquote style="background: #f9fafb; padding: 12px 16px; border-left: 4px solid #7c3aed; margin: 0; border-radius: 4px;">${safeMessage}</blockquote>
            <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p style="font-size: 12px; color: #6b7280;">Reply directly to this email to respond to ${safeName}.</p>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", data);
      return NextResponse.json(
        { error: data.message || "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: data.id });
  } catch (error) {
    console.error("Error in contact route:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
