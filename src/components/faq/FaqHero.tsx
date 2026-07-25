const dividerImage =
  "https://www.figma.com/api/mcp/asset/488cea49-2433-495f-8083-050f86ab8af6";

export default function FaqHero() {
  return (
    <section className="bg-cream flex flex-col gap-5 items-center px-6 pb-10 pt-16 md:px-20 md:pb-10 md:pt-20 text-center">
      <p className="font-sans font-bold text-gold text-[13px] tracking-[3px] uppercase">
        Atelier Queries
      </p>
      <h1 className="font-serif font-normal leading-[1.1] text-maroon text-4xl md:text-6xl lg:text-[64px] max-w-[800px]">
        Frequently Asked Questions
      </h1>
      <p className="font-sans leading-[1.6] text-plum text-[15px] max-w-[650px]">
        Answers to your questions regarding our handcrafted materials,
        commissioning timelines, shipping safety, and custom bridal layouts.
      </p>
      <div className="h-[38px] w-[240px]">
        <img
          alt=""
          className="block size-full"
          src={dividerImage}
        />
      </div>
    </section>
  );
}
