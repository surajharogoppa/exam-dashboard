// D:\exam-dashboard\src\components\ExamCalendar.jsx
const examsData = [
  {
    day: 1,
    exams: [
      {
        id: "302",
        classNumber: "Class 302",
        time: "8:00 am",
        subject: "Math Exam",
        grade: 12,
        students: 19,
        colorBg: "#CBDCF6",
      },
      {
        id: "303",
        classNumber: "Class 303",
        time: "9:00 am",
        subject: "Physics Exam",
        grade: 10,
        students: 18,
        colorBg: "#F9E6A7",
      },
    ],
  },
  {
    day: 3,
    exams: [
      {
        id: "304",
        classNumber: "Class 304",
        time: "8:00 am",
        subject: "Art Exam",
        grade: 9,
        students: 20,
        colorBg: "#F8D3CC",
      },
      {
        id: "302",
        classNumber: "Class 302",
        time: "9:00 am",
        subject: "Math Exam",
        grade: 12,
        students: 19,
        colorBg: "#CBDCF6",
      },
      {
        id: "305",
        classNumber: "Class 305",
        time: "10:00 am",
        subject: "English Exam",
        grade: 11,
        students: 18,
        colorBg: "#D6F0E0",
      },
    ],
  },
  {
    day: 6,
    exams: [
      {
        id: "303",
        classNumber: "Class 303",
        time: "8:00 am",
        subject: "Physics Exam",
        grade: 10,
        students: 19,
        colorBg: "#F9E6A7",
      },
    ],
  },
];

function ExamCard({ exam }) {
  return (
    <div
      className="rounded-xl p-3 w-48 flex flex-col gap-1 shadow-sm select-none"
      style={{ backgroundColor: exam.colorBg }}
    >
      
      <div className="text-xs font-semibold flex items-center gap-1">
        <div className="bg-white rounded-md px-1.5 py-0.5 text-black">
          {exam.classNumber}
        </div>
        <div>{exam.time}</div>
      </div>

      <div className="text-xs">{exam.subject}</div>

      <div className="text-[10px] font-light text-gray-600">
        Grade {exam.grade}
      </div>

      <div className="flex items-center gap-1 text-xs mt-2 text-green-600">
        <svg
          className="w-3 h-3 stroke-current"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
        <span>Confirmed</span>
        <span className="ml-auto">{exam.students} Students</span>
      </div>

      <button className="ml-auto text-xs text-gray-500">...</button>
    </div>
  );
}

export default function ExamCalendar() {
  return (
    <div className="flex flex-col gap-6 select-none">
      {[1, 2, 3, 4, 5, 6].map((day) => {
        const dayExams =
          examsData.find((examDay) => examDay.day === day)?.exams ?? [];

        return (
          <div key={day}>
            <div className="font-semibold text-sm mb-2">Day {day}</div>

            {dayExams.length === 0 ? (
              <div className="text-xs text-gray-400">No exam.</div>
            ) : (
              <div className="flex gap-3 flex-wrap">
                {dayExams.map((exam) => (
                  <ExamCard key={`${exam.id}-${day}`} exam={exam} />
                ))}
              </div>
            )}

            {(day === 4 || day === 5) && (
              <div className="text-xs italic text-gray-400">Weekend</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
