const portraitImage =
  "https://www.figma.com/api/mcp/asset/f2581d4c-55d5-4a99-9504-a1f31464f2d5";

const STATS = [
  { value: "56.7K", label: "Beloved Community" },
  { value: "1,200+", label: "Trousseaus Handcrafted" },
  { value: "450+", label: "Bespoke Painted Portraits" },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-cream-soft flex flex-col md:flex-row gap-12 md:gap-16 items-center px-6 py-16 md:px-20 md:py-[120px]"
    >
      <div className="relative flex flex-col items-center justify-center w-full md:w-[515px] h-[420px] md:h-[600px] shrink-0">
        <div className="absolute border border-gold-light rounded-md h-[85%] w-[90%] top-4 left-4" />
        <div className="absolute h-[90%] w-[94%] rounded-md top-0 left-0 overflow-hidden">
          <img
            alt="Vrinda Malhotra painting a portrait"
            className="object-cover pointer-events-none size-full"
            src={portraitImage}
          />
        </div>
      </div>

      <div className="flex flex-col gap-7 items-start w-full max-w-[733px]">
        <div className="flex flex-col gap-1.5 items-start">
          <p className="font-sans font-bold text-gold text-xs tracking-[2.5px] uppercase">
            The Curator
          </p>
          <h2 className="font-serif font-normal leading-[1.2] text-maroon text-3xl md:text-[40px]">
            The Art of Thoughtful Gifting
          </h2>
        </div>
        <p className="font-sans leading-[1.8] text-plum text-[15px]">
          Welcome to my world of tangible warmth and detail. I am Vrinda
          Malhotra, a creator obsessed with the tactile beauty of wedding
          preparations and bespoke gestures. What began as a quiet space for
          custom painted portraits has bloomed into a luxury design studio
          trusted by over 50,000 lovers of beautiful craft across the globe.
        </p>
        <p className="font-sans leading-[1.8] text-plum text-[15px]">
          &ldquo;I don&rsquo;t just assemble items; I build diamonds into
          them.&rdquo; From securing custom brass latches on pure linen
          trunks to capturing the exact spark of a grandmother&rsquo;s smile
          on raw canvas, each piece from Artree is an archival keepsake
          destined to be cherished for generations.
        </p>

        <div className="h-px w-[240px] bg-gold-light/50" />

        <div className="flex flex-wrap gap-10 items-start">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 items-start">
              <p className="font-serif font-semibold text-maroon text-3xl">
                {stat.value}
              </p>
              <p className="font-sans text-plum text-[11px] tracking-[1px] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
