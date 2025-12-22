import { User, Shield, Clock, Mail } from "lucide-react";

/* ---------------- DATA ---------------- */

const stats = [
  { label: "Role", value: "Admin", bg: "#D9D9F5" },
  { label: "Team", value: "People Ops", bg: "#D9F5E3" },
  { label: "Joined", value: "Jan 2024", bg: "#F9E6A7" },
  { label: "Status", value: "Active", bg: "#F8D3CC" },
];

const activity = [
  { text: "Updated profile information", time: "Today, 9:20 AM" },
  { text: "Approved leave request", time: "Yesterday, 4:10 PM" },
  { text: "Published announcement", time: "20 Feb, 11:00 AM" },
];

/* ---------------- PAGE ---------------- */

export default function Account() {
  return (
    <div className="space-y-10 select-none">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold">Account</h1>
        <p className="text-sm text-gray-500">
          Manage your personal account information and activity
        </p>
      </div>

      {/* PROFILE CARD */}
      <section
        className="rounded-xl p-6 flex items-center gap-6"
        style={{ backgroundColor: "#EEF2FF" }}
      >
        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          className="w-20 h-20 rounded-full"
        />

        <div className="space-y-1">
          <h2 className="text-lg font-semibold">Suraj Harogoppa</h2>
          <p className="text-sm text-gray-600 flex items-center gap-2">
            <Mail size={14} /> suraj@email.com
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl p-4"
            style={{ backgroundColor: s.bg }}
          >
            <div className="text-xs text-gray-600">{s.label}</div>
            <div className="text-sm font-semibold mt-1">{s.value}</div>
          </div>
        ))}
      </section>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* LEFT CONTENT */}
        <div className="xl:col-span-2 space-y-8">
          {/* ACCOUNT DETAILS */}
          <SectionCard title="Account details" icon={User} bg="#ECFDF3">
            <DetailRow label="Full name" value="Suraj Harogoppa" />
            <DetailRow label="Email address" value="suraj@email.com" />
            <DetailRow label="Phone number" value="+91 XXXXX XXXXX" />
            <button className="text-xs font-semibold underline">
              Edit profile
            </button>
          </SectionCard>

          {/* SECURITY OVERVIEW */}
          <SectionCard title="Security overview" icon={Shield} bg="#F9E6A7">
            <DetailRow label="Password" value="Last changed 30 days ago" />
            <DetailRow label="Two-factor authentication" value="Enabled" />
            <DetailRow label="Active sessions" value="3 devices" />
            <button className="text-xs font-semibold underline">
              Manage security
            </button>
          </SectionCard>
        </div>

        {/* RIGHT PANEL */}
        <aside className="space-y-6">
          {/* ACTIVITY */}
          <div className="rounded-xl p-4 bg-[#D9D9F5]">
            <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <Clock size={14} /> Recent activity
            </h3>

            <ul className="text-xs text-gray-700 space-y-2">
              {activity.map((a, i) => (
                <li key={i}>
                  <div className="font-medium">{a.text}</div>
                  <div className="text-gray-500">{a.time}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* STATUS */}
          <div className="rounded-xl p-4 bg-[#ECFDF3]">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Account status
            </h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Plan: Pro</li>
              <li>• Login alerts: Enabled</li>
              <li>• Last login: Today</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function SectionCard({ title, icon: Icon, bg, children }) {
  return (
    <div
      className="rounded-xl p-6 space-y-4"
      style={{ backgroundColor: bg }}
    >
      <div className="flex items-center gap-2">
        <div className="bg-white rounded-xl p-2">
          <Icon size={14} className="text-gray-600" />
        </div>
        <h2 className="text-sm font-semibold">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex items-center justify-between text-xs">
      <span className="text-gray-700">{label}</span>
      <span className="font-semibold text-gray-600">{value}</span>
    </div>
  );
}
