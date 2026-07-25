import type { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import BlogGridSection from "@/components/blog/BlogGridSection";
import Pagination from "@/components/blog/Pagination";

export const metadata: Metadata = {
  title: "The Artree Journal | Artree by Vrinda Malhotra",
  description:
    "Step inside our journal of slow craft, thoughtful gestures, and creative living. Reflections on heritage preparations, portraiture, and design.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGridSection />
      <Pagination />
    </>
  );
}
