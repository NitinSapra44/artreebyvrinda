"use client";

type FilterBarProps = {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
};

export default function FilterBar({ categories, active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center pb-14">
      {categories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={`rounded-full border border-gold-light px-6 py-2.5 font-sans font-semibold text-xs tracking-[1px] uppercase transition-colors ${
              isActive
                ? "bg-maroon text-cream"
                : "bg-white text-maroon hover:bg-cream-soft"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
