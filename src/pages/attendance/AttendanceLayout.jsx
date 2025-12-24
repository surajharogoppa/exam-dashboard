import { Outlet } from "react-router-dom";
import SectionHeader from "../../components/ui/SectionHeader";
import Tabs from "../../components/ui/Tabs";
import { useAuth } from "../../context/AuthContext";

export default function AttendanceLayout() {
  const { user } = useAuth();
  const role = user?.role;

  const tabs = [
    { label: "Overview", to: "", roles: ["EMPLOYEE", "MANAGER", "HR_ADMIN"] },
    { label: "My Leaves", to: "my-leaves", roles: ["EMPLOYEE"] },
    { label: "Approvals", to: "approvals", roles: ["MANAGER", "HR_ADMIN"] },
    {
      label: "Team Calendar",
      to: "team-calendar",
      roles: ["EMPLOYEE", "MANAGER", "HR_ADMIN"],
    },
    { label: "Policies", to: "policies", roles: ["HR_ADMIN"] },
    { label: "Reports", to: "reports", roles: ["HR_ADMIN"] },
  ];

  const visibleTabs = tabs
    .filter((t) => t.roles.includes(role))
    .map(({ label, to }) => ({ label, to }));

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header (optional, keep commented if layout already has one) */}
      {/*
      <SectionHeader
        title="Attendance & Leave"
        subtitle="Track attendance, manage leave and approvals"
      />
      */}

      {/* Tabs */}
      <Tabs items={visibleTabs} />

      {/* Sub routes */}
      <Outlet />
    </div>
  );
}
