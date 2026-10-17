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
      res.status(303).setHeader("Location", "/water-treatment.html?submitted=1#water-assessment-form");
      res.end();
      return;
    }

    const name = line(body.name, 100);
    const phone = line(body.phone, 30);
    const email = line(body.email, 254);
    const postcode = line(body.postcode, 12);
    const propertyType = line(body.propertyType, 60);
    const householdSize = line(body.householdSize, 40);
    const bathrooms = line(body.bathrooms, 40);
    const reason = line(body.reason, 120);
    const preferredContact = line(body.preferredContact, 60);
    const packageInterest = line(body.packageInterest, 80);
    const message = text(body.message);

    if (!name || !phone || !validEmail(email) || !postcode || !propertyType || !householdSize || !reason || !preferredContact) {
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
      subject: `New water assessment enquiry from ${name}`,
      replyTo: email,
      text: [
        "NEW WATER TREATMENT ENQUIRY",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Postcode: ${postcode}`,
        "",
        `Property: ${propertyType}`,
        `Household: ${householdSize}`,
        `Bathrooms: ${bathrooms || "Not provided"}`,
        "",
        `Interested in: ${reason}`,
        "",
        `Preferred contact: ${preferredContact}`,
        "",
        `Package interest: ${packageInterest || "None (general enquiry)"}`,
        ...attributionLines(body),
        "",
        `Message: ${message || "(none provided)"}`,
      ].join("\n"),
    };

    await sgMail.send(msg);

    res.status(303).setHeader("Location", "/water-treatment.html?submitted=1#water-assessment-form");
    res.end();
  } catch (error) {
    res.status(500).json({ error: "Unable to send message" });
  }
}
