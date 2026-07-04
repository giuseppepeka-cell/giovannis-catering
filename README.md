# Trattoria Giovanni — Catering Website

Premium Spanish-language catering website for **Trattoria Giovanni** (Italian
restaurant, catering focus in Xalapa, Veracruz).

**Live site:** https://giovanniscatering.netlify.app

## Stack
- **Next.js 16** (App Router) · React 19 · TypeScript · Tailwind CSS v4
- Hosted on **Netlify** (auto-deploys on every push to `main`)
- Booking: **Cal.com** embed · Lead form: **WhatsApp + Web3Forms** · Maps: Google Maps embeds

## Editing content
Almost all text lives in one file: [`src/lib/content.ts`](src/lib/content.ts)
— business info, menu items, packages, locations, FAQs, testimonials, etc.

## Adding photos (no code needed)
Just drop image files into these folders and they appear automatically:
- **Gallery** → `public/gallery/` (any `.jpg/.png/.webp`; shown as a collage)
- **Menu dishes** → `public/menu/` named to match each item (e.g. `pizza.jpg`)
- **Services / hero** → `public/` (referenced from `content.ts`)

## Local development
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (what Netlify runs)
```

## Deploy
Push to `main` → Netlify builds and publishes automatically.
