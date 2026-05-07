import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white pt-16">
      {/* Background hero image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.hero3}
          alt=""
          fill
          className="object-cover object-center opacity-30"
          priority
          unoptimized
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p className="text-sm font-medium tracking-widest uppercase text-[#5e5e5e] mb-6">
          Introducing
        </p>

        {/* Main headline */}
        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-light leading-none tracking-tight mb-6"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Say hello to{" "}
          <span className="italic">tinyPod.</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-[#5e5e5e] max-w-lg mb-10">
          Your phone away from phone.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <Link
            href="#pricing"
            className="px-8 py-3.5 bg-[#0a0a08] text-white text-sm font-semibold rounded-full hover:bg-[#1a1a1a] transition-colors"
          >
            Order now
          </Link>
          <Link
            href="#features"
            className="px-8 py-3.5 border border-[#ededed] text-sm font-semibold rounded-full text-[#0a0a08] hover:bg-[#f5f5f5] transition-colors"
          >
            Learn more
          </Link>
        </div>

        {/* Product image */}
        <div className="relative w-full max-w-2xl mx-auto">
          <Image
            src={IMAGES.pod}
            alt="tinyPod — Apple Watch music pod"
            width={800}
            height={700}
            className="w-full h-auto object-contain drop-shadow-2xl"
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#5e5e5e]">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-[#ededed]" />
      </div>
    </section>
  );
}
