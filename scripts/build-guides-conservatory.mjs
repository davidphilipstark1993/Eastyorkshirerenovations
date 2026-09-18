import { mkdirSync, writeFileSync } from "fs";
import { guidePage } from "./lib/layout.mjs";

const CATEGORY = "Conservatory guides";
const CATEGORY_PATH = "/conservatory-transformations/";

const RELATED_BASE = [
  { label: "Conservatory Transformations — main service page", href: "/conservatory-transformations/" },
  { label: "Conservatory transformations in Hull", href: "/conservatory-transformations/hull/" },
  { label: "Conservatory transformations in East Yorkshire", href: "/conservatory-transformations/east-yorkshire/" },
];

function write(def) {
  const dir = `guides/${def.slug}`;
  mkdirSync(dir, { recursive: true });
  const html = guidePage({ ...def, categoryLabel: CATEGORY, categoryPath: CATEGORY_PATH, related: def.related || RELATED_BASE });
  writeFileSync(`${dir}/index.html`, html);
  console.log(`wrote ${dir}/index.html`);
}

write({
  slug: "conservatory-too-hot-in-summer",
  h1: "Why is my conservatory too hot in summer?",
  title: "Conservatory Too Hot in Summer? Here's Why | EYR",
  description: "Why conservatories overheat in summer and the practical fixes, from roof replacement to glazing and ventilation upgrades.",
  intro: "It's almost always the roof. A fully glazed or polycarbonate roof acts like a greenhouse in direct sun, and no amount of blinds or fans fully solves that on their own.",
  sections: [
    {
      h2: "The main cause",
      paras: [
        "A glass or polycarbonate roof lets solar heat straight through, and with nowhere for that heat to escape, the room quickly climbs well above outside temperature on a sunny day. Older single-glazed or thin polycarbonate roofs are the worst offenders.",
      ],
    },
    {
      h2: "What actually fixes it",
      paras: [
        "Replacing the roof with an insulated tiled or panel system, or a high-performance solar-control glazed roof, is the single biggest improvement you can make &mdash; see our guide on <a href=\"/guides/insulated-conservatory-roof/\">insulated conservatory roofs</a>. Ventilation upgrades, solar control film and external blinds can help at the margins, but they're managing the symptom rather than fixing the cause.",
      ],
    },
  ],
  faqs: [
    { q: "Will blinds alone fix a hot conservatory?", a: "They help reduce direct glare and some heat gain, but they don't address the underlying issue of heat building up under a fully glazed roof. A roof upgrade makes the biggest difference." },
    { q: "Is a roof replacement a big project?", a: "It's usually one of the quicker conservatory transformation options, often completed in 1-2 weeks for a straightforward roof-only replacement." },
  ],
});

write({
  slug: "conservatory-too-cold-in-winter",
  h1: "Why is my conservatory too cold in winter?",
  title: "Conservatory Too Cold in Winter? Here's Why | EYR",
  description: "Why conservatories struggle to stay warm in winter and the practical fixes, from roof insulation to floor and door upgrades.",
  intro: "The same roof that lets your conservatory overheat in summer is usually why it's freezing in winter &mdash; a fully glazed or thin polycarbonate roof loses heat fast.",
  sections: [
    {
      h2: "Where the heat is escaping",
      paras: [
        "Roof, floor and older single-glazed windows or doors are the three main culprits. A thin or ageing roof loses heat quickly, an uninsulated floor slab pulls warmth down and out, and older sliding patio doors are rarely as well sealed as modern equivalents.",
      ],
    },
    {
      h2: "What to prioritise",
      paras: [
        "Roof insulation makes the biggest single difference, followed by floor insulation if you're doing a fuller transformation. Upgrading doors and windows to modern, well-sealed units helps too, particularly if the existing ones are original to an older conservatory.",
      ],
    },
  ],
  faqs: [
    { q: "Can I just add a heater instead of upgrading the roof?", a: "You can, but you'll be heating a room that loses warmth quickly, which costs more to run long-term than fixing the insulation properly." },
    { q: "Does floor insulation make a noticeable difference?", a: "Yes, particularly on an older conservatory with a thin, uninsulated slab &mdash; it's a common part of a fuller conservatory transformation." },
  ],
});

write({
  slug: "conservatory-roof-replacement",
  h1: "Conservatory roof replacement: your options.",
  title: "Conservatory Roof Replacement Options | EYR",
  description: "The main conservatory roof replacement options — tiled, insulated panel and high-performance glazed roofs — and how to choose between them.",
  intro: "Replacing the roof is usually the single most effective conservatory upgrade. Here's what the main options actually involve.",
  sections: [
    {
      h2: "Tiled or insulated panel roof",
      paras: [
        "A solid, fully insulated roof finished with tiles or an insulated panel system gives the best thermal performance and the closest experience to a normal room. The trade-off is losing the fully glazed ceiling and the light that comes with it.",
      ],
    },
    {
      h2: "High-performance glazed roof",
      paras: [
        "Modern high-performance glazing with solar control and improved insulation keeps more of the original light-filled feel while significantly outperforming an older single-glazed or polycarbonate roof. It's a middle-ground option between keeping full glazing and going fully solid.",
      ],
    },
    {
      h2: "Hybrid designs",
      paras: [
        "Some roof systems combine solid sections with glazed panels, giving a partial view of the sky while improving insulation compared with a fully glazed original roof.",
      ],
    },
  ],
  faqs: [
    { q: "Do I lose all the light with a solid roof replacement?", a: "You lose the fully glazed ceiling, but well-designed solid roofs often include rooflights or lantern sections to retain some overhead light." },
    { q: "How long does a roof-only replacement take?", a: "Typically 1-2 weeks for a straightforward replacement, depending on the roof system chosen and the size of the conservatory." },
  ],
});

