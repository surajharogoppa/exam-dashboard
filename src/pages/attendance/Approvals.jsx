import SectionHeader from "../../components/ui/SectionHeader";
import ApprovalCard from "../../components/attendance/ApprovalCard";
import EmptyState from "../../components/ui/EmptyState";
import Card from "../../components/ui/Card";
import { leaveRequests } from "../../mock/attendance/requests.mock";
import { useAuth } from "../../context/AuthContext";
import { ROLE_GROUPS } from "../../constants/roles";

export default function Approvals() {
  const { user } = useAuth();


  // ✅ BLOCK ONLY NON-APPROVERS
  if (!ROLE_GROUPS.APPROVERS.includes(user?.role)) {
    return (
      <EmptyState text="You do not have approval permissions." />
    );
  }

  const handleApprove = (id) => {
    console.log("Approved:", id);
  };

  const handleReject = (id) => {
    console.log("Rejected:", id);
  };

  return (
    <div className="space-y-8">
      {/* <SectionHeader
        title="Approvals"
        subtitle="Review and act on leave requests"
      /> */}

      <section className="space-y-4">
        {/* Delegation banner */}
        <Card bg="#FFF7ED">
          <div className="text-sm font-medium">
            Delegation Active
          </div>
          <p className="text-xs text-gray-600">
            Approvals delegated to you by Rahul (15–20 Feb)
          </p>
        </Card>

        {/* Approval list */}
        {leaveRequests.map((req) => (
          <ApprovalCard
            key={req.id}
            request={req}
            showActions
            onApprove={handleApprove}
            onReject={handleReject}
          />
        ))}
      </section>
    </div>
  );
}
