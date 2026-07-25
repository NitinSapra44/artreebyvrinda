import Link from "next/link";

const checkCircleIcon =
  "https://www.figma.com/api/mcp/asset/1f2b6ed2-dde4-449b-ab32-b8be24e510f5";

export type ServiceDetail = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  inclusions: string[];
  price: string;
  image: string;
  background: "cream" | "cream-soft";
  reverse?: boolean;
};

export default function ServiceDetailBlock({
  title,
  tagline,
  description,
  inclusions,
  price,
  image,
  background,
  reverse,
}: ServiceDetail) {
  return (
    <div
      className={`${
        background === "cream-soft" ? "bg-cream-soft" : "bg-cream"
      } flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-10 md:gap-20 items-center px-6 py-14 md:px-20 md:py-20 w-full`}
    >
      <div className="flex flex-col gap-7 items-start w-full md:max-w-[640px]">
        <div className="flex flex-col gap-3 items-start w-full">
          <p className="font-serif font-semibold text-maroon text-3xl md:text-[38px] leading-tight">
            {title}
          </p>
          <p className="font-sans font-semibold text-gold text-sm">
            {tagline}
          </p>
        </div>

        <p className="font-sans font-normal leading-[1.8] text-plum text-[15px]">
          {description}
        </p>

        <div className="h-px w-full bg-cream-border" />

        <div className="flex flex-col gap-3 items-start w-full">
          <p className="font-sans font-bold text-gold text-[11px] tracking-[1.5px] uppercase">
            What is Included:
          </p>
          {inclusions.map((item) => (
            <div key={item} className="flex gap-2.5 items-center w-full">
              <img
                alt=""
                className="size-4 shrink-0"
                src={checkCircleIcon}
              />
              <p className="font-sans text-ink text-sm flex-1">{item}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-8 items-center pt-3">
          <div className="flex flex-col gap-0.5 items-start whitespace-nowrap">
            <p className="font-sans text-plum text-[11px] tracking-[1px] uppercase">
              Starting Price
            </p>
            <p className="font-serif font-bold text-maroon text-[32px]">
              {price}
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-maroon border border-gold-light rounded flex items-center justify-center px-9 py-4"
          >
            <span className="font-sans font-semibold text-cream text-[13px] tracking-[2.5px] uppercase">
              Inquire Now
            </span>
          </Link>
        </div>
      </div>

      <div className="w-full md:w-[560px] h-[320px] md:h-[520px] rounded-lg overflow-hidden shrink-0">
        <img
          alt={title}
          className="object-cover size-full"
          src={image}
        />
      </div>
    </div>
  );
}
