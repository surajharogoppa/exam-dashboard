import { User, Building, Shield, Sliders } from "lucide-react";

/* ---------------- DATA ---------------- */

const summary = [
  { label: "Profile", value: "Complete", bg: "#D9D9F5" },
  { label: "Organization", value: "EmployeeHub", bg: "#D9F5E3" },
  { label: "Security", value: "Protected", bg: "#F9E6A7" },
  { label: "Preferences", value: "Custom", bg: "#F8D3CC" },
];

/* ---------------- PAGE ---------------- */

export default function Settings() {
  return (
    <div className="space-y-10 select-none">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-sm text-gray-500">
          Manage your account, organization, and system preferences
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
            <div className="text-sm font-semibold mt-1">{s.value}</div>
          </div>
        ))}
      </section>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* LEFT CONTENT */}
        <div className="xl:col-span-2 space-y-8">
          {/* PROFILE */}
          <SectionCard
            title="Profile settings"
            icon={User}
            bg="#EEF2FF"
          >
            <SettingRow label="Name" value="Suraj Harogoppa" />
            <SettingRow label="Email" value="suraj@email.com" />
            <SettingRow label="Role" value="Admin" />
          </SectionCard>

          {/* ORGANIZATION */}
          <SectionCard
            title="Organization"
            icon={Building}
            bg="#ECFDF3"
          >
            <SettingRow label="Company name" value="EmployeeHub" />
            <SettingRow label="Industry" value="Technology" />
            <SettingRow label="Employees" value="128" />
          </SectionCard>

          {/* PREFERENCES */}
          <SectionCard
            title="Preferences"
            icon={Sliders}
            bg="#F9E6A7"
          >
            <ToggleRow label="Dark mode" />
            <ToggleRow label="Email notifications" />
            <ToggleRow label="Weekly summary" />
          </SectionCard>

          {/* SECURITY */}
          <SectionCard
            title="Security"
            icon={Shield}
            bg="#F8D3CC"
          >
            <SettingRow label="Password" value="Last changed 30 days ago" />
            <SettingRow label="Two-factor auth" value="Enabled" />
            <button className="text-xs font-semibold underline">
              Manage security settings
            </button>
          </SectionCard>
        </div>

        {/* RIGHT PANEL */}
        <aside className="space-y-6">
          {/* ACCOUNT STATUS */}
          <div className="rounded-xl p-4 bg-[#D9D9F5]">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Account status
            </h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Plan: Pro</li>
              <li>• Active users: 24</li>
              <li>• Storage used: 68%</li>
            </ul>
          </div>

          {/* HELP */}
          <div className="rounded-xl p-4 bg-[#ECFDF3]">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Help & support
            </h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Documentation</li>
              <li>• Contact support</li>
              <li>• System status</li>
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

function SettingRow({ label, value }) {
  return (
    <div className="flex items-center justify-between text-xs">
      <span className="text-gray-700">{label}</span>
      <span className="font-semibold text-gray-600">{value}</span>
    </div>
  );
}

function ToggleRow({ label }) {
  return (
    <div className="flex items-center justify-between text-xs">
      <span className="text-gray-700">{label}</span>
      <button className="w-10 h-5 bg-white rounded-full relative">
        <span className="absolute left-1 top-1 w-3 h-3 bg-black rounded-full" />
      </button>
    </div>
  );
}
