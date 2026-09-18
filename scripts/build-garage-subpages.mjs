import { mkdirSync, writeFileSync } from "fs";
import { page, heroTextOnly, faqList, quoteCallout, conceptVideoSection } from "./lib/layout.mjs";
import { SITE } from "./lib/constants.mjs";

function subpage({ slug, name, article = "a", h1, intro, considerTitle, considerParas, faqs, title, description, serviceDesc, video }) {
  const dir = `garage-conversions/${slug}`;
  const canonical = `${SITE}/${dir}/`;
  const body = `${heroTextOnly({ kicker: `Garage conversions`, h1, intro })}
${video ? conceptVideoSection({ h1: `See a garage-to-${name.toLowerCase()} conversion in motion.`, videos: [video] }) : ""}
    <section class="section">
      <div class="container">
        <p class="kicker">What's different about this conversion</p>
        <h2 class="section-title">${considerTitle}</h2>
        ${considerParas.map((p) => `<p>${p}</p>`).join("\n        ")}
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="kicker">Cost &amp; process</p>
          <h2 class="section-title">Cost, planning and our process.</h2>
          <p>Costs, typical timescales, planning permission and building regulations for garage conversions are covered in full on our main <a href="/garage-conversions/">garage conversions page</a> &mdash; the general principles apply here too, with the specifics for ${article} ${name.toLowerCase()} conversion noted above.</p>
        </div>
        ${quoteCallout({
          heading: `Thinking about ${article} ${name.toLowerCase()} conversion?`,
          body: `Email <strong>info@eastyorkshirerenovation.com</strong> to arrange a site visit.`,
        })}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Areas covered</p>
        <h2 class="section-title">Garage conversions across Hull &amp; East Yorkshire.</h2>
        <p>We carry out ${name.toLowerCase()} conversions across <a href="/garage-conversions/hull/">Hull</a> and <a href="/garage-conversions/east-yorkshire/">East Yorkshire</a>, alongside our full range of <a href="/garage-conversions/">garage conversion services</a>.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="kicker">Frequently asked questions</p>
        <h2 class="section-title">${name} FAQs.</h2>
        ${faqList(faqs)}
      </div>
    </section>
`;

  mkdirSync(dir, { recursive: true });
  const html = page({
    title,
    description,
    canonical,
    body,
    breadcrumbs: [
      { name: "Home", item: `${SITE}/` },
      { name: "Garage Conversions", item: `${SITE}/garage-conversions/` },
      { name },
    ],
    faq: faqs,
    service: {
      name: `Garage to ${name} Conversion`,
      description: serviceDesc,
    },
  });
  writeFileSync(`${dir}/index.html`, html);
  console.log(`wrote ${dir}/index.html`);
}

subpage({
  slug: "garage-to-bedroom",
  name: "Bedroom",
  h1: "Garage to bedroom conversions.",
  intro: "Turning a garage into a bedroom needs a bit more care than most conversions &mdash; sound insulation, a compliant escape route and heating all matter more in a room people sleep in.",
  considerTitle: "What matters most in a garage-to-bedroom conversion.",
  considerParas: [
    "<strong>Fire safety &amp; escape.</strong> A habitable bedroom needs an adequate means of escape, which usually means a window of a minimum size that can be opened for escape or rescue, particularly if the room doesn't open directly onto a hallway with its own escape route. We assess this specifically for bedroom conversions, since it's a stricter requirement than for an office or playroom.",
    "<strong>Sound insulation.</strong> Because garages typically share a party wall with a neighbouring house (on semis and terraces) or sit close to the main living areas, upgrading sound insulation in the walls and party wall is worth prioritising for a bedroom, more so than for a lower-traffic room like a playroom.",
    "<strong>Heating &amp; comfort.</strong> We generally specify a higher, more consistent heating standard for a bedroom than for an office or gym, since comfort at night matters more than in a room only used during the day.",
    "<strong>En-suite potential.</strong> Where an integral garage sits near existing bathroom plumbing, adding a small en-suite is often worth considering as part of the same project, particularly for a guest bedroom.",
  ],
  faqs: [
    { q: "Does a garage-to-bedroom conversion need a special window for fire safety?", a: "Often, yes. A habitable bedroom typically needs an adequate means of escape, which usually means a window that meets minimum size and opening requirements. We assess this specifically as part of the design." },
    { q: "Is soundproofing important for a garage bedroom conversion?", a: "Yes, more so than for other room types, particularly where the garage shares a party wall with a neighbouring property." },
    { q: "Can you add an en-suite to a garage-to-bedroom conversion?", a: "Where plumbing can be run from a nearby existing point, yes, this is a common addition for a guest bedroom conversion." },
  ],
  title: "Garage to Bedroom Conversion | East Yorkshire Renovations",
  description: "Garage to bedroom conversions across Hull and East Yorkshire, covering fire safety, escape windows, sound insulation and heating.",
  serviceDesc: "Garage to bedroom conversions across Hull and East Yorkshire, including fire safety, sound insulation and heating considerations.",
});

