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

import SectionHeader from "../components/ui/SectionHeader";
import StatCard from "../components/ui/StatCard";
import ChartCard from "../components/data/ChartCard";

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
      {/* Page header */}
      <SectionHeader
        title="Dashboard"
        subtitle="Overview of organization performance"
      />

      {/* KPI cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {kpis.map(({ label, value, icon, bg }) => (
          <StatCard
            key={label}
            label={label}
            value={value}
            icon={icon}
            bg={bg}
          />
        ))}
      </section>

      {/* Analytics */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Attendance trend */}
        <ChartCard
          title="Attendance trend"
          bg="#EEF2FF"
          className="xl:col-span-2"
        >
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#CBD5E1" />
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
        </ChartCard>

        {/* Department distribution */}
        <ChartCard
          title="Employees by department"
          bg="#ECFDF3"
        >
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={departmentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#CBD5E1" />
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
        </ChartCard>
      </section>
    </div>
  );
}
