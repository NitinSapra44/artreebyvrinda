import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-maroon flex flex-col gap-16 items-start pb-12 pt-20 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 w-full">
        <div className="flex flex-col gap-4 items-start w-full md:max-w-[405px]">
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-serif font-bold text-gold-light text-3xl tracking-wide">
              ARTREE
            </span>
            <span className="font-sans font-semibold text-cream text-[11px] tracking-[3px] uppercase">
              by vrinda malhotra
            </span>
          </div>
          <p className="font-sans font-normal leading-[1.6] text-cream-border text-[13px]">
            Bespoke bridal trousseaus, custom-gifting trays, and archival
            hand-painted portraits celebrating life&apos;s most golden days.
          </p>
        </div>

        <div className="flex flex-col gap-3 items-start">
          <span className="font-sans font-bold text-gold-light text-[11px] tracking-[2px] uppercase">
            The Studio
          </span>
          <Link href="/about" className="font-sans text-cream-border text-[13px] hover:text-cream">
            About Vrinda
          </Link>
          <Link href="/services" className="font-sans text-cream-border text-[13px] hover:text-cream">
            Services
          </Link>
          <Link href="/portfolio" className="font-sans text-cream-border text-[13px] hover:text-cream">
            Portfolio Highlights
          </Link>
          <Link href="/testimonials" className="font-sans text-cream-border text-[13px] hover:text-cream">
            Client Praise
          </Link>
        </div>

        <div className="flex flex-col gap-3 items-start">
          <span className="font-sans font-bold text-gold-light text-[11px] tracking-[2px] uppercase">
            Atelier Booking
          </span>
          <Link href="/#packages" className="font-sans text-cream-border text-[13px] hover:text-cream">
            Trousseau Package Guide
          </Link>
          <Link href="/#packages" className="font-sans text-cream-border text-[13px] hover:text-cream">
            Bespoke Hampers Pricing
          </Link>
          <Link href="/contact" className="font-sans text-cream-border text-[13px] hover:text-cream">
            Inquire Online
          </Link>
          <a
            href="https://wa.me/message"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-cream-border text-[13px] hover:text-cream"
          >
            WhatsApp Support
          </a>
        </div>

        <div className="flex flex-col gap-3 items-start">
          <span className="font-sans font-bold text-gold-light text-[11px] tracking-[2px] uppercase">
            Location
          </span>
          <span className="font-sans text-cream text-[13px]">Delhi NCR, India</span>
          <span className="font-sans text-cream-border text-[12px]">
            Available for commissions worldwide.
          </span>
        </div>
      </div>

      <div className="h-px w-full bg-cream-border/20" />

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between w-full font-sans text-[12px]">
        <p className="text-cream-border/60">
          © 2026 Artree by Vrinda Malhotra. All Rights Reserved. Crafted with love.
        </p>
        <div className="flex gap-6 items-start text-gold-light tracking-[1px] uppercase">
          <a
            href="https://instagram.com/artreebyvrinda"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/message"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream"
          >
            WhatsApp Chat
          </a>
        </div>
      </div>
    </footer>
  );
}
