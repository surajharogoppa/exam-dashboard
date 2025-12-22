import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  IconOverview,
  IconClassPreparation,
  IconAttendance,
  IconEmployee,
  IconRewardsNav,
  IconExamsNav,
  IconSchedule,
  IconStudents,
  IconMessages,
  IconAnalytics,
  IconReports,
  IconSettings,
  IconNews,
  IconWhatsNew,
} from "./icons";
import { PanelRight, Menu } from "lucide-react";

/* ---------------- MAIN MENU ---------------- */

const mainMenuItems = [
  { icon: IconOverview, label: "Dashboard", path: "/" },
  { icon: IconClassPreparation, label: "Announcements", path: "/announcements" },
  { icon: IconAttendance, label: "Attendance and Leave", path: "/attendance" },
  { icon: IconEmployee, label: "Employees", path: "/employees" },
  { icon: IconRewardsNav, label: "Rewards", path: "/rewards" },
  { icon: IconSchedule, label: "Events", path: "/events" },
  { icon: IconExamsNav, label: "Exams", path: "/exams" },
  { icon: IconStudents, label: "Goals", path: "/goals" },
  { icon: IconMessages, label: "Messages", path: "/messages", badge: 2 },
  { icon: IconAnalytics, label: "Analytics", path: "/analytics" },
  { icon: IconReports, label: "Reports", path: "/reports" },

];

/* ---------------- BOTTOM MENU (INCLUDES USER) ---------------- */

const bottomMenuItems = [
  { icon: IconNews, label: "Company News", path: "/company-news" },
  { icon: IconWhatsNew, label: "What's New", path: "/whats-new" },
  { icon: IconSettings, label: "Settings", path: "/settings" },
  {
    type: "user",
    path: "/account",
    name: "Anand Budavi",
    role: "Linux Admin",
    avatar: "https://i.pravatar.cc/40",
  },
];

export default function Sidebar({ isOpen, toggleSidebar }) {
  const scrollRef = useRef(null);
  const [showTopShadow, setShowTopShadow] = useState(false);
  const [showBottomShadow, setShowBottomShadow] = useState(false);

  const linkClasses = ({ isActive }) =>
    `flex items-center rounded-lg transition-colors
   ${isOpen ? "gap-3 px-3 py-2" : "justify-center py-2"}
   ${isActive
      ? "bg-white text-gray-900 font-medium shadow-sm"
      : "text-gray-600 hover:bg-gray-100"
    }`;

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowTopShadow(el.scrollTop > 0);
    setShowBottomShadow(el.scrollTop + el.clientHeight < el.scrollHeight - 1);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 h-screen z-50
            p-3 flex flex-col bg-white/97 backdrop-blur
            transition-transform duration-300
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0
            ${isOpen ? "md:w-64" : "md:w-16"}
          `}
    >



      {/* ───────── TOP CONTROL ───────── */}
      <div className="flex items-center justify-between mb-1 shrink-0">
        {isOpen && (
          <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Menu
          </span>
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-200 focus:outline-none"
        >
          {isOpen ? <PanelRight size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* ───────── SCROLLABLE MAIN MENU ───────── */}
      <div className="relative flex-1 min-h-0">
        {showTopShadow && (
          <div
            className="pointer-events-none absolute top-0 inset-x-0 h-4
               bg-gradient-to-b from-black/10 via-black/5 to-transparent
               rounded-t-xl"
          />
        )}

        {showBottomShadow && (
          <div className="pointer-events-none absolute bottom-1 inset-x-0 h-6 
                  bg-gradient-to-t from-black/10 via-black/5 to-transparent
                  rounded-b-xl" />
        )}


        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="h-full overflow-y-auto no-scrollbar overscroll-contain"
        >
          <ul className="space-y-2 py-2">
            {mainMenuItems.map(({ icon: Icon, label, path, badge }) => (
              <li key={label}>
                <NavLink to={path} className={linkClasses}>
                  {({ isActive }) => (
                    <>
                      <Icon
                        className={`
                          ${isOpen ? "w-[18px] h-[18px]" : "w-5 h-5"}
                          ${isActive ? "text-gray-900" : "text-gray-500"}
                        `}
                      />
                      {isOpen && <span className="flex-1">{label}</span>}
                      {isOpen && badge && (
                        <span className="ml-auto text-[10px] font-medium bg-gray-200 text-gray-700 rounded-full px-2 py-0.5">
                          {badge}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ───────── FIXED BOTTOM (DATA DRIVEN) ───────── */}
      <div className="h-4 shrink-0" />
      <div className="pt-1 border-t border-gray-200/60 shrink-0">
        <ul className="space-y-0.5">
          {bottomMenuItems.map((item, idx) => {
            if (item.type === "user") {
              return (
                <li key={idx}>
                  <NavLink
                    to={item.path}
                    className={`
                      flex items-center rounded-lg transition hover:bg-gray-100
                      ${isOpen ? "gap-2 px-2 py-1" : "justify-center py-1.5"}
                    `}
                  >
                    <img
                      src={item.avatar}
                      alt="User avatar"
                      className="w-7 h-7 rounded-full flex-shrink-0"
                    />
                    {isOpen && (
                      <div className="leading-tight">
                        <div className="text-[13px] font-medium text-gray-800">
                          {item.name}
                        </div>
                        <div className="text-[10px] text-gray-500">
                          {item.role}
                        </div>
                      </div>
                    )}
                  </NavLink>
                </li>
              );
            }

            const Icon = item.icon;
            return (
              <li key={item.label}>
                <NavLink to={item.path} className={linkClasses}>
                  {({ isActive }) => (
                    <>
                      <Icon
                        className={`
                          ${isOpen ? "w-[16px] h-[16px]" : "w-5 h-5"}
                          ${isActive ? "text-gray-900" : "text-gray-500"}
                        `}
                      />
                      {isOpen && <span>{item.label}</span>}
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
