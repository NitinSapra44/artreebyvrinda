"use client";

import { useState } from "react";

const chevronIcon =
  "https://www.figma.com/api/mcp/asset/3811466a-09dc-49c5-a13d-8b550b710e59";
const ellipseIcon =
  "https://www.figma.com/api/mcp/asset/8f014ae8-e0b2-4ccb-8230-286e65d7ff00";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqCategory = {
  title: string;
  items: FaqItem[];
};

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    title: "Ordering Process",
    items: [
      {
        question: "How early should I book my trousseau preparation?",
        answer:
          "To guarantee Vrinda's personal attention, we recommend booking custom bridal trousseaus at least 2 to 3 months before your delivery date. Emergency requests may be accommodated depending on studio slot availability.",
      },
      {
        question: "What does the initial design consultation involve?",
        answer:
          "We sit down over warm rose tea in our Delhi atelier (or host a digital consultation) to dissect your family event's color themes, architectural style, and specific fabric choices. We then prepare a customized mood board.",
      },
    ],
  },
  {
    title: "Customization & Art",
    items: [
      {
        question:
          "Can I choose the portrait canvas size and gold-leaf details?",
        answer:
          "Absolutely. Our painted portraits range from petite (8x10) up to grand imperial museum sizes (18x24 and larger). Each portrait is hand-painted in oils and finished with delicate real 24K gold-leaf haloes or gilded borders.",
      },
      {
        question:
          "Are we allowed to supply our own heirloom fabrics for the trunks?",
        answer:
          "We love incorporating ancestral elements. If you have vintage saris, pure brocades, or silk scarves that hold special family significance, we can meticulously integrate them to line your custom trousseau drawers.",
      },
    ],
  },
  {
    title: "Delivery & Shipping",
    items: [
      {
        question:
          "How do you package and ship delicate heavy glass and canvas?",
        answer:
          "Each creation is securely padded, bubble-wrapped, and shipped in customized plywood crates to prevent transport shock. We partner with elite global couriers to ensure secure, tracked delivery worldwide.",
      },
      {
        question:
          "Do you offer physical delivery and on-site setup in Delhi NCR?",
        answer:
          "Yes. For our Grand Imperial packages (and available add-ons), our studio assistants provide on-site trousseau arranging, floral detailing, and family display setup at your venue within Delhi NCR.",
      },
    ],
  },
];

const SIDEBAR_STATS = [
  "Response Time: Under 2 Hours",
  "Direct styling feedback",
];

export default function FaqContentContainer() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  function toggleItem(id: string) {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <section className="bg-cream flex flex-col lg:flex-row gap-12 lg:gap-16 items-start px-6 pb-16 md:px-20 md:pb-[120px]">
      <div className="flex flex-col gap-12 items-start w-full flex-1 min-w-0">
        {FAQ_CATEGORIES.map((category, categoryIndex) => (
          <div
            key={category.title}
            className="flex flex-col gap-6 items-start w-full"
          >
            <p className="font-serif font-bold text-maroon text-2xl md:text-[28px]">
              {category.title}
            </p>
            <div className="flex flex-col gap-4 items-start w-full">
              {category.items.map((item, itemIndex) => {
                const id = `${categoryIndex}-${itemIndex}`;
                const isOpen = openItems.has(id);
                return (
                  <div
                    key={id}
                    className="bg-white border border-cream-border rounded-md flex flex-col p-6 w-full"
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(id)}
                      aria-expanded={isOpen}
                      className="flex items-center justify-between gap-4 w-full text-left"
                    >
                      <span className="font-sans font-bold text-ink text-[15px]">
                        {item.question}
                      </span>
                      <img
                        alt=""
                        className={`size-4 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        src={chevronIcon}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-3"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="h-px w-full bg-cream-border mb-3" />
                        <p className="font-sans leading-[1.6] text-plum text-[13px]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-maroon border border-gold-light rounded-lg flex flex-col gap-6 items-start p-10 w-full lg:w-[400px] shrink-0 shadow-[0px_16px_20px_0px_rgba(66,18,29,0.2)]">
        <div className="flex flex-col gap-3 items-start w-full">
          <p className="font-sans font-bold text-gold-light text-[11px] tracking-[2px] uppercase">
            Instant Connection
          </p>
          <p className="font-serif font-semibold leading-[1.1] text-cream text-3xl">
            Need Immediate Guidance?
          </p>
          <p className="font-sans leading-[1.5] text-cream-border text-[13px]">
            Our creative director, Vrinda Malhotra, hosts direct consultations
            for customized gifting setups and emergency bridal packages over
            WhatsApp.
          </p>
        </div>

        <div className="h-px w-full bg-gold-light/40" />

        <div className="flex flex-col gap-3 items-start w-full">
          {SIDEBAR_STATS.map((stat) => (
            <div key={stat} className="flex gap-2 items-center">
              <img alt="" className="size-1 shrink-0" src={ellipseIcon} />
              <p className="font-sans text-cream text-xs">{stat}</p>
            </div>
          ))}
        </div>

        <a
          href="https://wa.me/message"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold-light rounded flex items-center justify-center py-4 w-full"
        >
          <span className="font-sans font-bold text-maroon text-xs tracking-[1px] uppercase">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </section>
  );
}
