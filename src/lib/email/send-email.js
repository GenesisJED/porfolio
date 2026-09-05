import { Resend } from "resend";
import { buildContactEmail, buildContactText } from "./templates/contact-email";

const RECIPIENT_EMAIL =
  process.env.CONTACT_EMAIL || "escalonagenesis97@gmail.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

let resendClient = null;

function getResend() {
  if (resendClient) return resendClient;
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is not defined. Add it to .env.local to enable email sending."
    );
  }
  resendClient = new Resend(apiKey);
  return resendClient;
}

export async function sendContactEmail({ name, email, message }) {
  const resend = getResend();

  const subject = `New portfolio message from ${name}`;
  const html = buildContactEmail({ name, email, message });
  const text = buildContactText({ name, email, message });

  const { data, error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [RECIPIENT_EMAIL],
    replyTo: email,
    subject,
    html,
    text,
  });

  if (error) {
    console.error("Resend error:", error);
    throw new Error(error.message || "Failed to send email");
  }

  return data;
}
