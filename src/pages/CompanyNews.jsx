import { Newspaper, Flame, Plus, MessageCircle } from "lucide-react";

/* ---------------- DATA ---------------- */

const summary = [
  { label: "Articles", value: 32, bg: "#D9D9F5" },
  { label: "This Month", value: 6, bg: "#D9F5E3" },
  { label: "Teams Covered", value: 8, bg: "#F9E6A7" },
  { label: "Engagement", value: "High", bg: "#F8D3CC" },
];

const featuredNews = {
  title: "EmployeeHub Launches New Rewards Program",
  description:
    "We’re excited to announce the launch of a new rewards and recognition program aimed at celebrating employee achievements.",
  author: "People Team",
  date: "22 Feb",
  reads: 184,
  bg: "#EEF2FF",
};

const newsFeed = [
  {
    title: "Engineering Achieves 99.9% Uptime",
    author: "Engineering",
    date: "20 Feb",
    reads: 142,
    comments: 12,
    bg: "#D9F5E3",
  },
  {
    title: "HR Introduces Flexible Work Policy",
    author: "HR Team",
    date: "18 Feb",
    reads: 198,
    comments: 21,
    bg: "#D9D9F5",
  },
  {
    title: "Design Team Revamps Brand Guidelines",
    author: "Design",
    date: "15 Feb",
    reads: 96,
    comments: 6,
    bg: "#F9E6A7",
  },
];

/* ---------------- PAGE ---------------- */

export default function CompanyNews() {
  return (
    <div className="space-y-10 select-none">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Company News</h1>
          <p className="text-sm text-gray-500">
            Latest updates, stories, and announcements from across the company
          </p>
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 flex items-center gap-2">
          <Plus size={16} />
          Publish news
        </button>
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
          {/* FEATURED */}
          <section>
            <h2 className="text-sm font-semibold text-gray-600 mb-3">
              Featured story
            </h2>

            <div
              className="rounded-xl p-6 space-y-3"
              style={{ backgroundColor: featuredNews.bg }}
            >
              <h3 className="text-lg font-semibold">
                {featuredNews.title}
              </h3>

              <p className="text-sm text-gray-700">
                {featuredNews.description}
              </p>

              <div className="flex flex-wrap gap-6 text-xs text-gray-600 pt-2">
                <span>{featuredNews.author}</span>
                <span>{featuredNews.date}</span>
                <span>{featuredNews.reads} reads</span>
              </div>
            </div>
          </section>

          {/* NEWS FEED */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-gray-600">
              Latest news
            </h2>

            {newsFeed.map((n, i) => (
              <NewsCard key={i} data={n} />
            ))}
          </section>
        </div>

        {/* RIGHT PANEL */}
        <aside className="space-y-6">
          {/* TRENDING */}
          <div className="rounded-xl p-4 bg-[#ECFDF3]">
            <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <Flame size={14} /> Trending topics
            </h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>#Rewards</li>
              <li>#RemoteWork</li>
              <li>#Engineering</li>
              <li>#Culture</li>
            </ul>
          </div>

          {/* STATS */}
          <div className="rounded-xl p-4 bg-[#F9E6A7]">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              News stats
            </h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Avg reads/article: 128</li>
              <li>• Most active team: HR</li>
              <li>• Comments this week: 46</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* ---------------- CARD ---------------- */

function NewsCard({ data }) {
  return (
    <div
      className="rounded-xl p-4 flex items-start justify-between gap-4 hover:-translate-y-[1px] transition"
      style={{ backgroundColor: data.bg }}
    >
      <div className="space-y-1">
        <h3 className="text-sm font-semibold">{data.title}</h3>
        <div className="flex gap-4 text-xs text-gray-600">
          <span>{data.author}</span>
          <span>{data.date}</span>
        </div>
      </div>

      <div className="flex items-center gap-3 text-xs text-gray-600 whitespace-nowrap">
        <span>{data.reads} reads</span>
        <span className="flex items-center gap-1">
          <MessageCircle size={12} /> {data.comments}
        </span>
      </div>
    </div>
  );
}
