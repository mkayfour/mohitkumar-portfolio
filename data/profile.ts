import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Mohit Kumar Srivastava",
  role: "Senior Software Engineer @ Monaire",
  location: "Pune, Maharashtra, India",
  tagline: "Full-Stack Developer with 8+ years of experience.",
  bio: "Full-Stack Developer with 8+ years shipping products end to end. I work across TypeScript, React, Next.js and React Native on the front end, and Node.js and Python (FastAPI, Express, Django REST Framework) on the back end, with PostgreSQL, MongoDB and AWS underneath. At Monaire I lead feature delivery on AI-powered commercial building automation, building the product and data layer the models plug into. Along the way I've led small teams, run architecture reviews, and mentored the engineers around me.",
  email: "mk4227525@gmail.com",
  avatar: "/images/mohit-kumar-srivastava.png",
  // Resume download disabled until the PDF is refreshed (the old one
  // understated experience and omitted Monaire). Re-add the file under
  // public/resume/ and restore this line to bring the button back.
  // resumeUrl: "/resume/Mohit-Kumar-Srivastava-Resume.pdf",
  socials: [
    { platform: "linkedin", url: "https://www.linkedin.com/in/mohit-kumar-srivastava/" },
    { platform: "github", url: "https://github.com/mkayfour" },
    { platform: "instagram", url: "https://www.instagram.com/mkayfour/" },
    { platform: "medium", url: "https://mkayfour.medium.com/" },
  ],
};
