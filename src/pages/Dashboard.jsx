import {
  Users,
  UserCheck,
  UserMinus,
  Briefcase,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

/* ---------------- DATA ---------------- */

const kpis = [
  {
    label: "Total Employees",
    value: "128",
    icon: Users,
    bg: "#D9D9F5",
  },
  {
    label: "Present Today",
    value: "112",
    icon: UserCheck,
    bg: "#D9F5E3",
  },
  {
    label: "On Leave",
    value: "16",
    icon: UserMinus,
    bg: "#F9E6A7",
  },
  {
    label: "Open Positions",
    value: "5",
    icon: Briefcase,
    bg: "#F8D3CC",
  },
];

const attendanceData = [
  { day: "Mon", present: 110 },
  { day: "Tue", present: 112 },
  { day: "Wed", present: 108 },
  { day: "Thu", present: 115 },
  { day: "Fri", present: 113 },
];

const departmentData = [
  { department: "Engineering", employees: 48 },
  { department: "HR", employees: 12 },
  { department: "Sales", employees: 30 },
  { department: "Finance", employees: 18 },
];

/* ---------------- COMPONENT ---------------- */

export default function Dashboard() {
  return (
    <div className="space-y-10 select-none">
      {/* PAGE HEADER
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-gray-500">
          Overview of organization performance
        </p>
      </div> */}

      {/* KPI CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {kpis.map(({ label, value, icon: Icon, bg }) => (
          <div
            key={label}
            className="rounded-xl p-5 flex items-center justify-between"
            style={{ backgroundColor: bg }}
          >
            <div>
              <div className="text-xs font-medium text-gray-600">
                {label}
              </div>
              <div className="text-2xl font-semibold mt-1">
                {value}
              </div>
            </div>

            <div className="bg-white rounded-xl p-3">
              <Icon size={18} className="text-gray-700" />
            </div>
          </div>
        ))}
      </section>

      {/* ANALYTICS */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* ATTENDANCE TREND */}
        <div className="xl:col-span-2 rounded-xl p-6 bg-[#EEF2FF]">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">
            Attendance trend
          </h3>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={attendanceData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#CBD5E1"
                />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="present"
                  stroke="#4F46E5"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* DEPARTMENT DISTRIBUTION */}
        <div className="rounded-xl p-6 bg-[#ECFDF3]">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">
            Employees by department
          </h3>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#CBD5E1"
                />
                <XAxis dataKey="department" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="employees"
                  fill="#16A34A"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
