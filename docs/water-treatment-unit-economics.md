# Water Treatment Unit Economics Model

**This entire document is an illustrative model built from assumptions, not verified supplier
or trade pricing.** No supplier has quoted us trade prices (see
`docs/water-treatment-supplier-research.md` — every supplier entry says "trade price requires
supplier enquiry"). Where a number below is not directly sourced from a competitor's published
retail price, it is a modelling assumption and is labelled as such. Do not treat any £ figure
in this document as a committed cost, price, or margin until real supplier quotes and installer
day-rates are obtained.

---

## 1. What we know vs. what we're assuming

**Known (from competitor research, published retail prices):**
- Genuine local "from" fully-installed entry prices exist at **£895** (Aquarius) and **£957**
  (Greens, Hull showroom) for a basic softener.
- BWT's own published installed offer is **£959**.
- Harvey's direct-channel installed price is estimated at **£1,800–£2,600** (aggregator
  estimate); the same underlying technology via independent TwinTec dealers is estimated at
  **£1,000–£1,400** installed.
- UK-wide labour-only estimates from aggregators: **£175–£650** per job.
- Annual salt running costs commonly cited: **£100–£180/year** (aggregator estimate).

**Not known (requires supplier enquiry before committing to any real pricing):**
- Our actual trade cost for equipment.
- Our actual installer day-rate (in-house vs. subcontracted).
- Our actual advertising cost-per-lead and cost-per-booked-job in the Hull/East Yorkshire market
  specifically.
- Warranty/callback cost experience (we have no operating history).

Given this, the model below uses **assumed cost structures as a percentage of selling price**,
built to be broadly consistent with the published market prices above (i.e. if a competitor
sells a basic softener installed for ~£900–£1,000, our own equipment+labour+materials cost for
a comparable job should plausibly sit somewhere under that figure once we're pricing
competitively — the percentages below are constructed to be sanity-checked against that, not
picked at random).

---

## 2. Cost structure assumptions (three scenarios)

All figures are **% of selling price**, applied per job:

| Cost line | LOW MARGIN (conservative) | BASE CASE | STRONG MARGIN |
|---|---|---|---|
| Equipment (trade cost) | 45% | 35% | 28% |
| Installation labour + materials/fittings | 20% | 17% | 14% |
| Warranty provision (reserve for callbacks/faults) | 3% | 2% | 1.5% |
| Advertising / customer acquisition | 12% | 8% | 6% |
| Sales & admin overhead allocation | 5% | 4% | 3% |
| **Total direct/variable cost** | **85%** | **66%** | **52.5%** |
| **Contribution margin** | **15%** | **34%** | **47.5%** |

**Why these numbers, specifically:**
- Equipment at 28–45% of retail is consistent with typical UK trade/retail markup structures
  in home-improvement equipment categories generally (ASSUMPTION — not confirmed for this
  specific product category by any supplier in our research).
- Advertising at 6–12% is informed loosely by Parker J. Smith's self-reported August figures
  (see Section 5) where advertising was ~3.5% of revenue under contract — we've assumed a
  **higher** proportion because (a) his figure reflects a mature, optimised campaign after
  learning what messaging worked, and (b) UK PPC costs for competitive home-services keywords
  ("water softener Hull," "water softener installation") are not yet known to us and should be
  assumed higher until proven otherwise, especially in a market where Kinetico/Harvey/EcoWater
  already bid on similar terms nationally.
- Contribution margin (not net profit) ranges from 15% in a poor scenario to ~47.5% in a strong
  one. **Contribution margin is not net profit** — it excludes fixed business overhead (office,
  insurance, vehicle, non-job-specific staff time, software, etc.), which must be covered from
  the contribution pool before any actual profit exists.

---

## 3. Per-job model at eight selling prices

