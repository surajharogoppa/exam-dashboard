import { Menu } from "lucide-react";
import { useState } from "react";

export default function GlobalHeader() {
  const [open, setOpen] = useState(false);

  const navLinkClasses =
    "text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors";

  return (
    <header
      className="
        fixed top-0 left-0 right-0
        h-12
        bg-white/90
        backdrop-blur
        border-b border-gray-200
        z-50
        flex items-center
        px-4 sm:px-8 md:px-12
        font-sans
      "
    >
      {/* LEFT: Logo */}
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-md bg-gradient-to-br from-gray-800 to-gray-600" />
        <span className="text-sm font-semibold tracking-wide text-gray-800">
          EmployeeHub
        </span>
      </div>

      {/* RIGHT: Desktop Navigation */}
      <nav className="ml-auto hidden md:flex items-center gap-8">
        <a href="#" className={navLinkClasses}>
          Overview
        </a>
        <a href="#" className={navLinkClasses}>
          Employees
        </a>
        <a href="#" className={navLinkClasses}>
          Attendance
        </a>
        <a href="#" className={navLinkClasses}>
          Payroll
        </a>
        <a href="#" className={navLinkClasses}>
          Reports
        </a>

        <button
          className="
            ml-4
            px-3 py-1.5
            text-sm font-medium
            text-white
            bg-gray-900
            rounded-md
            hover:bg-gray-800
            transition
          "
        >
          Add Employee
        </button>
      </nav>

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          ml-auto md:hidden
          p-2 rounded-md
          hover:bg-gray-100
          focus:outline-none
        "
        aria-label="Toggle menu"
      >
        <Menu size={18} className="text-gray-700" />
      </button>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div
          className="
            absolute top-12 left-0 right-0
            bg-white
            border-b border-gray-200
            md:hidden
          "
        >
          <nav className="flex flex-col px-4 py-3 space-y-2">
            <a href="#" className={navLinkClasses}>Overview</a>
            <a href="#" className={navLinkClasses}>Employees</a>
            <a href="#" className={navLinkClasses}>Attendance</a>
            <a href="#" className={navLinkClasses}>Payroll</a>
            <a href="#" className={navLinkClasses}>Reports</a>

            <button
              className="
                mt-2
                px-3 py-2
                text-sm font-medium
                text-white
                bg-gray-900
                rounded-md
                hover:bg-gray-800
              "
            >
              Add Employee
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
