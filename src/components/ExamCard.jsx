import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const months = [
  "Jan", "Feb", "Mar", "Apr",
  "May", "Jun", "Jul", "Aug",
  "Sep", "Oct", "Nov", "Dec"
];

const examsData = [
  {
    day: 1,
    exams: [
      { id: "302", classNumber: "Class 302", time: "8:00 am", subject: "Math Exam", grade: 12, students: 19, colorBg: "#CBDCF6" },
      { id: "303", classNumber: "Class 303", time: "9:00 am", subject: "Physics Exam", grade: 10, students: 18, colorBg: "#F9E6A7" }
    ]
  },
  {
    day: 3,
    exams: [
      { id: "304", classNumber: "Class 304", time: "8:00 am", subject: "Art Exam", grade: 9, students: 20, colorBg: "#F8D3CC" },
      { id: "302", classNumber: "Class 302", time: "9:00 am", subject: "Math Exam", grade: 12, students: 19, colorBg: "#CBDCF6" },
      { id: "305", classNumber: "Class 305", time: "10:00 am", subject: "English Exam", grade: 11, students: 18, colorBg: "#D6F0E0" }
    ]
  },
  {
    day: 6,
    exams: [
      { id: "303", classNumber: "Class 303", time: "8:00 am", subject: "Physics Exam", grade: 10, students: 19, colorBg: "#F9E6A7" }
    ]
  }
];

function ExamCard({ exam }) {
  return (
    <div
      className="rounded-xl p-3 w-48 flex flex-col gap-1 shadow-sm select-none"
      style={{ backgroundColor: exam.colorBg }}
    >
      <div className="text-xs font-semibold flex items-center gap-1">
        <div className="bg-white rounded-md px-1.5 py-0.5 text-black">{exam.classNumber}</div>
        <div>{exam.time}</div>
      </div>
      <div className="text-xs">{exam.subject}</div>
      <div className="text-[10px] font-light text-gray-600">Grade {exam.grade}</div>
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
        
        <span >Confirmed</span>
        <span className="ml-auto">{exam.students} Students</span>
      </div>
      <button className="ml-auto text-xs text-gray-500">...</button>
    </div>
  );
}

export default function ExamPanel() {
  const [selectedMonth, setSelectedMonth] = useState("Feb");
  const monthRef = useRef();

  const scrollBackward = () => monthRef.current.scrollBy({ left: -200, behavior: "smooth" });
  const scrollForward = () => monthRef.current.scrollBy({ left: 200, behavior: "smooth" });

  return (
    <div className="flex flex-col h-full p-4 gap-4 select-none text-gray-600">
      
      {/* Month selector */}
      <div className="flex items-center gap-2 text-xs font-semibold">
        <button onClick={scrollBackward} className="p-1 rounded-full hover:bg-gray-100">
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>

        <div ref={monthRef} className="flex gap-2 overflow-x-auto scrollbar-hide flex-1">
          {months.map((m) => (
            <button
              key={m}
              onClick={() => setSelectedMonth(m)}
              className={`shrink-0 px-4 py-1 rounded-full whitespace-nowrap transition
                ${selectedMonth === m ? "bg-black text-white" : "hover:bg-gray-100 text-gray-600"}`}
            >
              {m}
            </button>
          ))}
        </div>

        <button onClick={scrollForward} className="p-1 rounded-full hover:bg-gray-100">
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Scrollable Exam Cards */}
      <div className="flex-1 overflow-y-auto pr-2">
        {examsData.map((dayData) => (
          <div key={dayData.day} className="mb-6">
            <div className="font-semibold text-sm mb-2">Day {dayData.day}</div>
            {dayData.exams.length === 0 ? (
              <div className="text-xs text-gray-400">No exam.</div>
            ) : (
              <div className="flex gap-3 flex-wrap">
                {dayData.exams.map((exam) => (
                  <ExamCard key={`${exam.id}-${dayData.day}`} exam={exam} />
                ))}
              </div>
            )}
            {(dayData.day === 4 || dayData.day === 5) && (
              <div className="text-xs italic text-gray-400">Weekend</div>
            )}
          </div>
        ))}
      </div>

      
    </div>
  );
}
