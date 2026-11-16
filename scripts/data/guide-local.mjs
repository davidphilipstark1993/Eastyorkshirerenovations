// Local East Yorkshire context added to the end of every guide, with
// contextual links to the matching local service pages.
//
// Facts here come only from copy already on the site:
//  - Hull housing and damp: /damp-proofing/hull/ (solid-walled Victorian and
//    Edwardian terraces, low-lying ground and high water table on the Humber,
//    raised yards/paths bridging the DPC, post-war estates such as Bransholme
//    and Orchard Park with condensation, 2007 floods).
//  - Beverley: /damp-proofing/beverley/ (Georgian and Victorian centre, much of
//    it a conservation area, many listed buildings, cement render and gypsum
//    plaster trapping moisture, listed building consent from East Riding of
//    Yorkshire Council).
//  - Planning: Hull City Council / East Riding of Yorkshire Council, and
//    conservation areas in Swanland and Beverley, as stated on area pages.
//  - £119 damp survey deducted from treatment; replastering and making good
//    done in-house; bathroom figure of around £6,000 supplied by the owner
//    on 15 Nov 2026.

const DAMP_AREAS = `<p>We&rsquo;re based in Hessle and carry out damp surveys across <a href="/damp-proofing/hull/">Hull</a>, <a href="/damp-proofing/beverley/">Beverley</a> and the East Riding, and over the Humber in <a href="/damp-proofing/barton-upon-humber/">Barton-upon-Humber</a>, <a href="/damp-proofing/brigg/">Brigg</a>, <a href="/damp-proofing/scunthorpe/">Scunthorpe</a> and <a href="/damp-proofing/grimsby/">Grimsby</a>. A survey costs &pound;119 and is deducted from the cost of treatment if you go ahead with our quote.</p>`;

const DAMP_HEADING = "Damp in Hull and East Yorkshire homes";

const PLANNING = `Planning questions go to Hull City Council or East Riding of Yorkshire Council, depending on where you live. Conservation areas, such as much of Beverley town centre and parts of Swanland, can change what is allowed without an application, so we check the planning position for your address before recommending a design.`;

