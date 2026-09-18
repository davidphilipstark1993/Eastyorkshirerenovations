import { mkdirSync, writeFileSync } from "fs";
import { guidePage } from "./lib/layout.mjs";

const CATEGORY = "Garage conversion guides";
const CATEGORY_PATH = "/garage-conversions/";

const RELATED_BASE = [
  { label: "Garage Conversions — main service page", href: "/garage-conversions/" },
  { label: "Garage conversions in Hull", href: "/garage-conversions/hull/" },
  { label: "Garage conversions in East Yorkshire", href: "/garage-conversions/east-yorkshire/" },
];

function write(def) {
  const dir = `guides/${def.slug}`;
  mkdirSync(dir, { recursive: true });
  const html = guidePage({ ...def, categoryLabel: CATEGORY, categoryPath: CATEGORY_PATH, related: def.related || RELATED_BASE });
  writeFileSync(`${dir}/index.html`, html);
  console.log(`wrote ${dir}/index.html`);
}

write({
  slug: "garage-conversion-cost",
  h1: "How much does a garage conversion cost?",
  title: "Garage Conversion Cost | East Yorkshire Renovations",
  description: "General UK cost guidance for garage conversions by specification, from a basic conversion to one including plumbing.",
  intro: "Cost depends mainly on the garage's existing condition and whether plumbing is needed &mdash; here's general guidance to help you budget.",
  sections: [
    {
      h2: "General cost ranges",
      paras: [
        "As general UK market guidance: a basic conversion (insulation, flooring, plastering and electrics only) often runs &pound;6,000&ndash;&pound;12,000. A mid-spec conversion including heating, new windows and a higher-quality finish typically runs &pound;12,000&ndash;&pound;20,000. A higher-spec conversion including plumbing for an en-suite or kitchenette can run &pound;20,000&ndash;&pound;35,000 or more.",
        "These are indicative of the wider UK market and aren't East Yorkshire Renovations' confirmed pricing.",
      ],
    },
    {
      h2: "What moves the price",
      paras: [
        "Existing damp and floor level issues can add cost if they need addressing before the conversion can proceed. Plumbing, if included, is usually the next biggest factor, followed by window and door replacement and the interior finish specified.",
      ],
    },
  ],
  faqs: [
    { q: "Is a detached garage conversion more expensive than an integral one?", a: "Often, yes, since a detached garage typically needs its own services run out to it, similar to a garden room, which adds cost compared with an integral garage already close to existing supplies." },
  ],
});

write({
  slug: "garage-conversion-planning-permission",
  h1: "Do you need planning permission for a garage conversion?",
  title: "Garage Conversion Planning Permission | East Yorkshire Renovations",
  description: "General guidance on when a garage conversion needs planning permission, for both integral and detached garages.",
  intro: "Converting an integral garage usually doesn't need planning permission &mdash; here's the general position and where it can differ.",
  sections: [
    {
      h2: "Integral and attached garages",
      paras: [
        "Converting an integral or attached garage into living space is usually treated as an internal change of use within the existing footprint, which doesn't normally need planning permission. This can change if you're also altering the garage door opening to a full window, or changing the roofline.",
      ],
    },
    {
      h2: "Detached garages",
      paras: [
        "Detached garage conversions follow similar building regulations requirements, but may be more likely to need planning permission if the intended use, height or external appearance is changing significantly.",
      ],
    },
  ],
  faqs: [
    { q: "Does changing my garage door to a window need planning permission?", a: "It can do, depending on your property and the extent of the change. We check this for your specific garage as part of the consultation." },
  ],
});

write({
  slug: "garage-conversion-building-regulations",
  h1: "What building regulations apply to a garage conversion?",
  title: "Garage Conversion Building Regulations | East Yorkshire Renovations",
  description: "The building regulations that apply to garage conversions, covering structure, insulation, fire safety, ventilation and electrics.",
  intro: "Unlike planning permission, building regulations approval is required for a garage conversion regardless of whether planning permission is needed.",
  sections: [
    {
      h2: "What's covered",
      paras: [
        "Building regulations for a garage conversion cover structural work (particularly around the former garage door opening), insulation standards, damp-proofing, fire safety (especially important where there's a room above the garage), ventilation and electrical work.",
      ],
    },
    {
      h2: "Fire safety",
      paras: [
        "Fire safety requirements are a bigger consideration for garage conversions than for many other home improvement projects, particularly where the garage sits below a bedroom or is part of an escape route, and this is assessed as part of the building regulations process.",
      ],
    },
  ],
  faqs: [
    { q: "Do I need building control sign-off even for a small conversion?", a: "Yes, building regulations approval applies regardless of the conversion's size, since it covers structural and safety requirements rather than being size-dependent in the way some planning rules are." },
  ],
});

