# PapisParts — Landing Page

A production landing page I built and maintain for a small automotive parts business (Drawsko Pomorskie, PL).

The goal was simple: clean UI, fast load, mobile-first layout, and a contact flow that actually converts (form + direct links).

![PapisParts preview](./public/preview.png)

## What’s inside

- Responsive landing page (mobile-first)
- Contact form (EmailJS)
- Map section + contact details
- Simple motion/animations (Framer Motion)
- Basic SEO setup (metadata + sitemap)

## Tech

- Next.js
- React
- Tailwind CSS
- Framer Motion
- EmailJS

## Run locally

### 1) Install
```bash
npm install
````

### 2) Configure env

Create `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```

### 3) Start dev server

```bash
npm run dev
```

Open:

* [http://localhost:3000](http://localhost:3000)

## Notes

This repo is intentionally “boring”: it’s a real website, so I focused on readability, performance, and not overengineering it.

If you want to reuse it for your own site, swap content/assets and plug in your own EmailJS config.