subpage({
  slug: "garage-to-office",
  name: "Office",
  article: "an",
  h1: "Garage to home office conversions.",
  intro: "A converted garage makes a genuinely separate home office &mdash; away from household noise, with its own door, and enough power and connectivity for a proper working setup.",
  considerTitle: "What matters most in a garage-to-office conversion.",
  considerParas: [
    "<strong>Acoustic separation.</strong> The main reason people convert a garage into an office rather than using a spare room is separation from the rest of the house. We pay particular attention to sound insulation between the office and any adjoining rooms, which matters more here than for most other conversions given calls and video meetings.",
    "<strong>Electrics &amp; connectivity.</strong> We plan extra sockets, dedicated circuits where needed for equipment, and network/data cabling back to your router, rather than relying on Wi-Fi alone through a converted structure.",
    "<strong>Natural light &amp; glare.</strong> Window position is planned around where a desk and screen will sit, to avoid glare on monitors while still bringing in useful daylight.",
    "<strong>Mortgage &amp; insurance considerations.</strong> If you're planning to run a business with visiting clients or make the office a fully self-contained annexe, it's worth checking with your mortgage lender and home insurer whether this affects your policy &mdash; a straightforward home office for your own use typically doesn't, but it's a sensible question to ask before starting work.",
  ],
  faqs: [
    { q: "Will a garage office get decent broadband?", a: "We run network cabling back to your router as part of most office conversions, rather than relying on Wi-Fi alone, particularly for a detached garage further from the house." },
    { q: "Do I need planning permission to use my garage as an office?", a: "Usually not for personal use, though if you plan to run a business with regular visiting clients, it's worth checking with East Riding of Yorkshire Council or Hull City Council, and confirming your mortgage and insurance position." },
    { q: "How much soundproofing does a garage office need?", a: "More than a typical playroom or storage conversion, since calls and video meetings are more sensitive to noise. We assess this for your specific garage and its neighbouring rooms." },
  ],
  title: "Garage to Office Conversion | East Yorkshire Renovations",
  description: "Garage to home office conversions across Hull and East Yorkshire, with acoustic separation, electrics and connectivity planned in from the start.",
  serviceDesc: "Garage to home office conversions across Hull and East Yorkshire, including soundproofing, electrics and network cabling.",
  video: { src: "/assets/video/garage-to-office-concept.mp4" },
});

subpage({
  slug: "garage-to-gym",
  name: "Gym",
  h1: "Garage to gym conversions.",
  intro: "A garage gym needs tougher flooring, better ventilation and more thought given to power and layout than most other conversions &mdash; details that are easy to miss until the equipment's already in.",
  considerTitle: "What matters most in a garage-to-gym conversion.",
  considerParas: [
    "<strong>Flooring.</strong> Standard laminate or carpet won't stand up to free weights or cardio equipment. We typically specify reinforced subflooring where heavier equipment is planned, finished with rubber gym flooring that protects both the floor and any dropped weights.",
    "<strong>Ventilation.</strong> A home gym generates more heat and humidity than most rooms, so we plan extraction or additional ventilation to stop the space feeling stuffy and to protect mirrors, equipment and finishes from condensation.",
    "<strong>Ceiling height.</strong> Existing garage ceiling heights can limit certain equipment, such as pull-up rigs or overhead press movements. We check this against your intended equipment list at design stage rather than after the room's finished.",
    "<strong>Electrics &amp; extras.</strong> Sockets for equipment, a TV or sound system, and good lighting are planned in alongside any mirrors, which are usually fitted once the walls and flooring are finished.",
  ],
  faqs: [
    { q: "Does a garage gym conversion need reinforced flooring?", a: "It depends on the equipment. For free weights or heavier cardio machines, we typically specify reinforced subflooring finished with rubber gym flooring." },
    { q: "Will a converted garage gym feel stuffy?", a: "Not if ventilation is planned in from the start. We assess extraction and ventilation needs specifically for gym conversions, given the extra heat and humidity generated." },
    { q: "Can you fit a pull-up bar or rig in a garage gym?", a: "It depends on your garage's ceiling height. We check this against your intended equipment during the design stage." },
  ],
  title: "Garage to Gym Conversion | East Yorkshire Renovations",
  description: "Garage to gym conversions across Hull and East Yorkshire, with reinforced flooring, ventilation and electrics planned around your equipment.",
  serviceDesc: "Garage to gym conversions across Hull and East Yorkshire, including reinforced flooring, ventilation and electrics.",
});

subpage({
  slug: "garage-to-playroom",
  name: "Playroom",
  h1: "Garage to playroom conversions.",
  intro: "A converted garage makes a durable, easy-to-clean family playroom, separate from the main living areas so toys, mess and noise stay contained.",
  considerTitle: "What matters most in a garage-to-playroom conversion.",
  considerParas: [
    "<strong>Durable, easy-clean finishes.</strong> Playrooms take more day-to-day wear than most rooms, so we typically specify hard-wearing, easy-to-clean flooring and washable wall finishes rather than the higher-spec materials used in a bedroom or office conversion.",
    "<strong>Storage.</strong> Built-in shelving and storage cupboards are worth planning in from the start, both to keep the room tidy and to make the most of a typically compact garage footprint.",
    "<strong>Noise containment.</strong> Sound insulation is still worth including, mainly to keep noise from the playroom contained rather than travelling through to the rest of the house.",
    "<strong>Safety.</strong> Standard safety considerations apply, including socket covers, safety glazing where relevant, and rounded or protected edges on any built-in furniture.",
  ],
  faqs: [
    { q: "What flooring works best for a garage playroom?", a: "Durable, easy-to-clean options such as vinyl or laminate are common choices, prioritising practicality over the higher-spec finishes used in a bedroom or office conversion." },
    { q: "Can you add built-in storage to a playroom conversion?", a: "Yes, built-in shelving and storage cupboards are a common addition and help make the most of a typically compact garage footprint." },
    { q: "Will a playroom conversion need much insulation?", a: "The same insulation standard as other garage conversions applies for comfort, with sound insulation particularly useful for containing noise from the rest of the house." },
  ],
  title: "Garage to Playroom Conversion | East Yorkshire Renovations",
  description: "Garage to playroom conversions across Hull and East Yorkshire, with durable finishes, built-in storage and noise containment.",
  serviceDesc: "Garage to playroom conversions across Hull and East Yorkshire, including durable finishes and built-in storage.",
});
