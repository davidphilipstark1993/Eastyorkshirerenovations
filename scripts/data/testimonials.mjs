/**
 * Real, verifiable customer reviews only.
 *
 * Do NOT invent a name, quote, rating, location or date here. Leave this
 * array empty until you have genuine reviews to paste in - the site is
 * built so the testimonials section simply doesn't render while it's
 * empty (see scripts/lib/testimonials.mjs).
 *
 * How to add a review:
 * 1. Add an entry below with real details (see shape).
 * 2. Run `node scripts/build-testimonials.mjs` to inject the section into
 *    every conversion-path page, and re-run the relevant `build-*.mjs`
 *    scripts for the generated specialty hub pages (orangeries, garden
 *    rooms, garage conversions, conservatory transformations, outdoor
 *    kitchens) so their copies pick it up too.
 * 3. Commit the regenerated HTML files along with this data file.
 *
 * Shape of a review:
 * {
 *   name: string,           // real first name + surname initial, or initials, e.g. "Sarah T."
 *   location: string,       // town/area, e.g. "Hessle" - only if the customer is happy for this to be public
 *   projectType: string,    // e.g. "Kitchen renovation", "Garage conversion"
 *   quote: string,          // the review text, verbatim or lightly trimmed - never rewritten to sound better
 *   date: string | null,    // ISO date the review was left, e.g. "2026-06-14", if known
 *   source: { label: string, href: string } | null,  // e.g. { label: "Google", href: "<review URL>" }
 * }
 */

export const testimonials = [];
