import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Airtasker - Find Local Services & Hire Trusted Taskers",
  description: "Airtasker is a trusted community platform that connects people who need work done with people who want to work. Find local services and hire trusted Taskers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}