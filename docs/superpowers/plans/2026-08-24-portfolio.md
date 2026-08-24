# mkayfour.in Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the "under construction" placeholder with a single-page, Notion-like minimal personal portfolio rebuilt on the latest Next.js, populated with Mohit's real LinkedIn content.

**Architecture:** Fresh Next.js App Router app. One route (`/`) composes presentational section components. All content lives in typed `data/` modules so future edits are data-only. Light-first theme with a dark toggle via `next-themes`. Subtle scroll-reveal animations via a small Intersection Observer hook.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, next-themes, next/font (Inter), lucide-react (icons), react-social-icons (existing).

## Global Constraints

- Next.js **16.x**, React **19.x**, Tailwind CSS **4.x**, next-themes **0.4.x**. Node 22.
- App Router only — no `pages/` directory.
- Package manager: **yarn** (repo has `yarn.lock`).
- Monochrome palette (black/white/greys) + single green accent dot `#22c55e`. No other accent colors.
- Light-first theme; dark via `.dark` class on `<html>` (next-themes `attribute="class"`). No flash of wrong theme.
- All displayed content comes from `data/` modules — components contain no hardcoded copy.
- Respect `prefers-reduced-motion` in all animations.
- Contact email: `mk4227525@gmail.com`. Socials: LinkedIn, GitHub, Instagram, Medium (NO Facebook).
- Live URL / OG url: `https://www.mkayfour.in/`.
- Verification for presentational tasks = `yarn tsc --noEmit` clean AND `yarn build` succeeds. Commit after each task.

---

### Task 1: Fresh Next.js 16 scaffold (replace placeholder)

**Files:**
- Modify: `package.json` (replace deps/scripts)
- Create: `tsconfig.json` (overwrite), `next.config.js` (overwrite), `postcss.config.mjs`, `.gitignore` (ensure), `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
- Delete: `pages/` (whole dir), `styles/` (whole dir), `next-env.d.ts` (regenerated), `public/vercel.svg`

**Interfaces:**
- Produces: a booting App Router app at `/` rendering a placeholder `<main>`; Tailwind v4 working; TypeScript configured.

- [ ] **Step 1: Overwrite `package.json`**

```json
{
  "name": "mohitkumar-portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "tsc": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^16.3.2",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "next-themes": "^0.4.6",
    "lucide-react": "^0.400.0",
    "react-social-icons": "^6.0.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "^5.6.0",
    "tailwindcss": "^4.3.3",
    "@tailwindcss/postcss": "^4.3.3"
  }
}
```

- [ ] **Step 2: Remove old placeholder files**

```bash
git rm -r pages styles public/vercel.svg next-env.d.ts
```

- [ ] **Step 3: Overwrite `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 4: Overwrite `next.config.js`**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
```

- [ ] **Step 5: Create `postcss.config.mjs`**

```js
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
```

- [ ] **Step 6: Create `app/globals.css`** (base tokens; full theme comes in Task 2)

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
}

body {
  background: var(--background);
  color: var(--foreground);
}
```

