import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

/* Auth */
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/Login";

/* Attendance module */
          import AttendanceLayout from "../pages/attendance/AttendanceLayout";
          import AttendanceDashboard from "../pages/attendance/AttendanceDashboard";
          import MyLeaves from "../pages/attendance/MyLeaves";
          import Approvals from "../pages/attendance/Approvals";
          import TeamCalendar from "../pages/attendance/TeamCalendar";
          import AdminPolicies from "../pages/attendance/AdminPolicies";
          import AttendanceReports from "../pages/attendance/Reports";

/* Core pages */
import Dashboard from "../pages/Dashboard";
import Announcements from "../pages/Announcements";
import Employees from "../pages/Employees";
import Rewards from "../pages/Rewards";
import Events from "../pages/Events";
import Exams from "../pages/Exams";
import Goals from "../pages/Goals";
import Messages from "../pages/Messages";
import Analytics from "../pages/Analytics";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import CompanyNews from "../pages/CompanyNews";
import WhatsNew from "../pages/WhatsNew";
import Account from "../pages/Account";

export default function AppRoutes() {
  return (
    <Routes>
      {/* PUBLIC ROUTE */}
      <Route path="/login" element={<Login />} />

      {/* PROTECTED APP */}
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Dashboard />} />
        <Route path="/announcements" element={<Announcements />} />

        {/* Attendance & Leave (NEW, NESTED) */}
        <Route path="/attendance" element={<AttendanceLayout />}>
          <Route index element={<AttendanceDashboard />} />
          <Route path="my-leaves" element={<MyLeaves />} />
          <Route path="approvals" element={<Approvals />} />
          <Route path="team-calendar" element={<TeamCalendar />} />
          <Route path="policies" element={<AdminPolicies />} />
          <Route path="reports" element={<AttendanceReports />} />
        </Route>

        {/* Other modules */}
        <Route path="/employees" element={<Employees />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/events" element={<Events />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/reports" element={<Reports />} />

        {/* Extra pages */}
        <Route path="/company-news" element={<CompanyNews />} />
        <Route path="/whats-new" element={<WhatsNew />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/account" element={<Account />} />
      </Route>
    </Routes>
  );
}
