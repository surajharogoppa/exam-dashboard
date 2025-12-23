import SectionHeader from "../../components/ui/SectionHeader";
import LeaveBalanceCard from "../../components/attendance/LeaveBalanceCard";
import Card from "../../components/ui/Card";
import { leaveBalances } from "../../mock/attendance/balances.mock";
import { useAuth } from "../../context/AuthContext";

export default function AttendanceDashboard() {
  const { user } = useAuth();
  const isEmployee = user?.role === "EMPLOYEE";

  return (
    <div className="space-y-6 sm:space-y-8">
      <SectionHeader
        title="Attendance & Leave"
        subtitle="Overview of leave balances and activity"
      />

      {/* LEAVE BALANCES */}
      {isEmployee && (
        <section
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-3
            sm:gap-4
          "
        >
          {leaveBalances.map((b) => (
            <LeaveBalanceCard
              key={b.leaveType}
              leaveType={b.leaveType}
              available={b.available}
              used={b.used}
              pending={b.pending}
              unit={b.unit}
            />
          ))}
        </section>
      )}

      {/* QUICK INFO */}
      <Card bg="#EEF2FF">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="text-sm font-semibold">
            Quick info
          </div>

          {/* Optional mobile hint */}
          <span className="text-[11px] text-gray-500 sm:hidden">
            Today’s summary
          </span>
        </div>

        <ul className="text-xs text-gray-600 mt-3 space-y-2">
          <li className="flex items-start gap-2">
            <span className="mt-1">•</span>
            <span>3 pending approvals</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">•</span>
            <span>2 employees on leave today</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">•</span>
            <span>Next payroll cut-off: 31 Mar</span>
          </li>
        </ul>
      </Card>
    </div>
  );
}
