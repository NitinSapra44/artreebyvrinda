export default function FeaturedQuoteHero() {
  return (
    <section className="bg-cream-soft flex flex-col gap-6 md:gap-8 items-center px-6 py-16 md:px-20 md:py-[100px]">
      <p className="font-serif font-normal leading-[0.3] text-gold-light text-7xl md:text-[120px] text-center">
        &#8220;
      </p>
      <p className="font-serif font-normal leading-[1.4] text-maroon text-2xl md:text-3xl lg:text-[40px] text-center max-w-[900px]">
        I don&rsquo;t just assemble items; I build family diamonds into them.
        From securing custom brass latches on pure linen trunks to capturing
        the exact spark of a grandmother&rsquo;s smile on raw canvas.
      </p>
      <div className="flex flex-col gap-1 items-center">
        <p className="font-sans font-bold text-gold text-[13px] tracking-[2px] uppercase">
          Vrinda Malhotra
        </p>
        <p className="font-sans font-normal text-plum text-[11px]">
          Founder &amp; Creative Curator
        </p>
      </div>
    </section>
  );
}
