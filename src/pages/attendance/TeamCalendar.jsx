import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import SectionHeader from "../../components/ui/SectionHeader";
import Badge from "../../components/ui/Badge";
import Card from "../../components/ui/Card";
import {
  teamMembers,
  teamLeaves,
} from "../../mock/attendance/calendar.mock";

const MONTHS = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec",
];

const OVERLAP_THRESHOLD = 0.3;

export default function TeamCalendar() {
  const { user } = useAuth();
  const isEmployee = user?.role === "EMPLOYEE";

  const [month, setMonth] = useState(1); // Feb
  const [year, setYear] = useState(2025);

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const leavesByDate = teamLeaves.reduce((acc, leave) => {
    acc[leave.date] = acc[leave.date] || [];
    acc[leave.date].push(leave);
    return acc;
  }, {});

  const getWeekday = (date) =>
    new Date(date).toLocaleDateString("en-US", { weekday: "short" });

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Team Calendar"
        subtitle="Team availability and overlap overview"
      />

      {/* MONTH + YEAR HEADER */}
      <Card>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {/* Month pills */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide text-xs font-semibold">
            {MONTHS.map((m, idx) => (
              <button
                key={m}
                onClick={() => setMonth(idx)}
                className={`px-4 py-1.5 rounded-full shrink-0 transition
                  ${
                    month === idx
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {m}
              </button>
            ))}
          </div>

          {/* Year selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Year</span>
            <select
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="text-xs px-4 py-1.5 rounded-full bg-gray-100 font-semibold"
            >
              {[2024, 2025, 2026].map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      {/* CALENDAR ROWS */}
      <div className="space-y-3">
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const leaves = leavesByDate[dateKey] || [];

          const overlap =
            leaves.length / teamMembers.length >= OVERLAP_THRESHOLD;

          // 🎨 SaaS card colors
          const bgColor = overlap
            ? "#FEF3C7"   // warning
            : leaves.length
            ? "#EEF2FF"   // info
            : "#FFFFFF";  // normal

          return (
            <Card
              key={day}
              bg={bgColor}
              className="hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs">
                {/* DATE */}
                <div className="w-full sm:w-36 flex justify-between sm:justify-start gap-3 font-semibold text-gray-700">
                  <span className="uppercase tracking-wide">
                    {getWeekday(dateKey)}
                  </span>
                  <span>
                    {day} {MONTHS[month]}
                  </span>
                </div>

                {/* LEAVES */}
                <div className="flex-1 text-gray-700">
                  {leaves.length === 0 ? (
                    <span className="text-gray-400">No leaves</span>
                  ) : (
                    leaves.map((l) => (
                      <span
                        key={l.employeeId}
                        className="inline-block mr-3"
                      >
                        {isEmployee
                          ? l.name
                          : `${l.name} (${l.leaveType})`}
                      </span>
                    ))
                  )}
                </div>

                {/* STATUS */}
                {overlap && (
                  <Badge label="Overlap" tone="warning" />
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
