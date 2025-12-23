// src/components/common/Header.jsx
import { useLocation } from "react-router-dom";


const routeTitleMap = {
  "/": "Dashboard",
  "/exams": "Exams",
  "/announcements": "Announcements",
  
          // Attendance module
          "/attendance": "Attendance & Leave",
          "/attendance/my-leaves":"MyLeaves",
          "/attendance/approvals":"Approvals",
          "/attendance/team-calendar":"TeamCalendar",
          "/attendance/policies":"AdminPolicies",
          "/attendance/reports":"AttendanceReports",



  "/employees": "Employees",
  "/rewards": "Rewards",
  "/events": "Events",
  "/goals": "Goals",
  "/messages": "Messages",
  "/analytics": "Analytics",
  "/reports": "Reports",
  "/settings": "Settings",
  "/school-news": "School News",
  "/school-activities": "School Activities",
  "/whats-new": "What’s New",
  "/account": "Account",
};

export default function Header() {
  const location = useLocation();

  // 🔹 Later replace with real logged-in user
  const username = "Amirbaqian";

  const pageTitle =
    routeTitleMap[location.pathname] ?? "Dashboard";

  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-0 gap-0">

      {/* LEFT: USER > PAGE */}
      <div className="flex items-center gap-1 text-sm text-gray-600">
        <span className="opacity-50">{username} &gt;</span>
        <span className="font-semibold text-gray-800">
          {pageTitle}   
        </span>
      </div>

      {/* RIGHT: ICONS (UNCHANGED SVGs) */}
      <div className="flex items-center gap-3">

        {/* Notification Bell */}
        <button className="p-2 rounded-md hover:bg-gray-200">
          <svg
            className="w-6 h-6 stroke-current text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 1 0-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 1 1-6 0h6z" />
          </svg>
        </button>

        {/* Chat / Messages */}
        <button className="p-2 rounded-md hover:bg-gray-200">
          <svg
            className="w-6 h-6 stroke-current text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6l-4 4V5z" />
            <path d="M8 10h8" />
            <path d="M8 14h8" />
          </svg>
        </button>

        {/* Search */}
        <button className="p-2 rounded-md hover:bg-gray-200">
          <svg
            className="w-6 h-6 stroke-current text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>

      </div>
    </header>
  );
}
