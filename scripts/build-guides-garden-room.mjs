import { mkdirSync, writeFileSync } from "fs";
import { guidePage } from "./lib/layout.mjs";

const CATEGORY = "Garden room guides";
const CATEGORY_PATH = "/garden-rooms/";

const RELATED_BASE = [
  { label: "Garden Rooms — main service page", href: "/garden-rooms/" },
  { label: "Garden rooms in Hull", href: "/garden-rooms/hull/" },
  { label: "Garden rooms in East Yorkshire", href: "/garden-rooms/east-yorkshire/" },
];

function write(def) {
  const dir = `guides/${def.slug}`;
  mkdirSync(dir, { recursive: true });
  const html = guidePage({ ...def, categoryLabel: CATEGORY, categoryPath: CATEGORY_PATH, related: def.related || RELATED_BASE });
  writeFileSync(`${dir}/index.html`, html);
  console.log(`wrote ${dir}/index.html`);
}

write({
  slug: "garden-room-cost",
  h1: "How much does a garden room cost?",
  title: "Garden Room Cost | East Yorkshire Renovations",
  description: "General UK cost guidance for garden rooms by size and specification, from a basic office to a bespoke bar or studio.",
  intro: "Size, glazing and whether plumbing is included are the three biggest factors in garden room cost &mdash; here's general guidance to help you budget.",
  sections: [
    {
      h2: "General cost ranges",
      paras: [
        "As general UK market guidance: a small, well-insulated garden room with electrics only (a typical spec for a home office) often runs &pound;10,000&ndash;&pound;18,000. A larger, mid-spec room with higher-spec glazing and bi-fold doors typically runs &pound;18,000&ndash;&pound;30,000. A bespoke design with plumbing for a bar or kitchenette can run &pound;30,000&ndash;&pound;50,000 or more.",
        "These are indicative of the wider UK market and aren't East Yorkshire Renovations' confirmed pricing.",
      ],
    },
    {
      h2: "What moves the price",
      paras: [
        "Foundation type (concrete base vs. screw piles) depends on ground conditions and can affect cost. Glazing specification and door choice (bi-fold vs. a single door and fixed windows) are also significant, as is whether plumbing is included for a kitchenette, bar or WC.",
      ],
    },
  ],
  faqs: [
    { q: "Is a garden office cheaper than a garden gym?", a: "Often similarly priced for a comparable size and spec, though a gym may need reinforced flooring, and a bar or kitchenette adds plumbing cost neither typically needs." },
  ],
});

write({
  slug: "garden-room-planning-permission",
  h1: "Do you need planning permission for a garden room?",
  title: "Garden Room Planning Permission | East Yorkshire Renovations",
  description: "General guidance on permitted development for garden rooms, and when a full planning application is needed.",
  intro: "Most garden rooms fall under permitted development as an outbuilding, but the details matter &mdash; here's the general position.",
  sections: [
    {
      h2: "When permitted development applies",
      paras: [
        "Single-storey outbuildings, including garden rooms, generally fall under permitted development provided they stay within height limits, sit behind the principal elevation of the house, and don't push the total coverage of outbuildings and extensions in the garden over the permitted limit.",
      ],
    },
    {
      h2: "When you're more likely to need an application",
      paras: [
        "Using the garden room as separate, self-contained living accommodation &mdash; with its own bathroom and kitchen, or as somewhere someone sleeps &mdash; is more likely to need planning permission. Listed buildings and conservation areas can also bring tighter restrictions.",
      ],
    },
  ],
  faqs: [
    { q: "Can I use a garden room as a guest bedroom without planning permission?", a: "Occasional guest use is generally treated differently from permanent, self-contained living accommodation, but this is worth checking for your specific plans and property." },
  ],
});

