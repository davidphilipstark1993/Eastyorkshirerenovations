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

    const {
      name,
      phone,
      email,
      postcode,
      propertyType,
      householdSize,
      bathrooms,
      reason,
      preferredContact,
      message,
      packageInterest,
      utmSource,
      utmMedium,
      utmCampaign,
      landingPage,
    } = body;

    if (!name || !phone || !email || !postcode || !propertyType || !householdSize || !reason || !preferredContact) {
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
        `Marketing source: ${utmSource || "Direct / organic (no campaign parameters)"}`,
        `Medium: ${utmMedium || "-"}`,
        `Campaign: ${utmCampaign || "-"}`,
        `Landing page: ${landingPage || "-"}`,
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