write({
  slug: "garage-conversion-insulation",
  h1: "How is a garage conversion insulated?",
  title: "Garage Conversion Insulation Explained | East Yorkshire Renovations",
  description: "How garage floors, walls and roofs are insulated during a conversion to bring the room up to a comfortable, usable standard.",
  intro: "Garages are rarely built to the same insulation standard as the rest of the house, so bringing this up to scratch is a standard part of most conversions.",
  sections: [
    {
      h2: "Floor and walls",
      paras: [
        "The existing floor is usually raised and insulated as part of the conversion, since garage floors are typically lower than the house floor level and poorly insulated. Wall insulation is added to bring the room in line with the rest of the house's thermal performance.",
      ],
    },
    {
      h2: "Roof and door opening",
      paras: [
        "Roof insulation is checked and upgraded where needed, and the former garage door opening &mdash; whether bricked up or replaced with a window &mdash; is insulated and detailed to avoid becoming a cold spot or source of draughts.",
      ],
    },
  ],
  faqs: [
    { q: "Is garage insulation different from house insulation?", a: "The principles are the same, but garages often need more remedial work first, since they weren't originally built to the same standard as the main house." },
  ],
});

write({
  slug: "garage-conversion-damp-proofing",
  h1: "Do garage conversions need damp-proofing?",
  title: "Garage Conversion Damp-Proofing | East Yorkshire Renovations",
  description: "Why damp-proofing matters for garage conversions, and what's involved in addressing it before the room can be finished.",
  intro: "This is one of the most common issues we find during a garage conversion survey, and it needs addressing properly before any finishing work starts.",
  sections: [
    {
      h2: "Why it's an issue",
      paras: [
        "Garage floors often sit below the damp-proof course of the main house, since garages weren't originally built as habitable space. Left unaddressed, this can lead to persistent damp in the converted room.",
      ],
    },
    {
      h2: "How it's fixed",
      paras: [
        "Damp-proofing typically involves raising the floor level, installing a proper damp-proof membrane, and addressing any damp-proof course issues in the walls. This is assessed during the survey and priced into the conversion from the outset.",
      ],
    },
  ],
  faqs: [
    { q: "How do I know if my garage has a damp problem before converting it?", a: "We check for this as part of the survey, looking at floor level relative to the damp-proof course and any visible signs of damp in the walls." },
  ],
});

write({
  slug: "garage-conversion-heating",
  h1: "How is a garage conversion heated?",
  title: "Garage Conversion Heating Options | East Yorkshire Renovations",
  description: "The main heating options for a garage conversion, extended from the main house's existing heating system.",
  intro: "Heating is usually extended from the main house's existing system, which is more straightforward for an integral garage than a detached one.",
  sections: [
    {
      h2: "Extending the existing system",
      paras: [
        "For an integral garage, extending the central heating system with a new radiator or underfloor heating loop is usually the most practical option, since the pipework doesn't have far to travel.",
      ],
    },
    {
      h2: "Detached garages",
      paras: [
        "A detached garage conversion may need its own heating solution, such as electric heating, if extending pipework from the house isn't practical, similar to the approach used for garden rooms.",
      ],
    },
  ],
  faqs: [
    { q: "Is underfloor heating a good option for a garage conversion?", a: "It can be, particularly since floor insulation and levelling are usually being done anyway as part of the conversion, making it a practical time to add it." },
  ],
});

write({
  slug: "garage-conversion-electrics",
  h1: "What electrics does a garage conversion need?",
  title: "Garage Conversion Electrics Explained | East Yorkshire Renovations",
  description: "What to plan for garage conversion electrics, from sockets and lighting to consumer unit capacity and certification.",
  intro: "Electrics are planned around the room's intended use, whether that's a bedroom, office, gym or playroom.",
  sections: [
    {
      h2: "Sockets and lighting",
      paras: [
        "First and second fix electrics are extended from the main house, with sockets, lighting and data points positioned around the room's planned layout and use.",
      ],
    },
    {
      h2: "Consumer unit capacity",
      paras: [
        "We check whether your existing consumer unit has capacity for the extra circuits a conversion needs, particularly if the room includes heating, an en-suite, or equipment such as a home gym setup.",
      ],
    },
  ],
  faqs: [
    { q: "Does garage conversion electrical work need to be certified?", a: "Yes, all electrical work must meet Part P requirements and be certified by a competent, registered electrician." },
  ],
});

write({
  slug: "garage-conversion-windows",
  h1: "What happens to the garage door and windows in a conversion?",
  title: "Garage Conversion Windows & Doors | East Yorkshire Renovations",
  description: "What typically happens to the garage door opening and windows during a conversion, and how it affects the room's finished look.",
  intro: "The old garage door opening is one of the first things to sort out, and it shapes how the finished room looks from outside.",
  sections: [
    {
      h2: "The garage door opening",
      paras: [
        "This is typically either bricked up with matching brickwork, or replaced with a window, depending on the room's new use and how much natural light you want. Matching the new brickwork to the existing house is worth doing properly rather than leaving an obvious patch.",
      ],
    },
    {
      h2: "Additional windows",
      paras: [
        "Depending on the room's use and how much natural light the existing structure allows, additional windows may be added &mdash; a bedroom conversion in particular may need a window that meets minimum size and opening requirements for fire escape.",
      ],
    },
  ],
  faqs: [
    { q: "Can the garage door opening be kept as a feature, like a large window?", a: "Yes, some conversions keep a large glazed opening where the garage door was, rather than bricking it up entirely, depending on the design and how much light is wanted." },
  ],
});
