import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PakTasker - Find Local Services & Hire Trusted Taskers in Pakistan",
  description: "PakTasker is a trusted community platform that connects people in Pakistan who need work done with people who want to work. Find local services and hire trusted Taskers across Pakistan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}