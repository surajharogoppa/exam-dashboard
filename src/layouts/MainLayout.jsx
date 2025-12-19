import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header"; // breadcrumb header
import GlobalHeader from "../components/common/GlobalHeader";
import { useState } from "react";

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-b from-sidebarTop to-sidebarBottom text-gray-700 font-sans">
      {/* GLOBAL FIXED HEADER */}
      <GlobalHeader />

      {/* APP SHELL (BELOW HEADER) */}
      <div className="flex h-[calc(100vh-3.5rem)] pt-14">
        {/* SIDEBAR (FIXED, NO SCROLL) */}
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        {/* MAIN CONTENT SCROLLER (ONLY SCROLL AREA) */}
        <main className="flex-1 overflow-y-auto px-2">
          {/* CONTENT CARD */}
          <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6 min-h-full">
            {/* PAGE HEADER (BREADCRUMB) */}
            <Header />

            {/* PAGE CONTENT */}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
