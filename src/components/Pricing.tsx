import Link from "next/link";

const PLANS = [
  {
    name: "tinyPod Lite",
    price: 29,
    description: "The essential tinyPod experience.",
    features: [
      "Fits all Apple Watch sizes",
      "Scroll wheel navigation",
      "Screen-off mode",
      "Magnetic snap-on fit",
    ],
    cta: "Order Lite",
    highlight: false,
  },
  {
    name: "tinyPod 41mm",
    price: 49,
    description: "For Apple Watch 41mm / 40mm / 38mm.",
    features: [
      "Everything in Lite",
      "Precision-fit for 41mm",
      "Full click wheel",
      "Premium finish",
    ],
    cta: "Order 41mm",
    highlight: false,
  },
  {
    name: "tinyPod 45mm",
    price: 59,
    description: "For Apple Watch 45mm / 44mm / 42mm.",
    features: [
      "Everything in Lite",
      "Precision-fit for 45mm",
      "Full click wheel",
      "Premium finish",
    ],
    cta: "Order 45mm",
    highlight: true,
  },
  {
    name: "tinyPod 49mm",
    price: 69,
    description: "For Apple Watch Ultra / Ultra 2.",
    features: [
      "Everything in Lite",
      "Precision-fit for 49mm Ultra",
      "Full click wheel",
      "Premium finish",
    ],
    cta: "Order 49mm",
    highlight: false,
  },
];

const SHOPIFY_URL = "https://4c7d0a.myshopify.com/cart/48745719726378:1";

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[#5e5e5e] mb-4">
            Pricing
          </p>
          <h2
            className="text-4xl md:text-6xl font-light"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Simple, honest
            <br />
            <span className="italic">pricing.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-7 flex flex-col gap-6 ${
                plan.highlight
                  ? "bg-[#0a0a08] text-white"
                  : "bg-white text-[#0a0a08]"
              }`}
            >
              {plan.highlight && (
                <span className="text-xs font-semibold uppercase tracking-widest text-[#2060ff]">
                  Most popular
                </span>
              )}

              <div>
                <h3 className={`font-semibold mb-1 ${plan.highlight ? "text-white" : "text-[#0a0a08]"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlight ? "text-white/60" : "text-[#5e5e5e]"}`}>
                  {plan.description}
                </p>
              </div>

              <div>
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className={`text-sm ml-1 ${plan.highlight ? "text-white/60" : "text-[#5e5e5e]"}`}>
                  USD
                </span>
              </div>

              <ul className="flex flex-col gap-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? "text-[#2060ff]" : "text-[#2060ff]"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlight ? "text-white/80" : "text-[#5e5e5e]"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={SHOPIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-full text-sm font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-[#2060ff] text-white hover:bg-blue-700"
                    : "bg-[#0a0a08] text-white hover:bg-[#1a1a1a]"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[#5e5e5e] mt-10">
          Free shipping worldwide · 30-day returns · Apple Watch not included
        </p>
      </div>
    </section>
  );
}
