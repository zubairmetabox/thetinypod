import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "tinyPod",
  description: "Your phone away from phone.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
