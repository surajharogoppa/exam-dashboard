const days = [
  1, 2, 3, 4,
  5, 6, 7,
  8, 9, 10, 11, 12, 13,
  14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24,
  25, 26, 27,
  28, 29, 30, 31
];

const specialDays = [5, 25, 28, 29];
const selectedDay = 8;

const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export default function RightCalendar() {
  return (
    <div className="select-none max-w-xs">
      <div className="flex items-center justify-between mb-3 text-sm font-semibold text-gray-600">
        <button className="px-2 py-1 rounded-full hover:bg-gray-100">{`<`}</button>
        <span>February</span>
        <button className="px-2 py-1 rounded-full hover:bg-gray-100">{`>`}</button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2 text-center text-xs font-medium text-gray-600">
        {weekdays.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-600">
        {days.map((day) => {
          const isSelected = day === selectedDay;
          const isSpecial = specialDays.includes(day);
          return (
            <div
              key={day}
              className={`p-2 rounded-full cursor-pointer
              ${isSelected ? "bg-black text-white" : ""}
              ${isSpecial && !isSelected ? "bg-calendarPillBg" : ""}
              hover:bg-gray-300`}
            >
              {day}
            </div>
          );
        })}
      </div>

      <div className="mt-2 text-xs text-gray-400">9 Exams for this month</div>
    </div>
  );
}
