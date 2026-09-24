# Damp proofing before/after images: filenames and AI prompts

There are 18 image slots across the damp proofing pages: a before and an after on the hub and on each of the 8 service pages.

## How to add images

1. Save each image as a **JPG in 4:3 landscape** (e.g. 1200 × 900) using the exact filename below.
2. Put it in `assets/img/damp/`.
3. Run `node scripts/build-damp-proofing.mjs` to rebuild the pages.

**Naming decides how the image is labelled:**

- `…-ai.jpg` (e.g. `rising-damp-treatment-before-ai.jpg`) is an **AI-generated image**. It shows with an "AI-generated illustration" badge, and the section explains that the images aren't photos of your own work. This keeps the site in line with how the other AI images on it are labelled, and with the ASA rules on misleading advertising.
- The same name without `-ai` (e.g. `rising-damp-treatment-before.jpg`) is a **real photo from your own job**. It shows without a badge. If both exist, the real photo is used, so you can add real photos later without deleting the AI ones.
- A slot with no image keeps showing the placeholder.

## Tips for realistic, consistent results

- **Make the "after" from the "before".** Most image tools let you upload an image and edit it (e.g. "same room, same camera angle, but the wall is now freshly replastered and painted"). That keeps the room, window and angle matching, which is what makes a before/after pair convincing. Generating the two separately gives two different rooms.
- Add this to the end of every prompt: *"Photorealistic, taken on a smartphone at eye level, natural daylight, slightly imperfect framing, no people, no text, no logos, no watermarks, 4:3 landscape."*
- Ask for typical **UK housing**: Victorian or 1930s terraces and semis, red brick, uPVC windows, radiators under windows, UK-style plug sockets.
- Check each result for tell-tale AI errors (warped window frames, melted sockets, odd radiators, impossible shadows) and regenerate if needed.
- Avoid scenes showing rotten or decayed woodwork. The damp pages deliberately don't cover timber treatment.

---

## Hub: /damp-proofing/

**`damp-proofing-before-ai.jpg`**, captioned "Before: damp or mould damage"
> Interior of a UK Victorian terraced house living room, lower part of the external wall has damp staining, bubbling paint and crumbling plaster, with patches of black mould in the corner near the ceiling, grey overcast light through a uPVC window.

**`damp-proofing-after-ai.jpg`**, captioned "After: treated, replastered and redecorated"
> The same living room and camera angle, the wall now freshly replastered and painted in a light neutral emulsion, clean corners with no mould, tidy and bright, furniture moved back to the room.

## Damp surveys: /damp-proofing/damp-surveys/

**`damp-surveys-before-ai.jpg`**, captioned "Before: damp patch on internal wall"
> Close-up of an internal plastered wall in a UK 1930s semi-detached house with an irregular brown damp patch and flaking magnolia paint, a hand-held pin-type moisture meter pressed against the damp area, daylight.

**`damp-surveys-after-ai.jpg`**, captioned "After: cause fixed, wall replastered"
> The same wall and camera angle, now smooth freshly skimmed plaster painted in magnolia, dry and even, no staining.

## Pre-purchase damp survey: /damp-proofing/pre-purchase-damp-survey/

**`pre-purchase-damp-survey-before-ai.jpg`**, captioned "Before: damp flagged on a buyer's survey"
> Empty UK terraced house for sale, bare front room with no furniture, damp staining and a faint tide mark along the lower part of the chimney breast wall, worn carpet, estate-agent-viewing feel, daylight through a bay window.

**`pre-purchase-damp-survey-after-ai.jpg`**, captioned "After: cause fixed and wall made good"
> The same empty room and camera angle, the chimney breast wall now replastered and painted white, clean and dry, new neutral carpet.

## Landlord damp & mould reports: /damp-proofing/landlord-damp-mould-reports/

**`landlord-damp-mould-reports-before-ai.jpg`**, captioned "Before: mould reported by tenant"
> Bedroom in a UK rented flat, black mould spreading across the top corner of an external wall and ceiling, and on the window reveal around a uPVC window with condensation droplets on the glass, plain magnolia walls, a bed partly in view.

**`landlord-damp-mould-reports-after-ai.jpg`**, captioned "After: cause fixed, treated and redecorated"
> The same bedroom and camera angle, the corner and window reveal clean and freshly painted white, no mould, dry window with a trickle vent visible in the frame.

## Rising damp treatment: /damp-proofing/rising-damp-treatment/

**`rising-damp-treatment-before-ai.jpg`**, captioned "Before: rising damp tide mark and salts"
> Ground-floor internal wall in an older UK red-brick terraced house, a clear horizontal tide mark about 80 cm above the floor, white fluffy salt deposits and blown, crumbling plaster below the line, peeling paint, daylight.

**`rising-damp-treatment-after-ai.jpg`**, captioned "After: new damp-proof course and replastered wall"
> The same wall and camera angle, now freshly replastered with smooth pink plaster, dry and even, with no tide mark or salts, a clean floor.

## Penetrating damp: /damp-proofing/penetrating-damp/

**`penetrating-damp-before-ai.jpg`**, captioned "Before: damp patch from failed pointing"
> Exterior of a UK solid-walled red-brick house, close-up of weathered brickwork with eroded, crumbling and missing mortar joints and green algae staining below a leaking cast-iron downpipe, overcast sky.

**`penetrating-damp-after-ai.jpg`**, captioned "After: repointed, with a new downpipe"
> The same brick wall and camera angle, now neatly repointed with fresh, lighter lime mortar joints, clean brickwork and a new black downpipe, dry weather.

## Condensation control: /damp-proofing/condensation-control/

**`condensation-control-before-ai.jpg`**, captioned "Before: condensation and mould on outside wall"
> UK bathroom with heavy condensation on a uPVC window, water running down the glass and pooling on the sill, black mould spots on the ceiling and along the silicone around the bath, no extractor fan visible.

**`condensation-control-after-ai.jpg`**, captioned "After: ventilation fitted, wall redecorated"
> The same bathroom and camera angle, a modern white extractor fan fitted high on the wall, the ceiling freshly painted white, clear dry window, clean new white silicone around the bath.

## Mould treatment: /damp-proofing/mould-treatment/

**`mould-treatment-before-ai.jpg`**, captioned "Before: black mould on bedroom wall"
> Corner of a UK bedroom, black mould spreading across the external wall behind where a wardrobe stood, mould spots on the wall and ceiling edge, pale painted walls, daylight from the side.

**`mould-treatment-after-ai.jpg`**, captioned "After: treated, cause fixed and redecorated"
> The same bedroom corner and camera angle, clean freshly painted wall in soft white, no mould, bright and dry.

## Cellar tanking: /damp-proofing/cellar-tanking/

**`cellar-tanking-before-ai.jpg`**, captioned "Before: damp cellar walls"
> Brick-walled cellar in a UK Victorian terraced house, damp dark brickwork with white salt staining and flaking limewash, a wet patch on the concrete floor, a single bare bulb and a small high window.

**`cellar-tanking-after-ai.jpg`**, captioned "After: tanked and finished cellar"
> The same cellar and camera angle, walls now smooth rendered and painted white, dry sealed grey floor, modern LED ceiling lights, clean and usable storage space.
