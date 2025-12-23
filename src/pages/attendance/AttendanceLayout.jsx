import { Outlet, NavLink } from "react-router-dom";
import SectionHeader from "../../components/ui/SectionHeader";
import { useAuth } from "../../context/AuthContext";

export default function AttendanceLayout() {
  const { user } = useAuth();
  const role = user?.role;

  const tabs = [
    { label: "Overview", to: "", roles: ["EMPLOYEE", "MANAGER", "HR_ADMIN"] },
    { label: "My Leaves", to: "my-leaves", roles: ["EMPLOYEE"] },
    { label: "Approvals", to: "approvals", roles: ["MANAGER", "HR_ADMIN"] },
    { label: "Team Calendar", to: "team-calendar", roles: ["EMPLOYEE", "MANAGER", "HR_ADMIN"] },
    { label: "Policies", to: "policies", roles: ["HR_ADMIN"] },
    { label: "Reports", to: "reports", roles: ["HR_ADMIN"] },
  ];

  const visibleTabs = tabs.filter((t) => t.roles.includes(role));

  return (
    <div className="space-y-6 sm:space-y-8">
      <SectionHeader
        title="Attendance & Leave"
        subtitle="Track attendance, manage leave and approvals"
      />

      {/* ROLE-BASED TABS (MOBILE FRIENDLY) */}
      <div className="relative">
        {/* Scroll hint (mobile only) */}
        <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white pointer-events-none sm:hidden" />

        <div
          className="
            flex
            gap-2
            overflow-x-auto
            scrollbar-hide
            pb-1
            text-xs
            font-semibold
            sm:overflow-visible
            sm:flex-wrap
          "
        >
          {visibleTabs.map((t) => (
            <NavLink
              key={t.label}
              to={t.to}
              end
              className={({ isActive }) =>
                `
                  shrink-0
                  px-4
                  py-1.5
                  rounded-full
                  transition
                  ${
                    isActive
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }
                `
              }
            >
              {t.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* SUB PAGE */}
      <Outlet />
    </div>
  );
}