write({
  slug: "insulated-conservatory-roof",
  h1: "What is an insulated conservatory roof?",
  title: "Insulated Conservatory Roofs Explained | EYR",
  description: "How insulated conservatory roof systems work, what they're made from, and the difference they make to year-round comfort.",
  intro: "An insulated conservatory roof replaces a fully glazed or polycarbonate roof with a solid, thermally efficient structure &mdash; the single change that does most to fix summer overheating and winter cold.",
  sections: [
    {
      h2: "How it works",
      paras: [
        "Insulated roof systems typically use lightweight insulated panels or a tiled roof structure built over the existing conservatory frame, incorporating proper insulation layers rather than relying on glazing alone. Some systems retain a smaller glazed section or rooflight to keep some natural light.",
      ],
    },
    {
      h2: "What it changes",
      paras: [
        "The main benefit is thermal performance &mdash; a properly insulated roof dramatically reduces summer heat gain and winter heat loss compared with glass or polycarbonate. It also tends to reduce noise from rain, which is a common complaint with older glazed conservatory roofs.",
      ],
    },
  ],
  faqs: [
    { q: "Can any conservatory have its roof upgraded to an insulated system?", a: "Most can, though the existing frame needs to be assessed to confirm it can support the new roof structure. We check this as part of the survey." },
    { q: "Does an insulated roof need planning permission?", a: "Usually not, since it typically doesn't change the conservatory's footprint. Building regulations position depends on the finished specification &mdash; see our conservatory transformations page for details." },
  ],
});

write({
  slug: "conservatory-transformation-cost",
  h1: "How much does a conservatory transformation cost?",
  title: "Conservatory Transformation Cost | East Yorkshire Renovations",
  description: "General UK cost guidance for conservatory transformations, from a roof-only replacement to a complete rebuild.",
  intro: "Cost depends almost entirely on how much of the existing structure you're replacing, so it's worth thinking in terms of scope rather than a single average figure.",
  sections: [
    {
      h2: "General cost ranges",
      paras: [
        "As general UK market guidance: a roof-only replacement typically runs &pound;5,000&ndash;&pound;12,000. A fuller transformation adding flooring, insulation, electrics and decorating typically runs &pound;12,000&ndash;&pound;25,000. A complete rebuild including new bi-fold doors, walls and underfloor heating can run &pound;25,000&ndash;&pound;40,000 or more.",
        "These are indicative of the wider UK market and aren't East Yorkshire Renovations' confirmed pricing.",
      ],
    },
    {
      h2: "What moves the price",
      paras: [
        "Roof system choice (tiled/panel vs. high-performance glazing) is usually the biggest factor, followed by whether doors and windows are being replaced and how much of the interior fit-out (flooring, electrics, plastering) is included.",
      ],
    },
  ],
  faqs: [
    { q: "Is it cheaper to transform a conservatory or build a new orangery?", a: "Transforming an existing conservatory is generally cheaper than building a new orangery, since you're reusing the existing footprint and dwarf walls rather than starting from foundations." },
  ],
});

write({
  slug: "make-conservatory-usable-all-year",
  h1: "How to make a conservatory usable all year round.",
  title: "Make Your Conservatory Usable All Year | EYR",
  description: "The changes that make the biggest difference to turning a seasonal conservatory into a year-round room, from the roof down to heating and doors.",
  intro: "There's no single fix that does everything, but a handful of changes consistently make the biggest difference to year-round usability.",
  sections: [
    {
      h2: "Priority order",
      paras: [
        "Start with the roof &mdash; this addresses both summer overheating and winter cold more than any other single change. Floor insulation and heating come next, followed by upgrading doors and windows if they're original to an older conservatory. Electrics and lighting matter more for how the room gets used day-to-day than for temperature control.",
      ],
    },
    {
      h2: "Don't need to do it all at once",
      paras: [
        "A roof-only replacement is a sensible first step if budget is tight, since it addresses the biggest single issue. A fuller transformation can follow later if needed, though doing more of the work in one project is usually more cost-effective than staging it over several separate jobs.",
      ],
    },
  ],
  faqs: [
    { q: "What's the minimum I need to do to use my conservatory year-round?", a: "For most conservatories, a proper insulated roof replacement makes the biggest single difference and is a reasonable starting point if you can't do a full transformation straight away." },
  ],
});

