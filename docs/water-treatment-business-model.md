# Water Treatment — Business Model & Recommendation

This document synthesises the competitor, supplier, compliance and unit-economics research
(see the other four `docs/water-treatment-*.md` files) into a customer-journey analysis,
segment/cross-sell recommendation, positioning and pricing strategy, and a final answer to the
20 questions in the brief. Read alongside:
- `docs/water-treatment-competitor-research.md`
- `docs/water-treatment-supplier-research.md`
- `docs/water-treatment-compliance.md`
- `docs/water-treatment-unit-economics.md`
- `docs/water-treatment-launch-plan.md`

---

## Part 4 — Customer journey, reverse-engineered

Based on what was actually verifiable from each competitor's public pages (not assumed):

| Step | Hull Water Softeners | Kinetico | Harvey (direct) | EcoWater | BWT |
|---|---|---|---|---|---|
| First ask | Name/contact via form | Postcode (dealer finder) | Contact/enquiry | Postcode (dealer finder) | Contact form (buy direct) |
| Price shown before contact? | No | No | No | No | **Yes — £959 offer published** |
| Product choice shown before contact? | Partial (softener vs. filtration named) | Yes (model range shown) | No (assessment decides) | Yes (Evolution range shown) | Yes (shop-style, buy direct) |
| Who gets involved | Unclear from site | Local authorised dealer | "Professional demonstrator" | Local authorised dealer | Direct e-commerce |
| Home assessment before quote? | Yes (free survey) | Yes (pre-install assessment) | Yes (demonstrator visit) | Yes (free demo) | Not required — can buy direct |
| Can customer buy without a home visit? | Not evident | No | No | No | **Yes** |
| Finance shown | Not found | Yes, 0% | Yes, via broker | Not found | Not found |
| Guarantee | Not found | Not found | **90-day money-back** | Not found | Not found |

**Where each competitor asks the customer to make a decision:**
- The **dealer-network brands** (Kinetico, EcoWater, TwinTec) all gate real pricing behind a
  home visit — the customer's first real decision is "let someone into my home," not "which
  product/price." This matches a classic high-consideration home-services funnel and is
  consistent with the Parker J. Smith model referenced in the brief.
- **BWT** is the outlier: it publishes a real installed price (£959) and lets a customer buy
  direct through its own shop without a mandatory home visit first. This is a meaningfully
  different, lower-friction model — but BWT is a large European manufacturer with logistics and
  liability infrastructure we don't have; it's not directly replicable by a small local business
  and is noted here as a data point, not a recommendation.
- **Harvey's direct channel** is the most sales-process-heavy (demonstrator visit, high implied
  price), while its own **TwinTec dealer network** sells the same underlying product with far
  less friction and a lower advertised price — evidence that "brand + heavy sales process"
  commands a real price premium over "brand + lighter dealer process," at least for this
  manufacturer.

**Recommended East Yorkshire Renovation journey**, informed by the above and by our own
existing renovation-lead infrastructure:

```
Google/local search or existing EYR customer
   → /water-treatment.html (educational landing page — already built)
   → optional: postcode hardness check (sets expectation, does not fabricate a number)
   → Free Home Water Assessment booked (low-friction lead form — already built)
   → Home visit: hardness test + household needs discussion (no hard sell)
   → Written recommendation + "from" package pricing + final quote
   → Customer decides (no pressure follow-up sequence, not aggressive)
   → Subcontracted, appropriately qualified installer carries out work
   → Commissioning + handover + warranty documentation
   → Aftercare relationship begins (salt/filter/service — not yet priced, see Part 19)
```

