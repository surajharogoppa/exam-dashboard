import { NavLink } from "react-router-dom";

export default function Tabs({
  tabs = [],        // state-based: ["Overview", "Details"]
  active,
  onChange,

  items = [],       // route-based: [{ label, to }]
}) {
  // ----------------------------
  // ROUTE-BASED TABS
  // ----------------------------
  if (items.length) {
    return (
      <div className="relative">
        {/* mobile fade */}
        <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white pointer-events-none sm:hidden" />

        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 text-xs font-semibold sm:flex-wrap">
          {items.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end
              className={({ isActive }) =>
                `
                  shrink-0 px-4 py-1 rounded-full transition
                  ${
                    isActive
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }
                `
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    );
  }

  // ----------------------------
  // STATE-BASED TABS (existing)
  // ----------------------------
  return (
    <div className="flex gap-2 text-xs font-semibold">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange?.(tab)}
          className={`px-4 py-1 rounded-full transition
            ${
              active === tab
                ? "bg-black text-white"
                : "hover:bg-gray-100 text-gray-600"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
