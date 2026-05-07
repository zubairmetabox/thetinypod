import Link from "next/link";

const SOCIAL = [
  { label: "X / Twitter", href: "https://x.com/thetinypod" },
  { label: "TikTok",      href: "https://tiktok.com/@thetinypod" },
  { label: "Instagram",   href: "https://instagram.com/thetinypod" },
];

const LINKS = [
  { label: "Features",  href: "#features" },
  { label: "Apps",      href: "#apps" },
  { label: "Pricing",   href: "#pricing" },
  { label: "FAQ",       href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a08] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="text-lg font-bold mb-3">tinyPod</p>
            <p className="text-sm text-white/50 leading-relaxed">
              Your phone away from phone. Stream music, podcasts, and more from your Apple Watch — no iPhone needed.
            </p>
            <a
              href="mailto:hi@thetinypod.com"
              className="inline-block mt-5 text-sm text-white/50 hover:text-white transition-colors"
            >
              hi@thetinypod.com
            </a>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/30 mb-4">
              Navigate
            </p>
            <ul className="flex flex-col gap-3">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/30 mb-4">
              Follow us
            </p>
            <ul className="flex flex-col gap-3">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-start">
            <p className="text-xs font-medium uppercase tracking-widest text-white/30 mb-4">
              Get yours
            </p>
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center px-7 py-3 bg-white text-[#0a0a08] text-sm font-semibold rounded-full hover:bg-[#ededed] transition-colors"
            >
              Order now →
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} tinyPod. All rights reserved.</p>
          <p>Apple Watch is a trademark of Apple Inc. tinyPod is not affiliated with Apple Inc.</p>
        </div>
      </div>
    </footer>
  );
}
