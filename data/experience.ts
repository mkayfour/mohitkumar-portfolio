import type { ExperienceItem } from "@/lib/types";

export const experience: ExperienceItem[] = [
  {
    company: "Monaire",
    companyUrl: "https://www.monaire.ai/",
    title: "Senior Software Engineer",
    start: "Mar 2024",
    end: "Present",
    location: "Pune, India · Remote",
    current: true,
    summary:
      "Building AI-powered commercial building automation for small businesses. Joined to own the web app as its frontend developer, and moved back to full-stack in January 2026 as the backend moved to Go.",
    highlights: [
      "Owned the customer-facing web app (app.monaire.ai) end to end as its frontend developer from March 2024.",
      "Since January 2026, building backend services in Go alongside continued front-end work.",
      "Work with AWS across deployment and infrastructure.",
      "Build the product and data layer around Monaire's AI-driven HVAC and refrigeration monitoring.",
    ],
    tags: ["React.js", "TypeScript", "Go", "AWS"],
  },
  {
    company: "Procedure",
    companyUrl: "https://procedure.tech/",
    title: "Principal Software Engineer",
    start: "Apr 2022",
    end: "Mar 2024",
    location: "Bengaluru, India · Remote",
    summary:
      "Led full-stack delivery across two products: Twarit, a logistics platform built from scratch, and Monaire, where I worked on-site as part of a client engagement building the HVAC platform in React and FastAPI.",
    highlights: [
      "Built Twarit end to end: system design, JWT auth and permission management, REST APIs with unit tests, and CI/CD for both frontend and backend.",
      "Led a team of three developers, covering task distribution, code review, and pair programming.",
      "Overhauled the Monaire front end for performance and maintainability, and integrated third-party services including Zoho, Metabase, and Resideo sensors.",
      "Shipped a React Native app for contractors to both iOS and Android.",
      "Ran technical design and architecture reviews across the team.",
    ],
    tags: ["React.js", "React Native", "Node.js", "Python", "Django REST Framework", "AWS"],
  },
  {
    company: "Cyphertree Technologies",
    companyUrl: "https://www.cyphertree.com/",
    title: "Software Engineer",
    start: "Oct 2020",
    end: "Apr 2022",
    location: "Pune, India · Remote",
    summary:
      "Front-end engineer across three products: a healthcare platform, plus two SaaS products taken from empty repo to launch.",
    highlights: [
      "Built CT Forms from scratch: a reusable React form-builder UI library, Redux state management, and a dashboard app that consumed it.",
      "Implemented multi-tenant auth with JWT, covering registration, password reset, refresh tokens, and role-based menu authorization.",
      "Shipped The Onboarders as a multi-tenant app with subdomain routing, a multi-step form wizard, plan-based feature gating, and a drag-and-drop Kanban board.",
      "Cut redundant API calls and resolved cross-browser compatibility issues.",
      "Owned deployments, domain and environment setup, and the CD pipeline.",
    ],
    tags: ["React.js", "TypeScript", "Redux", "Ant Design", "PostgreSQL", "AWS"],
  },
  {
    company: "zCon Solutions",
    companyUrl: "https://www.zconsolutions.com/",
    title: "Software Developer",
    start: "Mar 2019",
    end: "Oct 2020",
    location: "Pune, India · On-site",
    summary:
      "Backend-focused developer building RESTful services and third-party integrations, with front-end work in React.",
    highlights: [
      "Built REST APIs on Node.js and Express, with Sequelize and Mongoose ORMs for data handling.",
      "Integrated Stripe for payments, DocuSign for e-signatures, and Twilio SendGrid for transactional email.",
      "Wrote unit tests with Mocha and Chai, and scheduled background jobs with node-cron.",
      "Implemented JWT auth, verified email registration, request validation, Winston logging, and Swagger API docs.",
    ],
    tags: ["Node.js", "Express", "React.js", "PostgreSQL", "MongoDB", "Mocha"],
  },
];
