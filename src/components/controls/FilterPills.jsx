import { Filter } from "lucide-react";

export default function FilterPills({
  items = [],
  active,
  onChange,
  showIcon = true,   // ✅ optional
  className = "",
}) {
  return (
    <div
      className={`
        flex items-center gap-2 overflow-x-auto scrollbar-hide
        text-xs font-semibold select-none
        ${className}
      `}
    >
      {/* Filter icon */}
      {showIcon && (
        <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600">
          <Filter size={14} />
        </div>
      )}

      {/* Pills */}
      {items.map((item) => {
        const isActive = item === active;

        return (
          <button
            key={item}
            onClick={() => onChange(item)}
            className={`
              shrink-0 px-4 py-1.5 rounded-full transition
              ${
                isActive
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }
            `}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
