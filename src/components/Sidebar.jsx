import {
  IconOverview,
  IconClassPreparation,
  IconAttendance,
  IconExamsNav,
  IconSchedule,
  IconStudents,
  IconMessages,
  IconAnalytics,
  IconReports,
  IconSettings,
  IconNews,       // New icons for bottom menu
  IconActivities,
  IconWhatsNew
} from "./icons";

const mainMenuItems = [
  { icon: IconOverview, label: "Overview" },
  { icon: IconClassPreparation, label: "Class Preparation" },
  { icon: IconAttendance, label: "Attendance" },
  { icon: IconExamsNav, label: "Exams" },
  { icon: IconSchedule, label: "Schedule" },
  { icon: IconStudents, label: "Students" },
  { icon: IconMessages, label: "Messages", badge: 2 },
  { icon: IconAnalytics, label: "Analytics" },
  { icon: IconReports, label: "Reports" },
  { icon: IconSettings, label: "Settings" },
];

const bottomMenuItems = [
  { icon: IconNews, label: "School News" },
  { icon: IconActivities, label: "School Activities" },
  { icon: IconWhatsNew, label: "What's New" },
];

export default function Sidebar({ activeMenu, setActiveMenu }) {
  return (
    <nav className="w-64 h-full p-6 flex flex-col justify-between rounded-2xl bg-transparent">
      
      {/* Main menu */}
      <div>
        <div className="mb-6 text-xs font-semibold text-gray-500">Main menu</div>

        <ul className="space-y-3">
          {mainMenuItems.map(({ icon: Icon, label, badge }) => (
            <li
              key={label}
              onClick={() => setActiveMenu(label)}
              className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer transition
                ${activeMenu === label
                  ? "bg-white text-gray-900 font-semibold shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              <Icon
                className={`w-5 h-5 ${activeMenu === label ? "text-gray-900" : "text-gray-500"}`}
              />
              <span className="flex-1">{label}</span>
              {badge && (
                <span className="text-xs font-semibold bg-badgeGray rounded-full px-2 py-0.5 text-gray-800">
                  {badge}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom menu / Settings and news */}
      <div>
        <div className="mt-8 mb-2 text-xs font-semibold text-gray-500">
          Settings and news
        </div>

        <ul className="space-y-3">
          {bottomMenuItems.map(({ icon: Icon, label }) => (
            <li
              key={label}
              onClick={() => setActiveMenu(label)}
              className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer transition
                ${activeMenu === label
                  ? "bg-white text-gray-900 font-semibold shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              <Icon
                className={`w-5 h-5 ${activeMenu === label ? "text-gray-900" : "text-gray-500"}`}
              />
              <span className="flex-1">{label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* User info */}
      <div className="mt-6 flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40?u=amirbaqian"
          alt="User avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="text-sm font-semibold text-gray-800">Amirbaqian</div>
          <div className="text-xs text-gray-500">Teacher</div>
        </div>
      </div>
    </nav>
  );
}
