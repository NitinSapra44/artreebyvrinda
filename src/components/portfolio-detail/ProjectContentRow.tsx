import Link from "next/link";

const inlineImage1 =
  "https://www.figma.com/api/mcp/asset/1885978d-2033-49ab-bea0-32baa4e5c96a";
const inlineImage2 =
  "https://www.figma.com/api/mcp/asset/c1168333-286e-4ebe-8091-0ff4c195ef7b";
const inlineImage3 =
  "https://www.figma.com/api/mcp/asset/23108a74-87c2-4f96-a5fe-7b9583a3d15c";
const inlineImage4 =
  "https://www.figma.com/api/mcp/asset/0e6fa8e6-0782-4efe-b208-8d2b990fe687";

const SPECS = [
  { label: "Event Type", value: "Royal Palace Wedding" },
  {
    label: "Items Created",
    value: "15 Raw-Silk trunks, 1 Gold-Leaf Couple Portrait, 120 Gilded Invitations",
  },
  { label: "Delivery Timeline", value: "12 Weeks of Craftsmanship" },
  { label: "Location", value: "New Delhi & Jaipur, India" },
];

export default function ProjectContentRow() {
  return (
    <section className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start px-6 py-16 md:px-20 md:py-20">
      <div className="flex flex-col gap-8 items-start flex-1 min-w-0">
        <div className="flex flex-col gap-1.5 items-start">
          <p className="font-sans font-bold text-gold text-xs tracking-[2.5px] uppercase">
            The Creation Story
          </p>
          <h2 className="font-serif leading-[1.15] text-maroon text-3xl md:text-4xl">
            Translating Haveli Architecture into Tactile Keepsakes
          </h2>
        </div>

        <p className="font-sans leading-[1.8] text-plum text-[15px]">
          When Radhika and Akshay approached Artree, they wished to capture
          the vintage, architectural legacy of their family&rsquo;s ancestral
          haveli in Rajasthan. Our creative curator, Vrinda Malhotra, spent
          three days analyzing traditional blueprint arches and fresco
          shades to conceptualize a cohesive bridal palette.
        </p>
        <p className="font-sans leading-[1.8] text-plum text-[15px]">
          We hand-selected pure raw silks in shades of royal ivory, deep
          Rajasthani crimson, and vintage sage green. Each of the fifteen
          trunks was structured individually by our master wooden craftsmen
          and carefully padded with raw cotton. We designed solid brass
          monograms displaying the family&rsquo;s calligraphy initials,
          ensuring every chest would act as an archival heirloom chest for
          future generations.
        </p>

        <div className="flex flex-col gap-6 items-start w-full py-4">
          <div className="flex flex-col sm:flex-row gap-6 items-start w-full">
            <div className="flex-1 w-full h-[320px] rounded overflow-hidden">
              <img
                alt="Handcrafted bridal accessories laid out for the trousseau"
                className="object-cover size-full"
                src={inlineImage1}
              />
            </div>
            <div className="flex-1 w-full h-[320px] rounded overflow-hidden">
              <img
                alt="Hand-painted gold-leaf portrait of the couple"
                className="object-cover size-full"
                src={inlineImage2}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 items-start w-full">
            <div className="flex-1 w-full h-[320px] rounded overflow-hidden">
              <img
                alt="Artisan hand-embroidering silk fabric"
                className="object-cover size-full"
                src={inlineImage3}
              />
            </div>
            <div className="flex-1 w-full h-[320px] rounded overflow-hidden">
              <img
                alt="Stacked raw-silk trunks styled beneath a chandelier"
                className="object-cover size-full"
                src={inlineImage4}
              />
            </div>
          </div>
        </div>

        <p className="font-sans leading-[1.8] text-plum text-[15px]">
          &ldquo;Every single drawer lined in silk felt like opening a box
          of memories.&rdquo; To complete the assemblage, Vrinda hand-painted
          a bespoke double portrait of the couple with detailed 24K gold
          leaf halos that literally shimmer under warm evening room lights.
          The outcome was a sensory celebration that left deep, memorable
          impressions on every guest.
        </p>
      </div>

      <div className="flex flex-col gap-8 items-start w-full lg:w-[400px] shrink-0 bg-cream-soft border border-gold-light rounded-lg p-8 md:p-10">
        <p className="font-serif font-semibold text-maroon text-2xl md:text-[28px]">
          Project Dossier
        </p>

        <div className="flex flex-col gap-6 items-start w-full">
          {SPECS.map((spec) => (
            <div key={spec.label} className="flex flex-col gap-1 items-start">
              <p className="font-sans font-bold text-gold text-[11px] tracking-[1.5px] uppercase">
                {spec.label}
              </p>
              <p className="font-sans font-semibold text-ink text-sm">
                {spec.value}
              </p>
            </div>
          ))}
        </div>

        <div className="h-px w-full bg-gold-light/40" />

        <Link
          href="/contact"
          className="flex items-center justify-center w-full bg-maroon rounded py-4"
        >
          <span className="font-sans font-semibold text-cream text-[13px] tracking-[1.5px] uppercase">
            Inquire About Similar Setup
          </span>
        </Link>
      </div>
    </section>
  );
}
