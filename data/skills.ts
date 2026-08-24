import type { SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "Go"] },
  { label: "Frontend", items: ["React.js", "Redux", "Next.js"] },
  { label: "Backend", items: ["Go", "Node.js", "Express", "Django REST Framework", "FastAPI"] },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Sequelize ORM"] },
  { label: "Cloud & Tools", items: ["AWS"] },
  { label: "Testing", items: ["Mocha", "Chai", "React Testing Library"] },
];

// Highlighted (bolded) in the hero intro.
export const topSkills: string[] = ["React.js", "Node.js", "FastAPI", "Redux.js", "AWS"];

// Keywords bolded in the hero bio. Must match substrings present in profile.bio.
export const bioHighlights: string[] = [
  // Order does not matter: the hero sorts these longest-first before matching.
  "Django REST Framework",
  "React Native",
  "TypeScript",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "FastAPI",
  "Express",
  "Python",
  "React",
  "AWS",
  "Go",
];
