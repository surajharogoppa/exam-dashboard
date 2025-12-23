export default function CalendarGrid({ days }) {
  return (
    <div className="grid grid-cols-7 gap-2 text-xs">
      {days.map((d, i) => (
        <div
          key={i}
          className={`p-2 rounded-md text-center ${
            d.isOff ? "bg-red-100" : "bg-gray-100"
          }`}
        >
          <div className="font-semibold">{d.day}</div>
          <div className="text-gray-600">{d.label}</div>
        </div>
      ))}
    </div>
  );
}
