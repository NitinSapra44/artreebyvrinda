import type { Metadata } from "next";
import FaqHero from "@/components/faq/FaqHero";
import FaqContentContainer from "@/components/faq/FaqContentContainer";

export const metadata: Metadata = {
  title: "FAQ | Artree by Vrinda",
  description:
    "Answers to your questions regarding our handcrafted materials, commissioning timelines, shipping safety, and custom bridal layouts.",
};

export default function FaqPage() {
  return (
    <>
      <FaqHero />
      <FaqContentContainer />
    </>
  );
}
