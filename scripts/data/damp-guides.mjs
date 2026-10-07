// The ten damp guides. Each answers one question and opens with a
// two-sentence direct answer.
//
// Facts used here come from the damp pages: the £119 survey (deducted from
// treatment if the quote is accepted), the £99 landlord report, the 3-day
// pre-purchase report, the 5-day landlord inspection, and the guarantee
// periods in the hub's guarantee terms. Treatment prices and on-site job
// durations have NOT been supplied, so they are not stated.

export const DAMP_GUIDES = [
  {
    slug: "how-to-tell-if-its-rising-damp",
    title: "How to Tell If It's Rising Damp | Hull & East Yorkshire",
    description: "The signs of genuine rising damp, the problems most often mistaken for it, and why a survey matters before anyone injects a damp-proof course.",
    h1: "How can you tell if it's rising damp?",
    answer: "Genuine rising damp shows as damp and staining low on ground-floor walls, usually below about a metre, often with a tide mark and white salt deposits, and it changes little with the weather. But leaks, high ground levels, failed pointing and condensation can all look similar, so the only reliable way to tell is a survey that checks the cause, not just the wall.",
    sections: [
      {
        h2: "The typical signs of rising damp",
        html: `<p>Rising damp is moisture from the ground drawn up through the bricks and mortar of a wall, where the damp-proof course has failed, been bridged or was never there. Because it comes from below, it has a recognisable pattern:</p>
<ul>
<li>Damp and staining that starts at floor level on ground-floor walls and rises to a fairly even height.</li>
<li>A &ldquo;tide mark&rdquo; where the damp stops, often with a brown or yellow line.</li>
<li>White, fluffy salt deposits on the plaster, and plaster that is blown, crumbling or hollow-sounding.</li>
<li>Paint or wallpaper lifting along the bottom of the wall.</li>
<li>Damp that is much the same summer and winter, wet weather or dry.</li>
</ul>`,
      },
      {
        h2: "What gets mistaken for rising damp",
        html: `<p>Rising damp is real, but it is also blamed for a lot of damp that comes from somewhere else. The most common look-alikes are:</p>
<ul>
<li><strong>Bridged damp-proof course.</strong> Soil, a flower bed, a path or a patio built up against the outside wall above the damp-proof course lets moisture straight past it. The damp-proof course may be fine; it just has a bridge over it.</li>
<li><strong>Leaks.</strong> A leaking downpipe, a blocked gully or a weeping pipe inside the wall can produce damp low down that looks very like rising damp.</li>
<li><strong>Penetrating damp.</strong> Rain getting in through failed pointing or cracked render. This is usually patchier and worse after rain.</li>
<li><strong>Condensation.</strong> Cold wall surfaces low down, especially behind furniture, can stay damp and grow mould from moisture in the air.</li>
</ul>
<p>Fixing any of these is usually cheaper than a new damp-proof course, and a new damp-proof course won&rsquo;t cure them.</p>`,
      },
      {
        h2: "Why a moisture meter on its own isn't enough",
        html: `<p>The meters used on most surveys measure electrical conductivity, not water directly. Salts in old plaster, foil-backed wallpaper and some paints all push the reading up, so a high number low on a wall doesn&rsquo;t prove rising damp. That is why many mortgage surveys say &ldquo;damp noted&rdquo; and recommend a specialist.</p>
<p>A proper diagnosis looks at the pattern of the damp, the condition of the outside of the building, the ground levels against the wall and the ventilation inside, as well as the readings. See <a href="/guides/what-does-a-damp-survey-include/">what a damp survey includes</a>.</p>`,
      },
      {
        h2: "What to do if you think you have rising damp",
        html: `<p>Before booking any treatment, check the outside of the wall: is the ground, path or patio within a couple of brick courses of the damp-proof course line? Are the gutters and downpipes on that wall sound? Those are worth putting right whatever the diagnosis.</p>
<p>Then get the cause confirmed. Our <a href="/damp-proofing/damp-surveys/">damp survey</a> costs &pound;119, and that is deducted from the cost of any treatment if you go ahead with our quote. If it is rising damp, <a href="/damp-proofing/rising-damp-treatment/">treatment</a> means a new chemical damp-proof course and salt-resistant replastering, which we carry out ourselves.</p>`,
      },
    ],
    faqs: [
      { q: "How high does rising damp go?", a: "It usually stays low on ground-floor walls, commonly below about a metre, because there is a limit to how far moisture can be drawn up through brick and mortar. Damp much higher than that usually has another cause." },
      { q: "Can rising damp affect upstairs rooms?", a: "No. Rising damp comes from the ground, so it affects ground-floor walls. Damp upstairs is almost always penetrating damp, a leak or condensation." },
      { q: "Is rising damp worse in winter?", a: "Not much. Rising damp changes little with the weather. Damp that is clearly worse in winter points to condensation, and damp that is worse after rain points to penetrating damp." },
    ],
    related: ["/damp-proofing/rising-damp-treatment/", "/guides/does-a-new-damp-proof-course-fix-rising-damp/", "/guides/damp-or-condensation/"],
  },

  {
    slug: "damp-or-condensation",
    title: "Damp or Condensation? How to Tell the Difference",
    description: "How to tell condensation from rising or penetrating damp, using where it appears, when it is worst and what it looks like.",
    h1: "Is it damp or condensation?",
    answer: "Condensation is moisture from inside the house settling on cold surfaces, so it shows up as streaming windows and black mould in corners, behind furniture and on outside walls, and it is worst in winter. Rising and penetrating damp come from outside the room, so they show as stains and tide marks, follow the ground or the weather, and often leave salts or damaged plaster.",
    sections: [
      {
        h2: "Where it appears",
        html: `<ul>
<li><strong>Condensation:</strong> windows and window reveals, the top corners of outside walls, behind wardrobes and beds pushed against outside walls, bathrooms and kitchens. Often in rooms with little air movement.</li>
<li><strong>Rising damp:</strong> the bottom of ground-floor walls, at a fairly even height.</li>
<li><strong>Penetrating damp:</strong> any height, usually in patches that line up with something outside, such as a downpipe, a cracked section of render or eroded pointing.</li>
</ul>`,
      },
      {
        h2: "When it is worst",
        html: `<p>Condensation is worst in cold weather, when walls and windows are coldest and windows are kept shut. It often gets better in summer. Penetrating damp gets worse after heavy or wind-driven rain. Rising damp changes little through the year.</p>`,
      },
      {
        h2: "What it looks like",
        html: `<p>Condensation produces water droplets and black mould spots on otherwise sound surfaces, without tide marks or salts. Rising and penetrating damp tend to leave brown staining, tide marks, white salt deposits, blown plaster and peeling paint.</p>
<p>Some homes have more than one at once: a wall made cold and damp by penetrating damp will also attract condensation and mould. That is why we look at the whole picture on a <a href="/damp-proofing/damp-surveys/">damp survey</a> rather than treating the first thing we find.</p>`,
      },
      {
        h2: "A simple check you can do yourself",
        html: `<p>Tape a square of kitchen foil, about 30cm across, tightly to the damp area and leave it for a day or two. If moisture forms on the room side of the foil, the water is coming from the air in the room: condensation. If the wall side is damp and the room side dry, the moisture is coming through the wall. It is a rough guide rather than a diagnosis, but it helps.</p>`,
      },
      {
        h2: "What fixes each one",
        html: `<p>Condensation is fixed by getting moist air out and keeping surfaces warmer: better extractor fans, trickle vents, sometimes a positive input ventilation unit. See <a href="/damp-proofing/condensation-control/">condensation control</a>. Penetrating damp is fixed by repairing whatever lets the rain in (<a href="/damp-proofing/penetrating-damp/">penetrating damp repairs</a>), and rising damp by a new damp-proof course and salt-resistant replastering (<a href="/damp-proofing/rising-damp-treatment/">rising damp treatment</a>).</p>`,
      },
    ],
    faqs: [
      { q: "Will a dehumidifier fix condensation?", a: "It helps in the short term by taking moisture out of the air, but it treats the symptom. Improving extraction and ventilation deals with the cause." },
      { q: "Can condensation cause a damp patch low on a wall?", a: "Yes. Cold areas behind furniture or low on outside walls can stay damp from condensation, which is one reason it is often mistaken for rising damp." },
      { q: "Is condensation the tenant's fault?", a: "Not necessarily. Everyday living produces moisture, and weak extraction, missing trickle vents and cold walls make condensation much worse. Those are building issues, not lifestyle." },
    ],
    related: ["/damp-proofing/condensation-control/", "/guides/is-black-mould-always-condensation/", "/guides/how-to-tell-if-its-rising-damp/"],
  },

  {
    slug: "damp-patches-on-internal-walls",
    title: "What Causes Damp Patches on Internal Walls?",
    description: "The usual causes of damp patches on internal walls, from leaking pipes and gutters to condensation and rising damp, and how to narrow them down.",
    h1: "What causes damp patches on internal walls?",
    answer: "The most common causes are water getting in from outside (a leaking gutter or downpipe, failed pointing or cracked render), a leaking pipe, condensation on a cold patch of wall, and, low down on ground-floor walls, rising or bridged damp. Where the patch is, its shape and whether it changes with the weather usually narrow it down, and a survey confirms it.",
    sections: [
      {
        h2: "Patches that line up with something outside",
        html: `<p>If a damp patch sits behind a downpipe, below a gutter joint, under a window sill or level with a section of eroded pointing or cracked render, it is very likely <a href="/damp-proofing/penetrating-damp/">penetrating damp</a>. These patches are usually worse after heavy or wind-driven rain and can appear at any height, including upstairs. Older solid-walled houses, which are common in Hull and the East Riding, are especially prone because there is no cavity to stop water tracking through.</p>`,
      },
      {
        h2: "Patches near pipes, bathrooms and kitchens",
        html: `<p>A patch that grows steadily, regardless of the weather, near a radiator pipe, a bathroom on the other side of the wall or a kitchen sink often points to a slow plumbing leak. These are worth finding quickly because the wall keeps getting wetter.</p>`,
      },
      {
        h2: "Patches in corners and behind furniture",
        html: `<p>Damp and mould in the top corners of outside walls, around window reveals or behind wardrobes and beds is usually condensation: moisture in the air settling on the coldest surfaces. It is typically worst in winter. See <a href="/guides/damp-or-condensation/">damp or condensation?</a></p>`,
      },
      {
        h2: "Patches low down on ground-floor walls",
        html: `<p>Damp along the bottom of ground-floor walls, with a tide mark and white salts, can be <a href="/guides/how-to-tell-if-its-rising-damp/">rising damp</a>, but check outside first: soil, paths or patios built up above the damp-proof course, or a rendered plinth bridging it, cause the same symptoms and are simpler to put right.</p>`,
      },
      {
        h2: "Patches in a chimney breast",
        html: `<p>Damp in a chimney breast can come from rain getting in at the top of an unused, capped-off or uncapped chimney, from failed flashing where the stack meets the roof, or from salts left in the brickwork by years of coal fires drawing moisture from the air. Each has a different fix, so it is worth diagnosing before replastering.</p>`,
      },
      {
        h2: "Finding the cause",
        html: `<p>Note where the patch is, whether it changes after rain or in cold weather, and whether anything on the outside of the wall lines up with it. Then get it checked: our <a href="/damp-proofing/damp-surveys/">damp survey</a> costs &pound;119, deducted from any treatment if you go ahead with our quote, and gives you a written report on the cause.</p>`,
      },
    ],
    faqs: [
      { q: "Should I paint over a damp patch?", a: "Not until the cause is fixed and the wall has dried. Paint over a damp patch usually blisters or stains through, and it hides the evidence needed to diagnose the problem." },
      { q: "Why has a damp patch appeared on a wall that was fine for years?", a: "Something has usually changed: a gutter has blocked or cracked, pointing has eroded, ground levels outside have been raised, or ventilation has been reduced, for example by new windows without trickle vents." },
      { q: "Can a damp patch dry out on its own?", a: "If the cause was a one-off, such as a leak that has been fixed, yes, though a thick wall can take months. If the cause is still there, it will keep coming back." },
    ],
    related: ["/damp-proofing/penetrating-damp/", "/guides/damp-or-condensation/", "/damp-proofing/damp-surveys/"],
  },

  {
    slug: "is-black-mould-always-condensation",
    title: "Is Black Mould Always Caused by Condensation?",
    description: "Most household black mould comes from condensation, but not all. How to tell when mould is a sign of a leak, penetrating damp or rising damp instead.",
    h1: "Is black mould always caused by condensation?",
    answer: "No. Most black mould in homes does come from condensation, but mould grows wherever a surface stays damp, so penetrating damp, leaks and rising damp can cause it too. If mould keeps coming back in the same place, or appears alongside staining, tide marks or crumbling plaster, there is probably more going on than condensation.",
    sections: [
      {
        h2: "Why condensation is the usual culprit",
        html: `<p>Mould needs moisture, and the commonest source is the air inside the house: cooking, washing, showering, drying clothes and breathing all add moisture, which settles on the coldest surfaces. That is why condensation mould appears in the top corners of outside walls, around windows, behind furniture and in bathrooms, and why it is worst in winter.</p>`,
      },
      {
        h2: "When the mould points to something else",
        html: `<ul>
<li><strong>It sits in one patch</strong> that lines up with a downpipe, gutter, window sill or damaged render outside: likely penetrating damp.</li>
<li><strong>It is low on a ground-floor wall</strong> with a tide mark and salts: possibly rising or bridged damp.</li>
<li><strong>It appears near pipework</strong> or a bathroom on the other side of the wall and keeps spreading: possibly a leak.</li>
<li><strong>It is worse after rain</strong> than in cold, dry weather: rain is getting in.</li>
</ul>
<p>A wall that is damp for any of these reasons is also colder, so it attracts condensation too. Treating only the condensation then gives a partial fix at best.</p>`,
      },
      {
        h2: "Why mould comes back after cleaning",
        html: `<p>Cleaning and treating the surface kills the mould you can see, but if the wall stays damp, new mould grows. Painting over mould without treating it usually lets it grow back through. A lasting fix means dealing with the moisture first, then <a href="/damp-proofing/mould-treatment/">treating the mould</a>, replacing any damaged plaster or sealant and redecorating.</p>`,
      },
      {
        h2: "Getting it diagnosed",
        html: `<p>If mould keeps returning, a <a href="/damp-proofing/damp-surveys/">damp survey</a> will tell you whether it is condensation, another type of damp or both. It costs &pound;119, deducted from any treatment if you go ahead with our quote. For landlords, our <a href="/damp-proofing/landlord-damp-mould-reports/">damp and mould reports</a> cost &pound;99.</p>`,
      },
    ],
    faqs: [
      { q: "Is black mould dangerous?", a: "Mould can affect health, particularly for people with asthma, allergies or other breathing problems, and for babies and older people. It is worth dealing with promptly rather than living with it." },
      { q: "Will mould-resistant paint stop mould?", a: "It helps on surfaces prone to condensation once the cause has been dealt with, but it won't stop mould on a wall that stays damp." },
      { q: "How long does mould take to come back?", a: "If the cause is still there, often within weeks, especially in winter." },
    ],
    related: ["/damp-proofing/mould-treatment/", "/damp-proofing/condensation-control/", "/guides/damp-or-condensation/"],
  },

  {
    slug: "damp-survey-cost-hull",
    title: "How Much Does a Damp Survey Cost in Hull?",
    description: "Our damp survey costs £119 in Hull, East Yorkshire and North Lincolnshire, deducted from treatment if you go ahead. What's included and what other surveys cost.",
    h1: "How much does a damp survey cost in Hull?",
    answer: "Our damp survey costs £119 across Hull, East Yorkshire and North Lincolnshire, and the £119 is deducted from the cost of any treatment if you accept our quote. A pre-purchase damp survey is also £119, on the same terms, and a landlord damp and mould report is £99.",
    sections: [
      {
        h2: "What you get for £119",
        html: `<ul>
<li>Moisture readings across the affected walls and nearby unaffected areas.</li>
<li>A look at the pattern of the damp inside.</li>
<li>An outside inspection: gutters, downpipes, pointing, render, sills, the damp-proof course line and ground levels.</li>
<li>A check on ventilation, extraction and heating.</li>
<li>A written report: what we found, what is causing it, photos, and what we recommend, in order of priority, including simple fixes you can do yourself.</li>
<li>A quote for any work you would like us to do, including replastering and making good.</li>
</ul>
<p>More detail: <a href="/guides/what-does-a-damp-survey-include/">what a damp survey includes</a>.</p>`,
      },
      {
        h2: "How the £119 is deducted",
        html: `<p>If the survey shows treatment is needed and you accept our quote, the &pound;119 comes off the cost of the work. If the fix is something simple you can sort yourself, or no treatment is needed, you have paid &pound;119 for the answer and nothing more.</p>`,
      },
      {
        h2: "Other surveys and reports",
        html: `<ul>
<li><strong><a href="/damp-proofing/pre-purchase-damp-survey/">Pre-purchase damp survey</a>:</strong> &pound;119, with the written report within 3 days. If you buy the property and go ahead with our quote, the &pound;119 is deducted from the work.</li>
<li><strong><a href="/damp-proofing/landlord-damp-mould-reports/">Landlord damp and mould report</a>:</strong> &pound;99. We aim to inspect within 5 days of your request.</li>
</ul>`,
      },
      {
        h2: "Free surveys and why we charge",
        html: `<p>Some firms offer free damp surveys and recover the cost through the treatment they recommend. We would rather charge a fair fee for an honest diagnosis, so there is no pressure to find a problem that needs treating. Because the fee is deducted if you go ahead, it costs you nothing extra when work is needed.</p>`,
      },
      {
        h2: "Areas covered",
        html: `<p>The same price applies across Hull, Hessle, Cottingham, Beverley, Bridlington, Driffield, Goole, Scunthorpe, Grimsby, Brigg and Barton-upon-Humber. See our pages on damp surveys in <a href="/damp-proofing/hull/">Hull</a>, <a href="/damp-proofing/beverley/">Beverley</a>, <a href="/damp-proofing/scunthorpe/">Scunthorpe</a> and <a href="/damp-proofing/grimsby/">Grimsby</a>.</p>`,
      },
    ],
    faqs: [
      { q: "Is the £119 refundable if I don't go ahead?", a: "No. The fee pays for the survey and written report. It is deducted from the cost of treatment only if you accept our quote." },
      { q: "Is VAT included?", a: "Please ask when you book and we will confirm the total before we visit. <!-- TODO(owner): confirm whether the £119 survey and £99 report prices include VAT. -->" },
      { q: "How quickly can you survey?", a: "Get in touch and we will give you the next available date. Pre-purchase surveys are prioritised so the report is with you within 3 days." },
    ],
    related: ["/damp-proofing/book-a-survey/", "/guides/what-does-a-damp-survey-include/", "/guides/damp-proofing-cost-hull/"],
  },

  {
    slug: "damp-proofing-cost-hull",
    title: "How Much Does Damp Proofing Cost in Hull?",
    description: "What affects the cost of damp proofing in Hull and East Yorkshire, why the cause matters more than the treatment, and how to get a firm price.",
    h1: "How much does damp proofing cost in Hull?",
    answer: "It depends almost entirely on the cause: clearing a gutter or lowering a path costs far less than a new damp-proof course with replastering, and many damp problems turn out to need the cheaper fix. We give a written quote after a £119 survey, and the £119 is deducted from the cost if you go ahead.",
    sections: [
      {
        h2: "Why there is no single price",
        html: `<p>&ldquo;Damp proofing&rdquo; covers very different jobs. Penetrating damp might need a downpipe replaced or a wall repointed. Condensation might need an extractor fan or trickle vents. Rising damp needs a chemical damp-proof course injected along the wall, the contaminated plaster hacked off and salt-resistant replastering. A cellar needs tanking or a membrane system. The price follows the cause, which is why we survey first.</p>`,
      },
      {
        h2: "What affects the cost of rising damp treatment",
        html: `<ul>
<li>The length of wall that needs a new damp-proof course.</li>
<li>Wall thickness and construction.</li>
<li>How high the plaster needs to come off, and how much replastering follows.</li>
<li>Making good around sockets, radiators and fittings, and whether you want us to decorate.</li>
<li>Access: furniture and fitted units along the wall.</li>
</ul>`,
      },
      {
        h2: "What affects the cost of other treatments",
        html: `<ul>
<li><strong>Penetrating damp:</strong> the repair itself (repointing, render repairs, gutter and downpipe work), scaffolding or access, and any replastering inside.</li>
<li><strong>Condensation:</strong> which ventilation the house actually needs, from a single extractor fan to a positive input ventilation unit, and the making good around it.</li>
<li><strong>Cellar tanking:</strong> the size of the cellar, how wet it is and whether a membrane system with a sump pump is needed.</li>
</ul>`,
      },
      {
        h2: "Hidden costs to ask about",
        html: `<p>Ask whether a quote includes replastering, making good and decorating, or only the treatment. Damp work that leaves bare walls means paying a separate plasterer and decorator afterwards. Our quotes cover the whole job, because we do that work ourselves.</p>
<!-- TODO(owner): if you want to publish typical price ranges for your own damp jobs, add them here. They have not been supplied, so none are shown. -->`,
      },
      {
        h2: "Guarantees",
        html: `<p>Our damp-proof course injection is guaranteed for 30 years and the replastering done with it for 10 years. Tanking and membrane systems and water-repellent treatments carry 10 years, and penetrating damp repairs, condensation installations and mould treatment 2 years. See the <a href="/damp-proofing/#guarantee">full guarantee terms</a>.</p>`,
      },
    ],
    faqs: [
      { q: "Can you give me a price over the phone?", a: "Not for treatment, because the price depends on the cause, and that needs a survey. We can confirm the survey price (£119) straight away." },
      { q: "Is damp proofing cheaper if I do the plastering myself?", a: "The treatment price is separate from the replastering in our quote, so we can price either way, but salt-resistant replastering has to be done properly for the treatment to work." },
      { q: "Do I get the £119 back if I go ahead?", a: "Yes. If you accept our quote for treatment, the £119 survey fee is deducted from the cost of the work." },
    ],
    related: ["/guides/damp-survey-cost-hull/", "/damp-proofing/rising-damp-treatment/", "/damp-proofing/book-a-survey/"],
  },

  {
    slug: "what-does-a-damp-survey-include",
    title: "What Does a Damp Survey Include? | Hull & East Yorkshire",
    description: "What happens on a damp survey, what the written report covers and how the cause of damp is diagnosed rather than guessed.",
    h1: "What does a damp survey include?",
    answer: "A proper damp survey covers moisture readings, the pattern of the damp inside, an inspection of the outside of the building, and a check on ventilation and heating, to find the cause rather than just confirm there is damp. You then get a written report setting out what we found, what is causing it and what we recommend, with a quote for any work.",
    sections: [
      {
        h2: "Inside the house",
        html: `<ul>
<li><strong>Moisture readings</strong> across the affected walls and nearby dry areas, to see how far the damp goes and how it changes with height.</li>
<li><strong>The pattern of the damp:</strong> where it sits, its shape, tide marks, salts, and whether it follows a pipe, a window or a corner.</li>
<li><strong>Ventilation and heating:</strong> extractor fans, trickle vents and how the rooms are used, because condensation is one of the commonest causes of damp and mould.</li>
</ul>`,
      },
      {
        h2: "Outside the house",
        html: `<p>Many damp problems start outside. We check gutters and downpipes, pointing and render, window sills, the position of the damp-proof course and the ground levels against the walls, looking for anything that lets water in or bridges the damp-proof course.</p>`,
      },
      {
        h2: "Talking to you",
        html: `<p>We ask when the damp appears, whether it is worse after rain or in winter, how long it has been there and what work has been done on the house before. That history often narrows the cause down quickly.</p>`,
      },
      {
        h2: "The written report",
        html: `<ul>
<li>Where we found damp, and the readings we took.</li>
<li>What we believe is causing it, and why.</li>
<li>Photos of the affected areas and any defects outside.</li>
<li>What we recommend, in order of priority, including simple fixes you can do yourself.</li>
<li>A quote for any work you would like us to carry out, including replastering and making good.</li>
</ul>`,
      },
      {
        h2: "Cost",
        html: `<p>A damp survey costs &pound;119, deducted from any treatment if you accept our quote. <a href="/damp-proofing/book-a-survey/">Book a damp survey</a>.</p>`,
      },
    ],
    faqs: [
      { q: "Do I need to be at home for the survey?", a: "Yes, or someone who can let us in and tell us about the house. For pre-purchase surveys we arrange access through the estate agent." },
      { q: "Should I redecorate before the survey?", a: "No. Painting over damp hides the evidence we need. Clear furniture away from the affected walls if you can." },
      { q: "Is a damp survey the same as a mortgage survey?", a: "No. Mortgage valuations and general home surveys cover the whole property and often just note damp. A damp survey looks specifically at the cause." },
    ],
    related: ["/damp-proofing/damp-surveys/", "/guides/damp-survey-cost-hull/", "/guides/how-to-tell-if-its-rising-damp/"],
  },

  {
    slug: "buying-a-house-with-damp",
    title: "Should I Buy a House With Damp? | Hull & East Yorkshire",
    description: "What \"damp noted\" on a mortgage survey means, how to find out what the damp really is before you commit, and how to use a damp report in negotiations.",
    h1: "Should I buy a house with damp?",
    answer: "Often yes, because many damp problems have simple causes and straightforward fixes, but you should find out what is causing it and what it will cost before you commit. A pre-purchase damp survey gives you a written report within 3 days, with a quote you can take to the seller or your lender.",
    sections: [
      {
        h2: "What “damp noted” on a mortgage survey means",
        html: `<p>Mortgage valuations and general home surveys cover the whole property in limited time. If a moisture meter reads high, the standard response is to note damp and recommend a specialist. It tells you there may be a problem, not what it is or how serious. Moisture meters can also read high on salts or foil-backed wallpaper when the wall is dry.</p>`,
      },
      {
        h2: "Questions to answer before you buy",
        html: `<ul>
<li>What is causing the damp: rising damp, penetrating damp, condensation, a leak or a combination?</li>
<li>Is it active, or historic damage from a problem that has been fixed?</li>
<li>What work will put it right, and what will it cost?</li>
<li>Is there an existing damp-proof course guarantee, and does it pass to you?</li>
</ul>`,
      },
      {
        h2: "Getting a pre-purchase damp survey",
        html: `<p>Our <a href="/damp-proofing/pre-purchase-damp-survey/">pre-purchase damp survey</a> is the same inspection as a standard damp survey, focused on the areas flagged in your survey. Because you don&rsquo;t own the property yet, we arrange access through the estate agent, and we can&rsquo;t move heavy furniture, lift floor coverings or open up walls; the report is clear about anything we couldn&rsquo;t see.</p>
<p>It costs &pound;119 and the written report is with you within 3 days. If you buy the property and go ahead with our quote, the &pound;119 is deducted from the work.</p>`,
      },
      {
        h2: "Using the report",
        html: `<p>The report includes a quote for putting the damp right. Many buyers share it with the seller or estate agent to negotiate on price, or with their lender if the lender has asked for a specialist report. How you use it is up to you.</p>`,
      },
      {
        h2: "When to think twice",
        html: `<p>Damp is rarely a reason on its own to walk away, but be cautious if the report finds damp over a large area with more than one cause, structural problems alongside it, or a cellar that floods. In those cases, get the full cost in writing before you exchange.</p>`,
      },
    ],
    faqs: [
      { q: "Will damp stop me getting a mortgage?", a: "Usually not, but some lenders ask for a specialist damp report before going ahead, and occasionally hold back part of the loan until work is done." },
      { q: "Does an existing damp-proof course guarantee transfer to me?", a: "It depends on the company that issued it and its terms. Ask the seller for the paperwork; our own guarantees pass to the new owner at no charge." },
      { q: "Do I need the seller's permission for a damp survey?", a: "Yes. We arrange access through the estate agent, who will check with the seller." },
    ],
    related: ["/damp-proofing/pre-purchase-damp-survey/", "/guides/what-does-a-damp-survey-include/", "/guides/how-to-tell-if-its-rising-damp/"],
  },

  {
    slug: "how-long-does-damp-proofing-take",
    title: "How Long Does Damp Proofing Take? | Survey to Decorating",
    description: "How long each stage of damp proofing takes, from survey and report to treatment, replastering, drying and decorating, and why walls take months to dry fully.",
    h1: "How long does damp proofing take?",
    answer: "The treatment itself is usually the quickest part; the time goes on replastering and on letting the wall dry, and a solid wall that has been damp for years can take several months to dry out fully. You don't need to wait that long to use the room, but there are limits on how soon you can decorate.",
    sections: [
      {
        h2: "Survey and report",
        html: `<p>The survey is a single visit. For pre-purchase surveys, the written report is with you within 3 days. For landlords, we aim to inspect within 5 days of your request. Once you have the report and quote, we agree a start date with you.</p>`,
      },
      {
        h2: "Treatment and replastering",
        html: `<p>How long the work takes on site depends on the cause and how much wall is involved. For rising damp, the plaster is hacked off, the new damp-proof course is injected and the wall is replastered with a salt-resistant plaster, then skimmed. Penetrating damp repairs depend on the repair and the weather. We give you a timescale for your job with the quote.</p>
<!-- TODO(owner): typical on-site durations for your damp jobs have not been supplied, so none are given here. -->`,
      },
      {
        h2: "Drying the plaster",
        html: `<p>Fresh plaster typically needs at least a week to dry per coat before painting, depending on room temperature, ventilation and the number of coats. Keep the room heated and ventilated to help it along.</p>`,
      },
      {
        h2: "Drying the wall",
        html: `<p>A solid wall that has been damp for years takes far longer to dry out fully than the plaster on its surface: often several months, depending on its thickness, the time of year and how well the room is heated and ventilated. That is normal, and it is why the decorating advice below matters.</p>`,
      },
      {
        h2: "Decorating",
        html: `<p>Once the new plaster has dried you can decorate with a breathable, water-based emulsion. Hold off on vinyl wallpaper, oil-based paints and heavy furniture tight against the wall until the wall has fully dried, so the remaining moisture can escape. We will give you specific advice for your job.</p>`,
      },
    ],
    faqs: [
      { q: "Can I stay in the house during damp proofing?", a: "Usually, yes. We work room by room, protect floors and belongings, and keep the rest of the house usable." },
      { q: "Why do the walls still look damp after treatment?", a: "Surface staining and some moisture can remain while the wall dries out. If damp is still spreading after the drying period, get in touch so we can check it under the guarantee." },
      { q: "Can I put wallpaper up straight away?", a: "Not vinyl or heavy papers. Use a breathable emulsion until the wall behind has fully dried." },
    ],
    related: ["/damp-proofing/rising-damp-treatment/", "/guides/damp-proofing-cost-hull/", "/plastering.html"],
  },

  {
    slug: "does-a-new-damp-proof-course-fix-rising-damp",
    title: "Does a New Damp-Proof Course Always Fix Rising Damp?",
    description: "Why a new damp-proof course sometimes fails to cure damp, and what has to be done alongside it: bridging, replastering, salts and the real cause.",
    h1: "Does a new damp-proof course always fix rising damp?",
    answer: "Only if the damp really is rising damp, and only if the other parts of the job are done too: any bridging removed, the salt-contaminated plaster replaced with salt-resistant plaster, and the wall given time to dry. When a new damp-proof course 'fails', the usual reason is that the damp had another cause all along.",
    sections: [
      {
        h2: "When the diagnosis was wrong",
        html: `<p>The most common reason a new damp-proof course doesn&rsquo;t cure a damp wall is that the damp was never rising damp. A leaking downpipe, failed pointing, a bridged damp-proof course or condensation will carry on whatever is injected into the wall. That is why we diagnose first: see <a href="/guides/how-to-tell-if-its-rising-damp/">how to tell if it&rsquo;s rising damp</a>.</p>`,
      },
      {
        h2: "When the wall is still bridged",
        html: `<p>If soil, a path, a patio or a rendered plinth sits above the new damp-proof course outside, moisture goes around it. Ground levels need to sit comfortably below the damp-proof course, and render should stop above it, or the treatment can&rsquo;t work.</p>`,
      },
      {
        h2: "When the old plaster is left on",
        html: `<p>Years of rising damp leave salts in the plaster, and those salts draw moisture from the air. If the old plaster stays, the wall stays damp and stained even though the new damp-proof course is working. The contaminated plaster has to be hacked off, typically to around a metre high or further where the damp or salts go higher, and replaced with a salt-resistant plaster system.</p>`,
      },
      {
        h2: "When it hasn't had time to dry",
        html: `<p>A thick solid wall can take several months to dry out after treatment. Decorating with vinyl wallpaper or oil-based paint too early traps the moisture and makes it look as if the treatment has failed. See <a href="/guides/how-long-does-damp-proofing-take/">how long damp proofing takes</a>.</p>`,
      },
      {
        h2: "How we do it",
        html: `<p>We confirm rising damp on a <a href="/damp-proofing/damp-surveys/">survey</a> first. Where it is confirmed, we inject a new chemical damp-proof course, hack off and replaster with salt-resistant plaster, and make good and decorate ourselves. The damp-proof course is guaranteed for 30 years and the replastering for 10 years. <a href="/damp-proofing/rising-damp-treatment/">More about rising damp treatment</a>.</p>`,
      },
    ],
    faqs: [
      { q: "Can a damp-proof course be injected without replastering?", a: "It can be injected, but without removing salt-contaminated plaster the wall usually stays damp and stained, so we don't recommend it." },
      { q: "My house already has a damp-proof course. Why is it damp?", a: "It may be bridged, damaged, or the damp may have another cause entirely. A survey will tell you which." },
      { q: "Does the guarantee cover damp from other causes?", a: "No. A rising damp guarantee covers failure of the damp-proof course we installed, not condensation, leaks or later bridging." },
    ],
    related: ["/damp-proofing/rising-damp-treatment/", "/guides/how-to-tell-if-its-rising-damp/", "/damp-proofing/#guarantee"],
  },
];
