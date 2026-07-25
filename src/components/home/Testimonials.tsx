const TESTIMONIALS = [
  {
    quote:
      "The trousseau Vrinda crafted for my daughter's wedding was absolutely divine. The raw silk trunks lined with personalized monograms made the unpacking ceremony the highlight of the week.",
    name: "Meenakshi Sharma",
    meta: "Mother of the Bride • New Delhi",
  },
  {
    quote:
      "I commissioned a hand-painted portrait of my grandparents for their 50th anniversary. The way Vrinda captured their expression was so intimate. The real gold-leaf accents literally make it glow at home.",
    name: "Karan Malhotra",
    meta: "Grandson • Mumbai",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-cream-soft flex flex-col gap-14 items-center px-6 py-16 md:px-20 md:py-[120px]"
    >
      <div className="flex flex-col gap-3 items-center">
        <p className="font-sans font-bold text-gold text-xs tracking-[3px] uppercase">
          The Praise
        </p>
        <h2 className="font-serif font-normal text-maroon text-3xl md:text-[40px] text-center">
          Kind Words from Our Patrons
        </h2>
        <div className="h-px w-16 bg-gold-light" />
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-stretch w-full">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-cream border border-[#d8c9b5] rounded-lg flex flex-col gap-5 items-start p-10 flex-1"
          >
            <p className="font-serif text-gold-light text-5xl leading-none">
              &ldquo;
            </p>
            <p className="font-serif leading-[1.6] text-ink text-lg">
              {testimonial.quote}
            </p>
            <div className="h-px w-full bg-cream-border" />
            <div className="flex flex-col gap-1 items-start">
              <p className="font-sans font-bold text-maroon text-[13px]">
                {testimonial.name}
              </p>
              <p className="font-sans text-plum text-[11px] tracking-[0.5px]">
                {testimonial.meta}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
