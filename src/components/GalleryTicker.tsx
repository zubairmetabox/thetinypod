import Image from "next/image";
import { IMAGES } from "@/lib/images";

export default function GalleryTicker() {
  const photos = IMAGES.gallery;
  // Duplicate for seamless loop
  const doubled = [...photos, ...photos];

  return (
    <section className="py-20 bg-[#f5f5f5] overflow-hidden">
      <div className="text-center mb-12">
        <p className="text-sm font-medium tracking-widest uppercase text-[#5e5e5e] mb-4">
          Community
        </p>
        <h2
          className="text-4xl md:text-5xl font-light"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Loved by{" "}
          <span className="italic">thousands.</span>
        </h2>
      </div>

      {/* Ticker row 1 — left */}
      <div className="relative mb-4">
        <div
          className="flex gap-4 w-max"
          style={{
            animation: "ticker-left 40s linear infinite",
          }}
        >
          {doubled.map((src, i) => (
            <div
              key={i}
              className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden flex-shrink-0 bg-white shadow-sm"
            >
              <Image
                src={src}
                alt={`tinyPod community photo ${(i % photos.length) + 1}`}
                width={224}
                height={224}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* Ticker row 2 — right */}
      <div className="relative">
        <div
          className="flex gap-4 w-max"
          style={{
            animation: "ticker-right 50s linear infinite",
          }}
        >
          {[...doubled].reverse().map((src, i) => (
            <div
              key={i}
              className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden flex-shrink-0 bg-white shadow-sm"
            >
              <Image
                src={src}
                alt={`tinyPod community photo ${(i % photos.length) + 1}`}
                width={224}
                height={224}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes ticker-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
