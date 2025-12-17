// D:\exam-dashboard\src\App.jsx
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MonthTabs from "./components/MonthTabs";
import ExamCalendar from "./components/ExamCalendar";
import RightCalendar from "./components/RightCalendar";
import UpcomingExams from "./components/UpcomingExams";

export default function App() {
  const [activeMenu, setActiveMenu] = useState("Exams");
  const [activeMonth, setActiveMonth] = useState("Feb");
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className="h-screen flex bg-gradient-to-b from-sidebarTop to-sidebarBottom text-gray-700 font-sans">

      {/* Sidebar */}
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      {/* Main content */}
      <main className="flex-1 bg-white rounded-2xl shadow-sm flex flex-col mt-6">
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6   overflow-y-auto max-h-screen w-full">
          
          {/* Header */}
          <Header />

          

          {/* Exam Calendar section */}
          {/* Page title */}
<div className="space-y-2">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
    <div>
      <h1 className="text-2xl font-semibold">Exams</h1>
      <p className="text-sm text-gray-500">
        On the exam page, you can easily view and manage all scheduled exams.
      </p>
    </div>

    {/* Add new exam button aligned to the left on small screens, right on larger screens */}
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
            {/* Exam Calendar */}
            <div className="flex-1">
              <ExamCalendar />
            </div>

            {/* Right sidebar */}
            <aside className="w-80 flex-shrink-0 space-y-6 mt-4">
              <RightCalendar
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
              />
              <UpcomingExams />
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
