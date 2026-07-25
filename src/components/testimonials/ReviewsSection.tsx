const dividerImage =
  "https://www.figma.com/api/mcp/asset/7dd8571b-99a1-4092-89de-0c4824c133fd";
const starIcon =
  "https://www.figma.com/api/mcp/asset/0a7f7939-2762-4ce5-ad1f-410f96bc6474";

type Review = {
  avatar: string;
  name: string;
  role: string;
  quote: string;
};

const REVIEWS: Review[] = [
  {
    avatar: "https://www.figma.com/api/mcp/asset/d172564a-8769-405e-a2ec-0d255d9cb529",
    name: "Meenakshi Sharma",
    role: "Mother of the Bride • New Delhi",
    quote:
      "The custom trousseau trunks Vrinda crafted for my daughter's wedding were absolutely divine. Every ribbon was pleated by hand, and the solid brass monogram tags gave it such a beautiful heirloom quality.",
  },
  {
    avatar: "https://www.figma.com/api/mcp/asset/0916d426-39b0-4cbb-960d-ffe498ae0ea2",
    name: "Karan Malhotra",
    role: "Grandson • Mumbai",
    quote:
      "I commissioned a hand-painted portrait of my grandparents for their 50th anniversary. The way Vrinda captured their expressions was so intimate, and the real gold-leaf accents literally make it glow at home.",
  },
  {
    avatar: "https://www.figma.com/api/mcp/asset/726a6422-7df3-4d82-898f-5f6761f64680",
    name: "Radhika & Akshay",
    role: "Bride & Groom • Chandigarh",
    quote:
      "Artree transformed our wedding invites into high art. Our guests were stunned by the bespoke velvet trays laden with custom dry-fruit boxes and our hand-painted home vignette card. Perfect service!",
  },
  {
    avatar: "https://www.figma.com/api/mcp/asset/8ad95b46-8eb2-4909-8991-47d3ca68105f",
    name: "Priyanka Sen",
    role: "Corporate Lead • Kolkata",
    quote:
      "We booked Artree for corporate diwali milestones for our global clients. The attention to detail — from pure linen wrapping to customized wax seals — was impeccable. Highly recommended for premium gifting.",
  },
  {
    avatar: "https://www.figma.com/api/mcp/asset/e8eb6034-2603-460f-862d-cd3763149f9b",
    name: "Aishwarya Rai",
    role: "Bride • Delhi NCR",
    quote:
      "The bridal assemblage platter was the talk of our ceremony. Vrinda styled our heavy silk jewelry and shagun envelopes on matching silk cushions with floral accents. A truly luxurious experience.",
  },
  {
    avatar: "https://www.figma.com/api/mcp/asset/0806bc28-de1f-4403-af52-7d22b8258179",
    name: "Kabir Dev",
    role: "Sponsor Patron • London",
    quote:
      "Outstanding portrait quality. Delivered secure and padded to our London residence. The heavy oak frame matches the premium quality of the oil painting. Archival class indeed.",
  },
];

// Grouped to mirror the staggered masonry layout from the design:
// column 1 -> reviews 0 & 3, column 2 -> reviews 1 & 4, column 3 -> reviews 2 & 5.
const COLUMNS: Review[][] = [
  [REVIEWS[0], REVIEWS[3]],
  [REVIEWS[1], REVIEWS[4]],
  [REVIEWS[2], REVIEWS[5]],
];

function StarRating() {
  return (
    <div className="flex gap-1 items-start">
      {Array.from({ length: 5 }).map((_, i) => (
        <img key={i} alt="" className="size-3.5" src={starIcon} />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white border border-cream-border rounded-lg flex flex-col gap-5 items-start p-8 shadow-[0px_12px_16px_0px_rgba(44,30,33,0.03)] w-full">
      <div className="flex gap-4 items-center w-full">
        <img
          alt={review.name}
          className="rounded-full object-cover size-14 shrink-0"
          src={review.avatar}
        />
        <div className="flex flex-col gap-0.5 items-start min-w-0">
          <p className="font-sans font-bold text-maroon text-sm truncate w-full">
            {review.name}
          </p>
          <p className="font-sans font-normal text-plum text-[11px] truncate w-full">
            {review.role}
          </p>
        </div>
      </div>
      <StarRating />
      <p className="font-serif font-normal leading-[1.5] text-ink text-lg">
        &ldquo;{review.quote}&rdquo;
      </p>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="bg-cream flex flex-col gap-14 items-start px-6 py-16 md:px-20 md:py-[100px]">
      <div className="flex flex-col gap-3 items-center w-full">
        <p className="font-sans font-bold text-gold text-[13px] tracking-[3px] uppercase">
          The Patron Praise
        </p>
        <p className="font-serif font-normal text-maroon text-3xl md:text-[40px] text-center">
          Words of Warmth from Across the Globe
        </p>
        <img alt="" className="h-[38px] w-[240px]" src={dividerImage} />
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start w-full">
        {COLUMNS.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className="flex flex-col gap-6 items-start w-full md:flex-1"
          >
            {column.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
