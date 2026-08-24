import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    name: "Monaire",
    icon: "/images/logos/monaire.png",
    description:
      "AI-powered HVAC and refrigeration management for commercial buildings, spanning sensor data pipelines, admin tooling, and a React Native app for contractors.",
    tags: ["React.js", "React Native", "Python", "FastAPI", "PostgreSQL", "AWS"],
    links: [{ label: "Website", url: "https://www.monaire.ai/" }],
  },
  {
    name: "CT Forms",
    icon: "/images/logos/ct-forms.png",
    description:
      "A form builder for small businesses and recruiters, automating hiring with ready-to-use job templates. Built the React form-building UI library, multi-tenant auth, and the dashboard from scratch.",
    tags: ["React.js", "TypeScript", "Redux", "Node.js"],
    // The app itself (app.forms.cyphertree.com) no longer serves a valid TLS
    // certificate, so it links to the product page instead.
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/showcase/ct-forms/" }],
  },
  {
    name: "Twarit",
    icon: "/images/logos/twarit.png",
    description:
      "Logistics management platform built from scratch, covering JWT auth and permissions, CI/CD for both ends, and system design against requirements. Led a team of three.",
    tags: ["React.js", "Django REST Framework", "PostgreSQL", "AWS"],
    links: [{ label: "Website", url: "https://twaritmobility.com/" }],
  },
  {
    name: "The Onboarders",
    icon: "/images/logos/cyphertree.png",
    description:
      "Multi-tenant employee onboarding SaaS with subdomain routing, a multi-step form wizard, plan-based feature gating, and a drag-and-drop Kanban board.",
    tags: ["React.js", "Redux", "Ant Design"],
    links: [{ label: "Website", url: "https://cyphertree.com/" }],
  },
];
