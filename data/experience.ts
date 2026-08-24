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
    companyUrl: "https://procedure.tech/",
    title: "Principal Software Engineer",
    start: "Apr 2022",
    end: "Mar 2024",
    location: "Bengaluru, India · Remote",
    tags: ["React.js", "Node.js", "Python", "AWS"],
  },
  {
    company: "Cyphertree Technologies",
    companyUrl: "https://www.cyphertree.com/",
    title: "Software Engineer",
    start: "Oct 2020",
    end: "Apr 2022",
    location: "Pune, India · Remote",
    tags: ["React.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    company: "zCon Solutions",
    companyUrl: "https://www.zconsolutions.com/",
    title: "Software Developer",
    start: "Mar 2019",
    end: "Oct 2020",
    location: "Pune, India · On-site",
    tags: ["React.js", "Node.js", "PostgreSQL"],
  },
];
