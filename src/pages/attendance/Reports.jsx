import SectionHeader from "../../components/ui/SectionHeader";
import LedgerTable from "../../components/data/LedgerTable";
import Card from "../../components/ui/Card";
import EmptyState from "../../components/ui/EmptyState";
import { ledgerEntries } from "../../mock/attendance/ledger.mock";
import { useAuth } from "../../context/AuthContext";

export default function AttendanceReports() {
  const { user } = useAuth();

  // 🔒 ROLE RESTRICTION
  if (user?.role === "EMPLOYEE") {
    return <EmptyState text="Reports are available to HR only." />;
  }

  // 🔢 SIMPLE SUMMARY (mocked for now)
  const summary = [
    { label: "Accrued", value: "120 Days", bg: "#EEF2FF" },
    { label: "Used", value: "86 Days", bg: "#FEE2E2" },
    { label: "Adjustments", value: "6 Entries", bg: "#FEF3C7" },
    { label: "Carry Forward", value: "24 Days", bg: "#ECFDF3" },
  ];

  return (
    <div className="space-y-8">
      {/* <SectionHeader
        title="Leave Reports"
        subtitle="Balances and transactions for payroll"
      /> */}

      {/* SUMMARY CARDS */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {summary.map((s) => (
          <Card key={s.label} bg={s.bg}>
            <div className="text-xs text-gray-600">{s.label}</div>
            <div className="text-xl font-semibold">{s.value}</div>
          </Card>
        ))}
      </section>

     

      {/* LEDGER TABLE */}
      <LedgerTable entries={ledgerEntries} />
    </div>
  );
}
