import SectionHeader from "../../components/ui/SectionHeader";
import ApprovalCard from "../../components/attendance/ApprovalCard";
import EmptyState from "../../components/ui/EmptyState";
import InfoListCard from "../../components/ui/InfoListCard";
import { leaveRequests } from "../../mock/attendance/requests.mock";
import { useAuth } from "../../context/AuthContext";
import { ROLE_GROUPS } from "../../constants/roles";

export default function Approvals() {
  const { user } = useAuth();

  // Block non-approvers
  if (!ROLE_GROUPS.APPROVERS.includes(user?.role)) {
    return <EmptyState text="You do not have approval permissions." />;
  }

  const handleApprove = (id) => {
    console.log("Approved:", id);
  };

  const handleReject = (id) => {
    console.log("Rejected:", id);
  };

  return (
    <div className="space-y-8">
      {/* Header (enable if needed) */}
      {/*
      <SectionHeader
        title="Approvals"
        subtitle="Review and act on leave requests"
      />
      */}

      <section className="space-y-4">
        {/* Delegation info */}
        <InfoListCard
          title="Delegation Active"
          bg="#FFF7ED"
          items={[
            "Approvals delegated to you by Rahul (15–20 Feb)",
          ]}
        />

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
