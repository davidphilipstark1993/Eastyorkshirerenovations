import { writeFileSync } from "fs";
import { page, heroTextOnly } from "./lib/layout.mjs";
import { SITE } from "./lib/constants.mjs";

function guideLinkList(items) {
  return `        <ul>\n${items.map((i) => `          <li><a href="/guides/${i.slug}/">${i.label}</a></li>`).join("\n")}\n        </ul>\n`;
}

const orangery = [
  { slug: "orangery-vs-conservatory", label: "Orangery vs conservatory: what's the difference?" },
  { slug: "orangery-vs-extension", label: "Orangery vs extension: which is right for your home?" },
  { slug: "how-much-does-an-orangery-cost", label: "How much does an orangery cost?" },
  { slug: "orangery-planning-permission", label: "Do you need planning permission for an orangery?" },
  { slug: "how-long-does-an-orangery-take", label: "How long does an orangery take to build?" },
  { slug: "orangery-roof-options", label: "Orangery roof options explained" },
  { slug: "orangery-insulation", label: "How well insulated is an orangery?" },
  { slug: "orangery-ideas", label: "Orangery ideas: what to use the extra space for" },
];

const conservatory = [
  { slug: "conservatory-too-hot-in-summer", label: "Why is my conservatory too hot in summer?" },
  { slug: "conservatory-too-cold-in-winter", label: "Why is my conservatory too cold in winter?" },
  { slug: "conservatory-roof-replacement", label: "Conservatory roof replacement: your options" },
  { slug: "insulated-conservatory-roof", label: "What is an insulated conservatory roof?" },
  { slug: "conservatory-transformation-cost", label: "How much does a conservatory transformation cost?" },
  { slug: "make-conservatory-usable-all-year", label: "How to make a conservatory usable all year round" },
  { slug: "conservatory-to-living-room", label: "Turning a conservatory into a living room" },
  { slug: "conservatory-to-dining-room", label: "Turning a conservatory into a dining room" },
  { slug: "conservatory-planning-permission", label: "Do you need planning permission for a conservatory transformation?" },
  { slug: "conservatory-roof-building-regulations", label: "Do conservatory roof replacements need building regulations approval?" },
];

const gardenRoom = [
  { slug: "garden-room-cost", label: "How much does a garden room cost?" },
  { slug: "garden-room-planning-permission", label: "Do you need planning permission for a garden room?" },
  { slug: "garden-room-building-regulations", label: "Do garden rooms need building regulations approval?" },
  { slug: "garden-room-insulation", label: "How is a garden room insulated for year-round use?" },
  { slug: "garden-office-cost", label: "How much does a garden office cost?" },
  { slug: "garden-office-ideas", label: "Garden office design ideas" },
  { slug: "garden-gym-ideas", label: "Garden gym design ideas" },
  { slug: "garden-bar-ideas", label: "Garden bar design ideas" },
  { slug: "garden-room-heating", label: "How is a garden room heated?" },
  { slug: "garden-room-electrics", label: "What electrics does a garden room need?" },
  { slug: "garden-room-foundations", label: "What foundations does a garden room need?" },
  { slug: "garden-room-roof-options", label: "Garden room roof options" },
  { slug: "garden-room-vs-extension", label: "Garden room vs extension: which is right for you?" },
];

const garageConversion = [
  { slug: "garage-conversion-cost", label: "How much does a garage conversion cost?" },
  { slug: "garage-conversion-planning-permission", label: "Do you need planning permission for a garage conversion?" },
  { slug: "garage-conversion-building-regulations", label: "What building regulations apply to a garage conversion?" },
  { slug: "garage-conversion-insulation", label: "How is a garage conversion insulated?" },
  { slug: "garage-conversion-damp-proofing", label: "Do garage conversions need damp-proofing?" },
  { slug: "garage-conversion-heating", label: "How is a garage conversion heated?" },
  { slug: "garage-conversion-electrics", label: "What electrics does a garage conversion need?" },
  { slug: "garage-conversion-windows", label: "What happens to the garage door and windows in a conversion?" },
];
// Note: garage-to-bedroom/office/gym/playroom guides intentionally not duplicated here —
// they already exist as full dedicated pages under /garage-conversions/.
const garageConversionExtra = [
  { href: "/garage-conversions/garage-to-bedroom/", label: "Garage to bedroom conversions" },
  { href: "/garage-conversions/garage-to-office/", label: "Garage to office conversions" },
  { href: "/garage-conversions/garage-to-gym/", label: "Garage to gym conversions" },
  { href: "/garage-conversions/garage-to-playroom/", label: "Garage to playroom conversions" },
];

