import Link from "next/link";

export default function GalleryCta() {
  return (
    <section className="bg-cream-soft flex flex-col gap-7 items-center px-6 py-16 md:px-20 md:py-24 text-center">
      <h2 className="font-serif font-normal text-maroon text-3xl md:text-[32px]">
        Craving a Truly Custom Masterpiece?
      </h2>
      <p className="font-sans leading-[1.6] text-plum text-[15px] max-w-[600px]">
        Every wedding holds a unique melody. Let&rsquo;s sit down to paint,
        weave, and craft yours into tangible elegance.
      </p>
      <Link
        href="/contact"
        className="bg-maroon border border-gold-light rounded flex items-center justify-center px-9 py-4"
      >
        <span className="font-sans font-semibold text-cream text-[13px] tracking-[2.5px] uppercase">
          Inquire Online Now
        </span>
      </Link>
    </section>
  );
}
