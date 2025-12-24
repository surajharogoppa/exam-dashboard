import SectionHeader from "../../components/ui/SectionHeader";
import LedgerTable from "../../components/data/LedgerTable";
import StatCard from "../../components/ui/StatCard";
import EmptyState from "../../components/ui/EmptyState";
import { ledgerEntries } from "../../mock/attendance/ledger.mock";
import { useAuth } from "../../context/AuthContext";
import {Plus} from "lucide-react";

export default function AttendanceReports() {
  const { user } = useAuth();

  // 🔒 ROLE RESTRICTION
  if (user?.role === "EMPLOYEE") {
    return <EmptyState text="Reports are available to HR only." />;
  }

  // 🔢 SUMMARY METRICS
  const summary = [
    { label: "Accrued", value: "120 Days", bg: "#EEF2FF" },
    { label: "Used", value: "86 Days", bg: "#FEE2E2" },
    { label: "Adjustments", value: "6 Entries", bg: "#FEF3C7" },
    { label: "Carry Forward", value: "24 Days", bg: "#ECFDF3" },
  ];

  return (
    <div className="space-y-8">
      {/* Header (enable if needed) */}
      
       <SectionHeader
        title="Leave Reports"
           subtitle="Balances and transactions for payroll"
           action={{
          label: "Create event",
          onClick: () => {},
          icon: Plus,
        }}
      />
     

      {/* SUMMARY */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {summary.map((s) => (
          <StatCard
            key={s.label}
            label={s.label}
            value={s.value}
            bg={s.bg}
          />
        ))}
      </section>

      {/* LEDGER */}
      <LedgerTable entries={ledgerEntries} />
    </div>
  );
}
