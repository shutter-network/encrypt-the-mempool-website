# Handoff: Encrypt the Mempool — Campaign Landing Page

## Overview
Single long landing page for encryptedmempool.org — a coalition campaign site rallying support to encrypt Ethereum's public mempool in the upcoming I* hardfork. Loud activist "campaign poster" direction: big uppercase type, flat brand-blue/yellow blocks, marquee carousels, accordions.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing intended look and behavior, not production code to copy directly. The task is to **recreate this design in the target codebase's environment** (React, Next.js, plain HTML/CSS, etc.) using its established patterns — or, if no environment exists yet, choose an appropriate framework (a static site with a small amount of JS is sufficient; Next.js or Astro are good fits).

`Encrypt the Mempool Redesign.dc.html` is a design-tool document: the design lives inside a `<section>` wrapper with a review badge ("1c") — **ignore the wrapper chrome** (`.dv-turn`, `.dv-thd`, `.dv-opts`, `.dv-olabel`, badge links). The page itself is the single `.dv-card` div (width 1120px) and everything inside it. The `<script type="text/x-dc">` block at the bottom holds all page data (members, contributors, X posts, FAQ content, reasons) and accordion state logic — treat it as the data source + behavior spec.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and copy are final. Recreate pixel-perfectly. The design is authored at a fixed 1120px width; responsive adaptation below that is up to the implementer (not designed).

## Design Tokens
- Brand blue: `#0044a4` (hero bg, accents, links, "Your org" tile)
- Dark navy: `#00275e` (page top-level bg blocks where used)
- Brand yellow: `#fde12d` (primary buttons, hero "Encrypt" bar)
- Ink: `#14161f` (text, borders on white)
- Body gray: `#33363f`; muted gray: `#75756e`; hairlines: `#d8d8d2` / `#e6e6e0`; hover tint: `#eef3fa`
- White text on blue: `#fff`, subdued `rgba(255,255,255,.9)` / `.8` / `.65` / `.25` (dividers)
- Fonts (Google Fonts): **Archivo** (500–900) — all headings, body, buttons; **IBM Plex Mono** (400–600) — eyebrows, meta labels, marquee names. Headings: 800 weight, uppercase, 40px section headers; hero h1 900.
- Buttons: flat rectangles, no radius, `font: 800 Archivo`, yellow bg `#fde12d` + ink text (primary) or 2px solid border (secondary)

## Screens / Views — single page, sections top to bottom

1. **Hero** (blue `#0044a4`, centered, no header/nav): Ethereum diamond symbol image (`assets/eth-diamond.png`, ~110px wide, centered) → h1 "Encrypt / the Mempool!" (Archivo 900, ~100px/0.94, white; "Encrypt" sits in a yellow `#fde12d` bar tilted ~-3deg, ink text, tilted with the bar) → subhead 20px ("front running" wrapped in `white-space:nowrap`) → two buttons: "JOIN THE EFFORT" (yellow) + "WTF IS AN ENCRYPTED MEMPOOL?" (white 2px outline) → full-width member-name marquee strip (IBM Plex Mono 13px, white .65, names separated by vertical hairlines, infinite scroll leftward, ~70s loop, seamless via duplicated track).
2. **Every Ethereum user has felt this** (white): 2-col grid — left 40px uppercase heading with "felt this." highlighted in yellow; right body copy (17px/1.65), 4 paragraphs (see HTML for exact copy).
3. **The Human Cost of Toxic MEV :(** (blue): centered 40px heading, mono sub "receipts from the public mempool", grid of evidence cards (white, screenshot images from `assets/`, uniform headline spacing) + closing tile "It doesn't have to be this way."
4. **WTF is an Encrypted Mempool?** (white): centered heading, embedded YouTube video `https://www.youtube.com/embed/KTsLMTqux1s` (16:9, max-width ~860px), 3 step chips below (ink bg, white text): encrypted at wallet → hidden in mempool → decrypted once locked in.
5. **7 Reasons** (white): accordion list, 3px ink rules between rows; row = big blue number (Archivo 900 44px) + 24px uppercase title; click toggles explanation paragraph; one open at a time (`openReason` state, default first open). Full explanations are in the data block.
6. **I'm in! How Can I Support?** (blue): heading + 3 cards (white bg, ink text): Tech WG (next meeting Wed 22 July 15:00 UTC, calendar link `https://github.com/shutter-network/encrypted-mempool-pm/issues/13`), Biz/Marcomms WG (29 July, same link), Share cards with prefilled intents:
   - X: `https://x.com/intent/post?text=…` (exact URL in HTML)
   - Farcaster: `https://farcaster.xyz/~/compose?text=…`
   All card buttons yellow.
7. **Coalition Members** (white): 6-column grid, 14px gap, max-width 900px; square logo tiles (`assets/logos/*.png`, object-fit cover, full-bleed, no borders), each links to member site (23 members, URLs in data block); final tile blue "Your org here → Join us".
8. **Contributors & Supporters** (white): 3-column list of ~50 names (bold name linking out, gray org). Below: **two X-post marquee carousels** — top row scrolls left, bottom row scrolls right (`animation-direction` reversed), posts split alternately. Card: 380×560, 2px ink border, avatar (38px circle) + author + @handle + "View on X ↗", full post text (pre-line), media image (object-fit contain, top-aligned) when present. 19 posts; images/avatars in `assets/xposts/`.
9. **FAQ / Resources / News** (white, 2-col + full-width news): FAQ accordion (4 Q&As, full answer copy in data block, +/– toggle, one open at a time); Resources link list (LUCID EIP, EIP FAQs, WG recordings, Dune sandwiches dashboard); News and Updates 2-col link list (10 items with source labels).
10. **Footer CTA** (yellow): 40px "Want to get involved?", buttons "DM US ON X" (ink bg) → `https://x.com/encryptmempool` and "DONATE ON GIVETH" (outline) → Giveth project URL; mission paragraph + brainbot/Shutter credit line.

## Interactions & Behavior
- Marquees: CSS `@keyframes` translateX(0 → -50%) on a duplicated track, `linear infinite`, ~70s; hero strip + two X-post rows (second row reversed). Consider pause-on-hover as an enhancement.
- Accordions (7 Reasons, FAQ): single-open, click header toggles, symbol `+`/`–`. State: `openReason: number` (default 0), `faqOpen: number` (default -1/closed).
- All member tiles, contributor names, X cards, resources, news items are external links (open in new tab recommended).
- No form inputs, no routing — single static page.

## State Management
Two integers (`openReason`, `faqOpen`). Everything else is static data — see the arrays in the `data-dc-script` block: `members[]`, `contributors[]`, `xposts[]`, `faqs[]`, `reasons[]`, `resources[]`, `news[]`, share-intent URLs.

## Assets (all included in this bundle)
- `assets/eth-diamond.png` — hero diamond symbol (transparent)
- `assets/logos/*.png` — 23 coalition member logos
- `assets/xposts/*.jpg` — X post media (13) + avatars (`av-*.jpg`, 19)
- Evidence screenshots for "Human Cost" section in `assets/`
- Fonts via Google Fonts CDN (Archivo, IBM Plex Mono)

## Files
- `Encrypt the Mempool Redesign.dc.html` — the design (markup inside `.dv-card`, data + logic in the `data-dc-script` block)
- `support.js` — design-tool runtime; **do not port**, reference only
