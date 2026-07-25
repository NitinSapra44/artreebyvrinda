const headerDivider =
  "https://www.figma.com/api/mcp/asset/5349ed82-8742-4257-8933-c57565a6030f";
const mapPinIcon =
  "https://www.figma.com/api/mcp/asset/bc3c766f-82f4-43d5-ba5b-4992945b9887";
const whatsappIconWrap =
  "https://www.figma.com/api/mcp/asset/7e8f51cd-67e6-4d4c-9db3-44c3f53d3e21";
const emailIconWrap =
  "https://www.figma.com/api/mcp/asset/375281bf-cb49-46f2-b117-23e2e05ee2c6";
const clockIcon =
  "https://www.figma.com/api/mcp/asset/4f3af12a-f514-4ba1-ba74-f70eeb1b5bbd";

type InfoCard = {
  eyebrow: string;
  title: string;
  description: string;
  icon:
    | { type: "wrapped"; src: string }
    | { type: "standalone"; src: string };
};

const INFO_CARDS: InfoCard[] = [
  {
    eyebrow: "Location Address",
    title: "Delhi NCR Studio",
    description:
      "14, Haus Khas Village Atelier, New Delhi, India. Strictly by prior appointment.",
    icon: { type: "wrapped", src: mapPinIcon },
  },
  {
    eyebrow: "Chat Support",
    title: "Atelier WhatsApp",
    description:
      "Direct chats with Vrinda's styling desk for immediate bookings: +91 98100 12345.",
    icon: { type: "standalone", src: whatsappIconWrap },
  },
  {
    eyebrow: "Inquiry Email",
    title: "Atelier Mail",
    description:
      "For general queries, media packages, and press updates: vrinda@artreebyvrinda.com.",
    icon: { type: "standalone", src: emailIconWrap },
  },
  {
    eyebrow: "Working Hours",
    title: "Studio Hours",
    description:
      "Tuesday through Sunday, 10:00 AM to 7:00 PM. Closed on National Holidays.",
    icon: { type: "wrapped", src: clockIcon },
  },
];

export default function StudioInformation() {
  return (
    <section className="bg-cream-soft flex flex-col gap-14 items-center px-6 py-16 md:px-20 md:py-[120px]">
      <div className="flex flex-col gap-3 items-center w-full">
        <p className="font-sans font-bold text-gold text-xs tracking-[3px] uppercase">
          Visit &amp; Consult
        </p>
        <h2 className="font-serif font-normal text-maroon text-3xl md:text-[40px] text-center">
          The Studio Experience
        </h2>
        <img alt="" className="h-[38px] w-[240px]" src={headerDivider} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {INFO_CARDS.map((card) => (
          <div
            key={card.title}
            className="bg-cream border border-cream-border rounded-md flex flex-col gap-4 items-start p-7"
          >
            <div className="flex gap-4 items-center">
              {card.icon.type === "wrapped" ? (
                <div className="bg-cream-soft flex items-center justify-center rounded-full shrink-0 size-10">
                  <img alt="" className="size-[18px]" src={card.icon.src} />
                </div>
              ) : (
                <img alt="" className="size-10 shrink-0" src={card.icon.src} />
              )}
              <div className="flex flex-col gap-0.5 items-start">
                <p className="font-sans font-bold text-gold text-[10px] tracking-[1px] uppercase">
                  {card.eyebrow}
                </p>
                <p className="font-serif font-semibold text-maroon text-xl">
                  {card.title}
                </p>
              </div>
            </div>
            <p className="font-sans leading-[1.5] text-plum text-[13px]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
