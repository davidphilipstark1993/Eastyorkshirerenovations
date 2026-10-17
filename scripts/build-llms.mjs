// Builds /llms.txt: a plain-Markdown summary of the business for AI answer
// engines (ChatGPT, Claude, Perplexity, Google AI Overviews), with links to
// the key pages. Facts come from scripts/data/business.mjs and
// scripts/lib/constants.mjs, so they stay in step with the site.
//
//   node scripts/build-llms.mjs
import { writeFileSync, existsSync } from "fs";
import { SITE, BUSINESS_NAME, EMAIL, ADDRESS_LINE, AREA_SERVED } from "./lib/constants.mjs";
import { PHONE, GOOGLE_PROFILE, SOCIAL_PROFILES, PUBLIC_LIABILITY, COMPANY } from "./data/business.mjs";

const link = (title, path, note) => {
  // Every link must point at a real page.
  const file = path === "/" ? "index.html" : path.endsWith("/") ? `${path.slice(1)}index.html` : path.slice(1);
  if (!existsSync(file)) throw new Error(`llms.txt links to a missing page: ${path}`);
  return `- [${title}](${SITE}${path})${note ? `: ${note}` : ""}`;
};

const lines = [
  `# ${BUSINESS_NAME}`,
  "",
  `> ${BUSINESS_NAME} is a renovation and damp-proofing firm based on ${ADDRESS_LINE}, covering Hull, East Yorkshire and North Lincolnshire. It does damp surveys and damp treatment, kitchens, bathrooms, full house renovations and larger home improvements, and does its own plastering, making good and decorating.`,
  "",
  "## Key facts",
  "",
  `- Business: ${BUSINESS_NAME} (legal name ${COMPANY.legalName}), trading since ${COMPANY.established}`,
  `- Address: ${ADDRESS_LINE}`,
  `- Phone: ${PHONE.display}`,
  `- Email: ${EMAIL}`,
  "- Opening hours: Monday to Friday, 08:00 to 16:30 (closed weekends)",
  "- Damp survey: £119 including VAT, deducted from the cost of treatment if you go ahead with the quote",
  "- Landlord damp and mould report: £99 including VAT",
  "- Pre-purchase damp report: written report within 3 days",
  "- Damp-proofing guarantees: written guarantees of up to 30 years, depending on the treatment (30 years on a damp-proof course injection)",
  `- Insurance: ${PUBLIC_LIABILITY} public liability`,
  `- Areas covered: ${AREA_SERVED.join(", ")}`,
  `- Google Business Profile and reviews: ${GOOGLE_PROFILE}`,
  ...SOCIAL_PROFILES.map((u) => `- Social: ${u}`),
  "",
  "## Damp proofing and damp surveys",
  "",
  link("Damp proofing hub", "/damp-proofing/", "survey first, then treatment, replastering and guarantee"),
  link("Damp surveys", "/damp-proofing/damp-surveys/", "£119, written report"),
  link("Pre-purchase damp surveys", "/damp-proofing/pre-purchase-damp-survey/", "for buyers whose mortgage survey says damp noted"),
  link("Landlord damp and mould reports", "/damp-proofing/landlord-damp-mould-reports/", "£99"),
  link("Rising damp treatment", "/damp-proofing/rising-damp-treatment/"),
  link("Penetrating damp repairs", "/damp-proofing/penetrating-damp/"),
  link("Condensation control", "/damp-proofing/condensation-control/"),
  link("Mould treatment", "/damp-proofing/mould-treatment/"),
  link("Cellar tanking", "/damp-proofing/cellar-tanking/"),
  link("Book a damp survey", "/damp-proofing/book-a-survey/"),
  "",
  "## Renovation services",
  "",
  link("Kitchen installs", "/kitchen-installs.html"),
  link("Bathroom installs", "/bathroom-installs.html"),
  link("Full house renovations", "/full-house-renovations.html"),
  link("Plastering", "/plastering.html"),
  link("Decorating", "/decorating.html"),
  link("Electrical work", "/electrical.html"),
  link("Joinery", "/joinery.html"),
  link("Garage conversions", "/garage-conversions/"),
  link("Garden rooms", "/garden-rooms/"),
  link("Orangeries", "/orangeries/"),
  link("Conservatory transformations", "/conservatory-transformations/"),
  link("Outdoor kitchens", "/outdoor-kitchens/"),
  link("Home water treatment", "/water-treatment.html"),
  link("All services", "/services.html"),
  "",
  "## Areas",
  "",
  link("Areas we cover", "/areas.html"),
  link("Hull", "/hull.html"),
  link("Beverley", "/beverley.html"),
  link("Cottingham", "/cottingham.html"),
  link("Hessle", "/hessle.html"),
  link("Damp proofing in Hull", "/damp-proofing/hull/"),
  link("Damp proofing in Beverley", "/damp-proofing/beverley/"),
  link("Damp proofing in Scunthorpe", "/damp-proofing/scunthorpe/"),
  link("Damp proofing in Grimsby", "/damp-proofing/grimsby/"),
  "",
  "## Guides",
  "",
  link("All guides", "/guides/"),
  link("How much is a damp survey in Hull?", "/guides/damp-survey-cost-hull/"),
  link("Is it damp or condensation?", "/guides/damp-or-condensation/"),
  link("How to tell if it's rising damp", "/guides/how-to-tell-if-its-rising-damp/"),
  link("Buying a house with damp", "/guides/buying-a-house-with-damp/"),
  link("How long does damp proofing take?", "/guides/how-long-does-damp-proofing-take/"),
  "",
  "## About and contact",
  "",
  link("About us", "/about.html"),
  link("Contact and quotes", "/contact.html"),
  link("Recent work", "/work.html"),
  link("Project case studies", "/projects/"),
  "",
];

writeFileSync("llms.txt", lines.join("\n"));
console.log("wrote llms.txt");
