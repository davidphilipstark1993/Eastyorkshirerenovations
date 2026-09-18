import { mkdirSync, writeFileSync } from "fs";
import { guidePage } from "./lib/layout.mjs";

const CATEGORY = "Orangery guides";
const CATEGORY_PATH = "/orangeries/";

const RELATED_BASE = [
  { label: "Orangeries — main service page", href: "/orangeries/" },
  { label: "Orangeries in Hull", href: "/orangeries/hull/" },
  { label: "Orangeries in East Yorkshire", href: "/orangeries/east-yorkshire/" },
];

function write(def) {
  const dir = `guides/${def.slug}`;
  mkdirSync(dir, { recursive: true });
  const html = guidePage({
    ...def,
    categoryLabel: CATEGORY,
    categoryPath: CATEGORY_PATH,
    related: def.related || RELATED_BASE,
  });
  writeFileSync(`${dir}/index.html`, html);
  console.log(`wrote ${dir}/index.html`);
}

write({
  slug: "orangery-vs-conservatory",
  h1: "Orangery vs conservatory: what's the difference?",
  title: "Orangery vs Conservatory: What's the Difference? | EYR",
  description: "The practical differences between an orangery and a conservatory, covering structure, glazing, heat retention and cost, to help you choose the right option.",
  intro: "The two get confused constantly, and the honest answer is they overlap more than most marketing suggests &mdash; but there are real structural differences worth understanding before you commit to either.",
  sections: [
    {
      h2: "Structure and glazing",
      paras: [
        "A conservatory is predominantly glass, built on a low dwarf wall with a fully glazed pitched or lean-to roof. An orangery is brick-built, with proper masonry walls and piers, and a glazed roof lantern set into a solid, insulated perimeter roof rather than a fully glazed one. That structural difference &mdash; more brick, less glass overhead &mdash; is really what separates the two.",
        "In practice this means an orangery reads more like a permanent extension from the outside, while a conservatory reads as a lighter, more clearly \"added on\" garden room.",
      ],
    },
    {
      h2: "Heat retention and year-round use",
      paras: [
        "This is usually the deciding factor for people who've lived with a conservatory. A fully glazed roof loses heat fast in winter and lets a room overheat in direct summer sun, which is why so many conservatories end up used for six months of the year rather than twelve. An orangery's solid perimeter roof and smaller glazed lantern area give it noticeably better thermal performance, closer to a standard extension.",
        "If you already have a conservatory and don't want to rebuild it as an orangery, a roof replacement can close a lot of this gap &mdash; see our guide on <a href=\"/guides/insulated-conservatory-roof/\">insulated conservatory roofs</a>.",
      ],
    },
    {
      h2: "Cost",
      paras: [
        "A conservatory is generally the cheaper of the two to build, since there's less brickwork and structural work involved. An orangery sits closer to a good-quality extension in price. As a general guide, budget conservatories can start from a few thousand pounds for a small structure, while orangeries typically start in the tens of thousands &mdash; see our full <a href=\"/orangeries/\">orangery cost guidance</a> for indicative ranges.",
      ],
    },
  ],
  faqs: [
    { q: "Is an orangery classed as an extension for planning purposes?", a: "It's treated similarly to a single-storey extension in planning terms, and often falls under permitted development, but this depends on your specific property and location." },
    { q: "Can a conservatory be converted into an orangery?", a: "Not directly &mdash; an orangery's brick structure means it's effectively a different build. What's often done instead is a full conservatory transformation, replacing the roof and adding brickwork detailing to get a similar look and performance. See our conservatory transformations page for details." },
  ],
});

write({
  slug: "orangery-vs-extension",
  h1: "Orangery vs extension: which is right for your home?",
  title: "Orangery vs Extension: Which Is Right for You? | EYR",
  description: "How an orangery compares with a traditional solid-roof extension on light, cost, design flexibility and planning, to help you choose the right option.",
  intro: "Both are brick-built, both need similar foundations, and both typically fall into a similar planning category &mdash; so the choice usually comes down to light, layout and how the room will be used.",
  sections: [
    {
      h2: "Natural light",
      paras: [
        "This is the clearest difference. An orangery's glazed roof lantern and full-height glazing bring in far more natural light than a standard extension with a solid roof and conventional windows, which is why orangeries are so often chosen for kitchen-diners and garden rooms where light matters more than privacy or wall space.",
      ],
    },
    {
      h2: "Layout and wall space",
      paras: [
        "A traditional extension gives you more usable wall space for kitchen units, storage or furniture, since it isn't built around large areas of glazing. If your priority is a fully enclosed kitchen, utility room or bedroom rather than a bright, garden-facing living space, a standard extension is often the more practical choice.",
      ],
    },
    {
      h2: "Cost and thermal performance",
      paras: [
        "A well-built orangery and a well-built extension tend to land in a similar cost bracket once you account for the orangery's glazing and roof lantern versus the extension's brickwork and roofing. Thermally, a solid-roofed extension is generally the more efficient of the two, though a properly specified orangery with good insulation and glazing isn't far behind.",
      ],
    },
  ],
  faqs: [
    { q: "Is an orangery cheaper than an extension?", a: "Not necessarily &mdash; costs are broadly comparable once you account for the different mix of brickwork, glazing and roofing in each. See our orangery cost guidance for indicative ranges." },
    { q: "Which is better for a kitchen-diner, an orangery or an extension?", a: "An orangery is often preferred for a kitchen-diner because of the extra natural light from the roof lantern, though this depends on your layout and how much wall space you need for units and storage." },
  ],
});

