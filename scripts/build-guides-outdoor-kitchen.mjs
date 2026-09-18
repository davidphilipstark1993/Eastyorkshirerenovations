import { mkdirSync, writeFileSync } from "fs";
import { guidePage } from "./lib/layout.mjs";

const CATEGORY = "Outdoor kitchen guides";
const CATEGORY_PATH = "/outdoor-kitchens/";

const RELATED_BASE = [
  { label: "Outdoor Kitchens — main service page", href: "/outdoor-kitchens/" },
  { label: "Outdoor kitchens in Hull", href: "/outdoor-kitchens/hull/" },
  { label: "Outdoor kitchens in East Yorkshire", href: "/outdoor-kitchens/east-yorkshire/" },
];

function write(def) {
  const dir = `guides/${def.slug}`;
  mkdirSync(dir, { recursive: true });
  const html = guidePage({ ...def, categoryLabel: CATEGORY, categoryPath: CATEGORY_PATH, related: def.related || RELATED_BASE });
  writeFileSync(`${dir}/index.html`, html);
  console.log(`wrote ${dir}/index.html`);
}

write({
  slug: "outdoor-kitchen-ideas",
  h1: "Outdoor kitchen ideas for UK gardens.",
  title: "Outdoor Kitchen Ideas for UK Gardens | EYR",
  description: "Practical outdoor kitchen ideas suited to UK gardens and weather, from layout to materials and cover.",
  intro: "The best outdoor kitchen designs for UK gardens tend to prioritise weatherproofing and flexibility over the fully open-air look you see in warmer-climate design magazines.",
  sections: [
    {
      h2: "Design ideas worth considering",
      paras: [
        "A partial cover, such as a pergola, extends usability into more of the year without the cost of a full roof structure. Positioning the kitchen against a wall or fence gives some natural wind shelter, which matters more in the UK than in a hot, still climate.",
        "Built-in storage for utensils and gas bottles keeps the space tidy, and a small prep and dining zone alongside the cooking area makes the kitchen more usable for entertaining rather than just grilling.",
      ],
    },
    {
      h2: "Materials that suit UK weather",
      paras: [
        "Weatherproof worktops such as porcelain or granite and marine-grade or powder-coated cabinetry stand up better to UK rain and damp than materials designed primarily for drier climates.",
      ],
    },
  ],
  faqs: [
    { q: "What outdoor kitchen layout works best for a typical UK garden?", a: "A single-run or L-shaped layout against a wall or fence tends to work well for typical UK garden sizes, giving some natural shelter while keeping the design compact." },
  ],
});

write({
  slug: "outdoor-kitchen-bbq",
  h1: "Choosing a BBQ for your outdoor kitchen.",
  title: "Choosing a BBQ for Your Outdoor Kitchen | EYR",
  description: "Gas, charcoal and hybrid BBQ options for a built-in outdoor kitchen, and what to consider when choosing between them.",
  intro: "The BBQ is usually the centrepiece of an outdoor kitchen, and the choice between gas, charcoal and hybrid comes down to how you actually like to cook.",
  sections: [
    {
      h2: "Gas, charcoal or hybrid",
      paras: [
        "Gas BBQs offer convenience and consistent temperature control, and need a certified gas supply installed by a Gas Safe registered engineer. Charcoal BBQs give more traditional flavour but need more hands-on management. Hybrid units combine both, giving flexibility at a higher cost.",
      ],
    },
    {
      h2: "Built-in housing",
      paras: [
        "A built-in BBQ needs proper housing with adequate ventilation, both for safety and to protect surrounding cabinetry and worktops from heat damage. This is planned as part of the overall outdoor kitchen design rather than added as an afterthought.",
      ],
    },
  ],
  faqs: [
    { q: "Can I add a pizza oven alongside a BBQ?", a: "Yes, this is a popular addition, usually built into the same run of units alongside the main BBQ." },
    { q: "Does a gas BBQ need to be professionally installed?", a: "Yes, any gas supply to a BBQ or pizza oven must be installed and certified by a Gas Safe registered engineer." },
  ],
});

write({
  slug: "outdoor-kitchen-worktops",
  h1: "Best worktop materials for an outdoor kitchen.",
  title: "Best Worktop Materials for an Outdoor Kitchen | EYR",
  description: "Comparing porcelain, granite and other worktop materials for outdoor kitchens, covering durability and weather resistance.",
  intro: "Not every worktop material that works indoors holds up outside &mdash; here's what to look for.",
  sections: [
    {
      h2: "Porcelain",
      paras: [
        "A popular, hard-wearing choice for outdoor kitchens, resistant to UV fading, staining and frost damage, and generally the more budget-friendly of the two most common weatherproof options.",
      ],
    },
    {
      h2: "Granite and natural stone",
      paras: [
        "Extremely durable and weather-resistant, with a natural look many homeowners prefer, though it sits at the premium end of the cost range and may need periodic sealing depending on the specific stone.",
      ],
    },
  ],
  faqs: [
    { q: "Can I use standard kitchen worktop material outside?", a: "Not recommended &mdash; materials designed for indoor use often aren't rated for UV exposure, frost and constant weathering, and will deteriorate faster outdoors." },
  ],
});

