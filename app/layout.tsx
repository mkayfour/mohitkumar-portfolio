import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
