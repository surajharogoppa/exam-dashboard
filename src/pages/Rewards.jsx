import { Trophy, Star, Gift, Award } from "lucide-react";

/* ---------------- DATA ---------------- */

const summary = [
  { label: "Total Rewards", value: 48, bg: "#D9D9F5" },
  { label: "Points Earned", value: 1260, bg: "#D9F5E3" },
  { label: "Top Performer", value: "Aisha", bg: "#F9E6A7" },
  { label: "This Month", value: 6, bg: "#F8D3CC" },
];

const featuredRewards = [
  {
    title: "Employee of the Month",
    description: "Outstanding performance and contribution",
    user: "Aisha Khan",
    bg: "#D9F5E3",
  },
  {
    title: "Team Player Award",
    description: "Exceptional collaboration and teamwork",
    user: "Rohit Sharma",
    bg: "#D9D9F5",
  },
];

const recentRewards = [
  {
    name: "John Doe",
    reward: "Star Performer",
    date: "20 Feb",
    bg: "#F9E6A7",
  },
  {
    name: "Neha Patel",
    reward: "Best Attendance",
    date: "18 Feb",
    bg: "#D9F5E3",
  },
  {
    name: "Arjun Rao",
    reward: "Innovation Award",
    date: "15 Feb",
    bg: "#F8D3CC",
  },
];

const leaderboard = [
  { name: "Aisha Khan", points: 320 },
  { name: "John Doe", points: 290 },
  { name: "Neha Patel", points: 260 },
];

/* ---------------- PAGE ---------------- */

export default function Rewards() {
  return (
    <div className="space-y-10 select-none">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold">Rewards</h1>
        <p className="text-sm text-gray-500">
          Recognize achievements and celebrate performance
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
        <div className="xl:col-span-2 space-y-6">
          {/* FEATURED */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-gray-600">
              Featured rewards
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuredRewards.map((r, i) => (
                <FeaturedRewardCard key={i} data={r} />
              ))}
            </div>
          </section>

          {/* RECENT */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-gray-600">
              Recent rewards
            </h2>

            {recentRewards.map((r, i) => (
              <RewardCard key={i} data={r} />
            ))}
          </section>
        </div>

        {/* RIGHT PANEL */}
        <aside className="space-y-6">
          {/* LEADERBOARD */}
          <div className="rounded-xl p-4 bg-[#EEF2FF]">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Leaderboard
            </h3>

            <div className="space-y-3">
              {leaderboard.map((l, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <div className="bg-white rounded-full p-1">
                      <Trophy size={12} className="text-gray-600" />
                    </div>
                    <span className="font-medium">{l.name}</span>
                  </div>
                  <span className="font-semibold text-gray-600">
                    {l.points} pts
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* STATS */}
          <div className="rounded-xl p-4 bg-[#ECFDF3]">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Reward stats
            </h3>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Avg rewards / month: 4</li>
              <li>• Top category: Performance</li>
              <li>• Active participants: 92%</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* ---------------- CARDS ---------------- */

function FeaturedRewardCard({ data }) {
  return (
    <div
      className="rounded-xl p-5 flex items-start gap-4"
      style={{ backgroundColor: data.bg }}
    >
      <div className="bg-white rounded-xl p-2">
        <Award size={16} className="text-gray-600" />
      </div>

      <div className="space-y-1">
        <div className="text-sm font-semibold">{data.title}</div>
        <div className="text-xs text-gray-700">{data.description}</div>
        <div className="text-xs font-medium text-gray-600 pt-1">
          Awarded to {data.user}
        </div>
      </div>
    </div>
  );
}

function RewardCard({ data }) {
  return (
    <div
      className="rounded-xl p-4 flex items-center justify-between"
      style={{ backgroundColor: data.bg }}
    >
      <div className="flex items-center gap-3">
        <div className="bg-white rounded-xl p-2">
          <Star size={14} className="text-gray-600" />
        </div>
        <div>
          <div className="text-sm font-semibold">{data.name}</div>
          <div className="text-xs text-gray-600">{data.reward}</div>
        </div>
      </div>

      <div className="text-xs text-gray-600">{data.date}</div>
    </div>
  );
}
