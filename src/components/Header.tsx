import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/#process" },
  { label: "Packages", href: "/#packages" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="bg-cream border-cream-border border-b flex items-center justify-between px-6 py-6 md:px-20 md:py-6">
      <Link href="/" className="flex flex-col gap-0.5 leading-none">
        <span className="font-serif font-bold text-maroon text-2xl tracking-wide">
          ARTREE
        </span>
        <span className="font-sans font-semibold text-gold text-[10px] tracking-[3px] uppercase">
          by vrinda malhotra
        </span>
      </Link>

      <nav className="hidden lg:flex items-center gap-10 font-sans font-medium text-ink text-xs tracking-[1px] uppercase">
        {NAV_LINKS.map((link) => (
          <Link key={link.label} href={link.href} className="hover:text-gold transition-colors">
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <span className="font-sans font-semibold text-gold text-[11px] tracking-[1px]">
          56.7K FOLLOWERS
        </span>
        <a
          href="https://instagram.com/artreebyvrinda"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold-light rounded-[2px] px-3 py-1.5"
        >
          <span className="font-sans font-bold text-cream text-[10px] tracking-[1px]">
            FOLLOW
          </span>
        </a>
      </div>
    </header>
  );
}