write({
  slug: "garden-room-building-regulations",
  h1: "Do garden rooms need building regulations approval?",
  title: "Garden Room Building Regulations | East Yorkshire Renovations",
  description: "When building regulations apply to a garden room, and when a straightforward outbuilding is exempt.",
  intro: "Most straightforward garden rooms under typical size thresholds don't need building regulations approval, but there are exceptions worth knowing about.",
  sections: [
    {
      h2: "The general exemption",
      paras: [
        "Detached single-storey buildings used incidental to the main house (a garden room, office or gym) are often exempt from building regulations provided they're under a set floor area and meet other conditions.",
      ],
    },
    {
      h2: "When it changes",
      paras: [
        "Building regulations are more likely to apply if the garden room includes sleeping accommodation, exceeds relevant size thresholds, or sits very close to a boundary, which brings in additional fire safety considerations.",
      ],
    },
  ],
  faqs: [
    { q: "Does adding electrics to a garden room trigger building regulations?", a: "Electrical work still needs to comply with Part P requirements and be carried out or certified appropriately, even where the overall structure is otherwise exempt." },
  ],
});

write({
  slug: "garden-room-insulation",
  h1: "How is a garden room insulated for year-round use?",
  title: "Garden Room Insulation Explained | East Yorkshire Renovations",
  description: "How garden room floors, walls and roofs are insulated to keep the space usable through a Yorkshire winter.",
  intro: "Insulation is what separates a proper garden room from a garden shed &mdash; here's what a well-specified build includes.",
  sections: [
    {
      h2: "Floor, walls and roof",
      paras: [
        "A well-built garden room insulates all three elements: an insulated floor over the foundation, insulated timber or SIPs-based wall panels, and a properly insulated roof structure. Skimping on any one of these tends to show up as a cold spot or condensation issue later.",
      ],
    },
    {
      h2: "Glazing and heating",
      paras: [
        "Double or triple glazed windows and doors matter as much as the fabric insulation, since a garden room typically has more glazing proportionally than a house extension. Electric panel heaters or a small radiator system, sized to the room, complete a genuinely year-round space.",
      ],
    },
  ],
  faqs: [
    { q: "Can an existing summer house be insulated to the same standard?", a: "Not usually without significant rebuilding &mdash; most summer houses aren't built with insulation-ready wall and roof structures, which is why a purpose-built garden room performs differently." },
  ],
});

write({
  slug: "garden-office-cost",
  h1: "How much does a garden office cost?",
  title: "Garden Office Cost | East Yorkshire Renovations",
  description: "General UK cost guidance for a garden office, and what specification to prioritise for year-round working.",
  intro: "A garden office is usually the simplest, most cost-effective garden room build, since it typically needs electrics only and no plumbing.",
  sections: [
    {
      h2: "General cost range",
      paras: [
        "As general UK market guidance, a small, well-insulated garden office with electrics and data cabling typically runs &pound;10,000&ndash;&pound;18,000, rising with size, glazing specification and interior finish. This is indicative of the wider UK market, not East Yorkshire Renovations' confirmed pricing.",
      ],
    },
    {
      h2: "What's worth spending on",
      paras: [
        "Good insulation and glazing matter more for a working space than premium interior finishes &mdash; a comfortable, well-lit, properly heated office you'll use every day is a better investment than expensive but unnecessary fittings.",
      ],
    },
  ],
  faqs: [
    { q: "Do I need planning permission for a garden office?", a: "Often not, if it falls under permitted development as a single-storey outbuilding within height and coverage limits." },
  ],
});

write({
  slug: "garden-office-ideas",
  h1: "Garden office design ideas.",
  title: "Garden Office Design Ideas | East Yorkshire Renovations",
  description: "Practical design ideas for a garden office, from layout and glazing to storage and connectivity.",
  intro: "A few design choices make the biggest difference to how well a garden office actually works day to day.",
  sections: [
    {
      h2: "Layout and light",
      paras: [
        "Position your desk to get good natural light without screen glare &mdash; usually side-on to a large window rather than directly facing it. Bi-fold or large sliding doors work well if you want the option to open the space up in good weather.",
      ],
    },
    {
      h2: "Storage and connectivity",
      paras: [
        "Built-in shelving and a dedicated cable management plan keep a small office tidy. Running network cabling back to your house's router, rather than relying on Wi-Fi through a garden structure, gives more reliable connectivity for video calls.",
      ],
    },
  ],
  faqs: [
    { q: "Should a garden office have air conditioning?", a: "Not usually necessary if insulation and glazing are specified well, though it's an option for larger rooms or particularly sunny positions." },
  ],
});

