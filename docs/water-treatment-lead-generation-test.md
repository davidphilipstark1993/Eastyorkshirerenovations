# Water Treatment — Lead Generation Test Plan

## Objective

Determine whether there is genuine demand for a premium home water-treatment service in Hull
and East Yorkshire at our current provisional pricing - **not** whether we can generate leads at
any price. We are deliberately not discounting to inflate volume; a "no" at this price point is
a real, useful answer, not a failure to fix by cutting prices.

## Current offer (provisional, editable in `assets/js/water-treatment-data.js`)

| Package | Price |
|---|---|
| Essential | £1,795 |
| Complete (Most Popular) | £2,795 |
| Premium | £3,795 |
| Complete + RO | £4,495 |

## Key metrics

Track, in order of importance for this test:

1. **Qualified leads** - a form submission or phone call where the person is a genuine
   East Yorkshire/Hull homeowner with a real water concern, not a supplier/recruiter/irrelevant
   enquiry. Qualification happens at the human follow-up stage, not automatically.
2. **Cost per qualified lead** - once paid traffic starts (Phase 2), total ad spend divided by
   qualified leads. Meaningless in Phase 1 (no ad spend), but start recording ad spend from day
   one of Phase 2 so this is calculable immediately.
3. **Assessment booking rate** - of qualified leads, how many actually book and attend a free
   home assessment. This tells us whether the enquiry was genuine interest or idle curiosity.

Also track, as secondary context (useful for diagnosis, not the primary success measure):
traffic, total leads (before qualification), quotes issued, sales, and overall conversion rate
from visitor to lead.

### How this maps to what's now instrumented on the page
- Traffic: GA4 `water_treatment_page_view` event (plus GA4's own automatic page views).
- Form start / submission: `water_treatment_assessment_form_start` /
  `water_treatment_assessment_form_submit` GA4 events.
- Phone interest: `water_treatment_phone_cta_click` GA4 event, and every lead email records
  whether the enquiry included a phone-related preferred contact method.
- Package interest per lead: `packageInterest` field now included in every lead email (set
  automatically when a visitor clicks a specific package's CTA; blank if they used a general CTA).
- Source/medium/campaign per lead: `utmSource` / `utmMedium` / `utmCampaign` / `landingPage`
  fields now included in every lead email, read from the URL the visitor landed on.
- Postcode-checker use: `water_hardness_checker_used` GA4 event.

None of this requires a database or CRM - it all rides on the existing GA4 property and the
existing SendGrid lead email. Qualification, booking rate and sales still need to be tracked
manually (e.g. a simple spreadsheet logging each lead email) until/unless volume justifies more
tooling - see "Do not overbuild" below.

## Test phases

### Phase 1 - Organic/local traffic + existing audience
- No paid spend.
- Rely on: the water-treatment page itself ranking for its already-implemented local SEO terms;
  the homepage teaser and services.html listing (already live); cross-links from
  kitchen-installs.html, bathroom-installs.html, full-house-renovations.html and the four local
  area pages (hull/beverley/hessle/cottingham - already live); and direct conversations with
  existing/recent renovation customers, where the water-treatment service can be mentioned
  as a natural add-on (this needs a person to actually raise it in conversation - it isn't
  something the website can do alone; see the cross-sell recommendation from the prior
  business-model research).
- Purpose: establish a genuine, zero-cost baseline conversion rate before any paid traffic
  arrives, and catch any obvious usability issues with real, if low, traffic volume.
- Exit criteria to move to Phase 2: at minimum, no unresolved technical blockers (broken form,
  broken links, mobile issues) and at least a small amount of real traffic data to compare
  paid-traffic behaviour against.

### Phase 2 - Small paid advertising test
- **Do not commit a large budget.** Recommend starting with a tightly capped daily budget on a
  single channel (Google Search, given "water softener Hull"-type queries carry clear buying
  intent) rather than splitting a small budget across Google and Meta simultaneously - a split
  test needs more volume than a first test can justify.
- Geo-target Hull, Beverley, Hessle, Cottingham, Anlaby and immediate East Riding postcodes only
  - do not run nationally.
- Point ads directly at `/water-treatment.html` with UTM parameters
  (`?utm_source=google&utm_medium=cpc&utm_campaign=<name>`) so the new lead-source capture
  (see above) records which campaign each lead came from.
- Use a small number of ad variants built around genuine buying-intent search terms ("water
  softener Hull," "water softener installation Hull," "water treatment Hull") rather than
  broad informational terms - informational searches are a Phase-3-and-beyond content play (see
  the prior session's content roadmap in `docs/water-treatment-business-model.md`, Part 17), not
  a first paid test.
- Duration: long enough to get a statistically meaningful number of clicks at the capped budget
  before making any judgement - a few days of near-zero clicks is not evidence of "no demand,"
  it's evidence of "not enough spend/time yet." Set a specific spend or time cap in advance
  (e.g. a fixed £ amount) rather than an open-ended budget, precisely because this is a test, not
  a launch.

### Phase 3 - Optimise based on real enquiry data
- Compare qualified-lead rate and cost-per-qualified-lead across whatever traffic sources exist
  by this point (organic, cross-sell, paid).
- Look specifically at: which package people express interest in most (via the `packageInterest`
  field now captured), whether "Not sure - I'd like advice" is the most common reason (which
  would suggest the terminology/education content is working as intended, or conversely that it
  needs to work harder), and whether postcode-checker usage correlates with higher-quality leads.
- Only after this real data exists should package pricing, the package structure, or the ad
  targeting be revisited - not before, and not based on assumption.

## Do not overbuild

Per the brief for this task: do not build a CRM, a supplier portal, a product database, a
customer dashboard, a calculator, a chatbot, an automated booking system, or an automated quoting
system for this test. A shared spreadsheet logging each lead email (date, source, package
interest, qualified y/n, booked y/n, outcome) is sufficient to answer every metric above at this
volume. Revisit tooling only if/when lead volume genuinely makes a spreadsheet impractical.
