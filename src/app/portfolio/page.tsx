import type { Metadata } from "next";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import GalleryCta from "@/components/portfolio/GalleryCta";

export const metadata: Metadata = {
  title: "Portfolio | Artree by Vrinda",
  description:
    "Curated chronicles of Shagun, art, and grace — browse hand-crafted trousseaus, bespoke gifting, and painted portraits from the Artree atelier.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <GalleryCta />
    </>
  );
}
