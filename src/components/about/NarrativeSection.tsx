const originsImage =
  "https://www.figma.com/api/mcp/asset/e605a7bf-1b5f-42c7-8a3a-c64166833580";
const materialsImage =
  "https://www.figma.com/api/mcp/asset/a505b769-6edb-40f6-9377-5ba99b99a3d1";

export default function NarrativeSection() {
  return (
    <section className="bg-cream-soft flex flex-col gap-20 md:gap-30 items-start px-6 py-16 md:px-20 md:py-30">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center w-full">
        <div className="flex flex-col gap-5 items-start flex-1 min-w-0">
          <p className="font-sans font-bold text-gold text-xs tracking-[2.5px] uppercase">
            Our Origins
          </p>
          <h2 className="font-serif font-normal leading-[1.2] text-maroon text-3xl md:text-[40px]">
            The Beginning: Paint &amp; Intention
          </h2>
          <p className="font-sans leading-[1.8] text-plum text-[15px]">
            Artree was born from a singular canvas. After completing my fine
            arts training, I was asked to paint a traditional couple&rsquo;s
            wedding portrait as a family gift. The absolute delight on their
            faces made me realize how rare deeply personal keepsakes had
            become. I resolved to build an atelier where gifting feels like
            high art.
          </p>
        </div>
        <div className="relative rounded-md w-full md:w-[560px] h-[280px] md:h-[380px] shrink-0 overflow-hidden">
          <img
            alt="Wedding portrait being painted on an easel"
            className="object-cover size-full"
            src={originsImage}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-16 items-center w-full">
        <div className="flex flex-col gap-5 items-start flex-1 min-w-0">
          <p className="font-sans font-bold text-gold text-xs tracking-[2.5px] uppercase">
            Our Materials
          </p>
          <h2 className="font-serif font-normal leading-[1.2] text-maroon text-3xl md:text-[40px]">
            The Craft: Raw Silk &amp; Pure Brass
          </h2>
          <p className="font-sans leading-[1.8] text-plum text-[15px]">
            We never cut corners. Our trunks are wrapped in raw Indian silks
            and pure linen fabrics. Our monogram seals are handcrafted from
            solid brass, ensuring they age beautifully over centuries. For
            portraits, we utilize heavy archival linen canvases and delicate
            24-karat gold-leaf detailing to make them literally shine under
            your home lights.
          </p>
        </div>
        <div className="relative rounded-md w-full md:w-[560px] h-[280px] md:h-[380px] shrink-0 overflow-hidden">
          <img
            alt="Hand embroidering trousseau fabric with pearls"
            className="object-cover size-full"
            src={materialsImage}
          />
        </div>
      </div>
    </section>
  );
}
