# fermor-task

# Fermor Marketing Homepage

A marketing homepage for [Fermor](https://fermor.in): an Indian fintech product for people who want to understand, act, and grow financially without the usual noise.

**Live URL:** _Add your Vercel deployment URL after deploy._

## Stack

- Next.js 16 (App Router) + TypeScript (strict)
- Tailwind CSS v4 (tokens in `app/globals.css`)
- framer-motion (scroll reveals; honors `prefers-reduced-motion`)
- lucide-react (icons)
- next/font/google: Instrument Serif, Inter, IBM Plex Mono

No UI kits. Layout, type, and motion are hand-tuned.

## Setup

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm start
```

## Design decisions

**Calm Wealth.** Cream, forest, and mint instead of fintech neon or generic SaaS blue. The page should feel like a serious product company, not a landing-page template.

**Typography.** Serif for conviction (headlines, quotes), sans for reading, mono only where numbers and labels need precision (net worth, stats, marquee).

**Product story.** The page answers three questions in order: what Fermor is (hero + why), how it helps (Understand / Act / Grow + how it works), why it is safe (security), and how to join (CTA). That mirrors how a founder would pitch the product in a meeting.

**Placeholders.** Waitlist stats and testimonials are marked in source as assignment placeholders. Replace metrics before a public launch.

## Assignment checklist (Frontend Developer Assignment)

| Requirement | Status |
|-------------|--------|
| Polished, professional homepage | Built |
| Clear what Fermor is and who it is for | Hero + Why Fermor call out India / working professionals |
| Your own layout, content, UX | Calm Wealth editorial system (not a component library clone) |
| Responsive desktop + mobile | Tested at 320px–1440px |
| Typography, spacing, hierarchy | Serif/sans/mono roles, section rhythm, editorial pillars |
| Working implementation | Waitlist form, accordion, mobile nav, scroll UX |
| GitHub repo | This repository |
| Live deploy | Deploy to Vercel (steps below) |
| README with setup + decisions | This file |

## Deploy on Vercel

1. Push to GitHub.
2. [Import the repo](https://vercel.com/new) (Next.js preset).
3. Deploy and add the production URL at the top of this README.

## Quality checks

```bash
npm run build
npm run lint
```
