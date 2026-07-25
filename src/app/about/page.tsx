import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import StatsRibbon from "@/components/about/StatsRibbon";
import NarrativeSection from "@/components/about/NarrativeSection";
import PressMentions from "@/components/about/PressMentions";

export const metadata: Metadata = {
  title: "About Vrinda Malhotra | Artree by Vrinda",
  description:
    "Meet Vrinda Malhotra, founder and creative curator of Artree — from a single hand-painted wedding portrait to an international atelier for heritage trousseaus and archival portraiture.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StatsRibbon />
      <NarrativeSection />
      <PressMentions />
    </>
  );
}
