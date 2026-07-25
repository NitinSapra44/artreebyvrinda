const instagramIcon =
  "https://www.figma.com/api/mcp/asset/3551c2c4-75dd-4892-a2f1-902aa8cdaed9";

const POSTS = [
  {
    image:
      "https://www.figma.com/api/mcp/asset/d47c9035-f083-4ffd-a0ca-968c0e4a98bd",
    caption: "Hand-pleated raw silk trays loaded with sweet blessings.",
  },
  {
    image:
      "https://www.figma.com/api/mcp/asset/a38f75df-a376-4276-8913-f8f06b80b333",
    caption: "Putting the final gold-leaf strokes on custom couple frames.",
  },
  {
    image:
      "https://www.figma.com/api/mcp/asset/7a85bf7b-5651-4c12-b7b7-39c2fed38668",
    caption: "Bespoke hampers crafted for a quiet family celebration.",
  },
  {
    image:
      "https://www.figma.com/api/mcp/asset/03bd0fdf-dc1b-4614-be0f-9f0c02e01a20",
    caption: "Archival detail kit. Behind the scenes at our studio.",
  },
];

export default function Instagram() {
  return (
    <section
      id="instagram"
      className="bg-cream flex flex-col gap-12 items-center px-6 py-16 md:px-20 md:py-[120px]"
    >
      <div className="flex flex-col gap-3 items-center">
        <p className="font-sans font-bold text-gold text-xs tracking-[3px] uppercase">
          Studio Diary
        </p>
        <a
          href="https://instagram.com/artreebyvrinda"
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif font-normal text-maroon text-3xl md:text-[40px] text-center hover:text-gold transition-colors"
        >
          Follow the Journey @artreebyvrinda
        </a>
        <div className="h-px w-16 bg-gold-light" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
        {POSTS.map((post) => (
          <div
            key={post.caption}
            className="border border-[#d8c9b5] rounded flex flex-col items-start overflow-hidden"
          >
            <div className="aspect-square w-full overflow-hidden">
              <img
                alt={post.caption}
                className="object-cover size-full"
                src={post.image}
              />
            </div>
            <div className="bg-cream flex gap-2 items-center p-4 w-full">
              <img
                alt=""
                className="size-3.5 shrink-0"
                src={instagramIcon}
              />
              <p className="font-sans text-plum text-[11px] truncate min-w-0 flex-1">
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      <a
        href="https://instagram.com/artreebyvrinda"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-maroon border border-gold-light rounded flex items-center justify-center px-9 py-4"
      >
        <span className="font-sans font-semibold text-cream text-[13px] tracking-[2.5px] uppercase">
          Join our Instagram Community
        </span>
      </a>
    </section>
  );
}
