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

const summary = [
  { label: "Employees", value: 128, bg: "#D9D9F5" },
  { label: "Avg Attendance", value: "88%", bg: "#D9F5E3" },
  { label: "Avg Leaves", value: "1.8 / emp", bg: "#F9E6A7" },
  { label: "Engagement", value: "High", bg: "#F8D3CC" },
];

const attendanceTrend = [
  { day: "Mon", value: 110 },
  { day: "Tue", value: 112 },
  { day: "Wed", value: 108 },
  { day: "Thu", value: 115 },
  { day: "Fri", value: 113 },
];

const leaveTrend = [
  { week: "W1", value: 6 },
  { week: "W2", value: 9 },
  { week: "W3", value: 7 },
  { week: "W4", value: 5 },
];

const departmentStats = [
  { dept: "Engineering", value: 48 },
  { dept: "HR", value: 12 },
  { dept: "Sales", value: 30 },
  { dept: "Design", value: 18 },
];

/* ---------------- PAGE ---------------- */

export default function Analytics() {
  return (
    <div className="space-y-10 select-none">
      {/* HEADER */}
      {/* <div>
        <h1 className="text-2xl font-semibold">Analytics</h1>
        <p className="text-sm text-gray-500">
          Insights and trends across workforce data
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

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* LEFT CONTENT */}
        <div className="xl:col-span-2 space-y-8">
          {/* ATTENDANCE TREND */}
          <section
            className="rounded-xl p-6"
            style={{ backgroundColor: "#EEF2FF" }}
          >
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              Attendance trend (daily)
            </h2>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={attendanceTrend}>
                  <CartesianGrid stroke="#CBD5E1" strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#4F46E5"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* LEAVE TREND */}
          <section
            className="rounded-xl p-6"
            style={{ backgroundColor: "#ECFDF3" }}
          >
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              Leave trend (weekly)
            </h2>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={leaveTrend}>
                  <CartesianGrid stroke="#CBD5E1" strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="value"
                    fill="#16A34A"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* DEPARTMENT INSIGHTS */}
          <section
            className="rounded-xl p-6"
            style={{ backgroundColor: "#F9E6A7" }}
          >
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              Department distribution
            </h2>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={departmentStats}>
                  <CartesianGrid stroke="#CBD5E1" strokeDasharray="3 3" />
                  <XAxis dataKey="dept" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="value"
                    fill="#92400E"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
        </div>

        {/* RIGHT PANEL */}
        <aside className="space-y-6">
          {/* KEY INSIGHTS */}
          <div className="rounded-xl p-4 bg-[#D9D9F5]">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Key insights
            </h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Attendance improved by 4% this week</li>
              <li>• Leaves reduced compared to last month</li>
              <li>• Engineering has highest engagement</li>
            </ul>
          </div>

          {/* DATA HEALTH */}
          <div className="rounded-xl p-4 bg-[#F8D3CC]">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Data health
            </h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Last sync: Today 9:30 AM</li>
              <li>• Missing entries: 2</li>
              <li>• Accuracy score: 98%</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
