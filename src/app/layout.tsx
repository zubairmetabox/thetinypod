import type { Metadata } from "next";
import { Albert_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "tinyPod — Your phone away from phone.",
  description:
    "tinyPod turns your Apple Watch into a beautiful, minimal audio device. Stream music, podcasts, and more — no iPhone needed.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${albertSans.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
