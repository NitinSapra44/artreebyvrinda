const asteriskIcon =
  "https://www.figma.com/api/mcp/asset/a8a3eb6d-0316-42a7-a89a-bdf32f28bfd4";

const STEPS = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We sit down over warm tea (or a digital call) to discuss your event's theme, color story, and aesthetic wishes.",
  },
  {
    number: "02",
    title: "Design Concept",
    description:
      "Vrinda draft a detailed moodboard incorporating proposed fabrics, box styles, and artistic portraits.",
  },
  {
    number: "03",
    title: "Hand-Crafting",
    description:
      "Your orders are handcrafted individually at our studio using custom brass details and curated silks.",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "Each piece is carefully padded and securely shipped worldwide, arriving fresh for your beautiful moment.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-cream flex flex-col gap-14 items-center px-6 py-16 md:px-20 md:py-[120px]"
    >
      <div className="flex flex-col gap-3 items-center">
        <p className="font-sans font-bold text-gold text-xs tracking-[3px] uppercase">
          Our Craft
        </p>
        <h2 className="font-serif font-normal text-maroon text-3xl md:text-[40px] text-center">
          How It Works
        </h2>
        <div className="h-px w-16 bg-gold-light" />
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-stretch w-full">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="bg-cream border border-cream-border rounded-md flex flex-col gap-5 items-start p-6 flex-1"
          >
            <div className="flex items-center justify-between w-full">
              <p className="font-serif font-normal text-[#d49a9a] text-4xl">
                {step.number}
              </p>
              <img alt="" className="size-6" src={asteriskIcon} />
            </div>
            <div className="flex flex-col gap-2.5 items-start w-full">
              <p className="font-serif font-semibold text-maroon text-xl">
                {step.title}
              </p>
              <p className="font-sans leading-[1.5] text-plum text-[13px]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
