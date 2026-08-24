import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohit Kumar Srivastava",
  description: "Full-Stack Developer with 7+ years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
