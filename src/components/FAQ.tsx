"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Which Apple Watch sizes does tinyPod fit?",
    a: "tinyPod comes in three sizes to match your Apple Watch: 41mm (fits 38/40/41mm), 45mm (fits 42/44/45mm), and 49mm (fits Ultra and Ultra 2). tinyPod Lite fits all sizes with a universal fit.",
  },
  {
    q: "Do I need my iPhone nearby to use tinyPod?",
    a: "No — that's the whole point. tinyPod works with your Apple Watch's built-in capabilities. Stream music directly from Apple Music, Spotify, or your downloaded library without your iPhone anywhere near you.",
  },
  {
    q: "What's the difference between tinyPod and tinyPod Lite?",
    a: "tinyPod Lite ($29) snaps on to any Apple Watch size and gives you the core experience. The full tinyPod ($49–$69) is precision-machined for your exact watch size, with a more refined scroll wheel and premium finish.",
  },
  {
    q: "What apps can I use with tinyPod?",
    a: "Any watchOS app works. Music, Podcasts, Audiobooks, Maps, Messages, Mail, Photos, Timer, Calculator, Calendar, Voice Memos, Siri, News, and more. If it runs on your Apple Watch, tinyPod can control it.",
  },
  {
    q: "How do I charge tinyPod?",
    a: "tinyPod charges wirelessly with your Apple Watch's standard magnetic charger. No extra cables or adapters needed — just place it on the same puck.",
  },
  {
    q: "Is tinyPod compatible with Apple Watch cases or bands?",
    a: "tinyPod snaps directly onto the back of your Apple Watch and is compatible with all standard Apple Watch bands. It doesn't interfere with third-party cases that wrap the sides or top of the watch.",
  },
  {
    q: "How long does shipping take?",
    a: "Orders ship within 2–3 business days. Standard shipping takes 5–10 days internationally. Express options are available at checkout.",
  },
  {
    q: "What's your return policy?",
    a: "We offer a 30-day hassle-free return policy. If you're not happy for any reason, contact us at hi@thetinypod.com and we'll sort it out.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#ededed] last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-[#0a0a08] text-sm leading-relaxed">{q}</span>
        <svg
          className={`w-5 h-5 text-[#5e5e5e] shrink-0 mt-0.5 transition-transform ${open ? "rotate-45" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
        </svg>
      </button>
      {open && (
        <p className="pb-5 text-sm text-[#5e5e5e] leading-relaxed pr-8">{a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[#5e5e5e] mb-4">
            FAQ
          </p>
          <h2
            className="text-4xl md:text-6xl font-light"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Questions &{" "}
            <span className="italic">answers.</span>
          </h2>
        </div>

        <div className="border-t border-[#ededed]">
          {FAQS.map((item) => (
            <Item key={item.q} {...item} />
          ))}
        </div>

        <p className="text-center text-sm text-[#5e5e5e] mt-12">
          Still have questions?{" "}
          <a href="mailto:hi@thetinypod.com" className="underline hover:text-[#0a0a08] transition-colors">
            Email us
          </a>
        </p>
      </div>
    </section>
  );
}
