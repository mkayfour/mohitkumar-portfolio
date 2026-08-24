import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/data/profile";
import "./globals.css";

// Set NEXT_PUBLIC_GA_ID to your GA4 measurement ID (G-XXXXXXXXXX) to enable GA.
const gaId = process.env.NEXT_PUBLIC_GA_ID;

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const title = "Mohit Kumar Srivastava — Full-Stack Developer";
const description =
  "Full-Stack Developer with 8+ years building products end to end with React, Next.js, Node.js, and Python.";
const ogImage = {
  url: "/images/og.png",
  width: 1200,
  height: 630,
  alt: "Mohit Kumar Srivastava — Full-Stack Developer",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mkayfour.in"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.mkayfour.in/",
    title,
    description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  // Set GOOGLE_SITE_VERIFICATION to the token Search Console gives you.
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

// JSON-LD Person schema — helps Google show a rich result for name searches.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: "https://www.mkayfour.in/",
  image: "https://www.mkayfour.in/images/mohit-kumar-srivastava.png",
  jobTitle: "Senior Software Engineer",
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  worksFor: { "@type": "Organization", name: "Monaire", url: "https://www.monaire.ai/" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "MIT Academy of Engineering",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "AWS",
  ],
  sameAs: profile.socials.map((s) => s.url),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
