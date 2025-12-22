import { Bell, Search, Menu } from "lucide-react";

export default function GlobalHeader({ sidebarWidth, toggleSidebar }) {
  return (
    <header className="fixed top-0 z-40 h-14 w-full">
      <div
        className="h-full flex items-center justify-between px-4 sm:px-6
                   bg-gray/40 backdrop-blur "
        style={{
          marginLeft: window.innerWidth >= 768 ? sidebarWidth : 0,
          width:
            window.innerWidth >= 768
              ? `calc(100% - ${sidebarWidth})`
              : "100%",
        }}
      >
        {/* LEFT */}
        <div className="flex items-center gap-3">
          {/* MOBILE MENU */}
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <Menu size={18} />
          </button>

          {/* COMPANY LOGO */}
          <div className="flex items-center gap-2 cursor-pointer">
            {/* Replace src with real logo later */}
            <img
              src="https://dummyimage.com/32x32/111827/ffffff&text=E"
              alt="Company Logo"
              className="w-6 h-6 rounded-md"
            />
            <span className="hidden lg:block text-sm font-semibold text-gray-800">
              EmployeeHub
            </span>
          </div>

          {/* SEARCH */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg ml-2">
            <Search size={16} className="text-gray-500" />
            <input
              placeholder="Search employees, reports…"
              className="bg-transparent text-sm outline-none w-56"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-gray-900 transition">
              Overview
            </a>
            <a href="#" className="hover:text-gray-900 transition">
              Employees
            </a>
            <a href="#" className="hover:text-gray-900 transition">
              Reports
            </a>
          </nav>

          {/* DIVIDER */}
          <div className="hidden lg:block h-6 w-px bg-gray-300/60" />

          {/* NOTIFICATIONS */}
          <button className="p-2 rounded-lg hover:bg-gray-100 relative">
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500" />
          </button>

          {/* PROFILE */}
          <div className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded-lg hover:bg-gray-100">
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="hidden sm:block leading-tight">
              <div className="text-sm font-medium text-gray-800">
                Anand
              </div>
              <div className="text-xs text-gray-500">Admin</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
