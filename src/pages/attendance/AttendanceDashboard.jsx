import SectionHeader from "../../components/ui/SectionHeader";
import LeaveBalanceCard from "../../components/attendance/LeaveBalanceCard";
import InfoListCard from "../../components/ui/InfoListCard";
import { leaveBalances } from "../../mock/attendance/balances.mock";
import { useAuth } from "../../context/AuthContext";

export default function AttendanceDashboard() {
  const { user } = useAuth();
  const isEmployee = user?.role === "EMPLOYEE";

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header (enable anytime) */}
      {/* 
      <SectionHeader
        title="Attendance & Leave"
        subtitle="Overview of leave balances and activity"
      /> 
      */}

      {/* Leave balances */}
      {isEmployee && (
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
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

      {/* Quick info */}
      <InfoListCard
        title="Quick info"
        subtitle="Today’s summary"
        bg="#EEF2FF"
        items={[
          "3 pending approvals",
          "2 employees on leave today",
          "Next payroll cut-off: 31 Mar",
        ]}
      />
    </div>
  );
}