| Selling price | Scenario | Equipment | Labour+Materials | Warranty | Advertising | Sales/Admin | Total direct cost | **Contribution £** | **Contribution %** |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|
| £1,500 | Low | £675 | £300 | £45 | £180 | £75 | £1,275 | **£225** | 15% |
| £1,500 | Base | £525 | £255 | £30 | £120 | £60 | £990 | **£510** | 34% |
| £1,500 | Strong | £420 | £210 | £22.50 | £90 | £45 | £787.50 | **£712.50** | 47.5% |
| £2,000 | Low | £900 | £400 | £60 | £240 | £100 | £1,700 | **£300** | 15% |
| £2,000 | Base | £700 | £340 | £40 | £160 | £80 | £1,320 | **£680** | 34% |
| £2,000 | Strong | £560 | £280 | £30 | £120 | £60 | £1,050 | **£950** | 47.5% |
| £2,500 | Low | £1,125 | £500 | £75 | £300 | £125 | £2,125 | **£375** | 15% |
| £2,500 | Base | £875 | £425 | £50 | £200 | £100 | £1,650 | **£850** | 34% |
| £2,500 | Strong | £700 | £350 | £37.50 | £150 | £75 | £1,312.50 | **£1,187.50** | 47.5% |
| £3,000 | Low | £1,350 | £600 | £90 | £360 | £150 | £2,550 | **£450** | 15% |
| £3,000 | Base | £1,050 | £510 | £60 | £240 | £120 | £1,980 | **£1,020** | 34% |
| £3,000 | Strong | £840 | £420 | £45 | £180 | £90 | £1,575 | **£1,425** | 47.5% |
| £3,500 | Low | £1,575 | £700 | £105 | £420 | £175 | £2,975 | **£525** | 15% |
| £3,500 | Base | £1,225 | £595 | £70 | £280 | £140 | £2,310 | **£1,190** | 34% |
| £3,500 | Strong | £980 | £490 | £52.50 | £210 | £105 | £1,837.50 | **£1,662.50** | 47.5% |
| £4,000 | Low | £1,800 | £800 | £120 | £480 | £200 | £3,400 | **£600** | 15% |
| £4,000 | Base | £1,400 | £680 | £80 | £320 | £160 | £2,640 | **£1,360** | 34% |
| £4,000 | Strong | £1,120 | £560 | £60 | £240 | £120 | £2,100 | **£1,900** | 47.5% |
| £4,500 | Low | £2,025 | £900 | £135 | £540 | £225 | £3,825 | **£675** | 15% |
| £4,500 | Base | £1,575 | £765 | £90 | £360 | £180 | £2,970 | **£1,530** | 34% |
| £4,500 | Strong | £1,260 | £630 | £67.50 | £270 | £135 | £2,362.50 | **£2,137.50** | 47.5% |
| £5,000 | Low | £2,250 | £1,000 | £150 | £600 | £250 | £4,250 | **£750** | 15% |
| £5,000 | Base | £1,750 | £850 | £100 | £400 | £200 | £3,400 | **£1,700** | 34% |
| £5,000 | Strong | £1,400 | £700 | £75 | £300 | £150 | £2,625 | **£2,375** | 47.5% |

**Reading this table:** at our current provisional ESSENTIAL price of £1,995 (between the £2,000
row above), a BASE CASE job would generate roughly **£680 contribution (34%)** — but see
Section 4 for why £1,995 is now in question against the competitor benchmarks.

---

## 4. What this means for our provisional package prices

Current placeholders on the live site: ESSENTIAL £1,995 / COMPLETE £2,995 / PREMIUM £4,495.

Against the researched local benchmarks (Aquarius £895 fully fitted, Greens £957 fully
installed — both for a comparable *entry-level basic softener*), our **ESSENTIAL** price is
roughly **double** the two closest local "from" prices for what is presented as a broadly
comparable scope (softener + installation + commissioning + warranty).

This does not necessarily mean £1,995 is wrong — Aquarius and Greens may not include the same
scope (e.g. our warranty terms, handover process, or aftercare relationship could genuinely be
worth more), and neither publishes what happens when plumbing isn't "standard." But it does
mean **£1,995 should not be treated as validated** and the gap needs a deliberate decision, not
an accidental one. Two honest options, not a recommendation to silently change the number:

- **Option A — price closer to the local benchmark** (e.g. £995–£1,295 "from" for ESSENTIAL) to
  compete head-on with Greens/Aquarius on the entry package, and rely on COMPLETE/PREMIUM and
  aftercare revenue for margin. At the LOW MARGIN scenario, a £1,295 job with the same 15%
  contribution assumption yields ~£194 contribution — thin, and only works at meaningful volume
  or with cross-sell into COMPLETE/PREMIUM.
- **Option B — keep pricing at a genuine premium to the basic local players**, but make sure the
  website copy and package contents clearly justify why (e.g. named professional assessment
  process, specific warranty terms, aftercare inclusion, no-hard-sell positioning) rather than
  implying it's directly comparable to a bare softener install.

**Recommendation carried into the business model document:** do not publish £1,995 as a
finalised price. Keep the current "provisional, subject to assessment" framing on the website
(already correctly implemented), and treat actual package pricing as a decision to make only
after real trade quotes are obtained (see launch plan, Phase 1–3).

---

## 5. Parker J. Smith's reported US economics — can it work in the UK?

Treat every figure below as **Parker's self-reported figures from a podcast appearance, not
audited financials, and not evidence of UK viability.**

