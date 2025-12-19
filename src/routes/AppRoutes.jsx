// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import Announcements from "../pages/Announcements";
import Attendance from "../pages/Attendance";
import Rewards from "../pages/Rewards";
import Events from "../pages/Events";
import Exams from "../pages/Exams";
import Goals from "../pages/Goals";
import Messages from "../pages/Messages";
import Analytics from "../pages/Analytics";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import SchoolNews from "../pages/SchoolNews";
import WhatsNew from "../pages/WhatsNew";
import Account from "../pages/Account";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/events" element={<Events />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />

        {/* Extra pages */}
        <Route path="/school-news" element={<SchoolNews />} />
        <Route path="/whats-new" element={<WhatsNew />} />
        <Route path="/account" element={<Account />} />


        
      </Route>
    </Routes>
  );
}