- [ ] **Step 7: Create `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohit Kumar Srivastava",
  description: "Full-Stack Developer with 7+ years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 8: Create `app/page.tsx`**

```tsx
export default function Home() {
  return <main className="p-8 text-2xl font-semibold">Portfolio — coming together.</main>;
}
```

- [ ] **Step 9: Install and verify**

Run:
```bash
yarn install && yarn build
```
Expected: install succeeds; `yarn build` completes with a compiled `/` route, no type errors.

- [ ] **Step 10: Commit**

```bash
git add -A
git commit -m "Scaffold fresh Next.js 16 App Router app"
```

---

### Task 2: Theme system, fonts, design tokens, metadata

**Files:**
- Modify: `app/globals.css` (full token set + dark palette)
- Modify: `app/layout.tsx` (Inter font, ThemeProvider, full metadata + OG)
- Create: `components/ThemeProvider.tsx`

**Interfaces:**
- Produces: `ThemeProvider` (client wrapper around `next-themes`), CSS custom properties `--background --foreground --muted --border --card --accent` available in light and `.dark`, and Tailwind theme tokens `bg-background text-foreground border-border text-muted bg-card`.

- [ ] **Step 1: Overwrite `app/globals.css`**

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --muted: #6b7280;
  --border: #e5e7eb;
  --card: #fafafa;
  --accent: #22c55e;
}

.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
  --muted: #9ca3af;
  --border: #262626;
  --card: #141414;
  --accent: #22c55e;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-muted: var(--muted);
  --color-border: var(--border);
  --color-card: var(--card);
  --color-accent: var(--accent);
  --font-sans: var(--font-inter);
}

* {
  border-color: var(--border);
}

body {
  background: var(--background);
  color: var(--foreground);
  -webkit-font-smoothing: antialiased;
}

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

- [ ] **Step 2: Create `components/ThemeProvider.tsx`**

```tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
```

- [ ] **Step 3: Overwrite `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mkayfour.in"),
  title: "Mohit Kumar Srivastava — Full-Stack Developer",
  description:
    "Full-Stack Developer with 7+ years building products end to end with React, Next.js, Node.js, and Python.",
  openGraph: {
    type: "website",
    url: "https://www.mkayfour.in/",
    title: "Mohit Kumar Srivastava — Full-Stack Developer",
    description:
      "Full-Stack Developer with 7+ years building products end to end with React, Next.js, Node.js, and Python.",
    images: ["/images/main.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Verify**

Run: `yarn tsc --noEmit && yarn build`
Expected: no type errors; build succeeds.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "Add theme system, Inter font, design tokens, and metadata"
```

---

### Task 3: Typed data layer

**Files:**
- Create: `lib/types.ts`, `data/profile.ts`, `data/skills.ts`, `data/experience.ts`, `data/projects.ts`, `data/blog.ts`

**Interfaces:**
- Produces:
  - `lib/types.ts`: `SocialLink`, `Profile`, `SkillGroup`, `ExperienceItem`, `Project`, `ProjectLink`, `BlogPost`.
  - `data/profile.ts`: `export const profile: Profile`
  - `data/skills.ts`: `export const skillGroups: SkillGroup[]`; `export const topSkills: string[]`
  - `data/experience.ts`: `export const experience: ExperienceItem[]`
  - `data/projects.ts`: `export const projects: Project[]`
  - `data/blog.ts`: `export const blog: BlogPost[]`; `export const mediumUrl: string`

- [ ] **Step 1: Create `lib/types.ts`**

```ts
export type SocialPlatform = "linkedin" | "github" | "instagram" | "medium";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  tagline: string;
  bio: string;
  email: string;
  avatar: string;
  socials: SocialLink[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  title: string;
  start: string; // e.g. "Mar 2024"
  end: string; // e.g. "Present"
  location: string;
  current?: boolean;
  summary?: string;
  highlights?: string[];
  tags?: string[];
}

export interface ProjectLink {
  label: "Website" | "Repository" | "Docs";
  url: string;
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
}

export interface BlogPost {
  title: string;
  date: string; // ISO or display string
  tags: string[];
  url: string;
}
```

- [ ] **Step 2: Create `data/profile.ts`**

```ts
import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Mohit Kumar Srivastava",
  role: "Senior Software Engineer @ Monaire",
  location: "Pune, Maharashtra, India",
  tagline: "Full-Stack Developer with 7+ years of experience.",
  bio: "Full-Stack Developer with 7+ years building products end to end — React and Next.js on the front end, Node.js/Express and Python (Django REST Framework, FastAPI) on the back end. I design and consume RESTful APIs and own UI, structure, and data handling. Currently building AI-powered commercial building automation at Monaire.",
  email: "mk4227525@gmail.com",
  avatar: "/images/main.png",
  socials: [
    { platform: "linkedin", url: "https://www.linkedin.com/in/mohit-kumar-srivastava/" },
    { platform: "github", url: "https://github.com/mkayfour" },
    { platform: "instagram", url: "https://www.instagram.com/mkayfour/" },
    { platform: "medium", url: "https://mkayfour.medium.com/" },
  ],
};
```

- [ ] **Step 3: Create `data/skills.ts`**

```ts
import type { SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"] },
  { label: "Frontend", items: ["React.js", "Redux", "Next.js"] },
  { label: "Backend", items: ["Node.js", "Express", "Django REST Framework", "FastAPI"] },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Sequelize ORM"] },
  { label: "Cloud & Tools", items: ["AWS"] },
  { label: "Testing", items: ["Mocha", "Chai", "React Testing Library"] },
];

// Highlighted (bolded) in the hero intro.
export const topSkills: string[] = ["React.js", "Node.js", "FastAPI", "Redux.js", "AWS"];
```

- [ ] **Step 4: Create `data/experience.ts`**

```ts
import type { ExperienceItem } from "@/lib/types";

export const experience: ExperienceItem[] = [
  {
    company: "Monaire",
    title: "Senior Software Engineer",
    start: "Mar 2024",
    end: "Present",
    location: "Pune, India · Remote",
    current: true,
    summary:
      "Building AI-powered commercial building automation with real-world climate impact. Work across the stack to ship reliable product features and robust server-side logic.",
    highlights: [
      "Develop full-stack features for the Monaire platform (app.monaire.ai).",
      "Design and consume RESTful APIs and own data handling end to end.",
      "Collaborate with product and design to ship intuitive, performant UI.",
    ],
    tags: ["React.js", "Node.js", "Python", "FastAPI", "AWS"],
  },
  {
    company: "Procedure",
    title: "Principal Software Engineer",
    start: "Apr 2022",
    end: "Mar 2024",
    location: "Bengaluru, India · Remote",
    tags: ["AWS", "React.js"],
  },
  {
    company: "Cyphertree Technologies",
    title: "Software Engineer",
    start: "Oct 2020",
    end: "Apr 2022",
    location: "Pune, India · Remote",
    tags: ["AWS", "PostgreSQL", "React.js"],
  },
  {
    company: "zCon Solutions",
    title: "Software Developer",
    start: "Mar 2019",
    end: "Oct 2020",
    location: "Pune, India · On-site",
    tags: ["PostgreSQL", "React.js"],
  },
];
```

- [ ] **Step 5: Create `data/projects.ts`**

```ts
import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    name: "Monaire",
    description: "AI-powered commercial building automation with real-world climate impact.",
    tags: ["React.js", "Python", "FastAPI", "AWS"],
    links: [{ label: "Website", url: "https://www.monaire.ai/" }],
  },
  {
    name: "CT Forms",
    description: "A Google Forms / Typeform-style form builder with insights, drive, and video.",
    tags: ["React.js", "Node.js", "PostgreSQL"],
    links: [{ label: "Website", url: "https://app.forms.cyphertree.com/" }],
  },
];
```

- [ ] **Step 6: Create `data/blog.ts`**

```ts
import type { BlogPost } from "@/lib/types";

