import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ScrollTabs({
  items,
  value,
  onChange,
  visibleCount = 8,
}) {
  const ref = useRef();

  const scroll = (dir) => {
    ref.current.scrollBy({ left: dir * 200, behavior: "smooth" });
  };

  return (
    <div className="flex items-center gap-2 select-none text-xs font-semibold text-gray-600">
      <button onClick={() => scroll(-1)} className="p-1 rounded-full hover:bg-gray-100">
        <ChevronLeft className="w-4 h-4" />
      </button>

      <div
        ref={ref}
        className="flex gap-2 overflow-x-auto scrollbar-hide"
        style={{ maxWidth: `calc(${visibleCount} * 56px)` }}
      >
        {items.map((item) => (
          <button
            key={item}
            onClick={() => onChange(item)}
            className={`shrink-0 px-4 py-1 rounded-full transition
              ${value === item
                ? "bg-black text-white"
                : "hover:bg-gray-100 text-gray-600"}`}
          >
            {item}
          </button>
        ))}
      </div>

      <button onClick={() => scroll(1)} className="p-1 rounded-full hover:bg-gray-100">
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
