const heroImage =
  "https://www.figma.com/api/mcp/asset/831b3ee6-f77a-40ad-9ba6-f19cf3ea06ca";

export default function ProjectHero() {
  return (
    <section className="relative flex items-end justify-center min-h-[420px] md:min-h-[640px] px-6 py-16 md:px-20 md:py-20 overflow-hidden">
      <img
        alt="Royal wedding decor with floral chandeliers, candlelit aisles, and gifted trunks"
        className="absolute inset-0 object-cover size-full"
        src={heroImage}
      />
      <div className="absolute bg-maroon/35 inset-0" />
      <div className="relative flex flex-col gap-3 items-start w-full max-w-[1280px] bg-cream/90 border border-gold-light rounded p-6 md:p-8">
        <p className="font-sans font-bold text-gold text-[11px] tracking-[3px] uppercase">
          Featured Case Study
        </p>
        <h1 className="font-serif font-bold leading-[1.1] text-maroon text-3xl md:text-5xl">
          The Grand Shahi Assemblage for Radhika &amp; Akshay
        </h1>
        <p className="font-sans text-plum text-sm md:text-[14px]">
          Celebrating a royal union in Delhi NCR with fifteen custom raw-silk
          chests, gold-haloed wedding portraits, and curated invite trays.
        </p>
      </div>
    </section>
  );
}
