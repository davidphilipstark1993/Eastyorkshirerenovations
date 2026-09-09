/**
 * Water Treatment configuration data.
 *
 * Single source of truth for package names, pricing, features and future
 * local-area landing pages. Edit this file to change what's shown on
 * /water-treatment.html without touching the page markup - every place on
 * the site that displays a package price (cards, FAQ answer, FAQ schema,
 * investment-range summary) reads from the `packages` array below via
 * assets/js/water-treatment.js. Do not hard-code a price anywhere else.
 *
 * PROVISIONAL PRICING - review after supplier/dealer trade pricing and
 * installation economics have been confirmed. These are current launch
 * prices for a premium-positioned service, not final costed prices. Do not
 * present them to customers as fixed - see pricingStatus.note below, which
 * is the customer-facing version of this same point.
 */

window.WATER_TREATMENT_DATA = {
  pricingStatus: {
    provisional: true,
    note: "Prices shown are provisional launch prices, not fixed costs. Every home is different - we assess your water hardness, household size, water usage and existing plumbing before recommending the right system and confirming final pricing."
  },

  packages: [
    {
      slug: "essential",
      name: "Essential",
      tagline: "Limescale Protection",
      description: "A professionally specified water-softening solution to reduce hardness and limescale throughout your home, with installation and aftercare handled from start to finish.",
      startingPrice: 1795,
      priceLabel: "From £1,795",
      features: [
        "Free home water assessment and system selection",
        "Water softening to reduce hardness and limescale",
        "Professional installation",
        "Commissioning and handover",
        "Warranty",
        "Ongoing aftercare"
      ],
      idealFor: "Homeowners who want a properly specified, professionally installed softening solution for hardness and limescale throughout the property.",
      popular: false,
      active: true
    },
    {
      slug: "complete",
      name: "Complete",
      tagline: "Whole-Home Water Treatment",
      description: "Our core whole-home package, combining water softening with whole-home filtration for cleaner, better-tasting water at every tap.",
      startingPrice: 2795,
      priceLabel: "From £2,795",
      features: [
        "Everything in Essential",
        "Whole-home filtration",
        "Broader water-treatment coverage throughout the property",
        "Professional installation",
        "Commissioning and handover",
        "Warranty",
        "Ongoing aftercare"
      ],
      idealFor: "Homeowners who want softened, filtered water throughout the whole home - our recommended starting point for most properties.",
      popular: true,
      active: true
    },
    {
      slug: "premium",
      name: "Premium",
      tagline: "Premium Specification",
      description: "A higher-specification home water-treatment package with premium softening equipment, advanced filtration and an enhanced level of service and aftercare.",
      startingPrice: 3795,
      priceLabel: "From £3,795",
      features: [
        "Everything in Complete",
        "Premium-specification softening equipment",
        "Advanced filtration",
        "Priority commissioning and handover",
        "Warranty",
        "Enhanced aftercare and support"
      ],
      idealFor: "Homeowners who want a higher-specification system and an enhanced level of ongoing service.",
      popular: false,
      active: true
    },
    {
      slug: "complete-ro",
      name: "Complete + RO",
      tagline: "Whole-Home + Drinking Water",
      description: "A comprehensive whole-home solution combining softening and whole-home filtration with dedicated reverse-osmosis drinking water, for the best possible glass of water alongside protection throughout the property.",
      startingPrice: 4495,
      priceLabel: "From £4,495",
      features: [
        "Whole-home softening",
        "Whole-home filtration",
        "Dedicated reverse-osmosis drinking-water system",
        "Premium drinking-water tap",
        "Professional installation",
        "Commissioning and handover",
        "Warranty",
        "Ongoing aftercare"
      ],
      idealFor: "Homeowners who want complete whole-home treatment plus the highest level of drinking-water filtration.",
      popular: false,
      active: true
    }
  ],

  // Reserved for future recurring-revenue services. Not yet priced/sold.
  aftercareServices: [
    { name: "Annual system servicing", active: false },
    { name: "Filter replacement", active: false },
    { name: "Salt supply", active: false },
    { name: "Cartridge replacement", active: false },
    { name: "Repairs", active: false },
    { name: "System upgrades", active: false }
  ],

  // Future local landing pages: /water-treatment-<slug>.html
  // Do not auto-generate thin pages from this list - each one needs real,
  // locally researched content before it's published and added to the sitemap.
  futureLocalAreas: [
    { slug: "hull", name: "Hull" },
    { slug: "beverley", name: "Beverley" },
    { slug: "cottingham", name: "Cottingham" },
    { slug: "hessle", name: "Hessle" },
    { slug: "willerby", name: "Willerby" },
    { slug: "hedon", name: "Hedon" }
  ]
};