export const LOCAL_CONTEXT = {
  // ---------------------------------------------------------------- damp
  "awaabs-law-private-landlords": {
    heading: "Damp in rented homes in Hull and East Yorkshire",
    html: `<p>Much of Hull&rsquo;s rented housing is either solid-walled Victorian and Edwardian terraces, where rain can track through failed pointing or leaking downpipes, or inter-war and post-war homes, where condensation and black mould are the usual problem. A written report that names the cause is the record you need either way.</p>
${DAMP_AREAS}`,
  },
  "how-to-tell-if-its-rising-damp": {
    heading: DAMP_HEADING,
    html: `<p>In Hull, much of what looks like rising damp in older terraces turns out to be concrete yards, paths or raised flower beds sitting above the damp-proof course and bridging it, or rain getting through solid brick walls. Genuine rising damp does occur, but only once those look-alikes have been ruled out. In Beverley&rsquo;s older houses, cement render, cement pointing and gypsum plaster that trap moisture are often mistaken for rising damp.</p>
${DAMP_AREAS}`,
  },
  "damp-or-condensation": {
    heading: DAMP_HEADING,
    html: `<p>Across Hull and the East Riding, inter-war and post-war homes, including large estates such as Bransholme and Orchard Park, most often have condensation: replacement windows without trickle vents, weak bathroom and kitchen extraction, and cold corners where black mould takes hold. Older solid-walled terraces are more prone to penetrating damp from failed pointing and leaking downpipes.</p>
${DAMP_AREAS}`,
  },
  "damp-patches-on-internal-walls": {
    heading: DAMP_HEADING,
    html: `<p>Hull&rsquo;s Victorian and Edwardian terraces have solid brick walls with no cavity, so rain that gets past eroded pointing, a leaking downpipe or cracked render on a gable end can show up as a damp patch on the inside wall. Ground-floor walls on the city&rsquo;s low-lying, high-water-table ground are also worth checking for a bridged damp-proof course.</p>
${DAMP_AREAS}`,
  },
  "is-black-mould-always-condensation": {
    heading: DAMP_HEADING,
    html: `<p>In Hull&rsquo;s post-war housing, black mould is usually condensation from sealed windows and poor extraction. In older solid-walled terraces, and in Beverley&rsquo;s period houses where cement render or non-breathable paint traps moisture in the wall, it can also follow penetrating damp, which ventilation alone will not fix.</p>
${DAMP_AREAS}`,
  },
  "damp-survey-cost-hull": {
    heading: "Damp surveys across Hull and East Yorkshire",
    html: `<p>The same &pound;119 survey covers Hull, Beverley, Hessle, Cottingham and the rest of the East Riding. We inspect the affected areas inside and out, take moisture readings and work out the cause, then give you a written report in plain English and a quote for any work.</p>
${DAMP_AREAS}`,
  },
  "damp-proofing-cost-hull": {
    heading: DAMP_HEADING,
    html: `<p>In Hull, a lot of damp in older terraces comes from raised yards, paths and flower beds bridging the damp-proof course, where lowering the ground level or adding a drainage channel fixes the cause. That is why we diagnose first: the right fix depends on the cause, not on the symptom. Our quotes include the replastering and making good, because we do that ourselves.</p>
${DAMP_AREAS}`,
  },
  "what-does-a-damp-survey-include": {
    heading: "Damp surveys in Hull and East Yorkshire",
    html: `<p>On a Hull terrace we check the outside as carefully as the inside: ground levels in the yard and along the tenfoot, pointing, downpipes and render, as well as moisture readings on the affected walls. On listed buildings in Beverley we flag in the report where a treatment may not be suitable or may need listed building consent.</p>
${DAMP_AREAS}`,
  },
  "buying-a-house-with-damp": {
    heading: "Buying a house with damp in Hull or East Yorkshire",
    html: `<p>Many Hull homes were flooded in 2007, and some still have damp-related damage or hurried repairs from that time that are worth checking before you buy. In Beverley town centre many houses are listed, which can limit which damp treatments are suitable. Our <a href="/damp-proofing/pre-purchase-damp-survey/">pre-purchase damp survey</a> tells you the cause and the likely fix before you commit.</p>
${DAMP_AREAS}`,
  },
  "how-long-does-damp-proofing-take": {
    heading: DAMP_HEADING,
    html: `<p>Because we do the replastering and making good ourselves, the same local team takes a Hull or East Riding job from treatment through to a wall that is ready to decorate, so you are not waiting on a second trade in between.</p>
${DAMP_AREAS}`,
  },
  "does-a-new-damp-proof-course-fix-rising-damp": {
    heading: DAMP_HEADING,
    html: `<p>In Hull, yards, paths and back gardens raised over the years often end up above the original damp-proof course and bridge it, so a new damp-proof course alone will not help until the ground level is dealt with. In Beverley&rsquo;s older solid-walled houses, cement render and gypsum plaster that trap moisture are a common cause of damp that gets mistaken for rising damp.</p>
${DAMP_AREAS}`,
  },

  // -------------------------------------------------------- conservatories
  "conservatory-transformation-cost-and-regulations": {
    heading: "Conservatory transformations in Hull and East Yorkshire",
    html: `<p>Many Hull terraces and 1930s semis picked up a rear conservatory in the 1990s or 2000s, often with a thin polycarbonate or single-glazed roof never designed for year-round use. Because most transformations keep the existing footprint, planning permission generally isn&rsquo;t needed; the main check is whether the finished specification affects the building regulations exemption, which we assess for your conservatory.</p>
<p>${PLANNING}</p>
<p>See our conservatory transformations in <a href="/conservatory-transformations/hull/">Hull</a> and <a href="/conservatory-transformations/east-yorkshire/">across East Yorkshire</a>.</p>`,
  },
  "make-a-conservatory-usable-all-year": {
    heading: "Year-round conservatories in Hull and East Yorkshire",
    html: `<p>On older Hull terraces close to the Humber estuary, cold and damp rear additions are a recurring issue, so an insulated roof and a floor upgrade are worth prioritising alongside any cosmetic changes. We replace polycarbonate and glass conservatory roofs, and cover the flooring, plastering, electrics and decorating too.</p>
<p>See our conservatory transformations in <a href="/conservatory-transformations/hull/">Hull</a> and <a href="/conservatory-transformations/east-yorkshire/">across East Yorkshire</a>, or <a href="/contact.html#quote-form">ask for a site visit</a>.</p>`,
  },

  // ------------------------------------------------------------ orangeries
  "orangery-cost-build-time-and-planning": {
    heading: "Orangeries in Hull, Beverley and East Yorkshire",
    html: `<p>${PLANNING} In Beverley, where many town-centre buildings are listed, works that affect a listed building&rsquo;s character usually need listed building consent from East Riding of Yorkshire Council.</p>
<p>See our orangery pages for <a href="/orangeries/hull/">Hull</a>, <a href="/orangeries/beverley/">Beverley</a> and <a href="/orangeries/east-yorkshire/">the wider East Riding</a>.</p>`,
  },
  "orangery-design-roofs-and-comparisons": {
    heading: "Designing an orangery for an East Yorkshire home",
    html: `<p>From Hull terraces and 1930s semis to Beverley&rsquo;s Georgian and Victorian houses and the villages west of Hull, the right orangery depends on the house it joins. ${PLANNING}</p>
<p>See our orangery pages for <a href="/orangeries/hull/">Hull</a>, <a href="/orangeries/beverley/">Beverley</a> and <a href="/orangeries/east-yorkshire/">the wider East Riding</a>.</p>`,
  },

  // ---------------------------------------------------- garage conversions
  "garage-conversion-cost-planning-and-regulations": {
    heading: "Garage conversions in Hull and East Yorkshire",
    html: `<p>${PLANNING.replace("so we check the planning position for your address before recommending a design", "so we check the planning position for your address before quoting")} Turning a garage into a habitable room normally needs building regulations approval wherever you live.</p>
<p>See our garage conversion pages for <a href="/garage-conversions/hull/">Hull</a>, <a href="/garage-conversions/goole/">Goole</a> and <a href="/garage-conversions/east-yorkshire/">the wider East Riding</a>.</p>`,
  },
  "what-goes-into-a-garage-conversion": {
    heading: "Garage conversions in Hull and East Yorkshire",
    html: `<p>Hull is low-lying, with a high water table, so getting the floor and walls of a garage conversion damp-proofed properly matters. We also carry out <a href="/damp-proofing/damp-surveys/">damp surveys</a>, so any damp in the existing garage can be diagnosed before the conversion starts.</p>
<p>See our garage conversion pages for <a href="/garage-conversions/hull/">Hull</a>, <a href="/garage-conversions/goole/">Goole</a> and <a href="/garage-conversions/east-yorkshire/">the wider East Riding</a>.</p>`,
  },

  // ---------------------------------------------------------- garden rooms
  "garden-room-cost-planning-and-regulations": {
    heading: "Garden rooms in Hull and East Yorkshire",
    html: `<p>${PLANNING}</p>
<p>See our garden room pages for <a href="/garden-rooms/hull/">Hull</a> and <a href="/garden-rooms/east-yorkshire/">the wider East Riding</a>.</p>`,
  },
  "how-a-garden-room-is-built": {
    heading: "Garden rooms in Hull and East Yorkshire",
    html: `<p>We build garden rooms across Hull, Hessle, Beverley, Cottingham and the wider East Riding See our garden room pages for <a href="/garden-rooms/hull/">Hull</a> and <a href="/garden-rooms/east-yorkshire/">the wider East Riding</a>.</p>`,
  },
  "garden-room-ideas": {
    heading: "Garden rooms in Hull and East Yorkshire",
    html: `<p>Whether it&rsquo;s an office, a gym or a garden bar, see our garden room pages for <a href="/garden-rooms/hull/">Hull</a> and <a href="/garden-rooms/east-yorkshire/">the wider East Riding</a>, or <a href="/contact.html#quote-form">ask for a site visit</a>.</p>`,
  },

  // ------------------------------------------------------ outdoor kitchens
  "planning-an-outdoor-kitchen": {
    heading: "Outdoor kitchens in Hull and East Yorkshire",
    html: `<p>We design and build outdoor kitchens across Hull, Hessle, Beverley, Cottingham and the wider East Riding. See our outdoor kitchen pages for <a href="/outdoor-kitchens/hull/">Hull</a> and <a href="/outdoor-kitchens/east-yorkshire/">the wider East Riding</a>.</p>`,
  },

  // ----------------------------------------------------------- renovations
  "kitchen-and-bathroom-renovation-costs": {
    heading: "Kitchen and bathroom renovations in Hull and East Yorkshire",
    html: `<p>As a guide, a typical full bathroom renovation we carry out comes to around &pound;6,000. Room size, the suite and tiles you choose, a wet room and what is found behind the old tiles all move that figure, so we confirm the price in an itemised written quote after a site visit.</p>
<!-- TODO(David): add a typical kitchen renovation figure if you are happy to publish one. -->
<p>See our <a href="/bathroom-installs.html">bathroom renovations</a> and <a href="/kitchen-installs.html">kitchen installs</a> pages, or recent work such as this <a href="/projects/bathrooms/hull-bathroom-renovation/">Hull bathroom renovation</a> and <a href="/projects/kitchens/cottingham-kitchen-renovation/">Cottingham kitchen renovation</a>.</p>`,
  },
  "planning-a-full-house-renovation": {
    heading: "Full house renovations in Hull and East Yorkshire",
    html: `<p>Hull&rsquo;s older terraces often come with original lath-and-plaster walls and ceilings, dated bathrooms squeezed into box rooms and solid brick walls where damp-proofing and ventilation are worth getting right. Because we do the damp work, plastering and decorating ourselves, one team can take a renovation from strip-out to finish.</p>
<p>See <a href="/full-house-renovations.html">full house renovations</a>, or our pages for <a href="/hull.html">Hull</a>, <a href="/beverley.html">Beverley</a>, <a href="/cottingham.html">Cottingham</a> and <a href="/hessle.html">Hessle</a>.</p>`,
  },
};
