import { useState } from "react";
import { Check, X, Calendar, User } from "lucide-react";

/* ---------------- DATA ---------------- */

const summary = [
  { label: "Today", value: "22 Feb", bg: "#D9D9F5" },
  { label: "Present", value: 112, bg: "#D9F5E3" },
  { label: "Absent", value: 8, bg: "#F8D3CC" },
  { label: "On Leave", value: 16, bg: "#F9E6A7" },
];

const attendance = [
  { name: "John Doe", status: "Present", time: "09:02 AM", bg: "#D9F5E3" },
  { name: "Aisha Khan", status: "Present", time: "09:10 AM", bg: "#D9F5E3" },
  { name: "Rohit Sharma", status: "Absent", time: "-", bg: "#F8D3CC" },
];

const leaveRequests = [
  {
    name: "Neha Patel",
    type: "Casual Leave",
    dates: "25 Feb - 26 Feb",
    days: 2,
    bg: "#F9E6A7",
  },
  {
    name: "Arjun Rao",
    type: "Sick Leave",
    dates: "22 Feb",
    days: 1,
    bg: "#D9D9F5",
  },
];

/* ---------------- PAGE ---------------- */

export default function Attendance() {
  const [tab, setTab] = useState("attendance");

  return (
    <div className="space-y-10 select-none">
      {/* HEADER */}
      {/* <div>
        <h1 className="text-2xl font-semibold">Attendance & Leave</h1>
        <p className="text-sm text-gray-500">
          Track attendance and manage leave requests
        </p>
      </div> */}

      {/* SUMMARY */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {summary.map((s) => (
          <div
            key={s.label}
            className="rounded-xl p-4"
            style={{ backgroundColor: s.bg }}
          >
            <div className="text-xs text-gray-600">{s.label}</div>
            <div className="text-2xl font-semibold">{s.value}</div>
          </div>
        ))}
      </section>

      {/* TABS */}
      <section className="flex gap-2 text-xs font-semibold text-gray-600">
        {["attendance", "leave"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-1 rounded-full transition
              ${
                tab === t
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
          >
            {t === "attendance" ? "Attendance" : "Leave requests"}
          </button>
        ))}
      </section>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* LEFT CONTENT */}
        <div className="xl:col-span-2 space-y-4">
          {tab === "attendance" &&
            attendance.map((a, i) => (
              <AttendanceCard key={i} data={a} />
            ))}

          {tab === "leave" &&
            leaveRequests.map((l, i) => (
              <LeaveCard key={i} data={l} />
            ))}
        </div>

        {/* RIGHT PANEL */}
        <aside className="space-y-6">
          {/* CALENDAR */}
          <div className="rounded-xl p-4 bg-[#EEF2FF]">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              February
            </h3>
            <div className="grid grid-cols-7 gap-1 text-xs text-gray-600">
              {Array.from({ length: 28 }).map((_, i) => (
                <div
                  key={i}
                  className="p-2 rounded-full hover:bg-gray-300 cursor-pointer text-center"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* STATS */}
          <div className="rounded-xl p-4 bg-[#ECFDF3]">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Leave stats
            </h3>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• 16 employees on leave</li>
              <li>• 6 pending approvals</li>
              <li>• Avg leave / employee: 1.8</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* ---------------- CARDS ---------------- */

function AttendanceCard({ data }) {
  return (
    <div
      className="rounded-xl p-4 flex items-center justify-between"
      style={{ backgroundColor: data.bg }}
    >
      <div className="flex items-center gap-3">
        <div className="bg-white rounded-xl p-2">
          <User size={14} className="text-gray-600" />
        </div>
        <div>
          <div className="text-sm font-semibold">{data.name}</div>
          <div className="text-xs text-gray-600">{data.time}</div>
        </div>
      </div>

      <span className="text-xs font-semibold text-gray-600">
        {data.status}
      </span>
    </div>
  );
}

function LeaveCard({ data }) {
  return (
    <div
      className="rounded-xl p-4 flex items-center justify-between"
      style={{ backgroundColor: data.bg }}
    >
      <div>
        <div className="text-sm font-semibold">{data.name}</div>
        <div className="text-xs text-gray-600">
          {data.type} • {data.dates}
        </div>
      </div>

      <div className="flex gap-2">
        <button className="bg-white rounded-xl p-2">
          <Check size={14} className="text-green-600" />
        </button>
        <button className="bg-white rounded-xl p-2">
          <X size={14} className="text-red-600" />
        </button>
      </div>
    </div>
  );
}
