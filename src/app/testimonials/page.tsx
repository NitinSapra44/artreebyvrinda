import type { Metadata } from "next";
import FeaturedQuoteHero from "@/components/testimonials/FeaturedQuoteHero";
import ReviewsSection from "@/components/testimonials/ReviewsSection";
import PressSection from "@/components/testimonials/PressSection";

export const metadata: Metadata = {
  title: "Testimonials | Artree by Vrinda Malhotra",
  description:
    "Words of warmth from brides, families, and patrons across the globe on Artree's bespoke trousseaus, gifting, and hand-painted portraits.",
};

export default function TestimonialsPage() {
  return (
    <>
      <FeaturedQuoteHero />
      <ReviewsSection />
      <PressSection />
    </>
  );
}
