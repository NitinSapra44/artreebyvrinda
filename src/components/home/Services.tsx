const SERVICES = [
  {
    name: "Custom Trousseaus",
    image:
      "https://www.figma.com/api/mcp/asset/747557f4-1670-445c-b180-5f01c257ab11",
    description:
      "Exquisite bridal and wedding packaging tailored to your ceremony's aesthetic. Complete conceptual design from color themes to materials.",
    features: [
      "Pure Silk & Linen Covered Trunks",
      "Custom Brass Monogram Calligraphy",
      "Floral & Lace Embellishments",
      "Bespoke Ring Platters & Coin Trays",
    ],
  },
  {
    name: "Bespoke Gifting",
    image:
      "https://www.figma.com/api/mcp/asset/077068d2-5f64-4e65-bb19-0ba0cf171bee",
    description:
      "Curated high-end gift hampers for corporative milestones, family announcements, and wedding invitations designed to impress.",
    features: [
      "Handpicked Artisanal Delicacies",
      "Premium Scented Pillars & Florals",
      "Handmade Gift Envelopes & Cards",
      "Worldwide Secure Shipping",
    ],
  },
  {
    name: "Hand-Painted Portraits",
    image:
      "https://www.figma.com/api/mcp/asset/e1d5f366-42a5-4187-be20-e88b26bcea7a",
    description:
      "Archival quality, hand-painted portraits made with rich oils and gold-leaf details. Captured from your favorite family memories.",
    features: [
      "Archival Heavyweight Canvas",
      "Delicate Real 24K Gold-Leaf Haloes",
      "Detailed Textured Detailing",
      "Custom Framed with Premium Oak",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-cream flex flex-col gap-14 items-center px-6 py-16 md:px-20 md:py-[120px]"
    >
      <div className="flex flex-col gap-3 items-center">
        <p className="font-sans font-bold text-gold text-xs tracking-[3px] uppercase">
          Our Specializations
        </p>
        <h2 className="font-serif font-normal text-maroon text-3xl md:text-[40px] text-center">
          Handcrafted Offerings
        </h2>
        <div className="h-px w-16 bg-gold-light" />
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-stretch w-full">
        {SERVICES.map((service) => (
          <div
            key={service.name}
            className="bg-cream border border-cream-border rounded-lg flex flex-col overflow-hidden shadow-[0px_12px_32px_0px_rgba(44,30,33,0.05)] flex-1"
          >
            <div className="h-[240px] w-full overflow-hidden">
              <img
                alt={service.name}
                className="object-cover size-full"
                src={service.image}
              />
            </div>
            <div className="flex flex-1 flex-col gap-5 items-start p-8">
              <div className="flex flex-col gap-2 items-start">
                <p className="font-serif font-semibold text-maroon text-2xl">
                  {service.name}
                </p>
                <p className="font-sans leading-[1.5] text-plum text-[13px]">
                  {service.description}
                </p>
              </div>
              <div className="h-px w-full bg-cream-border" />
              <div className="flex flex-col gap-2.5 items-start">
                {service.features.map((feature) => (
                  <div key={feature} className="flex gap-2 items-center">
                    <div className="size-1 rounded-full bg-gold shrink-0" />
                    <p className="font-sans text-ink text-[13px]">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
