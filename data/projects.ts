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
