import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    name: "Monaire",
    icon: "/images/logos/monaire.png",
    description:
      "AI-powered HVAC and refrigeration management for commercial buildings — sensor data pipelines, admin tooling, and a React Native app for contractors.",
    tags: ["React.js", "React Native", "Python", "FastAPI", "PostgreSQL", "AWS"],
    links: [{ label: "Website", url: "https://www.monaire.ai/" }],
  },
  {
    name: "CT Forms",
    description:
      "A Google Forms / Typeform-style SaaS form builder — built the React form-building UI library, multi-tenant auth, and the dashboard from scratch.",
    tags: ["React.js", "TypeScript", "Redux", "Node.js"],
    // Website link removed: app.forms.cyphertree.com no longer serves a valid
    // TLS certificate. Restore the link if the app comes back online.
    links: [],
  },
  {
    name: "Twarit",
    description:
      "Logistics management platform built from scratch — JWT auth and permissions, CI/CD for both ends, and system design against requirements. Led a team of three.",
    tags: ["React.js", "Django REST Framework", "PostgreSQL", "AWS"],
    links: [],
  },
  {
    name: "The Onboarders",
    description:
      "Multi-tenant employee onboarding SaaS with subdomain routing, a multi-step form wizard, plan-based feature gating, and a drag-and-drop Kanban board.",
    tags: ["React.js", "Redux", "Ant Design"],
    links: [],
  },
];
