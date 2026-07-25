import Link from "next/link";

const heroImage =
  "https://www.figma.com/api/mcp/asset/cd78c1df-4d05-4e5a-bc3c-c03e3a2e281a";

export default function Hero() {
  return (
    <section className="bg-cream flex flex-col gap-12 items-center px-6 pb-16 pt-16 md:px-20 md:pb-24 md:pt-20">
      <div className="flex flex-col gap-5 items-center w-full max-w-[1061px]">
        <p className="font-serif text-gold text-lg text-center">
          Bespoke Gifting &amp; Luxe Trouseau Studio
        </p>
        <h1 className="font-serif font-normal leading-[1.1] text-maroon text-4xl md:text-6xl lg:text-[72px] text-center tracking-[-1.5px]">
          Handcrafted Luxuries for Life&rsquo;s Most Beautiful Moments
        </h1>
        <p className="font-sans leading-[1.6] text-plum text-[15px] text-center tracking-[0.5px] max-w-[733px]">
          Impeccably tailored trousseaus, customized gift packaging, and
          exquisite hand-painted portraiture. Crafted with love by Vrinda
          Malhotra.
        </p>
        <div className="flex flex-wrap gap-4 items-start justify-center pt-3">
          <Link
            href="/portfolio"
            className="bg-maroon border border-gold-light rounded flex items-center justify-center px-9 py-4"
          >
            <span className="font-sans font-semibold text-cream text-[13px] tracking-[2.5px] uppercase">
              Explore Atelier
            </span>
          </Link>
          <Link
            href="/services"
            className="bg-transparent border border-gold-light rounded flex items-center justify-center px-8 py-3.5"
          >
            <span className="font-sans font-semibold text-maroon text-xs tracking-[2px] uppercase">
              View Services
            </span>
          </Link>
        </div>
      </div>

      <div className="border border-[#d8c9b5] rounded-lg flex items-end p-6 md:p-8 relative w-full max-w-[1280px] h-[340px] md:h-[540px] overflow-hidden">
        <img
          alt="Bridal trousseau flatlay with gift boxes and florals"
          className="absolute inset-0 object-cover rounded-lg size-full"
          src={heroImage}
        />
        <div className="absolute bg-maroon/15 inset-0 rounded-lg" />
        <div className="relative bg-cream/95 border border-gold-light rounded flex flex-col gap-1.5 items-start p-6 shadow-[0px_8px_24px_0px_rgba(44,30,33,0.1)] w-full max-w-[400px]">
          <p className="font-serif font-semibold text-maroon text-xl">
            The Bridal Assemblage
          </p>
          <p className="font-sans leading-[1.4] text-plum text-[13px]">
            Every ribbon pleated by hand, every chest lined with pure raw
            silk. We believe beautiful things deserve beautiful beginnings.
          </p>
        </div>
      </div>
    </section>
  );
}
