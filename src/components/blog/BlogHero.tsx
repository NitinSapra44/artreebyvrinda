const dividerImage =
  "https://www.figma.com/api/mcp/asset/f28983a2-55e7-46b3-ab05-7186ec0d0daa";

export default function BlogHero() {
  return (
    <section className="bg-cream flex flex-col gap-5 items-center px-6 pb-10 pt-16 md:px-20 md:pb-10 md:pt-20">
      <p className="font-sans font-bold text-gold text-xs text-center tracking-[3px] uppercase">
        The Atelier Stories
      </p>
      <h1 className="font-serif font-normal leading-[1.1] text-maroon text-4xl md:text-6xl lg:text-[64px] text-center max-w-[800px]">
        The Artree Journal
      </h1>
      <p className="font-sans leading-[1.6] text-plum text-[15px] text-center max-w-[650px]">
        Step inside our journal of slow craft, thoughtful gestures, and
        creative living. Reflections on heritage preparations, portraiture,
        and design.
      </p>
      <div className="h-[38px] w-[240px]">
        <img
          alt=""
          className="block size-full object-contain"
          src={dividerImage}
        />
      </div>
    </section>
  );
}
