// src/pages/Exams.jsx
import { useState } from "react";

import ScrollTabs from "../components/controls/ScrollTabs";
import MiniCalendar from "../components/ui/MiniCalendar";
import InfoCard from "../components/ui/InfoCard";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";


// exam-domain helpers (can move to mock later)
const months = [
  "Jan", "Feb", "Mar", "Apr",
  "May", "Jun", "Jul", "Aug",
  "Sep", "Oct", "Nov", "Dec"
];

const days = Array.from({ length: 31 }, (_, i) => i + 1);

const examsByDay = [
  {
    day: 1,
    exams: [
      {
        id: "302",
        badge: "Class 302",
        title: "8:00 am",
        subtitle: "Math Exam",
        meta: "Grade 12",
        footer: "19 Students",
        bgColor: "#CBDCF6",
      },
      {
        id: "303",
        badge: "Class 303",
        title: "9:00 am",
        subtitle: "Physics Exam",
        meta: "Grade 10",
        footer: "18 Students",
        bgColor: "#F9E6A7",
      },
    ],
  },
  {
    day: 3,
    exams: [
      {
        id: "304",
        badge: "Class 304",
        title: "8:00 am",
        subtitle: "Art Exam",
        meta: "Grade 9",
        footer: "20 Students",
        bgColor: "#F8D3CC",
      },
    ],
  },
];

export default function Exams() {
  const [activeMonth, setActiveMonth] = useState("Feb");
  const [selectedDay, setSelectedDay] = useState(8);

  return (
    <div className="space-y-6">
      {/* Page header */}
      <SectionHeader
        title="Exams"
        description="View and manage scheduled exams across months"
        action={{
          label: "+ Add new exam",
          onClick: () => {},
        }}
      />

      {/* Month selector */}
      <ScrollTabs
        items={months}
        value={activeMonth}
        onChange={setActiveMonth}
      />

      {/* Main content */}
      <div className="flex gap-10">
        {/* Left: exam list */}
        <div className="flex-1 space-y-6">
          {days.slice(0, 6).map((day) => {
            const dayData = examsByDay.find((d) => d.day === day);

            return (
              <Card key={day}>
                <div className="font-semibold text-sm mb-3">
                  Day {day}
                </div>  

                {!dayData ? (
                  <div className="text-xs text-gray-400">
                    No exam scheduled.
                  </div>
                ) : (
                  <div className="flex gap-3 flex-wrap">
                    {dayData.exams.map((exam) => (
                      <InfoCard
                        key={exam.id}
                        badge={exam.badge}
                        title={exam.title}
                        subtitle={exam.subtitle}
                        meta={exam.meta}
                        status="Confirmed"
                        footer={exam.footer}
                        bgColor={exam.bgColor}
                      />
                    ))}
                  </div>
                )}

                {(day === 4 || day === 5) && (
                  <div className="text-xs italic text-gray-400 mt-2">
                    Weekend
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Right sidebar */}
        <aside className="w-80 flex-shrink-0 space-y-6">
          <MiniCalendar
            month={activeMonth}
            days={days}
            selectedDay={selectedDay}
            specialDays={[5, 25, 28, 29]}
            onSelect={setSelectedDay}
          />

          <Card>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-semibold text-gray-700">
                Upcoming
              </h3>
              <button className="text-xs font-semibold text-gray-600 hover:underline">
                Filter
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <InfoCard
                badge="302"
                title="Math Exam"
                subtitle="10 Feb · 7:30–9:00"
                footer="4 Days left"
                bgColor="#D9D9F5"
              />
              <InfoCard
                badge="303"
                title="English Exam"
                subtitle="11 Feb · 7:30–9:00"
                footer="5 Days left"
                bgColor="#D9F5E3"
              />
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}
