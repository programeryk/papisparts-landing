# PapisParts — Landing Page

A production landing page I built and maintain for a small automotive parts business in Drawsko Pomorskie, PL — live at [papisparts.com](https://www.papisparts.com).

The goal is simple: clean UI, fast load, mobile-first layout, and a contact flow that actually converts (call, WhatsApp and a contact form, all one tap away).

## What's inside

- Responsive, mobile-first single page with a sticky header and in-page navigation
- Polish, English and Ukrainian, with a language switcher in the header
- Swipeable hero carousel (touch, mouse and keyboard; pauses on hover and respects reduced motion)
- Contact form via EmailJS, with validation, a honeypot and client-side rate limiting
- Google Maps location, opening hours and contact details from one config file
- SEO: Metadata API, Open Graph, `hreflang` alternates, generated `sitemap.xml` / `robots.txt`, `AutoPartsStore` JSON-LD
- Optimized local images (AVIF/WebP via `next/image`) and self-hosted fonts (`next/font`)

## Tech

- Next.js 16 (App Router, static export of every route)
- React 19 + TypeScript (strict)
- Tailwind CSS 4 with brand design tokens
- Motion for scroll and entrance animations
- Biome for linting and formatting
- EmailJS for the contact form

## Project layout

```text
app/[lang]/   root layout and page, rendered once per language
app/          sitemap, robots, global 404
components/   page sections and small shared UI (Reveal, ButtonLink, SectionHeading)
i18n/         locale config, JSON dictionaries, formatting helpers
lib/site.ts   single source for business data: phone, address, hours, links
public/       logo, OG image and photos
```

Business details live only in `lib/site.ts` — change a phone number or opening hours there and every section, the footer and the JSON-LD follow. All copy lives in `i18n/messages/*.json`.

## Languages

Polish is the default and is served at `/`; other languages get a prefix (`/en`, `/uk`). Every language is prerendered as static HTML.

`i18n/messages/pl.json` is the source of truth: its shape is the `Messages` type, so a translation that misses a key fails the typecheck. Copy is nested by section (`hero.title`, `form.errors.emailInvalid`) and uses `{placeholder}` values; counts go through `Intl.PluralRules` and decimals through `Intl.NumberFormat`, so `4.8` renders as `4,8` where it should.

Server components read their dictionary with `getI18n()`; client components get only the slice they need as props.

To add a language:

1. Add its code to `locales` and its name and Open Graph locale to `localeInfo` in `i18n/config.ts`.
2. Copy `pl.json` to `i18n/messages/<code>.json` and translate it.
3. Register it in `dictionaries` in `i18n/messages.ts`.

The switcher, routes, `hreflang` tags and sitemap pick it up from there.

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in the EmailJS keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Without the EmailJS keys the site works normally; the form shows a friendly "unavailable" message instead of sending.

## Scripts

| Script              | What it does                             |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Dev server                               |
| `npm run build`     | Production build                         |
| `npm run lint`      | Biome lint + format check                |
| `npm run format`    | Apply Biome fixes and formatting         |
| `npm run typecheck` | Generate Next route types, run `tsc`     |
| `npm run check`     | Lint, typecheck and build — what CI runs |

## Notes

This repo is intentionally "boring": it's a real website, so I focused on readability, performance, and not overengineering it.

If you want to reuse it for your own site, swap the data in `lib/site.ts`, the assets in `public/`, and plug in your own EmailJS config.