His reported Day-80/August figures:
- Revenue under contract: **$66,543.88** across **20 jobs** → average ticket **$3,327.19**.
- Labour: $8,850 total (~$442.50/job).
- Misc fittings/insulation: $2,000 total (~$100/job).
- Advertising: $2,318 total (~$116/job, ~3.5% of revenue).
- Materials: $31,350 total (~$1,567.50/job, ~47% of revenue).
- Reported gross profit after these direct costs: **$21,243.80** (~$1,062.19/job, ~32%
  contribution margin).

**What's structurally different in the UK/East Yorkshire context:**
1. **Currency and market size** — Parker's figures are USD in what appears to be a large US
   metro/regional market; East Yorkshire is a materially smaller addressable population than a
   typical large US metro service area targeted by Facebook ads.
2. **Materials cost ratio** — his materials line is ~47% of revenue, close to our BASE CASE
   equipment assumption of 35% plus part of labour/materials — broadly in the same order of
   magnitude, which is a reasonable sanity check that our BASE CASE isn't wildly unrealistic.
3. **Labour model** — he explicitly uses subcontracted licensed plumbers paid ~$500/job; our
   installer model (subcontracted, appropriately qualified professionals — see compliance
   document) is structurally similar, which supports using his labour-as-%-of-ticket as a loose
   sanity check rather than a UK-specific figure.
4. **Regulatory environment** — the UK has the Water Fittings Regulations, WRAS/WaterRegsUK
   product approval, and the voluntary WaterSafe framework (see compliance document); the US
   regulatory picture for point-of-entry water treatment differs by state and is **not
   equivalent** — we must not assume US compliance costs or timelines apply here.
5. **Advertising cost** — Facebook-led lead generation with a $500 starting budget produced his
   early results; UK PPC/social costs for "water softener [town]" style keywords are unverified
   for our market and could be materially higher or lower — this is a Phase 6 (launch plan)
   research/testing item, not something to assume from his figures.
6. **His figures are booked revenue under contract, not necessarily cash collected, and not
   audited** — do not treat his $21,243.80 "gross profit" figure as directly transferable to a
   UK P&L; it excludes overhead, and his own definition of "gross profit" is unclear from the
   podcast summary alone.

**Conclusion: the underlying business *model* (lead generation → free assessment → tailored
recommendation → subcontracted professional installation → follow-up → recurring consumables)
is directly transferable and is exactly what East Yorkshire Renovation's existing renovation
lead-gen infrastructure is already built for (see Part 11, cross-sell). The specific *numbers*
are not transferable and must be re-derived from real UK supplier quotes, real UK advertising
tests, and real local competitor pricing (Section 3–4 above) before being relied on for a
launch decision.**

---

## 6. Monthly volume model

Using the **BASE CASE** scenario at a **£2,500 blended average job value** (a working assumption
for a mix across our three packages — not a committed average ticket; revisit once real package
prices are set):

Per job at BASE CASE / £2,500: Revenue £2,500, direct costs £1,650, contribution £850 (34%).

| Jobs/month | Monthly revenue | Monthly direct costs | Monthly contribution | Annual contribution (run-rate) |
|---:|---:|---:|---:|---:|
| 5 | £12,500 | £8,250 | £4,250 | £51,000 |
| 10 | £25,000 | £16,500 | £8,500 | £102,000 |
| 15 | £37,500 | £24,750 | £12,750 | £153,000 |
| 20 | £50,000 | £33,000 | £17,000 | £204,000 |

**This contribution figure is before fixed overhead** (any dedicated staff time, vehicle,
insurance beyond per-job warranty reserve, software/tools, office allocation). It is not a net
profit figure.

### Recurring aftercare revenue potential (directional only — no UK aftercare pricing was found
published by any researched competitor; see Part 19 recommendation in the business model
document for why we should not price this yet)

Using the salt/consumables data points we *did* find (Aquasol salt tablets £22.50 inc VAT;
Kinetico block salt £24.95 per unit at the low end; UK-wide aggregator estimate of £100–£180/
year total running cost per household) as a rough guide, and **assuming** (not sourced) a
modest annual service-plan revenue on top once we choose to offer one:

| Cumulative installed customers | Assumed avg. aftercare revenue/customer/year (illustrative) | Potential annual recurring revenue |
|---:|---:|---:|
| 60 (≈ 1 year at 5 jobs/month) | £100–£150 | £6,000–£9,000 |
| 120 (≈ 1 year at 10 jobs/month) | £100–£150 | £12,000–£18,000 |
| 180 (≈ 1 year at 15 jobs/month) | £100–£150 | £18,000–£27,000 |
| 240 (≈ 1 year at 20 jobs/month) | £100–£150 | £24,000–£36,000 |

This is illustrative of the *shape* of recurring revenue (it compounds as the installed base
grows, unlike one-off install revenue) rather than a number to publish or budget against. It
does **not** currently justify launching a formal subscription/membership product — see Part 19
recommendation in the business model document.
