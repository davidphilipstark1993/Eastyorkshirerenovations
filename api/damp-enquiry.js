import sgMail from "@sendgrid/mail";
import { readBody, line, text, validEmail, isBot, attributionLines } from "./_lib/form.js";

// Values match the <select name="service"> options on /damp-proofing/book-a-survey/.
const SERVICES = {
  "damp-surveys": "Damp survey",
  "pre-purchase-damp-survey": "Pre-purchase damp survey",
  "landlord-damp-mould-reports": "Landlord damp & mould report",
  "rising-damp-treatment": "Rising damp treatment",
  "penetrating-damp": "Penetrating damp repairs",
  "condensation-control": "Condensation control",
  "mould-treatment": "Mould treatment",
  "cellar-tanking": "Cellar tanking",
  "not-sure": "Not sure - needs advice",
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const body = await readBody(req);

    if (isBot(body)) {
      // Pretend it worked so the bot moves on; nothing is sent.
      res.status(303).setHeader("Location", "/damp-proofing/book-a-survey/?submitted=1#damp-enquiry-form");
      res.end();
      return;
    }

    const name = line(body.name, 100);
    const phone = line(body.phone, 30);
    const email = line(body.email, 254);
    const postcode = line(body.postcode, 12);
    const customerType = line(body.customerType, 60);
    const message = text(body.message);
    const serviceLabel = Object.hasOwn(SERVICES, body.service) ? SERVICES[body.service] : undefined;

    if (!name || !phone || !validEmail(email) || !postcode || !serviceLabel) {
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
      subject: `New damp enquiry (${serviceLabel}) from ${name}`,
      replyTo: email,
      text: [
        "NEW DAMP ENQUIRY",
        "",
        `Quote for: ${serviceLabel}`,
        `Customer: ${customerType || "Not provided"}`,
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Postcode: ${postcode}`,
        "",
        "Message:",
        message || "(none provided)",
        "",
        ...attributionLines(body),
      ].join("\n"),
    };

    await sgMail.send(msg);

    res.status(303).setHeader("Location", "/damp-proofing/book-a-survey/?submitted=1#damp-enquiry-form");
    res.end();
  } catch (error) {
    res.status(500).json({ error: "Unable to send message" });
  }
}
