# PapisParts — Landing Page

A production landing page I built and maintain for a small automotive parts business in Drawsko Pomorskie, PL — live at [papisparts.com](https://www.papisparts.com).

The goal is simple: clean UI, fast load, mobile-first layout, and a contact flow that actually converts (call, WhatsApp and a contact form, all one tap away).

## What's inside

- Responsive, mobile-first single page with a sticky header and in-page navigation
- Swipeable hero carousel (touch, mouse and keyboard; pauses on hover and respects reduced motion)
- Contact form via EmailJS, with validation, a honeypot and client-side rate limiting
- Google Maps location, opening hours and contact details from one config file
- SEO: Metadata API, Open Graph, generated `sitemap.xml` / `robots.txt`, `AutoPartsStore` JSON-LD
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
app/          layout, page, metadata, sitemap, robots, OG image
components/   page sections and small shared UI (Reveal, ButtonLink, SectionHeading)
lib/site.ts   single source for business data: phone, address, hours, links
public/       logo and images
```

Business details live only in `lib/site.ts` — change a phone number or opening hours there and every section, the footer and the JSON-LD follow.

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
