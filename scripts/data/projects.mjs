/**
 * Real completed projects only. Never invent a project, customer, location,
 * cost, timescale or image here — add an entry only once you have genuine
 * details/photos to back it up.
 *
 * Shape of a project:
 * {
 *   slug: string,              // becomes /projects/<category>/<slug>/
 *   category: string,          // must be a key in CATEGORIES below
 *   title: string,
 *   location: string,          // plain text, e.g. "Hessle"
 *   locationLink: { label, href } | null,   // link to a matching /areas or town page, if one exists
 *   service: { label, href },  // link to the relevant service page
 *   images: {
 *     before: [{ src, alt }],  // src WITHOUT extension, e.g. "/assets/img/project/foo" (both .jpg + .webp must exist)
 *     during: [{ src, alt }],
 *     after:  [{ src, alt }],
 *   },
 *   summary: string,           // one-line standfirst
 *   workCompleted: string,     // what was actually done — genuine only
 *   outcome: string,           // the result, in the customer's/site's own words
 *   materials: string[] | null,  // optional
 *   cost: string | null,       // optional, only if the business has confirmed a figure to publish
 *   timescale: string | null,  // optional, only if confirmed
 *   faqs: [{ q, a }] | null,   // optional, project-specific FAQs
 * }
 */

export const CATEGORIES = {
  "orangeries": { label: "Orangeries", serviceHref: "/orangeries/" },
  "conservatory-transformations": { label: "Conservatory Transformations", serviceHref: "/conservatory-transformations/" },
  "garden-rooms": { label: "Garden Rooms", serviceHref: "/garden-rooms/" },
  "garage-conversions": { label: "Garage Conversions", serviceHref: "/garage-conversions/" },
  "outdoor-kitchens": { label: "Outdoor Kitchens", serviceHref: "/outdoor-kitchens/" },
  "bathrooms": { label: "Bathroom Installs", serviceHref: "/bathroom-installs.html" },
  "kitchens": { label: "Kitchen Installs", serviceHref: "/kitchen-installs.html" },
  "full-house-renovations": { label: "Full House Renovations", serviceHref: "/full-house-renovations.html" },
};

// Migrated from the existing, already-published case studies on /work.html.
// Only fields that were already stated there are carried across; cost and
// timescale are left null (that page flagged them as unconfirmed too).
export const projects = [
  {
    slug: "hessle-bathroom-renovation",
    category: "bathrooms",
    title: "Hessle bathroom renovation",
    location: "Hessle",
    locationLink: { label: "Hessle", href: "/hessle.html" },
    service: { label: "Bathroom Installs", href: "/bathroom-installs.html" },
    images: {
      before: [],
      during: [],
      after: [{ src: "/assets/img/project/bathroom-finished-hessle", alt: "Finished bathroom renovation in Hessle" }],
    },
    summary: "A bright, fully tiled bathroom with a modern walk-in shower enclosure.",
    workCompleted: "Full bathroom refit with marble-effect tiling and a walk-in shower.",
    outcome: "A bright, fully tiled bathroom with a modern walk-in shower enclosure.",
    materials: ["Marble-effect wall and floor tiling", "Walk-in shower enclosure"],
    cost: null,
    timescale: null,
    faqs: null,
  },
  {
    slug: "hull-bathroom-renovation",
    category: "bathrooms",
    title: "Hull bathroom renovation",
    location: "Hull",
    locationLink: { label: "Hull", href: "/hull.html" },
    service: { label: "Bathroom Installs", href: "/bathroom-installs.html" },
    images: {
      before: [{ src: "/assets/img/project/bathroom-before-hull", alt: "Bathroom strip-out before renovation, Hull" }],
      during: [],
      after: [{ src: "/assets/img/project/bathroom-finished-hull", alt: "Finished bathroom renovation in Hull" }],
    },
    summary: "A dated bathroom rebuilt into a modern space with a dark vanity unit and glass shower screen.",
    workCompleted: "Complete strip-out to bare floorboards, followed by a full retile and refit.",
    outcome: "A dated bathroom rebuilt into a modern space with a dark vanity unit and glass shower screen.",
    materials: ["Full retile", "Dark vanity unit", "Glass shower screen"],
    cost: null,
    timescale: null,
    faqs: null,
  },
  {
    slug: "cottingham-kitchen-renovation",
    category: "kitchens",
    title: "Cottingham kitchen renovation",
    location: "Cottingham",
    locationLink: { label: "Cottingham", href: "/cottingham.html" },
    service: { label: "Kitchen Installs", href: "/kitchen-installs.html" },
    images: {
      before: [],
      during: [],
      after: [{ src: "/assets/img/project/kitchen-finished", alt: "Finished kitchen renovation in Cottingham" }],
    },
    summary: "A bright, modern kitchen with plenty of storage and worktop space.",
    workCompleted: "New shaker-style cabinetry, marble-effect worktops and integrated appliances.",
    outcome: "A bright, modern kitchen with plenty of storage and worktop space.",
    materials: ["Shaker-style cabinetry", "Marble-effect worktops", "Integrated appliances"],
    cost: null,
    timescale: null,
    faqs: null,
  },
  {
    slug: "loft-room-renovation",
    category: "full-house-renovations",
    title: "Loft room renovation",
    location: "East Yorkshire",
    locationLink: null,
    service: { label: "Full House Renovations", href: "/full-house-renovations.html" },
    images: {
      before: [{ src: "/assets/img/project/loft-before", alt: "Loft space before renovation, East Yorkshire" }],
      during: [],
      after: [
        { src: "/assets/img/project/loft-finished", alt: "Finished loft room renovation, East Yorkshire" },
        { src: "/assets/img/project/loft-finished-2", alt: "Finished loft room renovation, second view" },
      ],
    },
    summary: "A bright, carpeted loft room with a Velux window, ready to use as a bedroom or study.",
    workCompleted: "Full plastering, decorating and carpet fit to convert a bare loft space into a usable room.",
    outcome: "A bright, carpeted loft room with a Velux window, ready to use as a bedroom or study.",
    materials: ["Plastering", "Decorating", "Carpet", "Velux window"],
    cost: null,
    timescale: null,
    faqs: null,
  },
];
