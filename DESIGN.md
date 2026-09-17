---
name: Brothers Tire LLC
description: Shop-sign graphics for a Durham tire and repair shop — bold cut-vinyl lettering, flat red/black/white ink, and trimmed-corner panels lifted from the real banner on the shop wall.
colors:
  signal-red: "#d82629"
  signal-red-dark: "#a91d20"
  open-green: "#1c6b3c"
  ink: "#1a1613"
  ink-soft: "#47403b"
  paper: "#ffffff"
  concrete: "#efeae1"
  concrete-deep: "#e2dbcd"
  hairline: "rgba(26, 22, 19, 0.14)"
  kuruma-blue: "#2663eb"
  kuruma-blue-dark: "#1e4db7"
typography:
  display:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "clamp(3rem, 9vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Barlow, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Barlow, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    letterSpacing: "0.08em"
rounded:
  none: "0px"
spacing:
  1: "0.5rem"
  2: "1rem"
  3: "1.5rem"
  4: "2rem"
  5: "3rem"
  6: "4.5rem"
  7: "6.5rem"
components:
  button-primary:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.9rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.signal-red-dark}"
  button-kuruma:
    backgroundColor: "{colors.kuruma-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.9rem 1.6rem"
  button-kuruma-hover:
    backgroundColor: "{colors.kuruma-blue-dark}"
---

# Design System: Brothers Tire LLC

## Overview

**Creative North Star: "Shop-Sign Graphics"**

The real hand-lettered vinyl banner on the shop wall (visible in `public/outside.webp`) is the whole design system, not a reference for one. Everything on the page is built the way a sign shop builds a banner: bold, blocky, even-stroke lettering; a strict flat ink palette; and edges cut, not rounded. The build refuses the tire-shop category default of soft SaaS gradients, rounded pill buttons, and icon-grid feature blocks; there are zero gradients, zero box-shadows, and zero glassmorphism anywhere in the shipped CSS.

The system is loud where it needs to be (the hero letter-stack, the red ink blocks) and gets out of the way everywhere else: white and warm concrete grounds, hairline rules standing in for grommet lines, and Barlow doing plain, legible work at UI scale. Signal red is rationed to ink blocks — hero accents, tags, dividers, CTA panels — not washed across backgrounds.

**Key Characteristics:**
- Flat ink blocks in red, black, and white; no gradients, no glass, no soft drop shadows anywhere in the build.
- A single recurring trimmed-corner "cut vinyl" notch (clip-path) unifies buttons, banners, and panels.
- Anton for all display lettering (always uppercase, tight leading); Barlow for everything read at body/UI size.
- The real shop photo (`outside.webp`) is bled to the hero edge as proof-of-place, never used as a background wash.

## Colors

Ink-and-paper palette sampled directly from the shop's own logo, with red rationed as the loud accent against white and warm concrete grounds.

