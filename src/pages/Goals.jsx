import { Target, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";

/* ---------------- DATA ---------------- */

const summary = [
  { label: "Total Goals", value: 24, bg: "#D9D9F5" },
  { label: "On Track", value: 15, bg: "#D9F5E3" },
  { label: "Completed", value: 6, bg: "#ECFDF3" },
  { label: "At Risk", value: 3, bg: "#F8D3CC" },
];

const activeGoals = [
  {
    title: "Improve attendance rate",
    owner: "HR Team",
    progress: 72,
    status: "On Track",
    bg: "#D9F5E3",
  },
  {
    title: "Reduce onboarding time",
    owner: "Operations",
    progress: 45,
    status: "At Risk",
    bg: "#F9E6A7",
  },
  {
    title: "Launch rewards program",
    owner: "People Team",
    progress: 90,
    status: "Near Completion",
    bg: "#D9D9F5",
  },
];

const teamGoals = [
  {
    team: "Engineering",
    goal: "Increase sprint velocity",
    progress: 80,
    bg: "#EEF2FF",
  },
  {
    team: "Design",
    goal: "Improve design consistency",
    progress: 65,
    bg: "#F8D3CC",
  },
];

/* ---------------- PAGE ---------------- */

export default function Goals() {
  return (
    <div className="space-y-10 select-none">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold">Goals</h1>
        <p className="text-sm text-gray-500">
          Track progress and align teams with company objectives
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
          {/* ACTIVE GOALS */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-gray-600">
              Active goals
            </h2>

            {activeGoals.map((g, i) => (
              <GoalCard key={i} data={g} />
            ))}
          </section>

          {/* TEAM GOALS */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-gray-600">
              Team goals
            </h2>

            {teamGoals.map((t, i) => (
              <TeamGoalCard key={i} data={t} />
            ))}
          </section>
        </div>

        {/* RIGHT PANEL */}
        <aside className="space-y-6">
          {/* PROGRESS OVERVIEW */}
          <div className="rounded-xl p-4 bg-[#EEF2FF]">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Progress overview
            </h3>

            <div className="space-y-3 text-xs text-gray-600">
              <ProgressItem icon={TrendingUp} label="Overall progress" value="68%" />
              <ProgressItem icon={CheckCircle} label="Completed goals" value="6" />
              <ProgressItem icon={AlertTriangle} label="At risk goals" value="3" />
            </div>
          </div>

          {/* STATS */}
          <div className="rounded-xl p-4 bg-[#ECFDF3]">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Goal stats
            </h3>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Avg completion time: 18 days</li>
              <li>• Most active team: HR</li>
              <li>• Goals updated this week: 5</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function GoalCard({ data }) {
  return (
    <div
      className="rounded-xl p-4 space-y-3"
      style={{ backgroundColor: data.bg }}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold">{data.title}</div>
          <div className="text-xs text-gray-600">
            Owner: {data.owner}
          </div>
        </div>

        <span className="text-xs font-semibold text-gray-600">
          {data.status}
        </span>
      </div>

      {/* PROGRESS BAR */}
      <div className="w-full h-2 bg-white rounded-full overflow-hidden">
        <div
          className="h-full bg-black rounded-full"
          style={{ width: `${data.progress}%` }}
        />
      </div>

      <div className="text-xs text-gray-600">
        {data.progress}% completed
      </div>
    </div>
  );
}

function TeamGoalCard({ data }) {
  return (
    <div
      className="rounded-xl p-4 space-y-2"
      style={{ backgroundColor: data.bg }}
    >
      <div className="text-sm font-semibold">{data.team}</div>
      <div className="text-xs text-gray-700">{data.goal}</div>

      <div className="w-full h-2 bg-white rounded-full overflow-hidden">
        <div
          className="h-full bg-black rounded-full"
          style={{ width: `${data.progress}%` }}
        />
      </div>

      <div className="text-xs text-gray-600">
        {data.progress}% progress
      </div>
    </div>
  );
}

function ProgressItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-white rounded-xl p-1.5">
          <Icon size={12} className="text-gray-600" />
        </div>
        <span>{label}</span>
      </div>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
