# Water Treatment — First Lead Test Plan

## Test objective

Determine whether genuine homeowners in Hull/East Yorkshire will enquire about premium home
water treatment at the current provisional prices:

- Essential — £1,795
- Complete — £2,795 (Most Popular)
- Premium — £3,795
- Complete + RO — £4,495

This is a demand test, not a scaling exercise. A low or zero response at this price is a real,
useful result - it means either the price, the offer, or the audience needs rethinking, and
real data is what should drive that decision, not a guess made in advance.

---

## Test 1 — Existing customers

Use conversations East Yorkshire Renovation is already having with current and recent
renovation customers (kitchen, bathroom, full-house jobs). This costs nothing beyond someone
remembering to mention it, and it's the warmest, cheapest, highest-trust audience available -
see the cross-sell reasoning in `docs/water-treatment-business-model.md`, Part 11.

Record for each:
| Metric | What it means |
|---|---|
| Number approached | How many existing customers were told about the service |
| Number interested | How many asked a follow-up question or asked to know more |
| Number of enquiries | How many actually gave contact details / asked to be assessed |
| Number of assessments | How many had a free home water assessment carried out |
| Number of quotes | How many received a specific price |
| Number of sales | How many went ahead |

## Test 2 — Google Search (small, tightly controlled)

- Single channel first (Google Search, not Meta) - buying-intent search terms convert
  differently to social discovery, and a first test shouldn't try to compare two channels at
  once with a small budget.
- Geo-target Hull, Beverley, Hessle, Cottingham, Anlaby and immediate East Riding postcodes only.
- Target high-intent terms specifically:
  - water softener Hull
  - water softener installation Hull
  - water treatment Hull
  - water filtration Hull
- **Do not** target broad/national terms, and do not commit a large initial budget - this is
  explicitly a demand test. Set a fixed spend cap in advance and stop at it regardless of
  results, then review.
- Every ad should link directly to `/water-treatment.html` with UTM parameters, e.g.:
  `?utm_source=google&utm_medium=cpc&utm_campaign=water_softener_hull` - this is already
  captured automatically into every lead's email (see the technical readiness report).

## Test 3 — Organic

No spend, just observation:
- **Google Search Console**: which queries show/click through to `/water-treatment.html`, and
  whether Google is indexing it at all yet (can take days to weeks after first crawl).
- **Google Analytics (GA4)**: `water_treatment_page_view`, organic sessions landing on the page,
  and which pages referred them (internal cross-links vs. external search).
- **Organic enquiries**: leads whose `utmSource` field (in the lead email) is blank - this
  indicates direct or organic traffic, since only paid links carry UTM parameters.
- **Landing pages**: confirm whether visitors are landing directly on `/water-treatment.html` or
  arriving via another page first (homepage, services.html, an area page) and clicking through -
  useful context for where cross-links are actually earning their place.

---

## What "success" looks like at this stage

Not a specific number - there isn't yet a benchmark to compare against. What matters is whether
each test phase produces **qualified** enquiries (a real local homeowner with a genuine water
concern, not a supplier cold-call or irrelevant enquiry) at a rate that makes it worth continuing
to Phase 2/3 of the wider launch plan (`docs/water-treatment-launch-plan.md`). Use the lead
tracking sheet below to make this judgement from real data rather than impression.
