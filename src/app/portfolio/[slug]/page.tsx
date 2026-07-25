import Link from "next/link";
import type { Metadata } from "next";
import ProjectHero from "@/components/portfolio-detail/ProjectHero";
import ProjectContentRow from "@/components/portfolio-detail/ProjectContentRow";
import RelatedProjectsSection from "@/components/portfolio-detail/RelatedProjectsSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, " ")} | Artree by Vrinda Malhotra`,
    description:
      "Celebrating a royal union in Delhi NCR with fifteen custom raw-silk chests, gold-haloed wedding portraits, and curated invite trays.",
  };
}

export default async function PortfolioProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await params;

  return (
    <>
      <div className="px-6 pt-6 md:px-20">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 font-sans text-plum text-xs tracking-[1.5px] uppercase hover:text-gold transition-colors"
        >
          <span aria-hidden="true">&larr;</span>
          Back to Portfolio
        </Link>
      </div>
      <ProjectHero />
      <ProjectContentRow />
      <RelatedProjectsSection />
    </>
  );
}
