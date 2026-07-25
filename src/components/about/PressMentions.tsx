const PRESS = [
  "Vogue Weddings",
  "Brides India",
  "Architectural Digest",
  "Bazaar Bride",
  "Elle Decor",
];

export default function PressMentions() {
  return (
    <section className="flex flex-col gap-12 items-center px-6 py-16 md:px-20 md:py-25">
      <p className="font-sans font-bold text-gold text-xs tracking-[3px] uppercase">
        Featured &amp; Loved In
      </p>
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-10 gap-y-4 w-full">
        {PRESS.map((name) => (
          <p
            key={name}
            className="font-serif font-bold text-maroon text-xl md:text-[22px] tracking-[2px] uppercase opacity-40"
          >
            {name}
          </p>
        ))}
      </div>
    </section>
  );
}
