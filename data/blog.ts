import type { BlogPost } from "@/lib/types";

export const mediumUrl = "https://mkayfour.medium.com/";

// Featured posts from Medium. Add new ones here as you publish.
export const blog: BlogPost[] = [
  {
    title: "Using AWS Textract with ReactJs",
    excerpt:
      "Build a React app that pulls text out of images with AWS Textract — wiring up the AWS SDK, handling file uploads, and rendering the extracted OCR results.",
    date: "Feb 2023",
    tags: ["React", "AWS", "OCR"],
    url: "https://mkayfour.medium.com/using-aws-textract-with-reactjs-6ca1e1bb478a",
  },
  {
    title: "The fastest way to create a React app with Vite",
    excerpt:
      "Setting up a React project with Vite instead of create-react-app, and why the faster dev server and smaller bundles are worth the switch.",
    date: "Feb 2023",
    tags: ["React", "Vite", "Tooling"],
    url: "https://mkayfour.medium.com/the-fastest-way-to-create-react-app-with-vite-9719409d9b03",
  },
];