write({
  slug: "conservatory-to-living-room",
  h1: "Turning a conservatory into a living room.",
  title: "Conservatory to Living Room Conversion | EYR",
  description: "What's involved in turning a conservatory into a proper year-round living room, from roof and heating to flooring and finishes.",
  intro: "This is one of the most common conservatory transformation requests we get &mdash; here's what it typically involves.",
  sections: [
    {
      h2: "What changes",
      paras: [
        "A roof upgrade is the starting point, since a living room needs to be comfortable in both summer and winter. Underfloor heating or radiators, proper flooring (carpet or engineered wood rather than a hard conservatory-style floor), plastered walls and decorating bring the room up to the same standard as the rest of the house.",
      ],
    },
    {
      h2: "Doors and layout",
      paras: [
        "Upgrading old sliding patio doors to bi-fold or French doors is a popular addition, both for the look and for better insulation and sealing than older units.",
      ],
    },
  ],
  faqs: [
    { q: "Do I need building regulations approval to use my conservatory as a living room?", a: "It depends on the finished specification &mdash; if the transformation removes the conservatory's thermal separation from the house (for example, opening it fully into a hallway with shared heating), building regulations are more likely to apply." },
  ],
});

write({
  slug: "conservatory-to-dining-room",
  h1: "Turning a conservatory into a dining room.",
  title: "Conservatory to Dining Room Conversion | EYR",
  description: "What's involved in turning a conservatory into a comfortable year-round dining room, from roof and flooring to lighting.",
  intro: "A conservatory dining room needs to work for entertaining in the evening as much as in bright daylight, which changes a few priorities compared with a living room conversion.",
  sections: [
    {
      h2: "Lighting and atmosphere",
      paras: [
        "Good pendant or spotlight lighting matters more here than in a daytime-only space, since a dining room gets used through the evening. A solid or hybrid roof also helps avoid the glare and heat that make dining uncomfortable on sunny days.",
      ],
    },
    {
      h2: "Flooring and finish",
      paras: [
        "Durable, easy-to-clean flooring suited to regular use around a dining table &mdash; tiling or engineered wood are common choices &mdash; alongside proper heating so the room's comfortable for long dinners in winter.",
      ],
    },
  ],
  faqs: [
    { q: "Do I need to replace the roof for a dining room conversion?", a: "It's strongly recommended, since a fully glazed roof makes a dining room uncomfortable in both bright sun and winter cold." },
  ],
});

write({
  slug: "conservatory-planning-permission",
  h1: "Do you need planning permission for a conservatory transformation?",
  title: "Conservatory Transformation Planning Permission | EYR",
  description: "General guidance on when a conservatory transformation needs planning permission, and when it doesn't.",
  intro: "Most transformations don't need planning permission, since they reuse the existing footprint &mdash; here's when that changes.",
  sections: [
    {
      h2: "When permission usually isn't needed",
      paras: [
        "Because a conservatory transformation typically keeps the existing dwarf walls and footprint, it's usually treated as an internal and roof upgrade rather than a new structure, meaning planning permission generally isn't required.",
      ],
    },
    {
      h2: "When it might be",
      paras: [
        "This changes if you're also extending the structure's size or footprint, or if the property is listed. It's worth checking with Hull City Council or East Riding of Yorkshire Council for your specific property if you're unsure.",
      ],
    },
  ],
  faqs: [
    { q: "Does a roof-only replacement ever need planning permission?", a: "Rarely, since it doesn't change the building's footprint, though we'll confirm this for your specific property." },
  ],
});

write({
  slug: "conservatory-roof-building-regulations",
  h1: "Do conservatory roof replacements need building regulations approval?",
  title: "Conservatory Roof Building Regulations | EYR",
  description: "When building regulations apply to a conservatory roof replacement, and what the conservatory exemption actually covers.",
  intro: "This comes down to the conservatory exemption &mdash; whether your finished room still qualifies for it, or whether the transformation removes that status.",
  sections: [
    {
      h2: "The conservatory exemption",
      paras: [
        "Conservatories can be exempt from building regulations if they meet specific criteria, broadly: they're independently heated with separate controls, thermally separated from the main house by external-quality doors, and under a certain floor area.",
      ],
    },
    {
      h2: "When a roof replacement changes that",
      paras: [
        "A straightforward roof-only replacement that keeps the room's heating and thermal separation as it was often doesn't affect the exemption. A fuller transformation that removes that separation &mdash; for example, opening the room fully into the house or putting it on the main heating system &mdash; can mean building regulations now apply to the new roof, glazing and electrics.",
      ],
    },
  ],
  faqs: [
    { q: "How do I know if my conservatory currently qualifies for the exemption?", a: "We assess this as part of the survey, based on how it's currently heated and separated from the rest of the house." },
    { q: "Will a full rebuild always need building regulations approval?", a: "In most cases, yes, since a full rebuild typically changes the heating and thermal separation arrangement." },
  ],
});
