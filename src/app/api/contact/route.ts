import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = "shahnawazahmedlaghari@gmail.com";

    if (!apiKey) {
      console.warn("RESEND_API_KEY is not set. Submission logged:", { name, email, message });
      return NextResponse.json(
        { error: "Email service is not configured. Please add RESEND_API_KEY." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: recipientEmail,
        reply_to: email,
        subject: `[Portfolio Inquiry] New message from ${name}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
            <h2 style="color: #7c3aed; margin-bottom: 8px;">New Contact Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p><strong>Message:</strong></p>
            <blockquote style="background: #f9fafb; padding: 12px 16px; border-left: 4px solid #7c3aed; margin: 0; border-radius: 4px; white-space: pre-wrap;">${message}</blockquote>
            <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p style="font-size: 12px; color: #6b7280;">You can directly hit 'Reply' in Gmail to respond to ${name}.</p>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", data);
      return NextResponse.json({ error: data.message || "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: data.id });
  } catch (error) {
    console.error("Error in contact route:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}