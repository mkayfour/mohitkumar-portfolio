import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mkayfour.in"),
  title: "Mohit Kumar Srivastava — Full-Stack Developer",
  description:
    "Full-Stack Developer with 7+ years building products end to end with React, Next.js, Node.js, and Python.",
  openGraph: {
    type: "website",
    url: "https://www.mkayfour.in/",
    title: "Mohit Kumar Srivastava — Full-Stack Developer",
    description:
      "Full-Stack Developer with 7+ years building products end to end with React, Next.js, Node.js, and Python.",
    images: ["/images/main.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
