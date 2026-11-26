# Mobile App Developer Portfolio

A Next.js (App Router) portfolio for a mobile-first developer who also builds web apps.
Dark-first theme with a light mode, Framer Motion + Lottie animations, and typed content files.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## How to edit content

All content lives in `src/data/`:

- `profile.ts` — name, title, bio, socials, resume link, stats
- `projects.ts` — project entries, screenshots and case studies
- `skills.ts` — skill groups (also feeds the marquee)
- `experience.ts` — timeline entries


## Environment variables

See `.env.example`. `NEXT_PUBLIC_SITE_URL` drives canonical/OG/sitemap URLs; on Vercel,
`VERCEL_URL` is used automatically when it is not set. The contact form needs
`RESEND_API_KEY` to send real email — without it, submissions are logged to the server
console and the form still reports success.

## Build

```bash
npm run build
```
