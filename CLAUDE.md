# Quality Auto Repair (Gastonia, NC)

One-pager, Standard tier. Built by Sites on Polaris, Oct 2026.

## Status
- Code is on `main`. Netlify project: import from GitHub under team `sitesonpolaris`, name `quality-auto-repair-gastonia` (planned URL https://quality-auto-repair-gastonia.netlify.app, set in `src/lib/site.ts`). Netlify site id: _add once imported_.
- Hero video is in `public/video/` (fetched from Higgsfield storage with `scripts/fetch-hero.sh`, sha256-checked).
- Repo is currently **public**; Jesse chose to leave it for now. Rules say private.

## Business data (Google Business Profile, Oct 2026)
- Quality Auto Repair (BBB lists "Quality Auto Repair and Service, LLC"), 615 E Second Ave, Gastonia, NC 28054, (980) 888-0293.
- 4.6 stars, 144 Google reviews. Family- and veteran-owned.
- Services: A/C, engine diagnostics, brakes, electrical, engine repair, general maintenance, oil change, steering & suspension, tires, transmission.
- Reviews used: two lines from the Google review summary, no reviewer names.

## Owner still needs to confirm
- Full weekly hours (only "Closes 5 PM" was visible). Site says "We close at 5 PM. Call ahead to confirm today's hours." No hours in JSON-LD until confirmed.
- Service area list (`site.serviceArea`) and map coordinates (`site.geo`, approximate).
- Tire brands (taken from the Michelin / BFGoodrich / Uniroyal awning).
- Whether they're an NC state inspection station ("Official Inspection Station" sign in the waiting room) — not on the site yet.
- Domain, email routing, GA4 / Search Console.
- Quote form: enable form notifications in Netlify (Forms → quote) to the shop's email.

## Identity
- Palette from the real building: navy `#1b2f6b`, stripe red `#c8202f`, sign yellow `#f4c21b`, paper `#f5f2ea`, ink `#12151c`.
- Fonts: Big Shoulders Display 800/900 (display), Barlow 400–700 (body), via `next/font/local` from `@fontsource`.
- Motif: the storefront's navy/red/yellow tri-stripe (`.tri-stripe`) and a garage-door roll-up reveal on photos (`.door`). Logo mimics the yellow sign with red underline (`Logo.tsx`).

## Real-shop visual notes
- Exterior: navy-painted brick with red + yellow stripe, yellow "QUALITY AUTO REPAIR" sign, white roll-up bay doors, blue awning with Michelin / BFGoodrich / Uniroyal.
- Inside: beige walls covered in vintage tin car signs, American flag and veteran/patriotic posters, wood-look floor, gray chairs, fish tank, Pepsi cooler. Homey, cluttered, small-town.
- Real photos in `public/images/` are 680px wide (from Google). Ask for originals for anything larger.

## Hero video
- 4 shots, Kling 3.0 Pro from gpt_image_2_5 keyframes: bay push-in, brake caliper, tire changer, keys handoff at the counter. 11.25s loop, 0.33s dissolves.
- Exports: `hero-1080.mp4` (1920×1080, 2-pass 2.1 Mbps, 2.97 MB), `hero-mobile.mp4` (720×1280, 850 kbps, 1.2 MB), posters jpg/webp.
- Higgsfield credits: 46 (4 × 2.75 keyframes + 4 × 8.75 Kling).
- Note: Higgsfield upload/CDN hosts were blocked in the cloud container, so keyframes were prompted from text descriptions of the real shop, not image references.
