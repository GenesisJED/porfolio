"use server";

import { contactSchema } from "@/lib/validation/contact-schema";
import { sendContactEmail } from "@/lib/email/send-email";

export async function submitContactForm(prevState, formData) {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    honeypot: formData.get("website") || "",
  };

  const validation = contactSchema.safeParse(rawData);

  if (!validation.success) {
    const fieldErrors = {};
    for (const issue of validation.error.issues) {
      const key = issue.path[0];
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Please fix the errors below.",
      errors: fieldErrors,
    };
  }

  if (validation.data.honeypot && validation.data.honeypot.length > 0) {
    return {
      status: "success",
      message: "Message sent successfully!",
      errors: {},
    };
  }

  try {
    await sendContactEmail({
      name: validation.data.name,
      email: validation.data.email,
      message: validation.data.message,
    });
    return {
      status: "success",
      message: "Message sent successfully! I will get back to you soon.",
      errors: {},
    };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return {
      status: "error",
      message:
        "Something went wrong sending your message. Please try again or email me directly at escalonagenesis97@gmail.com.",
      errors: {},
    };
  }
}
