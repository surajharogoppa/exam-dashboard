import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";
import GlobalHeader from "../components/common/GlobalHeader";
import { useState } from "react";

const SIDEBAR_OPEN_WIDTH = "16rem";
const SIDEBAR_CLOSED_WIDTH = "4rem";

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const sidebarWidth = isSidebarOpen
    ? SIDEBAR_OPEN_WIDTH
    : SIDEBAR_CLOSED_WIDTH;

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-b from-sidebarTop to-sidebarBottom font-sans text-gray-700">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <GlobalHeader
        sidebarWidth={sidebarWidth}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* MAIN CONTENT */}
      <main className="pt-14 h-full transition-all duration-300">
        <div className="h-[calc(100vh-3.5rem)] overflow-y-auto px-2 sm:px-3 md:px-0">
          <div
            className="max-w-[1600px] mx-auto"
            style={{
              marginLeft: window.innerWidth >= 768 ? sidebarWidth : 0,
            }}
          >
            <div className="bg-white/100 backdrop-blur shadow-sm p-4 sm:p-5 md:p-5 min-h-full space-y-0 rounded-none md:rounded-2xl">
              <Header />
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
