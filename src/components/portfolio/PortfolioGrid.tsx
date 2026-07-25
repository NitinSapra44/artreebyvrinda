"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import FilterBar from "./FilterBar";

const imgIvoryRoyalPlatter =
  "https://www.figma.com/api/mcp/asset/8fba9ffc-a867-4bde-a9b5-ad083d7d198b";
const imgShahiShagunTray =
  "https://www.figma.com/api/mcp/asset/ea3888bc-d0a0-43ec-8895-b15807b576db";
const imgPearlVelvetRingBox =
  "https://www.figma.com/api/mcp/asset/cf9d7134-881e-4e3f-969b-227759af2216";
const imgGoldHaloedUnion =
  "https://www.figma.com/api/mcp/asset/67da2bcb-240e-4e39-8c88-a615404938e7";
const imgAncestralHomeVignette =
  "https://www.figma.com/api/mcp/asset/852717a7-d4e5-4e58-8a3f-900d68d303c4";
const imgGildedBotanicalsPortrait =
  "https://www.figma.com/api/mcp/asset/e497ed43-6295-4a8e-bdb7-3fa06ecf2947";
const imgWelcomeHomeHeirloom =
  "https://www.figma.com/api/mcp/asset/23ba27f9-6df1-4c7f-9224-8520e7090e1a";
const imgAtelierInvitationSuite =
  "https://www.figma.com/api/mcp/asset/9a7c1071-b3da-4e5f-851a-f9095d09e738";
const imgSaffronHoneyMilestoneGift =
  "https://www.figma.com/api/mcp/asset/a85790c6-420f-48c1-93ef-2d626e30b559";
const imgLine = "https://www.figma.com/api/mcp/asset/b46b7d5f-8058-4b22-831f-a1e37b90e023";

type PortfolioItem = {
  title: string;
  label: string;
  category: string;
  image: string;
  height: number;
  featured?: boolean;
};

const CATEGORIES = ["All", "Trousseaus", "Bespoke Gifts", "Portraits"];

const ITEMS: PortfolioItem[] = [
  {
    title: "The Ivory Royal Platter",
    label: "Trousseau",
    category: "Trousseaus",
    image: imgIvoryRoyalPlatter,
    height: 360,
  },
  {
    title: "The Shahi Shagun Tray",
    label: "Trousseau",
    category: "Trousseaus",
    image: imgShahiShagunTray,
    height: 360,
  },
  {
    title: "Pearl & Velvet Ring Box",
    label: "Trousseau",
    category: "Trousseaus",
    image: imgPearlVelvetRingBox,
    height: 360,
  },
  {
    title: "The Gold-Haloed Union",
    label: "Portrait Studio",
    category: "Portraits",
    image: imgGoldHaloedUnion,
    height: 440,
    featured: true,
  },
  {
    title: "Ancestral Home Vignette",
    label: "Portrait Studio",
    category: "Portraits",
    image: imgAncestralHomeVignette,
    height: 440,
  },
  {
    title: "Gilded Botanicals Portrait",
    label: "Portrait Studio",
    category: "Portraits",
    image: imgGildedBotanicalsPortrait,
    height: 440,
  },
  {
    title: "Welcome Home Heirloom",
    label: "Bespoke Gifting",
    category: "Bespoke Gifts",
    image: imgWelcomeHomeHeirloom,
    height: 360,
  },
  {
    title: "The Atelier Invitation Suite",
    label: "Bespoke Gifting",
    category: "Bespoke Gifts",
    image: imgAtelierInvitationSuite,
    height: 360,
  },
  {
    title: "Saffron & Honey Milestone Gift",
    label: "Bespoke Gifting",
    category: "Bespoke Gifts",
    image: imgSaffronHoneyMilestoneGift,
    height: 360,
  },
];

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "");
}

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");

  const filteredItems = useMemo(
    () => (active === "All" ? ITEMS : ITEMS.filter((item) => item.category === active)),
    [active],
  );

  return (
    <section className="bg-cream px-6 pb-16 md:px-20 md:pb-[120px]">
      <FilterBar categories={CATEGORIES} active={active} onChange={setActive} />

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
        {filteredItems.map((item) => (
          <Link
            key={item.title}
            href={`/portfolio/${slugify(item.title)}`}
            className="group mb-8 block break-inside-avoid overflow-hidden rounded-lg"
          >
            {item.featured ? (
              <div
                className="relative flex items-center justify-center overflow-hidden rounded-md p-10"
                style={{ height: item.height }}
              >
                <img
                  alt={item.title}
                  className="absolute inset-0 size-full object-cover pointer-events-none transition-transform duration-300 group-hover:scale-105"
                  src={item.image}
                />
                <div className="absolute inset-0 bg-maroon/85" />
                <div className="relative flex flex-col gap-3 items-center text-center">
                  <p className="font-sans font-bold text-gold-light text-[11px] tracking-[2px] uppercase">
                    {item.label}
                  </p>
                  <p className="font-serif font-semibold text-cream text-[28px] leading-[1.15]">
                    {item.title}
                  </p>
                  <img alt="" className="h-px w-10" src={imgLine} />
                  <p className="font-sans font-semibold text-cream text-xs tracking-[1px] uppercase">
                    Inquire About Piece
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4 items-start">
                <div
                  className="w-full overflow-hidden rounded-md"
                  style={{ height: item.height }}
                >
                  <img
                    alt={item.title}
                    className="size-full object-cover pointer-events-none transition-transform duration-300 group-hover:scale-105"
                    src={item.image}
                  />
                </div>
                <div className="flex flex-col gap-1 items-start px-1">
                  <p className="font-sans font-bold text-gold text-[11px] tracking-[1.5px] uppercase">
                    {item.label}
                  </p>
                  <p className="font-serif font-semibold text-maroon text-[22px] leading-[1.2]">
                    {item.title}
                  </p>
                </div>
              </div>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
