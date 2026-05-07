"use client";

import Image from "next/image";
import { useState } from "react";
import { IMAGES } from "@/lib/images";

const SIZES = [
  { label: "41mm", price: 49, priceNote: "Standard" },
  { label: "45mm", price: 59, priceNote: "Standard" },
  { label: "49mm", price: 69, priceNote: "Standard" },
];

const FEATURES = [
  { title: "Scroll wheel", body: "The iconic click wheel, reimagined for Apple Watch. Scroll through songs, adjust volume, and navigate menus with satisfying tactile feedback." },
  { title: "Screen-off mode", body: "Save battery by keeping the Apple Watch screen off. tinyPod handles playback controls without waking the display." },
  { title: "Magnetic charging", body: "Charges right alongside your Apple Watch using the same magnetic charger. No extra cables needed." },
  { title: "All-day battery", body: "Built to last. tinyPod draws minimal power so your watch keeps going from morning through night." },
];

export default function ProductShowcase() {
  const [activeSize, setActiveSize] = useState(0);
  const [lite, setLite] = useState(false);

  const price = lite ? 29 : SIZES[activeSize].price;
  const variant = lite ? "tinyPod Lite" : `tinyPod ${SIZES[activeSize].label}`;

  return (
    <section id="sizes" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[#5e5e5e] mb-4">
            Choose your size
          </p>
          <h2
            className="text-4xl md:text-6xl font-light"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Built for every
            <br />
            <span className="italic">Apple Watch.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Product image */}
          <div className="flex justify-center">
            <div className="relative w-72 h-96 md:w-96 md:h-[480px]">
              <Image
                src={lite ? IMAGES.tini : IMAGES.pod}
                alt={variant}
                fill
                className="object-contain drop-shadow-2xl"
                unoptimized
              />
            </div>
          </div>

          {/* Selectors */}
          <div className="flex flex-col gap-8">
            {/* Lite toggle */}
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-[#5e5e5e] mb-3">
                Variant
              </p>
              <div className="flex gap-3">
                {["Standard", "Lite"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setLite(v === "Lite")}
                    className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                      (v === "Lite") === lite
                        ? "bg-[#0a0a08] text-white border-[#0a0a08]"
                        : "bg-white text-[#0a0a08] border-[#ededed] hover:border-[#0a0a08]"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Size selector */}
            {!lite && (
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-[#5e5e5e] mb-3">
                  Size
                </p>
                <div className="flex gap-3">
                  {SIZES.map((s, i) => (
                    <button
                      key={s.label}
                      onClick={() => setActiveSize(i)}
                      className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                        activeSize === i
                          ? "bg-[#0a0a08] text-white border-[#0a0a08]"
                          : "bg-white text-[#0a0a08] border-[#ededed] hover:border-[#0a0a08]"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Selected product info */}
            <div className="border-t border-[#ededed] pt-6">
              <p className="text-sm text-[#5e5e5e] mb-1">{variant}</p>
              <p className="text-4xl font-semibold text-[#0a0a08] mb-6">${price}</p>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#2060ff] text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors"
              >
                Add to cart
              </a>
            </div>

            {/* Features list */}
            <ul className="flex flex-col gap-3 pt-2">
              {["Fits Apple Watch Series 4 – Ultra 2", "Magnetic snap-on fit", "Scroll wheel navigation", "Screen-off mode"].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-[#5e5e5e]">
                  <svg className="w-4 h-4 mt-0.5 text-[#2060ff] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature cards */}
        <div id="features" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-[#f5f5f5] rounded-3xl p-7">
              <h3 className="font-semibold text-[#0a0a08] mb-3">{f.title}</h3>
              <p className="text-sm text-[#5e5e5e] leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
