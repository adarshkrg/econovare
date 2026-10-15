import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, organization, service, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { ok: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const mailUser = process.env.MAIL_USER || "info.econovare@gmail.com";
    const mailPass = process.env.MAIL_PASS;

    if (mailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: mailUser,
            pass: mailPass,
          },
        });

        await transporter.sendMail({
          from: `"EcoNova Website" <${mailUser}>`,
          to: "info.econovare@gmail.com",
          replyTo: email,
          subject: `New Inquiry: ${service || "General"} — ${name}`,
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #D4E3C5;border-radius:12px;">
              <div style="background:linear-gradient(135deg,#1E3A2B,#17325E);border-radius:8px;padding:24px;color:#fff;margin-bottom:24px;">
                <h2 style="margin:0;font-size:22px;">New Consultation Request</h2>
                <p style="margin:6px 0 0;opacity:0.8;font-size:14px;">EcoNova Resources &amp; Energy — Website Inquiry</p>
              </div>
              <table style="width:100%;border-collapse:collapse;font-size:15px;">
                <tr><td style="padding:10px 0;color:#718096;width:160px;vertical-align:top;font-weight:700;">Full Name</td><td style="padding:10px 0;color:#1a1a1a;">${name}</td></tr>
                <tr><td style="padding:10px 0;color:#718096;font-weight:700;">Email</td><td style="padding:10px 0;color:#1a1a1a;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding:10px 0;color:#718096;font-weight:700;">Phone</td><td style="padding:10px 0;color:#1a1a1a;">${phone}</td></tr>
                <tr><td style="padding:10px 0;color:#718096;font-weight:700;">Organization</td><td style="padding:10px 0;color:#1a1a1a;">${organization || "—"}</td></tr>
                <tr><td style="padding:10px 0;color:#718096;font-weight:700;">Interest Area</td><td style="padding:10px 0;color:#0E7C86;font-weight:700;">${service}</td></tr>
                <tr><td style="padding:10px 0;color:#718096;font-weight:700;vertical-align:top;">Message</td><td style="padding:10px 0;color:#1a1a1a;line-height:1.6;">${String(message).replace(/\n/g, "<br>")}</td></tr>
              </table>
              <div style="margin-top:24px;padding:16px;background:#F7FDF0;border-radius:8px;font-size:13px;color:#4a5568;">
                Submitted on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
              </div>
            </div>
          `,
        });
      } catch (mailErr) {
        console.error("Nodemailer error:", mailErr);
      }
    } else {
      console.log("📩 EcoNova inquiry received (SMTP not configured, logging payload):", {
        name,
        email,
        phone,
        organization,
        service,
        message,
        time: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      ok: true,
      message: "Your inquiry has been sent successfully! Our team will contact you shortly.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again or email info.econovare@gmail.com directly." },
      { status: 500 }
    );
  }
}
