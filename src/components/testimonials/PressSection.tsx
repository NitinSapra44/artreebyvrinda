const PRESS_LOGOS = [
  "Vogue Weddings",
  "Brides India",
  "Architectural Digest",
  "Bazaar Bride",
  "Elle Decor",
];

export default function PressSection() {
  return (
    <section className="bg-cream-soft flex flex-col gap-12 items-center px-6 pt-16 pb-16 md:px-20 md:pt-20 md:pb-[120px]">
      <p className="font-sans font-bold text-gold text-xs tracking-[3px] uppercase">
        Featured &amp; Loved In
      </p>
      <div className="flex flex-wrap gap-x-10 gap-y-4 items-center justify-center md:flex-nowrap md:justify-between w-full">
        {PRESS_LOGOS.map((logo) => (
          <p
            key={logo}
            className="font-serif font-bold text-maroon text-lg md:text-[22px] tracking-[2px] uppercase opacity-40 whitespace-nowrap"
          >
            {logo}
          </p>
        ))}
      </div>
    </section>
  );
}