export const mediumUrl = "https://mkayfour.medium.com/";

// Curated featured posts. Update titles/urls/dates as desired.
export const blog: BlogPost[] = [];
```

- [ ] **Step 7: Verify**

Run: `yarn tsc --noEmit`
Expected: no type errors.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "Add typed data layer for profile, skills, experience, projects, blog"
```

---

### Task 4: UI primitives + scroll-reveal hook

**Files:**
- Create: `lib/cn.ts`, `hooks/useReveal.ts`, `components/ui/Reveal.tsx`, `components/ui/SectionHeading.tsx`, `components/ui/Tag.tsx`, `components/ui/PillButton.tsx`

**Interfaces:**
- Consumes: nothing.
- Produces:
  - `cn(...classes)` — className joiner.
  - `<Reveal delay?={number}>children</Reveal>` — fades/slides children in on scroll; no-op under reduced motion.
  - `<SectionHeading id={string} title={string} action?={ReactNode} />` — anchor target + heading row.
  - `<Tag>{label}</Tag>` — monochrome pill tag.
  - `<PillButton href={string} variant?="solid"|"outline" dot?={boolean} external?={boolean}>` — pill link button.

- [ ] **Step 1: Create `lib/cn.ts`**

```ts
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
```

- [ ] **Step 2: Create `hooks/useReveal.ts`**

```ts
"use client";

import { useEffect, useRef, useState } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}
```

- [ ] **Step 3: Create `components/ui/Reveal.tsx`**

