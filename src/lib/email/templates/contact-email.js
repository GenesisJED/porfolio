export function buildContactEmail({ name, email, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New message from ${safeName}</title>
</head>
<body style="margin:0;padding:0;background-color:#121221;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#e3e0f6;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#121221;background-image:radial-gradient(circle at 50% 0%, rgba(255, 76, 131, 0.15) 0%, transparent 50%);padding:40px 20px;">
<tr>
<td align="center">
<table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;width:100%;background-color:#1e1e2e;border:1px solid rgba(255,255,255,0.1);border-radius:16px;overflow:hidden;">
<tr>
<td style="background:linear-gradient(135deg, #ff4c83 0%, #cf5cff 100%);padding:32px 40px;text-align:center;">
<h1 style="margin:0;color:#ffffff;font-family:'Sora',sans-serif;font-size:28px;font-weight:700;letter-spacing:-0.02em;">
New Portfolio Message
</h1>
<p style="margin:8px 0 0 0;color:rgba(255,255,255,0.85);font-size:14px;font-weight:500;">
Someone wants to work with you
</p>
</td>
</tr>
<tr>
<td style="padding:32px 40px;">
<p style="margin:0 0 8px 0;font-size:12px;font-weight:700;color:#ffb1c0;text-transform:uppercase;letter-spacing:0.1em;font-family:'JetBrains Mono',monospace;">
From
</p>
<p style="margin:0 0 24px 0;font-size:18px;font-weight:600;color:#e3e0f6;font-family:'Sora',sans-serif;">
${safeName}
</p>

<p style="margin:0 0 8px 0;font-size:12px;font-weight:700;color:#ffb1c0;text-transform:uppercase;letter-spacing:0.1em;font-family:'JetBrains Mono',monospace;">
Email
</p>
<p style="margin:0 0 24px 0;font-size:16px;color:#e6feff;font-family:'JetBrains Mono',monospace;">
<a href="mailto:${safeEmail}" style="color:#e6feff;text-decoration:none;">
${safeEmail}
</a>
</p>

<p style="margin:0 0 8px 0;font-size:12px;font-weight:700;color:#ffb1c0;text-transform:uppercase;letter-spacing:0.1em;font-family:'JetBrains Mono',monospace;">
Message
</p>
<div style="background-color:#292839;border:1px solid rgba(255,255,255,0.05);border-radius:12px;padding:20px;color:#e3e0f6;font-size:15px;line-height:1.7;white-space:normal;word-wrap:break-word;">
${safeMessage}
</div>

<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top:32px;">
<tr>
<td align="center">
<a href="mailto:${safeEmail}?subject=Re: Your portfolio contact" style="display:inline-block;background-color:#ff4c83;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:9999px;font-weight:600;font-size:15px;box-shadow:0 0 15px rgba(255, 76, 131, 0.4);">
Reply to ${safeName}
</a>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="background-color:#121221;padding:20px 40px;text-align:center;border-top:1px solid rgba(255,255,255,0.05);">
<p style="margin:0;font-size:12px;color:#ab888e;font-family:'JetBrains Mono',monospace;">
Sent from your portfolio contact form
</p>
<p style="margin:8px 0 0 0;font-size:12px;color:#ffb1c0;font-weight:700;font-family:'JetBrains Mono',monospace;letter-spacing:0.1em;">
GE — GENESIS ESCALONA
</p>
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>
  `.trim();
}

export function buildContactText({ name, email, message }) {
  return [
    `New Portfolio Message`,
    ``,
    `From: ${name}`,
    `Email: ${email}`,
    ``,
    `Message:`,
    message,
    ``,
    `---`,
    `Reply directly to this email to respond.`,
  ].join("\n");
}

function escapeHtml(input) {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
