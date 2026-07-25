import Link from "next/link";

const arrowRightImage =
  "https://www.figma.com/api/mcp/asset/eda9fae9-f030-4170-9b5d-7dedf542b214";

const POSTS = [
  {
    date: "October 14, 2026",
    tag: "Trousseau Tips",
    title: "The Anatomy of a Gilded Shagun Box: Handcrafted Heritage",
    excerpt:
      "Deep dive into our fabric choices, custom solid brass monograms, and how we reinforce raw silk to survive centuries of display.",
    image:
      "https://www.figma.com/api/mcp/asset/f160544d-cb25-490f-91c7-126dbf6ebd72",
  },
  {
    date: "September 28, 2026",
    tag: "Behind the Scenes",
    title: "24-Karat Devotion: Our Gold-Leafing Portrait Process",
    excerpt:
      "Step inside Vrinda Malhotra's home studio as she carefully layers whisper-thin gold leaf around heirloom family portraits.",
    image:
      "https://www.figma.com/api/mcp/asset/5baddc3f-4f8d-44e1-8fe3-64a336283e98",
  },
  {
    date: "September 15, 2026",
    tag: "Gift Ideas",
    title: "The Saffron & Honey Aesthetic: Curating Luxe Hampers",
    excerpt:
      "Why the sensory pairing of organic high-altitude honey and hand-threaded saffron makes the ultimate milestone gesture.",
    image:
      "https://www.figma.com/api/mcp/asset/d9842076-e1af-4ac0-9f50-427191868d6e",
  },
  {
    date: "August 30, 2026",
    tag: "Client Stories",
    title: "Meenakshi & Karan: A Regal Delhi NCR Wedding Vignette",
    excerpt:
      "How we crafted fifteen matching raw-silk bridal chest systems to reflect the ancestral architecture of the family's haveli.",
    image:
      "https://www.figma.com/api/mcp/asset/146d78a2-a15e-4a62-bb7f-ff042f2b133c",
  },
  {
    date: "August 12, 2026",
    tag: "Trousseau Tips",
    title: "Preserving Silk & Velvet: Storage Care for Heirlooms",
    excerpt:
      "Expert advice on protecting customized wedding platters and textile storage systems from humidity and aging.",
    image:
      "https://www.figma.com/api/mcp/asset/cfc5bb3b-0607-432b-93a4-b0937a5f3e15",
  },
  {
    date: "July 24, 2026",
    tag: "Gift Ideas",
    title: "The Art of Handwritten Calligraphy in Modern Gifting",
    excerpt:
      "Explore the psychological impact of hand-inked lettering in an era dominated by cold pixel communications.",
    image:
      "https://www.figma.com/api/mcp/asset/6028ba66-9a80-46a2-b918-5b8d4ed6ac68",
  },
];

export default function BlogGridSection() {
  return (
    <section className="bg-cream flex flex-col items-center px-6 pb-16 md:px-20 md:pb-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-[1260px]">
        {POSTS.map((post) => (
          <Link
            key={post.title}
            href="/blog"
            className="bg-white border border-cream-border rounded-lg flex flex-col overflow-hidden transition-shadow hover:shadow-[0px_12px_32px_0px_rgba(44,30,33,0.08)]"
          >
            <div className="h-[260px] w-full overflow-hidden">
              <img
                alt={post.title}
                className="object-cover size-full"
                src={post.image}
              />
            </div>
            <div className="flex flex-col gap-3 items-start px-6 pb-6 pt-2">
              <div className="flex items-center justify-between w-full">
                <p className="font-sans font-semibold text-gold text-[11px]">
                  {post.date}
                </p>
                <div className="bg-cream-soft rounded-[2px] px-2.5 py-1">
                  <p className="font-sans font-bold text-maroon text-[10px] uppercase">
                    {post.tag}
                  </p>
                </div>
              </div>
              <p className="font-serif font-semibold leading-[1.3] text-maroon text-[22px]">
                {post.title}
              </p>
              <p className="font-sans leading-[1.6] text-plum text-[13px]">
                {post.excerpt}
              </p>
              <div className="flex gap-1.5 items-center pt-2">
                <p className="font-sans font-bold text-gold text-[11px] uppercase">
                  Read Article
                </p>
                <img alt="" className="block size-3" src={arrowRightImage} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
