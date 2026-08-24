export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Blogs", href: "#blog" },
];

export const site = {
  headlineLead: "Full-Stack",
  headlineRest: "Developer",
  headlineSecondLine: "building for the web.",
  contactHeading: "Let's work together",
  contactBlurb:
    "Have a project in mind or just want to say hi? My inbox is always open.",
  blogBlurb:
    "I write about JavaScript, React, and building products on Medium.",
  footerNote: "Built with Next.js.",
};