write({
  slug: "garden-gym-ideas",
  h1: "Garden gym design ideas.",
  title: "Garden Gym Design Ideas | East Yorkshire Renovations",
  description: "Practical design ideas for a garden gym, covering flooring, ventilation, mirrors and layout for equipment.",
  intro: "A garden gym has different priorities to most garden rooms &mdash; durability and ventilation matter more than a polished interior finish.",
  sections: [
    {
      h2: "Flooring and equipment",
      paras: [
        "Reinforced subflooring topped with rubber gym flooring protects both the floor and any dropped weights. Check ceiling height against your intended equipment &mdash; pull-up rigs and overhead press movements need more headroom than most garden rooms are built with as standard.",
      ],
    },
    {
      h2: "Ventilation and mirrors",
      paras: [
        "Good ventilation or extraction prevents the space feeling stuffy and protects mirrors and equipment from condensation. Mirrors are usually fitted once walls and flooring are finished, positioned to suit your main exercise area.",
      ],
    },
  ],
  faqs: [
    { q: "Do I need extra electrics for a garden gym?", a: "Usually yes, for equipment, a TV or sound system, and good lighting &mdash; worth planning these in at design stage rather than adding sockets later." },
  ],
});

write({
  slug: "garden-bar-ideas",
  h1: "Garden bar design ideas.",
  title: "Garden Bar Design Ideas | East Yorkshire Renovations",
  description: "Practical design ideas for a garden bar, covering plumbing, power, lighting and layout for entertaining.",
  intro: "A garden bar is one of the few garden room types that usually benefits from plumbing, alongside careful thought about power and lighting for entertaining.",
  sections: [
    {
      h2: "Plumbing and power",
      paras: [
        "Running water and drainage from the house supports a sink and drinks fridge, though this adds cost and complexity compared with an electrics-only build. Extra sockets for a fridge, drinks unit or sound system are worth planning in from the start.",
      ],
    },
    {
      h2: "Lighting and atmosphere",
      paras: [
        "Dimmable lighting and a few well-placed sockets do more for a garden bar's atmosphere than expensive finishes. Bi-fold or large sliding doors let the space open onto the garden for entertaining in good weather.",
      ],
    },
  ],
  faqs: [
    { q: "Do I need plumbing for a garden bar?", a: "Not strictly, but a sink and drinks fridge are popular additions that need water and drainage run from the house." },
  ],
});

write({
  slug: "garden-room-heating",
  h1: "How is a garden room heated?",
  title: "Garden Room Heating Options | East Yorkshire Renovations",
  description: "The main heating options for a garden room, and how to choose between electric panel heaters and a radiator system.",
  intro: "Heating choice usually comes down to how the room's used and how it's powered, more than personal preference alone.",
  sections: [
    {
      h2: "Electric panel heaters",
      paras: [
        "A common, straightforward choice for garden rooms already running on an electric supply from the house. Modern panel heaters are efficient and can be controlled individually or via a thermostat.",
      ],
    },
    {
      h2: "Small radiator systems",
      paras: [
        "Where a garden room already has water services run to it (for a kitchenette or WC), a small radiator circuit can be a practical addition, though it adds plumbing complexity compared with electric heating alone.",
      ],
    },
  ],
  faqs: [
    { q: "Is electric heating expensive to run in a garden room?", a: "Running cost depends on usage and how well the room is insulated &mdash; a well-insulated garden room needs relatively little heating to stay comfortable." },
  ],
});

