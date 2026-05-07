"use client";

import { useRef, useState } from "react";
import { IMAGES } from "@/lib/images";

const DEMOS = [
  {
    title: "Music playback",
    description: "Skip tracks, adjust volume, and browse your library with the scroll wheel.",
    src: IMAGES.videos.demo1,
  },
  {
    title: "Screen-off mode",
    description: "Keep the Apple Watch screen dark and control everything by touch.",
    src: IMAGES.videos.demo2,
  },
  {
    title: "Navigation",
    description: "Get turn-by-turn directions without touching your phone.",
    src: IMAGES.videos.demo3,
  },
];

function VideoCard({ title, description, src }: { title: string; description: string; src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  return (
    <div className="flex flex-col gap-5">
      <div
        className="relative rounded-3xl overflow-hidden bg-[#0a0a08] aspect-[9/16] max-w-xs mx-auto w-full cursor-pointer group"
        onClick={toggle}
      >
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          preload="metadata"
        />
        {/* Play / pause overlay */}
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-[#0a0a08] ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="text-center max-w-xs mx-auto">
        <h3 className="font-semibold text-[#0a0a08] mb-1">{title}</h3>
        <p className="text-sm text-[#5e5e5e] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function VideoShowcase() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[#5e5e5e] mb-4">
            See it in action
          </p>
          <h2
            className="text-4xl md:text-6xl font-light"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Watch the{" "}
            <span className="italic">magic happen.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {DEMOS.map((d) => (
            <VideoCard key={d.title} {...d} />
          ))}
        </div>
      </div>
    </section>
  );
}
