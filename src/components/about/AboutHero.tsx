const portraitImage =
  "https://www.figma.com/api/mcp/asset/e3587bfb-87e2-4bec-9505-5ba9dd09a747";

export default function AboutHero() {
  return (
    <section className="bg-cream flex flex-col md:flex-row gap-12 md:gap-16 items-center px-6 py-16 md:px-20 md:py-20">
      <div className="relative flex flex-col items-center justify-center w-full md:w-[560px] h-[420px] md:h-[640px] shrink-0">
        <div className="absolute border border-gold-light rounded-md h-[85%] w-[90%] top-4 left-4" />
        <div className="absolute h-[91%] w-[94%] rounded-md top-0 left-0 overflow-hidden">
          <img
            alt="Vrinda Malhotra painting a portrait in her Delhi studio"
            className="object-cover pointer-events-none size-full"
            src={portraitImage}
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 items-start w-full max-w-[656px]">
        <p className="font-sans font-bold text-gold text-[13px] tracking-[3px] uppercase">
          Meet Vrinda Malhotra
        </p>
        <h1 className="font-serif font-normal leading-[1.1] text-maroon text-4xl md:text-5xl lg:text-[56px]">
          Preserving Shagun Through Handcrafted Detail
        </h1>
        <p className="font-sans leading-[1.8] text-plum text-base">
          I believe that beautiful celebrations deserve beautifully packaged
          memories. What began years ago in Delhi as my quiet individual
          space for fine portraiture has grown into an international atelier
          trusted by couples seeking premium heritage preparations.
        </p>
        <p className="font-sans leading-[1.8] text-plum text-base">
          At Artree, we do not simply box wedding favors; we sculpt heritage
          keepsakes. Every ribbon, custom brass lock, and gold-leaf halo on
          our canvases is placed individually by hand in our studio.
        </p>
        <div className="flex flex-col gap-1 items-start pt-4">
          <p className="font-serif italic text-gold text-[28px]">
            Vrinda Malhotra
          </p>
          <p className="font-sans text-plum text-[11px] tracking-[1.5px] uppercase">
            Founder &amp; Creative Curator
          </p>
        </div>
      </div>
    </section>
  );
}
