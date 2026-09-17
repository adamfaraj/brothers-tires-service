# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Plain HTML/CSS/JS built with Vite (no framework). `src/` is the Vite root, `public/` holds static assets, `dist/` is the build output. Deploys to AWS Amplify Hosting via `amplify.yml`. Decided directly by the user, not delegated.

## Users

- **Walk-in / same-day drivers**: local drivers with an urgent tire or repair need, deciding fast, often on mobile. Need phone/address/hours/Book Now within one glance.
- **Price-conscious new & used tire buyers**: comparing shops on tire pricing and selection before committing; Brothers Tire sells both new and used tires.
- **Spanish-speaking customers**: staff speaks Spanish ("Hablo Espanol"). This should be a visible bilingual signal near contact/positioning content, not a fully translated site.

## Product Purpose

Brothers Tire LLC is a tire dealer and repair shop in Durham, NC. The site's job is to get a local driver with a tire or car-repair need to call or book an appointment (via KurumaWorks) as quickly as possible, while establishing that the shop handles both tires and broader mechanical work.

## Positioning

"At our tire and wheel alignment shop, we pride ourselves on providing excellent service to keep your vehicle running smoothly. Our team of experienced technicians offers a range of tire services, including mounting, balancing, and puncture repairs. We also provide first-level wheel alignment services to help improve your vehicle's handling and extend the life of your tires. In addition, we provide brake and suspension repairs to ensure your vehicle stays on the road. Hablo Espanol"

Meaningfully different from a tire-only competitor: sells both new and used tires, offers no-credit-needed financing, and covers general mechanical repairs (brakes, suspension, diagnostics) alongside tires, not just tire mounting/balancing.

## Operating Context

- Walk-in shop with service bays; customers bring vehicles in person for tire/repair work.
- Hours: Mon-Fri 8am-6pm, Sat 8am-3pm, Sun 9am-2pm.
- Address: 2820 Hillsborough Rd, Durham, NC 27705.
- Phone: (984) 888-0002.
- Bookings are taken through KurumaWorks (external booking platform), not a native on-site booking form.
- Financing is applied for in-store (not an online checkout flow).

## Capabilities and Constraints

- Services offered: Tires (new and used), air & cabin filter replacement, air conditioning, auto engine diagnostic, brakes, general repairs, oil change, steering & suspension repair, wheel alignment.
- Financing: Brothers Tire offers no-credit-needed, lease-to-own financing through **Snap Finance** and **Koalafi**, applied for in-store. Confirmed terms are limited to "no credit needed" and "apply in-store" — do not invent APRs, amounts, approval odds, or other financing terms. Present as an on-brand site section in the site's own design system; do not embed the third-party Snap Finance / Koalafi flyer images (`public/snap.webp`, `public/koalafi.webp`) directly, since they carry their own unrelated branding.
- Booking button behavior: every "Book Now" / "Book Us on Kuruma" button links to `https://kurumaworks.com/mechanics/nc/durham/brothers-tires-service`, opens in a new tab (`target="_blank" rel="noopener noreferrer"`), and is wired through a single JS constant (`KURUMA_URL`) so the id can be swapped later.
- Distinct `.btn-kuruma` style required: solid KurumaWorks blue (#2663eb) fill / white text at rest, inverting to white fill / KurumaWorks-blue border+text on hover. Must look visually distinct from the site's own brand color everywhere else.
- Footer must credit "Built by KurumaWorks" linking to https://kurumaworks.com in a new tab, next to the copyright line.
- Google Analytics via gtag.js, measurement ID `G-S97T77J6QW`, placed as high in `<head>` as possible.
- Domain: https://brothers-tires-service.com
- No emdashes anywhere in copy.
- No fabricated content: no stock photos standing in for the business's own people/vehicles/space, no invented testimonials, reviews, pricing, or credentials.

## Brand Commitments

- Existing logo: `public/logo.png` — red/black/white tire-and-wheel mark with "BROTHERS TIRE" wordmark and "NEW & USED TIRES" banner. This is the business's real, established mark; preserve its colors/identity rather than redesigning it.
- Real photo of the shop exterior available: `public/outside.webp` (storefront with service bay, red door, stone facade, "Brothers Tire" banner sign).
- This project follows the same standing pattern as the user's other KurumaWorks-booking marketing sites (established on the "Blue's Automotive" site): Vite + AWS Amplify deploy, Impeccable-driven design, consistent KurumaWorks booking integration. See `SITE_PROMPT.MD` at the repo root for the full reusable template.

## Evidence on Hand

- Real: shop exterior photo (`public/outside.webp`).
- Real: logo (`public/logo.png`, `public/logo.jpg`).
- Not available: no team/staff photos, no service-bay interior photos beyond what's visible through the open bay door in `outside.webp`, no customer testimonials, no review ratings, no pricing sheet, no certifications/credentials. Do not fabricate any of these; if the design calls for e.g. a reviews section, flag it as a gap instead of inventing content.
- Third-party assets present but not to be used as page imagery: `public/snap.webp`, `public/koalafi.webp` (Snap Finance / Koalafi promotional flyers) — informed the confirmed financing fact above only.

## Product Principles

1. Speed to contact wins: a driver with an urgent tire problem should reach a phone number or Book Now button within one glance, at every viewport.
2. Real substance over polish theater: only ship content backed by a confirmed fact or real asset; an honest gap beats an invented placeholder.
3. Tires-plus-repair, not tires-only: the site should read as a full-service mechanical shop that happens to specialize in tires, not a tire-only storefront.
4. Financing and bilingual service are real differentiators worth surfacing, not footnotes.
5. KurumaWorks booking is a distinct, secondary action from the shop's own brand voice/color — never blended into the primary palette.

## Accessibility & Inclusion

Bilingual service (English/Spanish) is a confirmed, real capability and should be surfaced as a visible signal (e.g. near contact info or positioning copy), not a fully translated site.