```tsx
"use client";

import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/cn";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 4: Create `components/ui/SectionHeading.tsx`**

```tsx
export function SectionHeading({
  id,
  title,
  action,
}: {
  id: string;
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div id={id} className="mb-8 flex scroll-mt-24 items-baseline justify-between">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {action}
    </div>
  );
}
```

- [ ] **Step 5: Create `components/ui/Tag.tsx`**

```tsx
export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}
```

- [ ] **Step 6: Create `components/ui/PillButton.tsx`**

```tsx
import { cn } from "@/lib/cn";

export function PillButton({
  href,
  children,
  variant = "solid",
  dot = false,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  dot?: boolean;
  external?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors";
  const styles =
    variant === "solid"
      ? "bg-foreground text-background hover:opacity-90"
      : "border border-border text-foreground hover:bg-card";

  return (
    <a
      href={href}
      className={cn(base, styles)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {dot && <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />}
      {children}
    </a>
  );
}
```

- [ ] **Step 7: Verify**

Run: `yarn tsc --noEmit`
Expected: no type errors.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "Add UI primitives and scroll-reveal hook"
```

---

### Task 5: Header (sticky nav + theme toggle)

**Files:**
- Create: `components/ThemeToggle.tsx`, `components/Header.tsx`

**Interfaces:**
- Consumes: `profile.email` (for "Let's Connect"), `PillButton`.
- Produces: `<Header />` — sticky top nav; `<ThemeToggle />` — mounted-safe light/dark button.

- [ ] **Step 1: Create `components/ThemeToggle.tsx`**

```tsx
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full border border-border p-2 text-foreground transition-colors hover:bg-card"
    >
      {mounted && isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
```

- [ ] **Step 2: Create `components/Header.tsx`**

```tsx
import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PillButton } from "@/components/ui/PillButton";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <a href="#top" className="text-lg font-bold tracking-tight">
          MK
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted sm:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <PillButton href={`mailto:${profile.email}`}>Let&apos;s Connect ↗</PillButton>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 3: Verify**

Run: `yarn tsc --noEmit`
Expected: no type errors.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "Add sticky header with nav and theme toggle"
```

---

### Task 6: Hero section

**Files:**
- Create: `components/Socials.tsx`, `components/Hero.tsx`

**Interfaces:**
- Consumes: `profile`, `topSkills`, `PillButton`, `Reveal`.
- Produces: `<Hero />`; `<Socials size?={number} />` — social icon row from `profile.socials`.

- [ ] **Step 1: Create `components/Socials.tsx`**

```tsx
import { SocialIcon } from "react-social-icons";
import { profile } from "@/data/profile";

export function Socials({ size = 32 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      {profile.socials.map((social) => (
        <SocialIcon
          key={social.platform}
          url={social.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: size, width: size }}
          fgColor="#ffffff"
        />
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Create `components/Hero.tsx`** (bolds `topSkills` inside the bio via token replacement)

```tsx
import Image from "next/image";
import { profile } from "@/data/profile";
import { topSkills } from "@/data/skills";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";
import { Socials } from "@/components/Socials";

function renderBioWithHighlights(bio: string) {
  const keywords = ["React", "Next.js", "Node.js", "Python", "FastAPI", "Django REST Framework"];
  const pattern = new RegExp(`(${keywords.map((k) => k.replace(/\./g, "\\.")).join("|")})`, "g");
  return bio.split(pattern).map((part, i) =>
    keywords.includes(part) ? (
      <strong key={i} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export function Hero() {
  return (
    <section id="about" className="scroll-mt-24 pt-16 sm:pt-24">
      <Reveal>
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
          <span className="text-muted">Full-Stack</span> Developer
          <br />
          building for the web.
        </h1>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-12 flex items-center gap-4">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={56}
            height={56}
            className="rounded-full border border-border"
          />
          <div>
            <p className="font-semibold">{profile.name}</p>
            <p className="text-sm text-muted">{profile.role}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
          {renderBioWithHighlights(profile.bio)}
        </p>
      </Reveal>

      <Reveal delay={200}>
        <div className="mt-6">
          <Socials />
        </div>
      </Reveal>

      <Reveal delay={250}>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <PillButton href={`mailto:${profile.email}`} dot>
            Let&apos;s Talk With Me
          </PillButton>
          <PillButton href="#experience" variant="outline">
            Find Out More
          </PillButton>
        </div>
      </Reveal>
    </section>
  );
}
```

- [ ] **Step 3: Verify**

Run: `yarn tsc --noEmit`
Expected: no type errors. (`topSkills` import is intentionally available for future tuning; if lint flags it as unused, inline the highlight keyword list from `topSkills` instead — but current code uses a local keyword list, so remove the `topSkills` import to keep lint clean.)

Correction to apply in Step 2: remove the unused `import { topSkills }` line, since the highlight list is defined locally.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "Add hero section with highlighted bio and CTAs"
```

---

### Task 7: Experience timeline

**Files:**
- Create: `components/Experience.tsx`

**Interfaces:**
- Consumes: `experience`, `SectionHeading`, `Tag`, `Reveal`.
- Produces: `<Experience />`.

- [ ] **Step 1: Create `components/Experience.tsx`**

```tsx
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section className="pt-24">
      <SectionHeading id="experience" title="Experience" />
      <ol className="relative border-l border-border">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.start}`} className="relative pl-8 pb-10 last:pb-0">
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-foreground" />
            <Reveal delay={i * 60}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{job.company}</h3>
                  {job.current && (
                    <span className="rounded border border-border bg-card px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted">
                      Present
                    </span>
                  )}
                </div>
                <span className="text-xs uppercase tracking-wide text-muted">
                  {job.start} — {job.end}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-muted">
                {job.title} · {job.location}
              </p>

              {job.summary && (
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{job.summary}</p>
              )}
              {job.highlights && job.highlights.length > 0 && (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
              {job.tags && job.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
```

- [ ] **Step 2: Verify**

Run: `yarn tsc --noEmit`
Expected: no type errors.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "Add experience timeline section"
```

---

### Task 8: Projects section

**Files:**
- Create: `components/Projects.tsx`

**Interfaces:**
- Consumes: `projects`, `SectionHeading`, `Tag`, `Reveal`, `lucide-react` icons.
- Produces: `<Projects />`.

- [ ] **Step 1: Create `components/Projects.tsx`**

```tsx
import { ExternalLink, Github, FileText, FolderGit2 } from "lucide-react";
import { projects } from "@/data/projects";
import type { ProjectLink } from "@/lib/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";

function LinkIcon({ label }: { label: ProjectLink["label"] }) {
  if (label === "Repository") return <Github size={13} />;
  if (label === "Docs") return <FileText size={13} />;
  return <ExternalLink size={13} />;
}

export function Projects() {
  return (
    <section className="pt-24">
      <SectionHeading id="projects" title="Projects" />
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 60}>
            <article className="h-full rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/30">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background">
                <FolderGit2 size={18} />
              </div>
              <h3 className="font-semibold">{project.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              {project.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted transition-colors hover:text-foreground"
                    >
                      <LinkIcon label={link.label} />
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify**

Run: `yarn tsc --noEmit`
Expected: no type errors.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "Add projects section"
```

---

### Task 9: Blog section

**Files:**
- Create: `components/Blog.tsx`

**Interfaces:**
- Consumes: `blog`, `mediumUrl`, `SectionHeading`, `Tag`, `Reveal`.
- Produces: `<Blog />`. When `blog` is empty, shows a single card linking to Medium.

- [ ] **Step 1: Create `components/Blog.tsx`**

```tsx
import { ArrowUpRight } from "lucide-react";
import { blog, mediumUrl } from "@/data/blog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";

export function Blog() {
  return (
    <section className="pt-24">
      <SectionHeading
        id="blog"
        title="Blog"
        action={
          <a
            href={mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
          >
            See all on Medium <ArrowUpRight size={14} />
          </a>
        }
      />

      {blog.length === 0 ? (
        <Reveal>
          <a
            href={mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/30"
          >
            <span className="text-sm text-muted">
              I write about JavaScript, React, and building products on Medium.
            </span>
            <ArrowUpRight size={16} />
          </a>
        </Reveal>
      ) : (
        <div className="grid gap-4 sm:grid-cols-3">
          {blog.map((post, i) => (
            <Reveal key={post.url} delay={i * 60}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/30"
              >
                <span className="text-xs text-muted">{post.date}</span>
                <h3 className="mt-2 font-semibold leading-snug">{post.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
```

- [ ] **Step 2: Verify**

Run: `yarn tsc --noEmit`
Expected: no type errors.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "Add blog section linking to Medium"
```

---

### Task 10: Contact + footer

**Files:**
- Create: `components/Contact.tsx`

**Interfaces:**
- Consumes: `profile`, `PillButton`, `Reveal`, `Socials`.
- Produces: `<Contact />` (includes footer credit line).

- [ ] **Step 1: Create `components/Contact.tsx`**

```tsx
import { profile } from "@/data/profile";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";
import { Socials } from "@/components/Socials";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 pt-24">
      <Reveal>
        <div className="rounded-2xl border border-border bg-card p-8 text-center sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Let&apos;s work together</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
          <div className="mt-6 flex justify-center">
            <PillButton href={`mailto:${profile.email}`} dot>
              {profile.email}
            </PillButton>
          </div>
          <div className="mt-6 flex justify-center">
            <Socials />
          </div>
        </div>
      </Reveal>

      <footer className="mt-12 border-t border-border py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js.
      </footer>
    </section>
  );
}
```

- [ ] **Step 2: Verify**

Run: `yarn tsc --noEmit`
Expected: no type errors.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "Add contact section and footer"
```

---

### Task 11: Compose page, favicon/OG, final build + visual check

**Files:**
- Modify: `app/page.tsx` (compose all sections)
- Verify present: `public/favicon.ico`, `public/images/main.png` (kept from original repo — confirm they still exist after Task 1 deletions; if `public/images/main.png` was removed, restore it from git history)

**Interfaces:**
- Consumes: `Header`, `Hero`, `Experience`, `Projects`, `Blog`, `Contact`.
- Produces: complete single-page site.

- [ ] **Step 1: Confirm assets survived Task 1**

Run: `ls public public/images`
Expected: `favicon.ico` and `images/main.png` present. If `images/main.png` is missing, restore it:
```bash
git checkout HEAD~10 -- public/images/main.png 2>/dev/null || git checkout master -- public/images/main.png
```
(Adjust the ref to any commit where it existed; it was present at repo start.)

- [ ] **Step 2: Overwrite `app/page.tsx`**

```tsx
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="mx-auto max-w-4xl px-6 pb-16">
        <Hero />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
```

- [ ] **Step 3: Confirm favicon wiring**

Next.js App Router auto-serves `app/favicon.ico` if present, else `public/favicon.ico` is reachable at `/favicon.ico`. To make it the tab icon, move it into `app/`:
```bash
git mv public/favicon.ico app/favicon.ico 2>/dev/null || cp public/favicon.ico app/favicon.ico
```

- [ ] **Step 4: Full build**

Run: `yarn tsc --noEmit && yarn build`
Expected: no type errors; build succeeds; `/` is statically rendered.

- [ ] **Step 5: Visual check in browser**

Run: `yarn dev`, open http://localhost:3000. Confirm:
- Hero, Experience (Monaire expanded with Present badge), Projects (2 cards), Blog (Medium card), Contact render in order.
- Theme toggle switches light/dark with no flash on reload.
- Sections fade in on scroll; nav anchors jump correctly.
- Responsive: no horizontal scroll at 375px width.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "Compose page, wire favicon, finalize portfolio"
```

---

## Self-Review Notes

- **Spec coverage:** Foundation (T1–2), theme/toggle (T2, T5), data layer (T3), hero w/ skills folded in (T6), experience timeline (T7), projects (T8), blog→Medium (T9), contact links + footer (T10), compose + SEO/favicon (T11). All spec sections covered.
- **Facebook** excluded from `profile.socials` per decision.
- **Email** `mk4227525@gmail.com` used in header, hero, contact.
- **Reduced motion** handled in `useReveal` and globals.
- **Note for executor:** In Task 6 Step 2, do not import `topSkills` (highlight keywords are defined locally); the plan text calls this out to keep lint clean.
- **react-social-icons v6** — if the installed API differs, the only usage is `<SocialIcon url target rel style fgColor />`, which is stable across v5–v6.
