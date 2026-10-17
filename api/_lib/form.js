import { parse as parseQS } from "querystring";

// Shared by the three enquiry handlers (contact, damp-enquiry, water-assessment).
// Files starting with an underscore are not exposed as routes by Vercel.

export async function readBody(req) {
  const contentType = req.headers["content-type"] || "";
  if (contentType.includes("application/json")) return req.body || {};
  const raw = await new Promise((resolve) => {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => resolve(data));
  });
  return parseQS(raw);
}

// Single-line values: strings only, control characters and line breaks removed
// (so they can't be used to inject extra lines into the subject), length capped.
export function line(value, max = 200) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001f\u007f]+/g, " ").trim().slice(0, max);
}

// Free text: strings only, line breaks kept, length capped.
export function text(value, max = 3000) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").trim().slice(0, max);
}

export function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

// The forms carry a hidden "website" field that people never see or fill in.
// Bots that auto-complete every field give themselves away.
export function isBot(body) {
  return typeof body.website === "string" && body.website.trim() !== "";
}

// Where the enquiry came from. Filled in by /assets/js/attribution.js from the
// visitor's own URL (utm_* parameters), landing page and referring site.
export function attributionLines(body) {
  return [
    `Source: ${line(body.utmSource, 100) || "Direct / organic (no campaign parameters)"}`,
    `Medium: ${line(body.utmMedium, 100) || "-"}`,
    `Campaign: ${line(body.utmCampaign, 150) || "-"}`,
    `Landing page: ${line(body.landingPage, 200) || "-"}`,
    `Referrer: ${line(body.referrer, 100) || "-"}`,
  ];
}
