import sgMail from "@sendgrid/mail";
import { parse as parseQS } from "querystring";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const contentType = req.headers["content-type"] || "";
    let body = {};

    if (contentType.includes("application/json")) {
      body = req.body || {};
    } else {
      const raw = await new Promise((resolve) => {
        let data = "";
        req.on("data", (chunk) => (data += chunk));
        req.on("end", () => resolve(data));
      });
      body = parseQS(raw);
    }

    const { name, phone, email, postcode, message } = body;

    if (!name || !phone || !email || !postcode || !message) {
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
      ].join("\n"),
    };

    await sgMail.send(msg);

    res.status(303).setHeader("Location", "/contact.html?submitted=1");
    res.end();
  } catch (error) {
    res.status(500).json({ error: "Unable to send message" });
  }
}
