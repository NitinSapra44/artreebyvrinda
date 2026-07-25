import Link from "next/link";

const PORTFOLIO_ITEMS = [
  {
    category: "Trousseau",
    title: "The Ivory Royal Platter",
    image:
      "https://www.figma.com/api/mcp/asset/f0bb8e22-ed36-4a7c-92b3-c094b06239ff",
  },
  {
    category: "Portrait Studio",
    title: "The Gold-Haloed Union",
    image:
      "https://www.figma.com/api/mcp/asset/0c220c30-a20d-4ac3-8d0d-93076adbebb3",
  },
  {
    category: "Bespoke Gifting",
    title: "Welcome Home Heirloom",
    image:
      "https://www.figma.com/api/mcp/asset/13ec846f-ddbc-40e6-9d82-add24f0cf510",
  },
  {
    category: "Trousseau",
    title: "The Shahi Shagun Tray",
    image:
      "https://www.figma.com/api/mcp/asset/c575f13e-36d9-4520-9317-4d773ca1c84b",
  },
  {
    category: "Portrait Studio",
    title: "Ancestral Home Vignette",
    image:
      "https://www.figma.com/api/mcp/asset/1913befd-e2e1-4863-a14d-e598a6f22a4b",
  },
  {
    category: "Bespoke Gifting",
    title: "The Atelier Invitation Suite",
    image:
      "https://www.figma.com/api/mcp/asset/2c22e026-1268-49b3-93dc-77625210e417",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-cream-soft flex flex-col gap-14 items-center px-6 py-16 md:px-20 md:py-[120px]"
    >
      <div className="flex flex-col gap-3 items-center">
        <p className="font-sans font-bold text-gold text-xs tracking-[3px] uppercase">
          The Gallery
        </p>
        <h2 className="font-serif font-normal text-maroon text-3xl md:text-[40px] text-center">
          Featured Creations
        </h2>
        <div className="h-px w-16 bg-gold-light" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {PORTFOLIO_ITEMS.map((item) => (
          <Link
            key={item.title}
            href="/portfolio"
            className="flex flex-col gap-4 items-start group"
          >
            <div className="aspect-square rounded w-full overflow-hidden">
              <img
                alt={item.title}
                className="object-cover size-full transition-transform duration-500 group-hover:scale-105"
                src={item.image}
              />
            </div>
            <div className="flex flex-col gap-1 items-start">
              <p className="font-sans font-bold text-gold text-[10px] tracking-[1.5px] uppercase">
                {item.category}
              </p>
              <p className="font-serif font-medium text-maroon text-lg">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <Link
        href="/portfolio"
        className="bg-maroon border border-gold-light rounded flex items-center justify-center px-9 py-4"
      >
        <span className="font-sans font-semibold text-cream text-[13px] tracking-[2.5px] uppercase">
          View Full Portfolio
        </span>
      </Link>
    </section>
  );
}
