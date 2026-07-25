import ServiceDetailBlock, { ServiceDetail } from "./ServiceDetailBlock";

const SERVICES: ServiceDetail[] = [
  {
    id: "custom-trousseaus",
    title: "Custom Trousseaus & Bridal Packaging",
    tagline:
      "Exquisite bridal chest styling tailored to your heirloom wardrobe.",
    description:
      "Our signature service. We plan, assemble, and hand-craft custom wedding wardrobes from absolute scratch. This is a complete thematic solution that covers color palettes, personalized brass calligraphy monograms, ring platters, and custom velvet fabric trays.",
    inclusions: [
      "Pure Silk & Linen Covered Storage Trunks",
      "Hand-stitched lace, ribbon, and pearl embellishments",
      "Personalized brass monogram engraving services",
      "Handcrafted ring platters and shagun envelope trays",
    ],
    price: "₹5,000",
    image: "https://www.figma.com/api/mcp/asset/2a8229ef-a458-4160-b6e2-131fb589253c",
    background: "cream-soft",
    reverse: false,
  },
  {
    id: "bespoke-gift-hampers",
    title: "Bespoke Gift Hampers",
    tagline:
      "High-end favor curation for milestones, family updates, and invites.",
    description:
      "Ensure your closest family and colleagues feel incredible appreciation. We compose elite hamper chests loaded with carefully curated gourmet treats, handpicked dry fruits, organic honey, custom scented pillar candles, and handcrafted, gold-embossed message cards.",
    inclusions: [
      "Artisanal delicacies, organic saffron, and wellness jars",
      "Curated premium candles, floral mist bottles",
      "Handmade message envelopes sealed with real wax labels",
      "Secured worldwide express shipping with real-time tracking",
    ],
    price: "₹3,000",
    image: "https://www.figma.com/api/mcp/asset/1d513d1b-d5cf-4aa1-9212-4b0aad7ac91f",
    background: "cream",
    reverse: true,
  },
  {
    id: "hand-painted-portraits",
    title: "Hand-Painted Portrait Commissions",
    tagline:
      "Museum-grade oil paintings capturing your favorite family unions.",
    description:
      "An archival family heirloom for generations. Vrinda Malhotra personally paints custom oils and gold-leaf details on heavyweight canvas from your dearest photographic memories. Standard options include elegant solid oak framing.",
    inclusions: [
      "Painted entirely by hand with professional archival oil colors",
      "Stunning, delicate 24-karat gold-leaf halos and patterns",
      "Stretched across custom museum-grade oak-wood stretcher bars",
      "Finished with premium, heavy protective varnish coatings",
    ],
    price: "₹8,000",
    image: "https://www.figma.com/api/mcp/asset/aafb8ff9-ac47-4826-b98e-0711fb4504e5",
    background: "cream-soft",
    reverse: false,
  },
];

export default function ServicesSectionsList() {
  return (
    <section className="flex flex-col gap-10 pb-16 md:pb-[120px] w-full">
      {SERVICES.map((service) => (
        <ServiceDetailBlock key={service.id} {...service} />
      ))}
    </section>
  );
}
