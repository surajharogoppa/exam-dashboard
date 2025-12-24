export default function MiniCalendar({
  month,
  days,
  selectedDay,
  specialDays = [],
  onSelect,
}) {
  const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  return (
    <div className="select-none max-w-xs">
      <div className="text-sm font-semibold text-gray-600 mb-3 text-center">
        {month}
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2 text-center text-xs font-medium text-gray-600">
        {weekdays.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {days.map((day) => {
          const isSelected = day === selectedDay;
          const isSpecial = specialDays.includes(day);

          return (
            <div
              key={day}
              onClick={() => onSelect?.(day)}
              className={`
                p-2 rounded-full cursor-pointer
                ${
                  isSelected
                    ? "bg-black text-white"
                    : isSpecial
                    ? "bg-green-100 text-green-700"
                    : ""
                }
                hover:bg-gray-300
              `}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
