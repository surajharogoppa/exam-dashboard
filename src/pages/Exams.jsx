// src/pages/Exams.jsx
import { useState } from "react";
import MonthTabs from "../components/exams/MonthTabs";
import ExamCalendar from "../components/exams/ExamCalendar";
import RightCalendar from "../components/exams/RightCalendar";
import UpcomingExams from "../components/exams/UpcomingExams";

export default function Exams() {
  const [activeMonth, setActiveMonth] = useState("Feb");
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <>
      {/* Page title */}
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h1 className="text-2xl font-semibold">Exams</h1>
            <p className="text-sm text-gray-500">
              On the exam page, you can easily view and manage all scheduled exams.
            </p>
          </div>

          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 whitespace-nowrap">
            + Add new exam
          </button>
        </div>
      </div>

      {/* Month tabs */}
      <MonthTabs
        activeMonth={activeMonth}
        setActiveMonth={setActiveMonth}
      />

      {/* Calendar & Right panels */}
      <div className="flex gap-10">
        <div className="flex-1">
          <ExamCalendar />
        </div>

        <aside className="w-80 flex-shrink-0 space-y-6 mt-4">
          <RightCalendar
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />
          <UpcomingExams />
        </aside>
      </div>
    </>
  );
}
