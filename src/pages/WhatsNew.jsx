import { Sparkles, Rocket, Wrench, Bug } from "lucide-react";

/* ---------------- DATA ---------------- */

const summary = [
  { label: "Releases", value: 14, bg: "#D9D9F5" },
  { label: "New Features", value: 9, bg: "#D9F5E3" },
  { label: "Improvements", value: 18, bg: "#F9E6A7" },
  { label: "Bug Fixes", value: 27, bg: "#F8D3CC" },
];

const highlights = [
  {
    title: "Rewards & Recognition Module",
    description:
      "Celebrate employee achievements with a brand-new rewards and leaderboard system.",
    tag: "New",
    bg: "#D9F5E3",
  },
  {
    title: "Attendance Analytics",
    description:
      "Get deeper insights into attendance trends with new visual analytics.",
    tag: "Improvement",
    bg: "#D9D9F5",
  },
];

const updates = [
  {
    version: "v1.4.0",
    date: "22 Feb 2025",
    items: [
      { text: "Introduced Rewards page with leaderboards", type: "feature" },
      { text: "Added Events calendar and RSVP support", type: "feature" },
      { text: "Improved dashboard load performance", type: "improvement" },
    ],
    bg: "#EEF2FF",
  },
  {
    version: "v1.3.2",
    date: "15 Feb 2025",
    items: [
      { text: "Fixed leave approval notification issue", type: "fix" },
      { text: "Resolved sidebar collapse glitch on mobile", type: "fix" },
      { text: "Improved announcements card spacing", type: "improvement" },
    ],
    bg: "#ECFDF3",
  },
];

/* ---------------- PAGE ---------------- */

export default function WhatsNew() {
  return (
    <div className="space-y-10 select-none">
      {/* HEADER */}
      {/* <div>
        <h1 className="text-2xl font-semibold">What’s New</h1>
        <p className="text-sm text-gray-500">
          See what’s new, improved, and fixed in EmployeeHub
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
          {/* HIGHLIGHTS */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-gray-600">
              Latest highlights
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <HighlightCard key={i} data={h} />
              ))}
            </div>
          </section>

          {/* UPDATE TIMELINE */}
          <section className="space-y-6">
            <h2 className="text-sm font-semibold text-gray-600">
              Release notes
            </h2>

            {updates.map((u, i) => (
              <ReleaseCard key={i} data={u} />
            ))}
          </section>
        </div>

        {/* RIGHT PANEL */}
        <aside className="space-y-6">
          {/* FILTERS */}
          <div className="rounded-xl p-4 bg-[#EEF2FF]">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Filter updates
            </h3>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <FilterPill label="All" />
              <FilterPill label="New" />
              <FilterPill label="Improvements" />
              <FilterPill label="Fixes" />
            </div>
          </div>

          {/* STATS */}
          <div className="rounded-xl p-4 bg-[#F9E6A7]">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Release stats
            </h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Avg releases/month: 2</li>
              <li>• Most common: Improvements</li>
              <li>• Last release: 2 days ago</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function HighlightCard({ data }) {
  return (
    <div
      className="rounded-xl p-5 space-y-2"
      style={{ backgroundColor: data.bg }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">{data.title}</h3>
        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white">
          {data.tag}
        </span>
      </div>
      <p className="text-xs text-gray-700">{data.description}</p>
    </div>
  );
}

function ReleaseCard({ data }) {
  return (
    <div
      className="rounded-xl p-5 space-y-3"
      style={{ backgroundColor: data.bg }}
    >
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">{data.version}</div>
        <div className="text-xs text-gray-600">{data.date}</div>
      </div>

      <ul className="space-y-2 text-xs">
        {data.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <UpdateIcon type={item.type} />
            <span className="text-gray-700">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UpdateIcon({ type }) {
  if (type === "feature")
    return <Rocket size={12} className="text-green-600 mt-0.5" />;
  if (type === "improvement")
    return <Sparkles size={12} className="text-blue-600 mt-0.5" />;
  return <Bug size={12} className="text-red-600 mt-0.5" />;
}

function FilterPill({ label }) {
  return (
    <button className="px-4 py-1 rounded-full bg-white hover:bg-gray-100">
      {label}
    </button>
  );
}
