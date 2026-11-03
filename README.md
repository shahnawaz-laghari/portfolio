# Mobile App Developer Portfolio

A Next.js (App Router) portfolio site.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## How to edit content

All content lives in `src/data/`:
- `profile.ts` — name, title, bio, socials, resume link, stats
- `projects.ts` — project entries and case studies
- `skills.ts` — skill groups
- `experience.ts` — timeline entries
- `testimonials.ts` — testimonials

Update these files to customize the site. Theme colors are defined as CSS variables in `src/app/globals.css`.

## Build

```bash
npm run build
```