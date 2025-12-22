import { FileText, Download, Calendar, Filter } from "lucide-react";

/* ---------------- DATA ---------------- */

const summary = [
  { label: "Total Reports", value: 42, bg: "#D9D9F5" },
  { label: "This Month", value: 8, bg: "#D9F5E3" },
  { label: "Scheduled", value: 5, bg: "#F9E6A7" },
  { label: "Downloads", value: 214, bg: "#F8D3CC" },
];

const categories = [
  {
    title: "Attendance Reports",
    description: "Daily, weekly and monthly attendance data",
    bg: "#EEF2FF",
  },
  {
    title: "Leave Reports",
    description: "Leave usage and balances",
    bg: "#ECFDF3",
  },
  {
    title: "Performance Reports",
    description: "Goals, reviews and rewards analysis",
    bg: "#F9E6A7",
  },
  {
    title: "Engagement Reports",
    description: "Events, messages and participation",
    bg: "#F8D3CC",
  },
];

const recentReports = [
  {
    name: "February Attendance Report",
    type: "Attendance",
    date: "22 Feb",
    size: "1.2 MB",
    bg: "#D9D9F5",
  },
  {
    name: "Leave Summary – Q1",
    type: "Leave",
    date: "18 Feb",
    size: "860 KB",
    bg: "#D9F5E3",
  },
  {
    name: "Rewards & Recognition",
    type: "Performance",
    date: "15 Feb",
    size: "980 KB",
    bg: "#F9E6A7",
  },
];

/* ---------------- PAGE ---------------- */

export default function Reports() {
  return (
    <div className="space-y-10 select-none">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold">Reports</h1>
        <p className="text-sm text-gray-500">
          Generate, download, and schedule organizational reports
        </p>
      </div>

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
          {/* CATEGORIES */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-gray-600">
              Report categories
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categories.map((c, i) => (
                <CategoryCard key={i} data={c} />
              ))}
            </div>
          </section>

          {/* RECENT REPORTS */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-gray-600">
              Recent reports
            </h2>

            {recentReports.map((r, i) => (
              <ReportCard key={i} data={r} />
            ))}
          </section>
        </div>

        {/* RIGHT PANEL */}
        <aside className="space-y-6">
          {/* FILTERS */}
          <div className="rounded-xl p-4 bg-[#EEF2FF]">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Filters
            </h3>
            <div className="text-xs text-gray-600 space-y-2">
              <div className="flex items-center gap-2">
                <Filter size={12} /> Report type
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={12} /> Date range
              </div>
            </div>
          </div>

          {/* SCHEDULE */}
          <div className="rounded-xl p-4 bg-[#ECFDF3]">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Scheduled reports
            </h3>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Weekly attendance</li>
              <li>• Monthly leave summary</li>
              <li>• Quarterly performance</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* ---------------- CARDS ---------------- */

function CategoryCard({ data }) {
  return (
    <div
      className="rounded-xl p-5 space-y-2 hover:-translate-y-[1px] transition"
      style={{ backgroundColor: data.bg }}
    >
      <h3 className="text-sm font-semibold">{data.title}</h3>
      <p className="text-xs text-gray-700">{data.description}</p>
    </div>
  );
}

function ReportCard({ data }) {
  return (
    <div
      className="rounded-xl p-4 flex items-center justify-between"
      style={{ backgroundColor: data.bg }}
    >
      <div className="flex items-center gap-3">
        <div className="bg-white rounded-xl p-2">
          <FileText size={14} className="text-gray-600" />
        </div>
        <div>
          <div className="text-sm font-semibold">{data.name}</div>
          <div className="text-xs text-gray-600">
            {data.type} • {data.date}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 text-xs text-gray-600">
        <span>{data.size}</span>
        <button className="bg-white rounded-xl p-2">
          <Download size={14} />
        </button>
      </div>
    </div>
  );
}