write({
  slug: "outdoor-kitchen-storage",
  h1: "Outdoor kitchen storage ideas.",
  title: "Outdoor Kitchen Storage Ideas | East Yorkshire Renovations",
  description: "How to plan storage for an outdoor kitchen, from weatherproof cabinetry to gas bottle housing.",
  intro: "Good storage keeps an outdoor kitchen usable and tidy, rather than becoming a place where everything from utensils to cushions ends up dumped.",
  sections: [
    {
      h2: "Weatherproof cabinetry",
      paras: [
        "Built-in cabinetry made from weather-resistant materials keeps utensils, crockery and cooking accessories close to hand and protected from the elements, unlike freestanding storage boxes.",
      ],
    },
    {
      h2: "Gas bottle housing",
      paras: [
        "Where a gas BBQ is used, dedicated, ventilated housing for the gas bottle is both a practical and safety consideration, planned in alongside the rest of the storage design.",
      ],
    },
  ],
  faqs: [
    { q: "Should outdoor kitchen storage be lockable?", a: "It's worth considering, particularly for expensive utensils or accessories you'd rather not leave accessible when the kitchen isn't in use." },
  ],
});

write({
  slug: "outdoor-kitchen-electrics",
  h1: "What electrics does an outdoor kitchen need?",
  title: "Outdoor Kitchen Electrics Explained | East Yorkshire Renovations",
  description: "What to plan for outdoor kitchen electrics, from weatherproof sockets to lighting and refrigeration, and Part P compliance.",
  intro: "Outdoor electrics have different safety requirements to indoor ones, and need planning in properly rather than treating as an afterthought.",
  sections: [
    {
      h2: "Weatherproof sockets and lighting",
      paras: [
        "Outdoor-rated sockets and fittings are essential, providing power for fridges, blenders or additional appliances, and lighting extends the space's usability into the evening.",
      ],
    },
    {
      h2: "Part P compliance",
      paras: [
        "All outdoor electrical work should be carried out or certified to Part P requirements by a competent, registered electrician, given the additional safety considerations of an outdoor environment.",
      ],
    },
  ],
  faqs: [
    { q: "Can I run outdoor kitchen electrics myself?", a: "No, outdoor electrical work should be carried out or certified by a competent, registered electrician to meet Part P requirements." },
  ],
});

write({
  slug: "outdoor-kitchen-plumbing",
  h1: "Do you need plumbing for an outdoor kitchen?",
  title: "Outdoor Kitchen Plumbing Explained | East Yorkshire Renovations",
  description: "When plumbing is needed for an outdoor kitchen, what's involved in running water and drainage, and the cost implications.",
  intro: "Plumbing isn't essential for every outdoor kitchen, but it's one of the bigger factors in both cost and what the space can do.",
  sections: [
    {
      h2: "When it's worth it",
      paras: [
        "A sink and cold water supply save constant trips back to the indoor kitchen during entertaining, which is the main reason people add plumbing. It's a bigger addition for a kitchen some distance from the house, since pipework has further to travel.",
      ],
    },
    {
      h2: "What's involved",
      paras: [
        "Running water and drainage to an outdoor kitchen means groundworks to lay pipework, insulated or frost-protected where needed for winter, and connecting into the house's existing supply and drainage system.",
      ],
    },
  ],
  faqs: [
    { q: "Does outdoor kitchen plumbing need winterising?", a: "Exposed outdoor pipework can be vulnerable to frost, so it's worth discussing frost protection or a simple isolation and drain-down routine for winter as part of the design." },
  ],
});

write({
  slug: "outdoor-kitchen-winter",
  h1: "Can an outdoor kitchen be used in winter?",
  title: "Using an Outdoor Kitchen in Winter | East Yorkshire Renovations",
  description: "Whether an outdoor kitchen can be used through a UK winter, and what to do to protect it during colder months.",
  intro: "It depends mainly on whether the kitchen is covered, and a few sensible maintenance steps make a real difference either way.",
  sections: [
    {
      h2: "Covered vs open-air",
      paras: [
        "A covered outdoor kitchen with a solid roof can generally be used year-round, protected from rain and reducing the practical barriers to cooking outside in colder months. An open-air setup is more realistically a spring-to-autumn space.",
      ],
    },
    {
      h2: "Winter maintenance",
      paras: [
        "Covering exposed appliances, checking gas connections before the colder months, and protecting or draining down any exposed plumbing are worth doing each winter regardless of whether the kitchen is covered.",
      ],
    },
  ],
  faqs: [
    { q: "Should I cover my outdoor kitchen appliances in winter?", a: "Yes, protective covers for the BBQ and any exposed appliances help prevent weather damage even when the kitchen itself isn't in regular use." },
  ],
});