write({
  slug: "how-much-does-an-orangery-cost",
  h1: "How much does an orangery cost?",
  title: "How Much Does an Orangery Cost? | East Yorkshire Renovations",
  description: "General UK cost guidance for orangeries by size and specification, covering what drives the price and how to budget before getting a tailored quote.",
  intro: "Orangery cost depends heavily on size, glazing specification and roof design, so treat any figure you see online &mdash; including ours &mdash; as a starting point for budgeting, not a quote.",
  sections: [
    {
      h2: "General cost ranges",
      paras: [
        "As general UK market guidance: a smaller, entry-level orangery (around 3m x 3m with a standard specification) often falls in the region of &pound;25,000&ndash;&pound;40,000. A mid-size, mid-spec orangery (around 4m x 4m to 5m x 4m with bi-fold doors and a higher glazing specification) typically runs &pound;40,000&ndash;&pound;70,000. Larger, bespoke designs with premium brickwork detailing and higher-spec insulation and heating can run &pound;70,000&ndash;&pound;120,000 or more.",
        "These are indicative of the wider UK market and aren't East Yorkshire Renovations' confirmed pricing.",
      ],
    },
    {
      h2: "What moves the price",
      paras: [
        "The roof lantern size and glazing specification tend to be the biggest single cost driver, followed by door choice (bi-fold doors cost more than French doors), brickwork detailing, and whether underfloor heating is included. Ground conditions and how much groundwork is needed for foundations can also add unplanned cost if not assessed properly upfront.",
      ],
    },
  ],
  faqs: [
    { q: "Does an orangery cost more than a conservatory?", a: "Generally, yes, because of the brickwork and structural roof involved, though a high-spec conservatory and a basic orangery can sometimes land in a similar range." },
    { q: "What's the best way to get an accurate orangery quote?", a: "A site visit and design conversation, since cost depends heavily on your specific plot, foundations and specification. Get in touch for a free, tailored quote." },
  ],
});

write({
  slug: "orangery-planning-permission",
  h1: "Do you need planning permission for an orangery?",
  title: "Orangery Planning Permission | East Yorkshire Renovations",
  description: "General guidance on planning permission and permitted development for orangeries in Hull and East Yorkshire, and when a full application is needed.",
  intro: "Many orangery projects fall within permitted development, but it's genuinely property-specific &mdash; here's the general position, and where it tends to change.",
  sections: [
    {
      h2: "When permitted development usually applies",
      paras: [
        "Single-storey rear extensions, including orangeries, often fall under permitted development rights provided they stay within height and depth limits, and don't take the total area of extensions and outbuildings over a set proportion of the garden. This means many orangery projects don't need a full planning application.",
      ],
    },
    {
      h2: "When you're more likely to need an application",
      paras: [
        "Conservation areas &mdash; including parts of the Avenues in Hull and several East Yorkshire villages &mdash; often have tighter permitted development restrictions, meaning a project that wouldn't need permission elsewhere might need a full application there. The same applies to listed buildings, and to designs that exceed standard permitted development size or height limits.",
        "Building regulations approval is required regardless of the planning position, since an orangery is a structural, brick-built room.",
      ],
    },
  ],
  faqs: [
    { q: "How do I find out if my property is in a conservation area?", a: "Your local council's planning department (Hull City Council or East Riding of Yorkshire Council) can confirm this, or we can check as part of our initial consultation." },
    { q: "Do you handle the planning application for me?", a: "Yes, where an application is needed, we advise on what applies and manage the relevant drawings and submission." },
  ],
});

write({
  slug: "how-long-does-an-orangery-take",
  h1: "How long does an orangery take to build?",
  title: "How Long Does an Orangery Take? | East Yorkshire Renovations",
  description: "Typical timescales for designing, approving and building an orangery in Hull and East Yorkshire, from initial consultation to handover.",
  intro: "Total project time is usually split fairly evenly between design and approvals, and the actual construction itself &mdash; both matter for planning your timeline realistically.",
  sections: [
    {
      h2: "Design and approvals",
      paras: [
        "Initial design typically takes a few weeks, covering layout, glazing and roof options. If a planning application is needed, that process adds several weeks on top, since local authorities have statutory determination periods. Building regulations drawings and approval run in parallel with this in most cases.",
      ],
    },
    {
      h2: "Construction",
      paras: [
        "Once on site, a standard-sized orangery usually takes around 8&ndash;12 weeks to build, covering foundations, brickwork, roof and glazing installation, then electrics, heating and finishes. Larger or more complex designs, or those with bespoke glazing, can take longer. Weather can also affect groundworks and brickwork stages.",
      ],
    },
  ],
  faqs: [
    { q: "Can an orangery be built faster if planning permission isn't needed?", a: "Yes, skipping the planning application stage can save several weeks, though building regulations approval is still required regardless." },
    { q: "What's the best time of year to start an orangery project?", a: "Groundworks and brickwork are easier to schedule reliably outside the wettest winter months, though we build throughout the year and plan around weather where needed." },
  ],
});

