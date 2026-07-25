const PAGE_NUMBERS = [1, 2, 3];

export default function Pagination() {
  return (
    <nav
      aria-label="Journal pagination"
      className="bg-cream flex gap-4 items-start justify-center px-6 pb-16 md:px-20 md:pb-[120px]"
    >
      <button
        type="button"
        className="border border-cream-border rounded px-5 py-2.5"
      >
        <span className="font-sans font-semibold text-plum text-xs">
          PREVIOUS
        </span>
      </button>

      <div className="flex gap-2 items-center">
        {PAGE_NUMBERS.map((page) => (
          <button
            key={page}
            type="button"
            aria-current={page === 1 ? "page" : undefined}
            className={
              page === 1
                ? "bg-maroon rounded px-4 py-2.5"
                : "border border-cream-border rounded px-4 py-2.5"
            }
          >
            <span
              className={
                page === 1
                  ? "font-sans font-bold text-white text-xs"
                  : "font-sans font-semibold text-ink text-xs"
              }
            >
              {page}
            </span>
          </button>
        ))}
      </div>

      <button
        type="button"
        className="border border-cream-border rounded px-5 py-2.5"
      >
        <span className="font-sans font-semibold text-ink text-xs">
          NEXT
        </span>
      </button>
    </nav>
  );
}
