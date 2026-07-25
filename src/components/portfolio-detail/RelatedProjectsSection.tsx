import Link from "next/link";

const dividerImage =
  "https://www.figma.com/api/mcp/asset/26d343c1-0716-4c06-8617-f6396fe7f2fc";

const RELATED_PROJECTS = [
  {
    slug: "the-ivory-royal-platter",
    category: "Trousseau",
    title: "The Ivory Royal Platter",
    image:
      "https://www.figma.com/api/mcp/asset/ca122df4-c924-48b2-ba00-9a2554b33c33",
    alt: "Ivory and crimson bridal trousseau platter styled with fresh florals",
  },
  {
    slug: "ancestral-home-vignette",
    category: "Portrait Studio",
    title: "Ancestral Home Vignette",
    image:
      "https://www.figma.com/api/mcp/asset/72c2361c-4788-4111-bb1a-b1534e7ce029",
    alt: "Hand-painted portrait of a bride seated in an ancestral haveli",
  },
  {
    slug: "saffron-honey-milestone-gift",
    category: "Bespoke Gifting",
    title: "Saffron & Honey Milestone Gift",
    image:
      "https://www.figma.com/api/mcp/asset/5758984a-832e-4c06-af5d-a9d1c0bf8c7e",
    alt: "Curated saffron and honey gift basket styled on a wooden table",
  },
];

export default function RelatedProjectsSection() {
  return (
    <section className="bg-cream-soft flex flex-col gap-14 items-start px-6 py-16 md:px-20 md:py-[120px]">
      <div className="flex flex-col gap-3 items-center w-full">
        <p className="font-sans font-bold text-gold text-[13px] tracking-[3px] uppercase">
          The Collection
        </p>
        <h2 className="font-serif text-maroon text-3xl md:text-4xl text-center">
          Explore Other Creations
        </h2>
        <img
          alt=""
          aria-hidden="true"
          className="h-[38px] w-[240px]"
          src={dividerImage}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start w-full">
        {RELATED_PROJECTS.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="flex flex-col gap-4 items-start flex-1 w-full group"
          >
            <div className="h-[280px] w-full rounded overflow-hidden">
              <img
                alt={project.alt}
                className="object-cover size-full transition-transform duration-500 group-hover:scale-105"
                src={project.image}
              />
            </div>
            <div className="flex flex-col gap-1 items-start">
              <p className="font-sans font-bold text-gold text-[11px] tracking-[1.5px] uppercase">
                {project.category}
              </p>
              <p className="font-serif font-medium text-maroon text-lg group-hover:text-gold transition-colors">
                {project.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
