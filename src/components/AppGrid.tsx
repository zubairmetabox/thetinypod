import Image from "next/image";
import { IMAGES } from "@/lib/images";
import FadeIn from "@/components/FadeIn";

const APPS = [
  { name: "Music",       src: IMAGES.apps.music },
  { name: "Podcasts",    src: IMAGES.apps.audiobooks },
  { name: "Messages",    src: IMAGES.apps.messaging },
  { name: "Maps",        src: IMAGES.apps.maps },
  { name: "Mail",        src: IMAGES.apps.mail },
  { name: "Calendar",    src: IMAGES.apps.calendar },
  { name: "Photos",      src: IMAGES.apps.photos },
  { name: "Timer",       src: IMAGES.apps.timer },
  { name: "Calculator",  src: IMAGES.apps.calculator },
  { name: "News",        src: IMAGES.apps.news },
  { name: "Voice Memos", src: IMAGES.apps.voiceMemo },
  { name: "Siri",        src: IMAGES.apps.siri },
  { name: "Phone",       src: IMAGES.apps.phone },
  { name: "Audiobooks",  src: IMAGES.apps.audiobooks },
];

export default function AppGrid() {
  return (
    <section id="apps" className="py-28 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[#5e5e5e] mb-4">
            Everything you need
          </p>
          <h2
            className="text-4xl md:text-6xl font-light"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            All your favourite apps,
            <br />
            <span className="italic">on your wrist.</span>
          </h2>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-4 sm:gap-6 justify-items-center">
          {APPS.map((app, i) => (
            <FadeIn key={app.name} delay={i * 0.04} direction="up">
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden bg-white shadow-sm group-hover:shadow-md transition-shadow">
                  <Image
                    src={app.src}
                    alt={app.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <span className="text-xs text-[#5e5e5e] text-center leading-tight">
                  {app.name}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Supporting copy */}
        <p className="text-center text-[#5e5e5e] text-sm mt-12 max-w-sm mx-auto">
          Compatible with Apple Watch Series 4 and later, running watchOS 7+.
        </p>
      </div>
    </section>
  );
}
