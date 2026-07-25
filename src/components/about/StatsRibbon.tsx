const STATS = [
  { value: "1,200+", label: "Trousseaus Hand-Weaved" },
  { value: "450+", label: "Archival Portraits Painted" },
  { value: "56K+", label: "Community Worldwide" },
  { value: "8+ Years", label: "Years of Fine Artistry" },
];

export default function StatsRibbon() {
  return (
    <section className="bg-maroon flex flex-wrap justify-center md:justify-between items-start gap-x-10 gap-y-8 px-6 py-12 md:px-20 md:py-14">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col gap-1 items-center w-[45%] md:w-[260px]"
        >
          <p className="font-serif font-bold text-gold-light text-4xl md:text-5xl text-center">
            {stat.value}
          </p>
          <p className="font-sans text-cream/80 text-xs tracking-[1px] uppercase text-center">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
}
