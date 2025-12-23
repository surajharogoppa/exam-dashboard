import { UserPlus, Filter } from "lucide-react";

/* ---------------- DATA ---------------- */

const summary = [
  { label: "Total Employees", value: 128, bg: "#D9D9F5" },
  { label: "Active", value: 112, bg: "#D9F5E3" },
  { label: "On Leave", value: 16, bg: "#F9E6A7" },
  { label: "New This Month", value: 5, bg: "#F8D3CC" },
];

const employees = [
  {
    name: "Aisha Khan",
    role: "HR Manager",
    team: "HR",
    status: "Active",
    bg: "#D9F5E3",
  },
  {
    name: "Rohit Sharma",
    role: "Frontend Developer",
    team: "Engineering",
    status: "Active",
    bg: "#D9D9F5",
  },
  {
    name: "Neha Patel",
    role: "QA Engineer",
    team: "Engineering",
    status: "On Leave",
    bg: "#F9E6A7",
  },
];

/* ---------------- PAGE ---------------- */

export default function Employees() {
  return (
    <div className="space-y-10 select-none">
      {/* HEADER */}
      {/* <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Employees</h1>
          <p className="text-sm text-gray-500">
            Manage employee profiles, roles, and status
          </p>
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 flex items-center gap-2">
          <UserPlus size={16} />
          Add employee
        </button>
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

      {/* FILTERS */}
      <section className="flex items-center gap-2 text-xs font-semibold text-gray-600">
        <Filter size={14} />
        {["All", "HR", "Engineering", "Active", "On Leave"].map((f) => (
          <button
            key={f}
            className="px-4 py-1 rounded-full hover:bg-gray-100"
          >
            {f}
          </button>
        ))}
      </section>

      {/* EMPLOYEE LIST */}
      <section className="space-y-4">
        {employees.map((e, i) => (
          <EmployeeCard key={i} data={e} />
        ))}
      </section>
    </div>
  );
}

/* ---------------- CARD ---------------- */

function EmployeeCard({ data }) {
  return (
    <div
      className="rounded-xl p-4 flex items-center justify-between gap-4"
      style={{ backgroundColor: data.bg }}
    >
      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="text-sm font-semibold">{data.name}</div>
          <div className="text-xs text-gray-600">
            {data.role} • {data.team}
          </div>
        </div>
      </div>

      <span className="text-xs font-semibold text-gray-600">
        {data.status}
      </span>
    </div>
  );
}
