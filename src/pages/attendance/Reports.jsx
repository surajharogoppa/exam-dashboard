import SectionHeader from "../../components/ui/SectionHeader";
import LedgerTable from "../../components/data/LedgerTable";
import { ledgerEntries } from "../../mock/attendance/ledger.mock";
import { useAuth } from "../../context/AuthContext";
import EmptyState from "../../components/ui/EmptyState";


export default function AttendanceReports() {

  const { user } = useAuth();

  if (user?.role === "EMPLOYEE") {
    return (
      <EmptyState text="Reports are available to HR only." />
    );
  }
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Leave Reports"
        subtitle="Balances and transactions for payroll"
      />

      <LedgerTable entries={ledgerEntries} />
    </div>
  );
}