### Primary
- **Signal Red** (#d82629): the brand ink, sampled straight from `public/logo.png`. Owns the hero banner strip, CTA buttons, tag chips, section-title accents on hover, and the trimmed-corner accent panels. Rest state for `.btn-primary`.
- **Signal Red Dark** (#a91d20): hover/pressed state for red buttons and links; also the "closed now" status color in the quick-facts strip.

### Secondary
- **KurumaWorks Blue** (#2663eb): reserved exclusively for the `.btn-kuruma` booking button (solid fill, white text at rest, darkening to KurumaWorks Blue Dark on hover). Never appears anywhere else in the palette. See Named Rule below.
- **KurumaWorks Blue Dark** (#1e4db7): hover/pressed state for `.btn-kuruma`; text stays white, only the fill and border darken. Never used at rest.

### Neutral
- **Ink** (#1a1613): primary text color, footer background, mobile "Call" bar button, and one alternating color of the four-panel "why" board.
- **Ink Soft** (#47403b): secondary/lede body copy, dimmer than full ink.
- **Paper** (#ffffff): base page background, button/panel text-on-dark, header background.
- **Concrete** (#efeae1): background for the "Why" and "Financing" sections — the warm off-white ground that separates them from the white hero/services sections.
- **Concrete Deep** (#e2dbcd): reserved deeper concrete step; declared alongside Concrete for the same warm-neutral family.
- **Hairline** (rgba(26,22,19,0.14)): all rule dividers — header border, quickfacts divider, board grid lines, footer rule. Stands in for a grommet line rather than a structural border.

### Status accent
- **Open Green** (#1c6b3c): used once, for the live "Open now" quick-facts state (computed in `main.js` from shop hours). Not part of the decorative palette; functional only.

### Named Rules
**The Kuruma-Blue Separation Rule.** KurumaWorks blue (#2663eb) is a foreign, non-brand color by design, reserved only for the external booking action (`.btn-kuruma`). It must never be blended into the red/ink/concrete palette or reused for any other purpose — its visual distinctness is the point, marking "this leaves the shop's own brand voice."

**The Rationed Red Rule.** Signal red reads as ink, not wallpaper: it appears in bounded blocks (buttons, tags, banner strips, alternating why-panels) against white or concrete grounds, never as a full-bleed background wash.

## Typography

**Display Font:** Anton (with 'Arial Narrow', sans-serif fallback)
**Body Font:** Barlow (with sans-serif fallback)

**Character:** Anton is tall, bold, even-stroke block lettering that reads like cut vinyl; it is used exclusively uppercase and exclusively for short runs (titles, phone numbers, board labels). Barlow's own type history starts from American route-signage lettering, so it carries the same sign-shop DNA at a size built for reading, not shouting.

### Hierarchy
- **Display** (400, `clamp(3rem, 9vw, 6rem)`, line-height 0.92): the hero `<h1>` letter-stack ("Brothers" / "Tire"), animated in on load.
- **Headline** (400, `clamp(2rem, 5vw, 3.25rem)`, line-height 1): every `.section__title`, uppercase, tight letter-spacing (-0.01em).
- **Title** (400, 1.15–1.85rem, Anton): board-item labels and why-panel words; same face, smaller scale.
- **Body** (400, 1.125rem/1rem, line-height 1.5): lede paragraphs and running copy, Barlow, max 62ch.
- **Label** (700, 0.7–0.95rem, letter-spacing 0.06–0.08em, uppercase): quickfacts labels, board tags, financing chips, nav links — always Barlow bold, always uppercase, always tight-tracked.

### Named Rules
**The All-Caps Display Rule.** Anton is never set in mixed case; every instance in the build is uppercase, matching cut-vinyl sign lettering.

## Layout

Content is capped at a 1280px (`--max`) centered container with 1.5rem inline padding on mobile. Vertical rhythm runs on a seven-step spacing scale (`--space-1` 0.5rem through `--space-7` 6.5rem), with sections padded 4.5rem top/bottom (`--space-6`).

The hero is a two-column grid (1.15fr copy / 0.85fr photo) that collapses to a single column under 900px. The services board is a bordered 3-column grid (2-column under 780px, 1-column under 520px). The "why" board is a 4-panel grid (2-column under 900px, 1-column under 520px). The header is sticky (76px desktop / 64px mobile) and below 720px a fixed bottom action bar (Call / Book Now) takes over as the primary conversion surface, with the header's own CTA hidden in favor of the swapped-in logo mark. All essential facts (hours/status, address, service list, phone) are packed into the first-viewport quickfacts strip and service tag list, matching the direction contract's density requirement — nothing critical requires a scroll.

## Elevation & Depth

Fully flat. There is no `box-shadow` anywhere in the stylesheet, no gradients, and no blur. Depth and hierarchy come entirely from flat color blocking (ink-on-paper, red-on-paper) and the trimmed-corner clip-path silhouette, not from simulated lighting.

### Named Rules
**The No-Shadow Rule.** Surfaces never lift with a shadow. Separation between elements is carried by flat color contrast and hairline rules only.

## Shapes

Zero border-radius anywhere (`rounded: none` is the only value in use) — corners are either square or cut. The signature device is a one-corner "cut vinyl" notch: a `clip-path` polygon that trims a single corner (bottom-right on buttons and the hero banner chip; bottom-left on why-panels and financing chips), sized by a shared `--notch` token (14px). This notch appears on `.btn`, `.hero__banner`, `.whyboard__panel`, and `.financing__brand` — it is the one recurring signature silhouette, not a one-off.

The hero emblem is the sole exception to square-cut geometry: a circular medallion (88px, 3px ink border, white ground) framing the logo mark, echoing a shop badge rather than a vinyl cut. Hairline rules (1px, `rgba(26,22,19,0.14)`) substitute for grommet lines at every structural seam: header bottom, quickfacts divider, board grid, footer rule.

## Components

### Buttons
- **Shape:** square with one trimmed corner (`clip-path` notch, 14px), never rounded.
- **Primary:** solid signal red (#d82629) fill, white text, 2px red border, `0.9rem 1.6rem` padding, uppercase Barlow bold with 0.02em tracking.
- **Kuruma (booking):** solid KurumaWorks blue (#2663eb) fill / white text at rest; fill and border darken to #1e4db7 on hover, text stays white. Reserved exclusively for booking CTAs (see Named Rule under Colors).
- **Hover / Focus:** primary darkens to #a91d20, kuruma darkens to #1e4db7; all buttons shift 1px down on `:active`. Focus-visible gets a 3px solid red outline offset 3px, applied globally, except `.btn-kuruma`, which swaps to a white outline since red-on-kuruma-blue falls well under 3:1 contrast. Every button hover darkens fill and border together rather than inverting to a light background, so the notch's cut edge never loses its border color.
- **Mobile bar variant:** the fixed bottom bar's "Call" button drops the notch entirely (`clip-path: none`) and squares off — the one place the signature device is intentionally absent, for a full-bleed dual-button dock.

### Chips
- **Style:** solid ink or solid red background, white text, no border, no radius, small uppercase Barlow-bold label (0.7rem, 0.06–0.08em tracking). Used for board-item tags (red) and hero service tags (ink).
- **State:** static/decorative only; no interactive or selected state.

### Cards / Containers
- **Corner Style:** square, except the four "why" panels and financing brand chips, which carry the single trimmed-corner notch.
- **Background:** white (hero, services, visit) or concrete (#efeae1, why + financing sections) — sections alternate ground color rather than using cards-on-white.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** the services board is enclosed in a 2px solid ink border with 1px hairline cell dividers; no other container is bordered.
- **Internal Padding:** section padding is `--space-6` (4.5rem) vertical; board/panel cells use `--space-3`–`--space-4`.

### Navigation
- **Style:** sticky header, white background, 1px hairline bottom border. Nav links are uppercase Barlow bold (0.95rem, 0.02em tracking) with a red underline-on-hover and red text-on-hover. Below 860px the inline nav is dropped entirely (phone + Book Now remain); below 720px a fixed bottom action bar (Call / Book Now) becomes the primary nav surface, and the full wordmark logo swaps for the 36px icon mark below 640px.

### Hero Letter-Reveal (signature component)
The hero `<h1>` splits "Brothers" (ink) and "Tire" (red) into separate `<span>`s that animate in with a 640ms cubic-bezier translate/opacity reveal, staggered 140ms — the one authored motion moment in the build, evoking each word being laid down like a vinyl cut letter. Respects `prefers-reduced-motion: reduce` by disabling the animation entirely.

## Do's and Don'ts

### Do:
- **Do** keep all display type (Anton) uppercase; it is never set in mixed or lower case anywhere in the build.
- **Do** use the single-corner clip-path notch (14px) as the one recurring signature silhouette for buttons, banners, and accent panels — not a generic rounded radius.
- **Do** ration signal red to bounded ink blocks (buttons, tags, banners, alternating panels), not full backgrounds.
- **Do** keep KurumaWorks blue (#2663eb) confined to booking CTAs only, visually distinct from the shop's own palette everywhere else.

### Don't:
- **Don't** add gradients, glassmorphism, or box-shadow anywhere; the system is flat by commitment, and every current surface ships with zero shadow declarations.
- **Don't** round any corner; the only cut allowed is the single trimmed-corner clip-path notch or, for the hero emblem, a true circle.
- **Don't** blend KurumaWorks blue into the brand palette or reuse it outside `.btn-kuruma`.
- **Don't** treat `--red-deep` (#6e1315) as an active system color: it is declared in `:root` but not used anywhere in the shipped build. Carry it as a reserved/unused token rather than inventing a use for it or removing it silently.
