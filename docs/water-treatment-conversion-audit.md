# Water Treatment — Conversion Audit

Audited: `/water-treatment.html`, `assets/js/water-treatment.js`, `assets/js/water-treatment-data.js`,
`assets/css/styles.css`, and how the page sits within the wider East Yorkshire Renovation site
(navigation, footer, cross-links, homepage teaser).

Scores below reflect the page's **baseline state before this task's changes**, so the audit is
an honest diagnostic, not a self-graded summary of work already done. A "Changed?" line under
each item notes whether this task's implementation addressed it. Scale: 1–10, 8+ = no action
needed.

---

## 1. First impression — 6/10 (baseline)
**What was wrong:** The hero communicated the emotional hook ("Hard Water Causing Limescale
Throughout Your Home?") well, but nothing in the first viewport told a visitor *where* we
operate or *roughly what this costs* — both are things a homeowner decides on before reading
further, not after.
**Why it matters:** For someone arriving from a geo-targeted Google/Meta ad for "water softener
Hull," the first two seconds need to confirm "this is local, and I can tell if it's in my
budget range" or they bounce without ever reaching the honest, well-written content further
down the page.
**What changed:** Kicker now reads "Home Water Treatment for Hull & East Yorkshire"; subhead
leads with the same named towns; an investment-range pill ("Typical investment: £1,795–£4,495")
now sits directly under the subhead, above the CTA buttons.
**Priority:** HIGH — addressed.

## 2. Clarity — 7/10 (baseline)
**What was wrong:** The proposition itself is written clearly, section by section. The issue was
sequencing: pricing didn't appear until the 6th section down the page, well after the local
water/hardness explanation and the assessment form. For a page whose own stated strategy is "we
would rather pre-qualify visitors than generate enquiries from people expecting a £500
installation," burying the price this deep works against that goal.
**Why it matters:** A price-sensitive visitor has to invest several screens of reading (or fill
in the form) before learning the ballpark figure — exactly the friction the pre-qualification
strategy was meant to remove.
**What changed:** Investment range now also appears above the fold (see #1), not only in the
dedicated packages section further down. The packages section itself (existing, from a prior
session) already carries the range too.
**Priority:** HIGH — addressed for the above-the-fold view; the packages section itself remains
in its existing, sensible position (after the local-water and assessment context, which a
genuinely undecided visitor benefits from reading first).

## 3. Premium positioning — 8/10
**What's working:** Serif package-price typography, restrained accent colour, no discount/urgency
language anywhere (verified by grep, before and after this task), package copy already
outcome-focused rather than hardware-listing. No changes needed.
**Changed?** No.

## 4. Local relevance — 6/10 (baseline)
**What was wrong:** Hull/Beverley/Hessle/Cottingham/Willerby/Hedon are all named in the body copy,
FAQ and schema - but none of that is visible in the first viewport, which is what a geo-targeted
ad click needs to confirm instantly.
**Why it matters:** Same reasoning as #1 - paid-ads readiness specifically depends on this.
**What changed:** Same hero changes as #1.
**Priority:** HIGH — addressed.

## 5. Pricing transparency — 7/10 (baseline)
**What's working:** Once reached, pricing is genuinely transparent - real "from" prices, an
honest investment-range statement, an explicit "every home is different" caveat, no fake RRP or
discount framing. **What was wrong:** positioned too low (see #2).
**What changed:** See #1/#2. No change to the prices themselves or how they're presented once
reached - that presentation was already sound.
**Priority:** MEDIUM-HIGH — addressed via placement, not rewritten.

## 6. Trust — 7/10 (baseline)
**What's working:** No fabricated credentials anywhere (verified by grep for WaterSafe/WRAS/
certified/qualified claims - none found beyond the correctly-hedged "appropriately qualified
professionals" wording). The "Straightforward Water Treatment. No Scare Tactics." section and
the "Fully insured, locally coordinated" callout are both honest, real trust signals.
**Important finding:** The brief asked us to audit whether existing East Yorkshire Renovation
reviews could legitimately reinforce trust on this page. **We found the homepage's three reviews
(Emma/Beverley, Chris/Hull, Sara/Hessle) sit behind an HTML comment reading `<!-- Replace with
real customer reviews -->`** - i.e. they are placeholder content, not verified genuine
testimonials. Reusing them here, even with careful "these are renovation reviews, not water
treatment reviews" framing, would still be presenting placeholder content as if it were real
social proof, which this task explicitly prohibits ("If there are no relevant reviews, do not
fabricate them"). **No reviews section was added.** This is flagged to you directly - see the
final report.
**What changed:** Nothing added for reviews (correctly, per the finding above). No other trust
changes made - the existing signals were already honest and adequate.
**Priority:** MEDIUM — the underlying gap (no genuine reviews exist yet, for the renovation
business generally) is a site-wide issue beyond this task's scope, not something a copy edit can
fix.

## 7. CTA visibility — 7/10 (baseline)
**What was wrong:** The primary form CTA is prominent and repeated appropriately throughout the
page, and the mobile sticky bar already gave mobile visitors an instant call option. But **on
desktop, there was no visible "call us" option until the very bottom of the page or the
footer** - a meaningful gap, since the brief explicitly wants form-or-phone enquiry "without
friction" for everyone, not just mobile visitors.
**What changed:** Added a plain-text "Prefer to talk first? Call [number]" line under the hero
CTA buttons, visible on desktop and mobile alike, without adding a third competing button.
**Priority:** MEDIUM-HIGH — addressed.

## 8. Lead-form usability — 7/10 (baseline)
**What was wrong:** Field count and labels were already sensible. Two specific gaps: (a) "Not
sure - I'd like advice" was the *last* option in a 7-item dropdown, easy to miss for exactly the
undecided visitors it's meant to serve; (b) no line near the form explained what happens after
submitting, and the generic-ish "Submit"-style button copy didn't reinforce the premium,
consultative tone.
**What changed:** "Not sure - I'd like advice" is now the first real option in the (now 6-item,
slightly consolidated) list; added an optional "Number of bathrooms" field (not required - a
useful, low-friction qualifier the brief specifically flagged as worth adding "if useful");
added a one-line "what happens next" statement above the submit button; changed the submit
button to "Request My Free Water Assessment."
**Priority:** MEDIUM — addressed.

## 9. Mobile conversion — 8/10
**What's working:** Sticky mobile CTA bar (call + book assessment) already implemented and
tested; forms use native mobile-friendly selects; no horizontal overflow found in prior or
current testing. No changes needed.
**Changed?** No.

## 10. SEO — 8/10
**What's working:** Title/meta description/canonical/OG/Twitter/Service schema/BreadcrumbList/
FAQPage schema (matching visible FAQ text exactly) are all already well-constructed and
naturally keyword-relevant ("water softener," "water treatment," "Hull," "East Yorkshire")
without stuffing. **Minor gap:** the H1 itself carries no explicit local keyword (by design -
see #1, the kicker now carries it instead, which search engines and most users will read as
part of the same above-the-fold statement). Not treated as worth rewriting a proven, honest H1
for.
**Changed?** No changes to title/meta/canonical/OG/schema - none were needed and the brief asked
us not to change SEO metadata unnecessarily.

## 11. Paid-ad readiness — 5/10 (baseline, the lowest score)
**What was wrong, specifically:**
- No local/price signal above the fold (see #1/#4) - the single biggest issue for someone
  landing cold from an ad who knows nothing about us yet.
- No mechanism to capture which ad/campaign a lead came from - every submitted lead looked
  identical whether it came from organic search, a Facebook ad, or a direct visit, making it
  impossible to answer "which source produces the best leads" (a metric this task explicitly
  wants us able to answer).
- No mechanism to capture which package a visitor was interested in when they clicked through
  from a specific package card to the form.
**What changed:** Hero fix (#1/#4). Added hidden form fields (`utmSource`, `utmMedium`,
`utmCampaign`, `landingPage`, `packageInterest`) populated automatically from the page's own
query string and from which package CTA was clicked, then included in the lead notification
email sent via `api/water-assessment.js`. This is deliberately simple - no analytics database,
no CRM, just fields carried through the existing SendGrid email, exactly matching the "keep the
system simple" instruction.
**Priority:** HIGH — addressed.

## 12. Overall lead-generation potential — 7/10 baseline → 8.5/10 estimated after this task's
changes (not independently re-scored; this is a reasoned estimate, not a measurement - only real
traffic and real submissions can confirm it, which is the entire point of the test plan below).

---

## Summary of priority actions taken this session
| Priority | Item | Status |
|---|---|---|
| HIGH | Local + price signal above the fold | Done |
| HIGH | Lead-source (UTM/package) capture for paid-ad readiness | Done |
| MEDIUM-HIGH | Desktop "call us" visibility | Done |
| MEDIUM-HIGH | Pricing positioned earlier in the visible experience | Done (hero), unchanged (packages section position) |
| MEDIUM | "Not sure" prominence + form next-step copy + CTA wording | Done |
| MEDIUM | Reviews/social proof | **Not done - no genuine reviews exist to use; flagged to you** |
| — | Everything scored 8+ | No action taken (already sound) |
