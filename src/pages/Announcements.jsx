import { Megaphone, Pin, Plus, Filter } from "lucide-react";

/* ---------------- DATA ---------------- */

const summaryCards = [
  { label: "Total", value: 18, bg: "#D9D9F5" },
  { label: "Pinned", value: 3, bg: "#F9E6A7" },
  { label: "HR", value: 7, bg: "#D9F5E3" },
  { label: "Engineering", value: 4, bg: "#F8D3CC" },
];

const announcements = [
  {
    id: 1,
    title: "Company Townhall – Q3 Updates",
    description:
      "Leadership will share Q3 performance, roadmap updates, and answer questions.",
    date: "20 Feb",
    author: "HR Team",
    daysLeft: 2,
    pinned: true,
    category: "HR",
    bg: "#D9D9F5",
  },
  {
    id: 2,
    title: "Updated Leave Policy",
    description:
      "The leave policy has been revised. Please review the updated guidelines.",
    date: "15 Feb",
    author: "HR Team",
    daysLeft: 7,
    category: "HR",
    bg: "#D9F5E3",
  },
  {
    id: 3,
    title: "Engineering Sprint Planning",
    description:
      "Sprint planning for the next cycle will be held on Monday at 10 AM.",
    date: "18 Feb",
    author: "Engineering",
    daysLeft: 4,
    category: "Engineering",
    bg: "#F9E6A7",
  },
  {
    id: 4,
    title: "Design Review Session",
    description:
      "Design review meeting scheduled for all designers this Friday.",
    date: "22 Feb",
    author: "Design Team",
    daysLeft: 6,
    category: "Design",
    bg: "#F8D3CC",
  },
];

/* ---------------- PAGE ---------------- */

export default function Announcements() {
  return (
    <div className="space-y-10 select-none">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Announcements</h1>
          <p className="text-sm text-gray-500">
            Company updates, notices, and internal communications
          </p>
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 flex items-center gap-2">
          <Plus size={16} />
          New announcement
        </button>
      </div>

      {/* SUMMARY CARDS */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {summaryCards.map((c) => (
          <div
            key={c.label}
            className="rounded-xl p-4"
            style={{ backgroundColor: c.bg }}
          >
            <div className="text-xs text-gray-600">{c.label}</div>
            <div className="text-2xl font-semibold">{c.value}</div>
          </div>
        ))}
      </section>

      {/* FILTERS */}
      <section className="flex items-center gap-2 text-xs font-semibold text-gray-600">
        <Filter size={14} />
        {["All", "HR", "Engineering", "Design", "Important"].map((f) => (
          <button
            key={f}
            className="px-4 py-1 rounded-full hover:bg-gray-100"
          >
            {f}
          </button>
        ))}
      </section>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* LEFT CONTENT */}
        <div className="xl:col-span-2 space-y-8">
          {/* PINNED */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-gray-600 flex items-center gap-2">
              <Pin size={14} /> Pinned
            </h2>

            {announcements
              .filter((a) => a.pinned)
              .map((item) => (
                <AnnouncementCard key={item.id} data={item} />
              ))}
          </section>

          {/* FEED */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-gray-600">
              All announcements
            </h2>

            {announcements.map((item) => (
              <AnnouncementCard key={item.id} data={item} />
            ))}
          </section>
        </div>

        {/* RIGHT PANEL */}
        <aside className="space-y-6">
          {/* UPCOMING */}
          <div className="rounded-xl p-4 bg-[#EEF2FF]">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Upcoming announcements
            </h3>
            <div className="space-y-3">
              {announcements.slice(0, 3).map((a) => (
                <div key={a.id} className="text-xs">
                  <div className="font-semibold">{a.title}</div>
                  <div className="text-gray-500">
                    {a.daysLeft} days left
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* STATS */}
          <div className="rounded-xl p-4 bg-[#ECFDF3]">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Announcement stats
            </h3>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• 18 total announcements</li>
              <li>• 3 pinned</li>
              <li>• 5 published this month</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* ---------------- CARD ---------------- */

function AnnouncementCard({ data }) {
  return (
    <div
      className="rounded-xl p-4 flex items-start justify-between gap-4 hover:-translate-y-[1px] transition"
      style={{ backgroundColor: data.bg }}
    >
      <div className="flex items-start gap-3">
        <div className="bg-white rounded-xl p-2">
          <Megaphone size={14} className="text-gray-600" />
        </div>

        <div className="space-y-1">
          <div className="text-sm font-semibold">
            {data.title}
          </div>
          <div className="text-xs text-gray-700 max-w-xl">
            {data.description}
          </div>
          <div className="flex gap-4 text-[11px] text-gray-600 pt-1">
            <span>{data.date}</span>
            <span>{data.author}</span>
            <span>{data.category}</span>
          </div>
        </div>
      </div>

      <div className="text-xs font-semibold text-gray-600 whitespace-nowrap">
        {data.daysLeft} days left
      </div>
    </div>
  );
}
