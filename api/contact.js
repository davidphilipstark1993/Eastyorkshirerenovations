import sgMail from "@sendgrid/mail";
import { readBody, line, text, validEmail, isBot, attributionLines } from "./_lib/form.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const body = await readBody(req);

    if (isBot(body)) {
      // Pretend it worked so the bot moves on; nothing is sent.
      res.status(303).setHeader("Location", "/contact.html?submitted=1");
      res.end();
      return;
    }

    const name = line(body.name, 100);
    const phone = line(body.phone, 30);
    const email = line(body.email, 254);
    const postcode = line(body.postcode, 12);
    const message = text(body.message);

    if (!name || !phone || !validEmail(email) || !postcode || !message) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    const toEmail = process.env.TO_EMAIL;
    const fromEmail = process.env.FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      res.status(500).json({ error: "Email service not configured" });
      return;
    }

    sgMail.setApiKey(apiKey);

    const msg = {
      to: toEmail,
      from: fromEmail,
      subject: `New quote request from ${name}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Postcode: ${postcode}`,
        "",
        "Message:",
        message,
        "",
        ...attributionLines(body),
      ].join("\n"),
    };

    await sgMail.send(msg);

    res.status(303).setHeader("Location", "/contact.html?submitted=1");
    res.end();
  } catch (error) {
    res.status(500).json({ error: "Unable to send message" });
  }
}