This keeps us in the "assessment-led, no pricing before a home visit" camp with Kinetico/
Harvey/EcoWater — appropriate given we, like them, are recommending among *several* possible
systems rather than selling one fixed SKU (unlike BWT's direct-shop model, which works because
they're selling one product line at one advertised price). The one adjustment worth making:
publish **indicative "from" pricing** on the website (see Part 13) even though the *final* quote
still requires a visit — this addresses the one clear customer complaint pattern implicit in
every "no prices published anywhere" competitor (Hull Water Softeners, Humber, Kinetico, Harvery
direct, EcoWater): a customer researching options has no way to sanity-check whether it's even
worth booking a visit.

---

## Part 10 — Customer segments

No demographic data source was researched for this (none was requested or available), so this
section reasons from **property/situation characteristics visible in our own existing renovation
business**, not invented demographic claims.

Most commercially attractive segments, in likely order of value:

1. **Existing/current EYR renovation customers (kitchen, bathroom, full-house)** — already
   trust us, already have a plumber on site, already paying for related work; the marginal
   cost of a water-treatment conversation is near zero. This is our single strongest advantage
   over every standalone competitor researched — none of them have this. See Part 11.
2. **Multi-bathroom homes** — more taps/showers/appliances affected by limescale, more value
   from whole-home treatment (COMPLETE/PREMIUM tier), consistent with why Kinetico's own
   Premier Compact vs. Premier Plus split is explicitly sized by bathroom count.
3. **Homes with visible/reported hard-water problems** (self-selecting — anyone who fills in
   "Limescale" or "Water hardness" as their main reason on our existing assessment form).
4. **Households replacing a boiler or major appliance** — a natural trigger moment to discuss
   hardness/scale protection, which several competitors implicitly reference (appliance
   protection messaging), though we should present this as a genuine convenience/appliance-life
   consideration, not a health or safety claim.
5. **Landlords/holiday lets** — plausible commercial upside (appliance protection reduces
   maintenance call-outs, water-treatment quality is a guest-facing amenity for premium holiday
   lets) but this is a reasoned hypothesis, not a validated segment — no competitor researched
   specifically targets this segment publicly, so treat as a secondary test, not a primary
   launch target.

**Not recommended as a first-wave target:** generic cold-traffic homeowners with no renovation
relationship and no stated hard-water complaint — this is the segment every national brand is
already bidding for on paid search, and it's the segment where our unit economics are most
exposed to advertising cost risk (see unit economics document, Section 2, advertising
assumption).

---

## Part 11 — Cross-sell recommendation (our strongest structural advantage)

No competitor researched (local or national) is part of a broader renovation business. This is
a genuine, defensible advantage specific to East Yorkshire Renovation and should be the
centrepiece of our go-to-market, not an afterthought.

Recommended trigger points, mapped to existing EYR services already live on the site:

| Existing EYR service | Natural water-treatment conversation | Where to surface it |
|---|---|---|
| Kitchen installs (`/kitchen-installs.html`) | Drinking-water filtration / premium tap while re-plumbing the sink anyway | Already added: one-line cross-link (this session's prior work) — consider adding to the sales/quote conversation script too, not just the page |
| Bathroom installs (`/bathroom-installs.html`) | Limescale protection while retiling/replacing fittings that limescale visibly damages | Already added: one-line cross-link — same as above |
| Full house renovations (`/full-house-renovations.html`) | Complete water assessment as part of the wider project scope — the plumber is already on site for the whole job | Not yet added — recommend a similar one-line cross-link, consistent with the kitchen/bathroom pattern already in place |
| Plastering/decorating | Weak/no natural link — do not force a connection here | N/A |
| Boiler/heating work (if/when this becomes an explicit EYR service) | Hardness discussion at point of appliance replacement | Add if/when a boiler-replacement service page exists |

**Operational recommendation, not just a website one:** train whoever quotes kitchen/bathroom/
full-house jobs to *ask* about limescale/hardness as a standard part of the site-visit
conversation, with the free water assessment as the natural next step. This is a sales-process
change, not something the website alone can deliver, and is the single highest-leverage,
lowest-cost customer-acquisition channel available to us — cheaper than any paid advertising
modelled in the unit economics document.

---

## Part 12 — Website positioning review

Reviewed the live `/water-treatment.html` against the research. Findings:

- **Current headline** ("Hard Water Causing Limescale Throughout Your Home?") and **current
  trust-note** ("Your mains water is safe...") are already consistent with every compliance
  finding and with the no-scare-tactics positioning every local competitor (Hull Water
  Softeners explicitly, per its own marketing) already uses successfully in this exact market.
  **No change needed here** — the brief's suggested alternative headline ("Better water for your
  home. Without the hard sell.") is a reasonable alternative but is not supported by research as
  clearly *better* than the current one; both are honest and on-strategy. Recommendation: **keep
  the current headline**, since changing it isn't evidence-supported, and reserve the
  alternative as an A/B test once we have real traffic (Phase 6 of the launch plan).
- **"Sometimes the right recommendation is that you don't need a system"** — this is a genuinely
  good addition. No researched competitor states this explicitly, and it's consistent with, and
  reinforces, the existing "Straightforward Water Treatment. No Scare Tactics." section already
  on the page. **Recommend adding this as one line within that existing section** (implemented
  below).
- **"Which water treatment do I actually need?"** comparison — the page already has a "What
  Does Your Home Actually Need?" section covering Softener / Sediment / Carbon / RO purposes
  individually. This substantially already satisfies the brief's request; no competitor
  researched explains the distinctions this clearly on one page (most bury this in blog content
  or FAQs). **No structural rebuild needed** — only a small addition (see below) to explicitly
  say combinations are normal and no single system is universally "best," which isn't currently
  stated outright.
- **The word "independent"** — the brief says only use it if research confirms we can. Our
  supplier research (see supplier document) found that a genuinely independent, multi-brand
  advisory model is *plausible* (Aqua Cure and others supply a broad range; Monarch/TwinTec are
  distinct brands available via separate trade relationships) but **we have not appointed any
  supplier yet**, so we cannot truthfully claim independence now. **Confirmed: do not add the
  word "independent" to the website at this stage.** Revisit only once we've actually confirmed
  we can sell more than one brand without exclusivity restrictions (see supplier research,
  "cross-cutting compliance/operational questions").

---

## Part 13 — Pricing strategy recommendation

Research supports the user's initial hypothesis, with one important caveat:

**Recommendation: Show transparent "from" pricing, but only once real trade/installer costs are
known (see unit economics document, Section 4) — not the current placeholder figures.**

Why "from" pricing over the alternatives:
- **Hide pricing entirely (Option A):** this is what most researched competitors do (Hull Water
  Softeners, Humber, Kinetico, Harvey direct, EcoWater) — and it is a real point of customer
  friction implicit in why so many comparison/aggregator sites exist to fill that gap (MyBuilder,
  Checkatrade, MyJobQuote, hamuch.com etc. all exist because manufacturers/installers won't say
  the number). Copying this majority pattern doesn't differentiate us.
- **Full installed package prices (Option C):** not credible to publish as fixed, since actual
  installation cost genuinely varies by property (pipework, distance to stopcock, property type)
  — publishing a fixed price we can't always honour risks a bad first impression, the opposite
  of our "no scare tactics, clear pricing" promise.
  s
- **Indicative ranges (Option D):** reasonable, but "from £X" (Option B) is simpler for a
  customer to compare at a glance and is exactly what our two closest local competitors already
  do successfully (Aquarius "Fully Fitted From Only £895", Greens "fully installed from £957",
  BWT "£959 including standard installation") — this is a validated pattern in our exact market,
  not a guess.

**"From" pricing is already implemented correctly on the live site** (`priceLabel` field, e.g.
"From £1,995") — the structure is right; only the actual number needs revisiting once trade
costs are confirmed (Phase 1–3 of the launch plan). No website code change is needed for this
part — the page already supports changing the number from one file
(`assets/js/water-treatment-data.js`) as designed in the prior implementation.

---

## Part 14 — Lead generation form review

Current live form fields: Name, Phone, Email, Postcode, Property type, Household size (banded:
1-2/3-4/5+), Main reason for enquiry (7 options), Preferred contact method, optional message —
**9 fields total (7 required, 1 optional dropdown-style, 1 free text optional)**.

Compared against research:
- Aquarius' own lead form uses 5 fields (name, email, phone, postcode, message) — simpler than
  ours.
- No competitor researched publicly asks for number of bathrooms, water pressure, or existing
  treatment in the *initial* lead form — those questions appear to be reserved for the home-visit
  assessment stage across every competitor whose process could be reverse-engineered (Kinetico,
  Harvey, EcoWater all gate detailed questions behind the home visit, not the web form).

**Recommendation: keep the current form as-is.** It already sits in a sensible middle ground —
more qualifying detail than Aquarius' bare-minimum form (which risks lower lead quality) but
notably *less* than the brief's suggested additions (water pressure, occupant count beyond
household-size band, installation location, current limescale severity). Adding those extra
fields would push us past what any researched competitor asks for at the top of the funnel, with
no evidence it improves lead quality enough to offset the conversion cost of a longer form. The
existing "Main reason for enquiry" dropdown already does the most important qualification job
(distinguishing limescale/hardness/taste/whole-home/softener/drinking-water/not-sure) cheaply.
**No form changes recommended.**

---

## Part 15 — Postcode hardness checker: data source decision

**Recommendation: keep the current honest no-data fallback. Do not integrate a third-party
hardness dataset.**

Research findings:
- **Yorkshire Water operates its own official, postcode-based water hardness checker** at
  [yorkshirewater.com/your-water/water-hardness/](https://www.yorkshirewater.com/your-water/water-hardness/)
  — confirmed via direct fetch: it accepts a postcode and returns a result via a web form. This
  is the single most authoritative source available (our own water company, for our own supply
  area) and ranks above every other option in the brief's stated preference hierarchy.
- However: **no public API was found or documented** for this tool — it is a manual, web-form-
  only lookup with no indication of licensed reuse terms for third-party sites. Scraping or
  reverse-engineering an undocumented consumer web form to power our own checker would be
  fragile (breaks silently if Yorkshire Water changes their site) and its terms-of-use status is
  unclear — not something to build without first asking Yorkshire Water directly whether reuse
  is permitted.
- Third-party aggregator datasets (WaterHard.uk, TapWater.uk, Filter Flair) exist and are
  postcode-based, but their underlying methodology (how they map postcode → hardness figure) was
  not verified in this research, and the brief explicitly says not to use third-party data "if
  methodology is clear" is the bar — it wasn't established as clear here.

**Immediate, low-cost improvement that *is* justified by this research:** rather than the
generic "we don't yet have a postcode-level lookup" message, our checker can now **link directly
to Yorkshire Water's own official checker** as the "authoritative resource" fallback option the
original build considered but deliberately avoided (at the time, no specific URL had been
verified — it now has been). This is implemented in Part 22 below.

**Do not build our own dataset integration yet.** A genuine next step (not part of this task) is
to contact Yorkshire Water directly to ask whether their hardness data can be licensed or
API-accessed for reuse — this is a Phase 6+ item for the launch plan, not a website change to
make now.

---

## Part 16 — Local SEO page architecture

**Recommendation: do not create thin local pages yet.** This matches the original build's
approach and remains correct after this research pass — none of the competitor or supplier
research changes this conclusion.

Recommended priority order for genuinely useful (not thin/doorway) local pages, once written:

1. **`/water-treatment-hull.html`** — highest search volume implied by keyword list in the
   brief and by Hull being the largest population centre served; also the location where our
   strongest direct local competitor (Greens Water Systems) has a physical showroom, so this
   page needs to earn its place with real local detail, not just a swapped town name.
2. **`/water-treatment-beverley.html`**
3. **`/water-treatment-hessle.html`**
4. **`/water-treatment-cottingham.html`**
5. Willerby, Anlaby, Hedon — lower priority, smaller population centres; only build once the
   above four are performing and there's genuine content to say that isn't a copy-paste
   town-name swap (e.g. actual local property-type commentary, consistent with how the existing
   renovation area pages — `hull.html`, `beverley.html` etc. — already avoid thin content by
   discussing genuinely different property types per town).

**Naming convention decision (carried over from the original implementation and reaffirmed
here):** flat `/water-treatment-<town>.html`, matching this site's existing URL architecture
(no `vercel.json` clean-URL rewriting exists) — not the nested `/water-treatment/hull/`
structure suggested in the brief. This was already decided and documented in the original
implementation; nothing in this research changes that technical constraint.

**What each future local page should contain, per the research:** each existing renovation area
page (e.g. `beverley.html`) already models the right pattern — genuine local property
commentary (Georgian townhouses vs. modern estates), not just a hardness figure. The water-
treatment equivalent should do the same: genuine local plumbing/property considerations (e.g.
older Hull terraces vs. newer Hessle/Willerby estates may have different pipework/access
considerations relevant to installation), **not** an invented precise hardness number — Yorkshire
Water's own range (150–300 ppm, hard, across 217 postcode districts in the region — see
competitor research doc) should be cited generally, with the specific figure for a given
postcode deferred to the free assessment, consistent with the "do not invent precise hardness
figures" rule that governed the original build.

---

## Part 17 — Content/SEO strategy recommendation

Based on the keyword list in the brief and the competitor content gaps found during research:

**Highest-value gaps found (i.e. things researched competitors do *not* do well, which we
could):**
- No researched competitor (local or national) publishes a clear, single-page **"water softener
  vs. water filter"** or **"do I need a water softener"** explainer as approachable as what our
  own page already has in the "What Does Your Home Actually Need?" section — this is a genuine
  content opportunity to expand into a dedicated guide page, since it directly matches two
  keywords in the brief's list ("water softener vs filter," "do I need a water softener").
- **"How hard is Hull water" / "how hard is Beverley water"** — Yorkshire Water's own checker
  answers this per-postcode but doesn't present it as local, readable content; a genuinely useful
  page citing Yorkshire Water's own general regional range (150–300ppm, hard) with a link to
  their checker for the precise figure would out-perform generic competitor pages that either
  invent a number or hide behind a lead form.
- **"Water softener running costs" / "water softener salt cost"** — no researched competitor
  publishes real running-cost guidance; we found only aggregator estimates (£100–£180/year).
  A page built once we have *our own* real consumable pricing (post supplier-selection) would be
  more credible and differentiated than what currently ranks.

**Recommended structure (priority order), none built in this task:**
1. Service pages: the existing `/water-treatment.html` (built), then local pages per Part 16.
2. One comparison/buying guide: "Water softener vs. water filter vs. reverse osmosis" —
   expandable from the existing on-page section into its own longer-form guide once there's
   enough real content (equipment specifics, real pricing) to justify a dedicated page rather
   than duplicating the existing section thinly.
3. FAQ content — already substantially built (20 Q&As on the live page); no gap found requiring
   immediate expansion.
4. Calculators/checkers — the postcode hardness checker (already built, improved in Part 22) is
   the right investment; a "running cost calculator" is a plausible future addition once real
   consumable pricing exists, not before.

**Do not build blog/guide content yet** — it would either duplicate the existing on-page
sections or require pricing/technical specifics we don't have until suppliers are selected.

---

## Part 18 — Conversion strategy / CTA validation

The brief's proposed primary/secondary CTA pairing:
- Primary: "Book a Free Home Water Assessment"
- Secondary: "Check Your Water Hardness"

**Validated by research — recommend keeping both, unchanged.** Every competitor whose funnel
could be reverse-engineered (Kinetico, Harvey, EcoWater, Hull Water Softeners) converges on a
free home visit/survey/demonstration as the critical top-of-funnel action — "assessment" framing
matches this exactly and is already what our page uses. "Check Your Water Hardness" as a
secondary, lower-commitment CTA has no direct precedent found in competitor research (none
publish a working postcode-hardness tool of their own beyond Kinetico's static informational
content page) — this is a genuine differentiator worth keeping.

No competitor researched used WhatsApp as a CTA channel (despite EYR's own existing renovation
pages already listing a WhatsApp number in the footer) — there's no evidence either for or
against adding it to the water-treatment page specifically; **no change recommended** given the
brief's own instruction not to add clutter, and the phone/form/postcode-checker CTA set already
matches every validated competitor pattern.

---

## Part 19 — Recurring revenue recommendation

**Recommendation: do not launch a priced service/membership plan yet.** No competitor researched
publishes aftercare/servicing pricing (this was consistently "not found" across every profiled
business), and we have no operating history to model real salt/filter/service demand or cost.

What research *does* support keeping (and what's already built): the existing "Looking After
Your System, Long Term" section on the live page, which lists future aftercare services
*without* pricing them — this is the correct posture given the evidence gap. **No change
recommended to this section's substance.**

What would justify pricing this later (Phase 9 of the launch plan): a real installed base (even
10–20 customers) to observe actual salt/filter consumption and service call frequency, plus at
least one real supplier quote for consumables (salt cost/tonne, filter cartridge cost, RO
membrane cost) — none of which exist yet per the supplier research document.

---

## Part 20 — What we should explicitly not do (confirmed by this research, not just restated)

All of the brief's Part 20 list is confirmed as still correct after research, with specific
evidence for the ones research could actually test:

- **Do not imply mains water is unsafe** — confirmed correct: DWI-attributed guidance treats
  softened/mains water safety as a settled, non-controversial matter (compliance doc); no
  credible competitor researched claims otherwise on their own official pages.
- **Do not claim WaterSafe/WRAS/qualified/certified installer status** — confirmed: we hold none
  of these; compliance doc sets out exactly what would need to be true first.
- **Do not claim supplier/dealer status before obtaining it** — confirmed: every supplier in the
  research document explicitly requires enquiry; none has been contacted.
- **Do not make whole-house RO the default recommendation** — confirmed by research: no
  competitor positions whole-house RO as a default; it's consistently framed (where mentioned
  at all) as a dedicated drinking-water application, consistent with our own existing page copy.
- **Do not assume US economics/regulations apply** — addressed directly in the unit economics
  document, Section 5.
- **Do not buy stock or commit to a supplier before economics are understood** — confirmed:
  no supplier contacted, no purchase made, per the explicit instruction for this task.

---

## Part 21 — Final recommendation (20 questions)

1. **Should East Yorkshire Renovation enter this market?** Yes, conditionally — the cross-sell
   advantage (Part 11) is genuinely unique versus every researched competitor, and the market
   has active, non-hostile local demand (five-plus real trading local competitors found).
   Condition: do not commit real spend/stock until Phase 1–3 of the launch plan (supplier
   quotes, compliance registration) are actually completed — this task is research only.
2. **What should the service be called?** Keep the current name: **Home Water Treatment**
   (not "Water Softener Installation," not "Water Filters") — already correctly implemented and
   consistent with the broader positioning the brief requires.
3. **What should the positioning be?** Assessment-led, honest, no-scare-tactics — already
   implemented and validated against every researched competitor's own stated approach
   (Part 12). Keep it.
4. **Which customer should we target first?** Existing EYR renovation customers and warm
   referrals (Part 10/11) — cheapest acquisition, highest trust, no advertising-cost risk while
   we're still learning our own economics.
5. **Which products should we initially sell first?** A basic water softener package
   (ESSENTIAL-equivalent) — matches what every local competitor's entry offer actually is
   (Aquarius, Greens, BWT all lead with a basic softener), lowest technical/regulatory complexity
   to start (no RO, no whole-home filtration), fastest route to real operating experience.
6. **Which suppliers should we approach?** Per the supplier research shortlist: **Monarch Water,
   TwinTec (Harvey), Aqua Cure, EcoWater UK, Kinetico UK** — in that priority order (Part 
   "Preliminary shortlist" in the supplier document). Not yet contacted.
7. **One brand or multiple brands?** Recommend **starting with one brand** for the ESSENTIAL
   softener package (simplifies training, warranty administration, and stock/parts knowledge for
   a first-time entrant) while keeping the *website* positioning brand-agnostic ("we recommend
   the right system," never naming a single brand as the only option) — this preserves the
   option to add a second brand later without having made a public single-brand claim we'd need
   to walk back. Do not claim "independent" until this is genuinely multi-brand (Part 12).
8. **Should we be an independent-advisor model?** Directionally yes as the *positioning*, but
   not yet as a *claim* — see Part 12. The assessment-led, "sometimes you don't need a system"
   framing already achieves the trust benefit of independence without requiring the word itself.
9. **Should we use subcontracted qualified installers?** Yes — consistent with Parker J. Smith's
   model (Part 5), consistent with how EYR already operates its other trades, and the
   WaterSafe/Water Fittings Regulations framework (compliance doc) is explicitly built around
   qualified individuals/businesses, not requiring EYR itself to be the registered entity if the
   subcontracted installer holds the relevant registration.
10. **What qualifications/registration should we obtain?** At minimum, confirm the subcontracted
    installer(s) hold (or obtain) **WaterSafe registration** via one of WIAPS/APHC/CIPHE/SNIPEF,
    and that any specific product models used carry valid **WRAS/WaterRegsUK** listing —
    verified per model, not assumed brand-wide (compliance doc). This is a Phase 2 task, not yet
    done.
11. **What should our first three packages be?** Directionally keep the existing three-tier
    shape (softener-only / softener+filtration / softener+filtration+drinking-water) — it's a
    sound, competitor-consistent structure (Kinetico's own Compact-vs-Plus split, EcoWater's
    tiered range, and our own existing package data file already reflect this pattern). The
    *exact contents* should stay flexible per customer per the assessment, as already built.
12. **What should they cost?** **Not yet decided** — do not publish new numbers until real trade
    quotes exist (Phase 1–3). The current £1,995/£2,995/£4,495 placeholders are explicitly
    flagged in the unit economics document as needing review against the £895–£957 local
    benchmark before being finalised. **No pricing change made in this task** (see Part 22).
13. **What gross margin should we target?** The unit economics **BASE CASE (34% contribution
    margin)** is a reasonable initial target, informed loosely by Parker J. Smith's own reported
    ~32% figure (Part 5) as a directional sanity check, not a promise. Treat **LOW MARGIN (15%)**
    as the floor we need to stay above once real costs are known, and **STRONG MARGIN (47.5%)**
    as an aspirational ceiling once volume and supplier terms improve.
14. **Should we publish prices?** Yes, "from" pricing — Part 13. Not yet, though, until the
    number itself is validated (Phase 1–3).
15. **Should we offer finance?** Plausible longer-term (Kinetico and Harvey both offer it
    nationally), but **not a launch requirement** — no local competitor researched (Hull Water
    Softeners, Greens, Aquarius) was confirmed to offer finance, so its absence at launch is not
    competitively disadvantageous in our specific local market. Revisit once package prices are
    finalised and if average ticket size makes finance meaningfully useful to customers.
16. **What should the lead funnel look like?** As mapped in Part 4 — already built correctly.
17. **What should the assessment process look like?** Free, no-obligation, hardness test +
    household needs discussion + written recommendation with "from" pricing — matches the
    existing page copy and every credible competitor's stated process. No change needed.
18. **What recurring revenue should we build?** None priced yet — Part 19. Structure kept
    visible on the website as a future offering, consistent with current implementation.
19. **What should our first advertising campaign target?** **Do not start with broad paid
    search/social to cold traffic.** Start with the cross-sell channel (Part 11, zero incremental
    ad spend) and only test paid channels once real conversion/economics data exists from that
    warmer channel — directly informed by the unit economics document's advertising-cost
    uncertainty (Section 2) and Parker J. Smith's own advertising ratio only being knowable in
    hindsight after his campaign had already been optimised (Section 5).
20. **What is our strongest competitive advantage?** The **existing renovation customer base and
    on-site trade relationship** (Part 11) — no local or national competitor researched has this.
    Everything else (assessment-led honesty, "from" pricing, no scare tactics) is good practice
    that's *achievable* by any competitor and, in several cases, is already being done by at
    least one of them (Hull Water Softeners' own "no hard sell" positioning, for instance) — it's
    necessary, not differentiating on its own.
