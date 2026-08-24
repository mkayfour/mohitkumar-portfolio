import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Mohit Kumar Srivastava",
  role: "Senior Software Engineer @ Monaire",
  location: "Pune, Maharashtra, India",
  tagline: "Full-Stack Developer with 8+ years of experience.",
  bio: "Full-Stack Developer with 8+ years building products end to end. I work with React and Next.js on the front end, and Node.js/Express and Python (Django REST Framework, FastAPI) on the back end. I design and consume RESTful APIs, and own UI, structure, and data handling. Currently building AI-powered commercial building automation at Monaire.",
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
