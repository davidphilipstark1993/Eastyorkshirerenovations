import sgMail from "@sendgrid/mail";
import { parse as parseQS } from "querystring";

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

    const { name, phone, email, postcode, service, customerType, message } = body;
    const serviceLabel = SERVICES[service];

    if (!name || !phone || !email || !postcode || !serviceLabel) {
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
      ].join("\n"),
    };

    await sgMail.send(msg);

    res.status(303).setHeader("Location", "/damp-proofing/book-a-survey/?submitted=1#damp-enquiry-form");
    res.end();
  } catch (error) {
    res.status(500).json({ error: "Unable to send message" });
  }
}
