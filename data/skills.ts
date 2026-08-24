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
