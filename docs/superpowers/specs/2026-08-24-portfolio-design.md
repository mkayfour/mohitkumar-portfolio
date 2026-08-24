# mkayfour.in — Personal Portfolio Redesign

**Date:** 2026-08-24
**Owner:** Mohit Kumar Srivastava
**Live URL:** https://www.mkayfour.in/ (Vercel)

## Goal

Replace the current "under construction" placeholder with a real, single-page
personal portfolio in a Notion-like minimal aesthetic, rebuilt on the latest
Next.js. Content is sourced from Mohit's LinkedIn profile (and later résumé).

## Reference / aesthetic

Modeled on the "SimpFolio / Devscale" minimalist developer template:

- Monochrome — black / white / greys — with a single small accent (green status dot).
- Generous whitespace, subtle 1px borders, large typographic hero with mixed
  black/grey weights, pill buttons with a status dot.
- "Notion-like": clean sans-serif, calm, content-first, lots of breathing room.

## Foundation / tech decisions

- **Framework:** Latest **Next.js (App Router)**, React 19, TypeScript — fresh
  scaffold (discard the old `pages/` placeholder).
- **Styling:** **Tailwind CSS v4**.
- **Theme:** **Light-first** with a **dark toggle** via `next-themes`
  (persisted, no flash-of-wrong-theme).
- **Motion:** **Subtle** — fade/slide-in on scroll (Intersection Observer or a
  lightweight approach), smooth hover states. No parallax/heavy motion. Respect
  `prefers-reduced-motion`.
- **Deployment:** Vercel (unchanged).
- **SEO:** Next.js Metadata API — title, description, Open Graph, favicon
  (carry over intent from current `MY_SEO`).

## Architecture

Single route (`/`) composed of section components. All content lives in a typed
`data/` module so updates are data-only edits (no JSX changes).

```
app/
  layout.tsx        # html shell, fonts, theme provider, metadata
  page.tsx          # composes sections in order
  globals.css       # tailwind + base tokens
components/
  Header.tsx        # sticky nav + theme toggle + "Let's Connect"
  Hero.tsx
  Experience.tsx
  Projects.tsx
  Blog.tsx
  Contact.tsx       # + footer
  ThemeToggle.tsx
  ui/               # small primitives (Pill button, Tag, SectionHeading, etc.)
data/
  profile.ts        # name, role, tagline, bio, socials, email
  experience.ts
  projects.ts
  blog.ts           # curated Medium post links
  skills.ts         # grouped skill keywords (used in hero + tags)
lib/
  types.ts          # shared TS types for the data modules
public/
  images/           # avatar, project icons/og image
```

**Component boundaries:** each section is a presentational component consuming
typed data from `data/`. Presentation and content stay fully separated.

## Sections (single page, in order)

### Header (sticky)
- Left: `MK` name-mark / logo.
- Nav: About · Experience · Projects · Blog (anchor links, smooth scroll).
- Right: "Let's Connect" pill (→ email) + theme toggle.

### 1. Hero
- Oversized typographic headline (mixed black/grey weights).
- Avatar + name + role + social icons row.
- Short intro paragraph with **bolded** skill keywords.
- Two CTAs: "Let's Talk With Me" (dark pill w/ green dot → email) and
  "Find Out More" (outline → scrolls to Experience).

### 2. Experience (timeline)
- Vertical timeline with dots; current role expanded with description +
  highlight bullets + `PRESENT` badge; earlier roles collapsed
  (company · title · date range · location). Dates right-aligned.

### 3. Projects
- Icon-card grid. Each card: icon, title, one-line description, tech tags, and
  link tags (`Website` · `Repository` · `Docs`) rendered only when a link exists.

### 4. Blog
- Card grid styled like the reference, linking out to Medium articles
  (curated in `data/blog.ts`). Top-right "See all on Medium →" →
  https://mkayfour.medium.com/.

### 5. Contact / footer
- Email link + social icons + small credit line.

## Content (from LinkedIn)

**Profile**
- Name: Mohit Kumar Srivastava
- Role: Senior Software Engineer @ Monaire
- Location: Pune, Maharashtra, India
- Tagline: Full-Stack Developer with 7+ years of experience.
- Bio: Full-Stack Developer with 7+ years building products end to end —
  React/Next on the front end, Node/Express and Python (DRF, FastAPI) on the
  back end. Designs and consumes RESTful APIs, and owns UI, structure, and data
  handling. Currently building AI-powered commercial building automation at
  Monaire.
- Socials: LinkedIn (`in/mohit-kumar-srivastava`), GitHub (`mkayfour`),
  Instagram (`mkayfour`), Medium (`mkayfour`). Facebook removed.
- Contact email: `mk4227525@gmail.com`.

**Skills** (grouped for hero + tags)
- Languages: HTML, CSS, JavaScript, TypeScript, Python
- Frontend: React.js, Redux, Next.js
- Backend: Node.js, Express, Django REST Framework, FastAPI
- Databases: PostgreSQL, MySQL, MongoDB, Sequelize ORM
- Cloud/Tools: AWS
- Testing: Mocha, Chai, React Testing Library
- Top skills (highlight): React.js, Node.js, FastAPI, Redux.js, AWS

**Experience**
1. Senior Software Engineer — Monaire (Full-time) — Mar 2024 – Present — Pune, India · Remote — current, expanded. AI-powered commercial building automation (app.monaire.ai).
2. Principal Software Engineer — Procedure (Full-time) — Apr 2022 – Mar 2024 — Bengaluru, India · Remote — AWS, React.js.
3. Software Engineer — Cyphertree Technologies (Full-time) — Oct 2020 – Apr 2022 — Pune, India · Remote — AWS, PostgreSQL. Built CT Forms.
4. Software Developer — zCon Solutions (Full-time) — Mar 2019 – Oct 2020 — Pune, India · On-site — PostgreSQL, React.js.

**Education** (optional small block or omit for v1)
- MIT Academy of Engineering — B.Tech, Computer Engineering — 2014–2018.

**Projects** (seed set — refine with résumé later)
1. Monaire — AI-powered commercial building automation / climate tech.
   Website: https://www.monaire.ai/ (app: https://app.monaire.ai).
2. CT Forms — Google Forms / Typeform-style form builder with insights, drive,
   and video. Website: https://app.forms.cyphertree.com/.
- Additional personal/GitHub projects: TBD — pull from GitHub during content pass.

**Blog** (Medium, curated links — placeholder set until Mohit picks featured posts)
- Profile: https://mkayfour.medium.com/

## Out of scope (v1)

- Blog CMS / MDX pipeline (linking to Medium instead).
- Working contact form / backend (links only).
- Recommendations/testimonials, certifications, languages sections (may add later).

## Success criteria

- `next build` passes with no type errors; deploys clean on Vercel.
- All five sections render with real LinkedIn content and match the monochrome,
  Notion-like reference aesthetic.
- Light/dark toggle works with no flash; responsive from mobile to desktop.
- Subtle scroll-in animations; `prefers-reduced-motion` respected.
- Editing content requires touching only `data/` files.