write({
  slug: "orangery-roof-options",
  h1: "Orangery roof options explained.",
  title: "Orangery Roof Options Explained | East Yorkshire Renovations",
  description: "The main roof options for an orangery, including lantern size, pitch and glazing choices, and how they affect light and thermal performance.",
  intro: "The roof is what makes an orangery an orangery &mdash; the balance between solid roof and glazed lantern shapes both how bright the room feels and how well it performs thermally.",
  sections: [
    {
      h2: "Lantern size and position",
      paras: [
        "A larger lantern brings in more light but increases both cost and heat loss/gain if not properly specified. Positioning it centrally over a kitchen island or seating area is a common approach, though it can also be offset depending on the room's layout and where you want the light to fall.",
      ],
    },
    {
      h2: "Pitch and perimeter roof",
      paras: [
        "The solid perimeter roof around the lantern is usually flat or shallow-pitched, finished with a warm roof construction that includes proper insulation above the rafters. This is what gives an orangery its year-round usability, compared with a conservatory's fully glazed roof.",
      ],
    },
    {
      h2: "Glazing specification",
      paras: [
        "Double or triple glazing, low-emissivity coatings and solar control glass all affect how much heat the lantern lets in during summer and retains in winter. Higher-spec glazing costs more upfront but makes a real difference to comfort, particularly on south-facing rooms.",
      ],
    },
  ],
  faqs: [
    { q: "Should an orangery lantern be centred or offset?", a: "It depends on your room layout &mdash; a centred lantern suits a symmetrical design, while an offset lantern can direct light towards a specific feature such as a kitchen island or seating area." },
    { q: "Does a bigger lantern mean a colder room in winter?", a: "Not necessarily, provided the glazing specification is high enough, but it is a factor we account for at design stage." },
  ],
});

write({
  slug: "orangery-insulation",
  h1: "How well insulated is an orangery?",
  title: "Orangery Insulation Explained | East Yorkshire Renovations",
  description: "How orangery roofs, walls and glazing are insulated to keep the room comfortable year-round, and what to check for in the specification.",
  intro: "Because an orangery has genuine wall and roof structure rather than being mostly glass, it can be insulated close to the same standard as the rest of your house &mdash; this is the main reason it stays usable through winter.",
  sections: [
    {
      h2: "Roof and wall insulation",
      paras: [
        "The solid perimeter roof is built as a warm roof construction, with insulation above the rafters, matching current thermal performance expectations for extensions. Brick walls and piers are insulated in the same way as a standard cavity wall extension.",
      ],
    },
    {
      h2: "Glazing and floor",
      paras: [
        "Double or triple glazing with a good thermal specification is standard for both the lantern and the full-height windows and doors. Underfloor heating, run beneath an insulated floor slab, is a popular choice in orangeries since it frees up wall space that would otherwise be needed for radiators.",
      ],
    },
  ],
  faqs: [
    { q: "Will an orangery be as warm as the rest of my house in winter?", a: "A well-specified orangery, with proper roof, wall, floor and glazing insulation, should be comfortable to use year-round, though it won't perform identically to a solid-walled room with no glazing at all." },
    { q: "Is underfloor heating necessary in an orangery?", a: "Not necessary, but it's a popular choice because it frees up wall space for glazing rather than radiators." },
  ],
});

write({
  slug: "orangery-ideas",
  h1: "Orangery ideas: what to use the extra space for.",
  title: "Orangery Ideas: What to Use the Space For | EYR",
  description: "Popular ways homeowners use a new orangery, from kitchen-diners to garden living rooms, with design considerations for each.",
  intro: "Most orangery enquiries come down to one of a handful of common uses &mdash; here's what tends to work well for each, and what to think about at design stage.",
  sections: [
    {
      h2: "Kitchen-diner",
      paras: [
        "The most common use we see. The extra light from the roof lantern suits a kitchen well, and the room's size usually allows for a proper dining area alongside cooking and prep space. Worth planning electrics and plumbing runs carefully at design stage, since retrofitting them later is far more disruptive.",
      ],
    },
    {
      h2: "Family living room",
      paras: [
        "A garden-facing living space with bi-fold or French doors onto the garden works well as an orangery, particularly where the existing house layout is short on a bright, sociable room. Underfloor heating and good glazing specification matter more here, since it's a room people want to relax in through the evening.",
      ],
    },
    {
      h2: "Garden room or snug",
      paras: [
        "A smaller orangery used as a quiet garden-facing room &mdash; for reading, working from home, or simply a change of scenery from the rest of the house &mdash; is a popular, lower-cost option than a full kitchen-diner conversion.",
      ],
    },
  ],
  faqs: [
    { q: "Can an orangery be used as a home office?", a: "Yes, though for a dedicated, separate workspace many homeowners prefer a detached garden room instead &mdash; see our garden rooms page for that option." },
  ],
});
