"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Apps", href: "#apps" },
  { label: "Sizes", href: "#sizes" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#ededed]">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold tracking-tight text-[#0a0a08]">
          tinyPod
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="text-sm text-[#5e5e5e] hover:text-[#0a0a08] transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Buy CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#pricing"
            className="text-sm font-semibold bg-[#0a0a08] text-white px-5 py-2 rounded-full hover:bg-[#1a1a1a] transition-colors"
          >
            Order now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#0a0a08]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#ededed] px-6 py-4 flex flex-col gap-4">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm text-[#0a0a08]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#pricing"
            className="text-sm font-semibold bg-[#0a0a08] text-white px-5 py-2 rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            Order now
          </Link>
        </div>
      )}
    </header>
  );
}