write({
  slug: "garden-room-electrics",
  h1: "What electrics does a garden room need?",
  title: "Garden Room Electrics Explained | East Yorkshire Renovations",
  description: "What to plan for garden room electrics, from sockets and lighting to data cabling and consumer unit capacity.",
  intro: "Getting electrics right at design stage avoids expensive retrofitting later &mdash; here's what's typically involved.",
  sections: [
    {
      h2: "Supply and circuits",
      paras: [
        "Power is usually run from the main house's consumer unit via an armoured cable, sized appropriately for the garden room's expected load (heating, equipment, lighting). We check your existing consumer unit has capacity as part of the survey.",
      ],
    },
    {
      h2: "Sockets, lighting and data",
      paras: [
        "Sockets and lighting circuits are planned around the room's use &mdash; more sockets for an office or gym, dimmable lighting for a bar. Network cabling is worth including for an office, giving more reliable connectivity than relying on Wi-Fi alone.",
      ],
    },
  ],
  faqs: [
    { q: "Does garden room electrical work need certification?", a: "Yes, electrical work must comply with Part P requirements and be carried out or certified by a competent, registered electrician." },
  ],
});

write({
  slug: "garden-room-foundations",
  h1: "What foundations does a garden room need?",
  title: "Garden Room Foundations Explained | East Yorkshire Renovations",
  description: "The main foundation options for a garden room — concrete base and screw-pile systems — and how ground conditions affect the choice.",
  intro: "Foundation choice depends mainly on your garden's ground conditions, and it's assessed on-site before the design is finalised.",
  sections: [
    {
      h2: "Concrete base",
      paras: [
        "A traditional poured concrete base or slab gives a solid, long-lasting foundation, well suited to most ground conditions, though it takes longer to cure before construction can continue.",
      ],
    },
    {
      h2: "Screw-pile foundations",
      paras: [
        "Screw piles are quicker to install, cause less disruption to the surrounding garden, and work well on a range of ground types, though they're not always suitable depending on soil conditions, which we assess on-site.",
      ],
    },
  ],
  faqs: [
    { q: "Which foundation type is better for a garden room?", a: "It depends on your specific ground conditions and garden access &mdash; we assess this on-site and recommend the appropriate option for your project." },
  ],
});

write({
  slug: "garden-room-roof-options",
  h1: "Garden room roof options.",
  title: "Garden Room Roof Options | East Yorkshire Renovations",
  description: "The main roof options for a garden room — flat, pitched and green roofs — and how to choose between them.",
  intro: "Roof choice affects both how the garden room looks from the house and how it performs.",
  sections: [
    {
      h2: "Flat roofs",
      paras: [
        "A flat roof with a single-ply or felt membrane is the most common choice for a clean, modern look, and tends to be the most cost-effective option.",
      ],
    },
    {
      h2: "Pitched and green roofs",
      paras: [
        "A pitched roof can suit a garden room designed to match the style of the main house more closely. A green (planted) roof adds visual interest and some environmental benefit, though it needs a structure designed to take the extra weight.",
      ],
    },
  ],
  faqs: [
    { q: "Is a green roof more expensive than a standard flat roof?", a: "Generally, yes, due to the additional structural and waterproofing requirements, but it's an option we can design in if it suits your garden." },
  ],
});

write({
  slug: "garden-room-vs-extension",
  h1: "Garden room vs extension: which is right for you?",
  title: "Garden Room vs Extension: Which Is Right? | EYR",
  description: "How a detached garden room compares with a house extension on cost, disruption and flexibility, to help you decide.",
  intro: "Both add usable space, but they solve different problems &mdash; here's how to think about the choice.",
  sections: [
    {
      h2: "Disruption and timescale",
      paras: [
        "A garden room is built separately from the house, which usually means far less disruption to your daily life during construction compared with an extension that involves knocking through existing walls.",
      ],
    },
    {
      h2: "Connection to the house",
      paras: [
        "An extension becomes part of your home's internal layout, which suits a kitchen or bedroom that needs to connect directly to the rest of the house. A garden room works better as genuinely separate space &mdash; an office, gym or studio &mdash; where separation from the house is actually the point.",
      ],
    },
    {
      h2: "Cost",
      paras: [
        "Garden rooms are often cheaper than an equivalent-sized extension, since they avoid the cost of tying into an existing structure, though this varies with specification and plumbing requirements.",
      ],
    },
  ],
  faqs: [
    { q: "Does a garden room add as much value as an extension?", a: "This varies by property and local market, and is worth discussing with a local estate agent for your specific situation rather than assuming either option automatically adds more value." },
  ],
});
