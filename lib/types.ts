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
  resumeUrl: string;
  socials: SocialLink[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  companyUrl?: string;
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
  excerpt: string;
  date: string; // ISO or display string
  tags: string[];
  url: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  start: string;
  end: string;
  location: string;
  activities?: string;
}
