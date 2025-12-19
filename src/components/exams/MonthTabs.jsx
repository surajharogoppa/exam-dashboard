import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const months = [
  "Jan", "Feb", "Mar", "Apr",
  "May", "Jun", "Jul", "Aug",
  "Sep", "Oct", "Nov", "Dec"
];

export default function MonthTabs() {
  const [selected, setSelected] = useState("Feb");
  const containerRef = useRef();

  // Scroll buttons
  const scrollBackward = () => {
    containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };
  const scrollForward = () => {
    containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="flex items-center gap-2 mb-6 select-none text-xs font-semibold text-gray-600">

      {/* Left arrow */}
      <button
        onClick={scrollBackward}
        className="p-1 rounded-full hover:bg-gray-100"
      >
        <ChevronLeft className="w-4 h-4 text-gray-600" />
      </button>

      {/* Scrollable months container */}
      <div
        ref={containerRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide"
        style={{
          maxWidth: "calc(8 * 56px)" // visible 8 months
        }}
      >
        {months.map((m, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(m)}
            className={`
              shrink-0 px-4 py-1 rounded-full whitespace-nowrap transition
              ${selected === m
                ? "bg-black text-white"
                : "hover:bg-gray-100 text-gray-600"
              }
            `}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Right arrow */}
      <button
        onClick={scrollForward}
        className="p-1 rounded-full hover:bg-gray-100"
      >
        <ChevronRight className="w-4 h-4 text-gray-600" />
      </button>

      



    </div>



  );
}
