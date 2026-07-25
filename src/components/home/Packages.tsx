import Link from "next/link";

const checkCircleIcon =
  "https://www.figma.com/api/mcp/asset/cc3fd5db-3860-4a99-b273-064d81b33b30";

const PACKAGES = [
  {
    name: "Petite Collection",
    price: "₹5,000+",
    description:
      "Ideal for intimate gestures and premium custom painted portrait gift sets.",
    inclusions: [
      "1 Custom Hand-Painted Portrait (8x10)",
      "Deluxe Gift Hamper Trays",
      "Artisanal Dry Fruit & Scented Candle set",
      "Handwritten Calligraphy Card",
    ],
    highlighted: false,
  },
  {
    name: "Signature Assemblage",
    price: "₹15,000+",
    description:
      "Perfect for mid-scale wedding celebrations and custom trousseau setup.",
    inclusions: [
      "Complete Bridal Trousseau Styling (up to 5 chests)",
      "Premium Velvet Covered Platters",
      "Monogrammed Brass Tags & Silk Bows",
      "Custom Event Moodboard Consultation",
    ],
    highlighted: true,
  },
  {
    name: "Grand Imperial",
    price: "₹35,000+",
    description:
      "The absolute ultimate luxury bridal setup with customized family portraiture.",
    inclusions: [
      "Full Wedding Trouseau Styling (up to 15 chests)",
      "1 Large Hand-Painted Portrait (18x24) with 24K Gold Leafing",
      "Exquisite Floral Arrangements & Keepsakes",
      "On-site Styling Assistance (Delhi NCR)",
    ],
    highlighted: false,
  },
];

export default function Packages() {
  return (
    <section
      id="packages"
      className="bg-cream-soft flex flex-col gap-14 items-center px-6 py-16 md:px-20 md:py-[120px]"
    >
      <div className="flex flex-col gap-3 items-center">
        <p className="font-sans font-bold text-gold text-xs tracking-[3px] uppercase">
          The Investments
        </p>
        <h2 className="font-serif font-normal text-maroon text-3xl md:text-[40px] text-center">
          Pricing &amp; Packages
        </h2>
        <div className="h-px w-16 bg-gold-light" />
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-stretch w-full">
        {PACKAGES.map((pkg) => (
          <div
            key={pkg.name}
            className={
              pkg.highlighted
                ? "bg-maroon border-2 border-gold-light rounded-lg flex flex-col gap-6 items-start p-10 flex-1 shadow-[0px_16px_20px_0px_rgba(66,18,29,0.25)]"
                : "bg-cream border border-[#d8c9b5] rounded-lg flex flex-col gap-6 items-start p-10 flex-1"
            }
          >
            <div className="flex flex-col gap-3 items-start w-full">
              <p
                className={`font-sans font-bold text-[11px] tracking-[2px] uppercase ${
                  pkg.highlighted ? "text-gold-light" : "text-gold"
                }`}
              >
                {pkg.name}
              </p>
              <p
                className={`font-serif font-semibold text-4xl ${
                  pkg.highlighted ? "text-cream" : "text-maroon"
                }`}
              >
                {pkg.price}
              </p>
              <p
                className={`font-sans leading-[1.4] text-[13px] ${
                  pkg.highlighted ? "text-cream-border" : "text-plum"
                }`}
              >
                {pkg.description}
              </p>
            </div>

            <div
              className={`h-px w-full ${
                pkg.highlighted ? "bg-cream/20" : "bg-cream-border"
              }`}
            />

            <div className="flex flex-col gap-3.5 items-start w-full">
              {pkg.inclusions.map((item) => (
                <div key={item} className="flex gap-2.5 items-start w-full">
                  <img
                    alt=""
                    className="size-4 shrink-0 mt-0.5"
                    src={checkCircleIcon}
                  />
                  <p
                    className={`font-sans leading-[1.4] text-[13px] flex-1 ${
                      pkg.highlighted ? "text-cream" : "text-ink"
                    }`}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className={
                pkg.highlighted
                  ? "bg-gold-light flex items-center justify-center py-3.5 rounded w-full"
                  : "bg-maroon flex items-center justify-center py-3.5 rounded w-full"
              }
            >
              <span
                className={`font-sans font-semibold text-xs tracking-[1px] uppercase ${
                  pkg.highlighted ? "text-maroon" : "text-cream"
                }`}
              >
                Select Package
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