const outdoorKitchen = [
  { slug: "outdoor-kitchen-ideas", label: "Outdoor kitchen ideas for UK gardens" },
  { slug: "outdoor-kitchen-bbq", label: "Choosing a BBQ for your outdoor kitchen" },
  { slug: "outdoor-kitchen-worktops", label: "Best worktop materials for an outdoor kitchen" },
  { slug: "outdoor-kitchen-storage", label: "Outdoor kitchen storage ideas" },
  { slug: "outdoor-kitchen-electrics", label: "What electrics does an outdoor kitchen need?" },
  { slug: "outdoor-kitchen-plumbing", label: "Do you need plumbing for an outdoor kitchen?" },
  { slug: "outdoor-kitchen-winter", label: "Can an outdoor kitchen be used in winter?" },
];
// Note: cost/design/covered-outdoor-kitchen guides intentionally not duplicated here —
// they already exist as full dedicated pages under /outdoor-kitchens/.
const outdoorKitchenExtra = [
  { href: "/outdoor-kitchens/cost/", label: "Outdoor kitchen cost, by component" },
  { href: "/outdoor-kitchens/design/", label: "Outdoor kitchen design & layout" },
  { href: "/outdoor-kitchens/covered-outdoor-kitchens/", label: "Covered outdoor kitchens" },
];

const body = `${heroTextOnly({
  kicker: "Guides",
  h1: "Renovation guides for Hull &amp; East Yorkshire.",
  intro: "Practical, no-nonsense guides to orangeries, conservatory transformations, garden rooms, garage conversions and outdoor kitchens &mdash; plus kitchen, bathroom and full renovation planning.",
  primaryCta: { label: "Request a Free Quote", href: "/contact.html#quote-form" },
  secondaryCta: { label: "View Our Services", href: "/services.html" },
})}
    <section class="section">
      <div class="container">
        <p class="kicker">Orangery guides</p>
        <h2 class="section-title">Planning an orangery.</h2>
${guideLinkList(orangery)}      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Conservatory guides</p>
        <h2 class="section-title">Fixing or transforming a conservatory.</h2>
${guideLinkList(conservatory)}      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Garden room guides</p>
        <h2 class="section-title">Planning a garden room.</h2>
${guideLinkList(gardenRoom)}      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Garage conversion guides</p>
        <h2 class="section-title">Planning a garage conversion.</h2>
${guideLinkList(garageConversion)}        <p>Looking for a specific conversion type? See our dedicated pages: ${garageConversionExtra.map((i) => `<a href="${i.href}">${i.label}</a>`).join(", ")}.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Outdoor kitchen guides</p>
        <h2 class="section-title">Planning an outdoor kitchen.</h2>
${guideLinkList(outdoorKitchen)}        <p>See also: ${outdoorKitchenExtra.map((i) => `<a href="${i.href}">${i.label}</a>`).join(", ")}.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Kitchen, bathroom &amp; renovation guides</p>
        <h2 class="section-title">Planning a kitchen, bathroom or full renovation.</h2>
        <ul>
          <li><a href="/blog/kitchen-renovation-cost-hull.html">How much does a kitchen renovation cost in Hull?</a></li>
          <li><a href="/blog/bathroom-renovation-cost-east-yorkshire.html">How much does a bathroom renovation cost in East Yorkshire?</a></li>
          <li><a href="/blog/full-house-renovation-planning-guide.html">Planning a full house renovation: what to expect</a></li>
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Get in touch</p>
          <h2 class="section-title">Ready to talk through your project?</h2>
          <p>Guides are useful for planning, but every property is different. Send us a few details and we'll arrange a site visit to talk through scope, timelines and pricing.</p>
        </div>
        <div class="callout">
          <h3>Local renovation specialists</h3>
          <p>Email <strong>info@eastyorkshirerenovation.com</strong> for a fast response.</p>
          <p><a class="btn" href="/contact.html#quote-form">Request a quote</a></p>
        </div>
      </div>
    </section>
`;

const canonical = `${SITE}/guides/`;
writeFileSync(
  "guides/index.html",
  page({
    title: "Renovation Guides | East Yorkshire Renovations",
    description: "Guides to orangeries, conservatory transformations, garden rooms, garage conversions, outdoor kitchens and other home renovation projects in Hull and East Yorkshire.",
    canonical,
    body,
    breadcrumbs: [
      { name: "Home", item: `${SITE}/` },
      { name: "Guides" },
    ],
  })
);
console.log("wrote guides/index.html");
