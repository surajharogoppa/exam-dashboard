const upcoming = [
  {
    id: "302",
    title: "Math Exam",
    date: "10 Feb",
    time: "7:30am - 9:00am",
    daysLeft: 4,
    colorBg: "#D9D9F5",
  },
  {
    id: "303",
    title: "English Exam",
    date: "11 Feb",
    time: "7:30am - 9:00am",
    daysLeft: 5,
    colorBg: "#D9F5E3",
  },
];

export default function UpcomingExams() {
  return (
    <div className="select-none max-w-xs">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold text-gray-700">Upcoming exams</h3>
        <button className="text-xs font-semibold text-gray-600 hover:underline">Filter</button>
      </div>
      <div className="flex flex-col gap-4">
        {upcoming.map(({ id, title, date, time, daysLeft, colorBg }) => (
          <div
            key={id}
            className="flex items-center justify-between p-3 rounded-xl"
            style={{ backgroundColor: colorBg }}
          >
            <div>
              <div className="text-xs font-semibold">{id}</div>
              <div className="text-xs font-medium">{title}</div>
              <div className="text-xs font-light text-gray-600">{date} - {time}</div>
            </div>
            <div className="text-xs font-semibold text-gray-600 whitespace-nowrap">{daysLeft} Days left</div>
          </div>
        ))}
      </div>
    </div>
  );
}
