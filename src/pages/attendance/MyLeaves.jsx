import { useState } from "react";
import SectionHeader from "../../components/ui/SectionHeader";
import LeaveRequestCard from "../../components/attendance/LeaveRequestCard";
import LeaveRequestForm from "../../components/attendance/LeaveRequestForm";
import Modal from "../../components/ui/Modal";
import { leaveRequests } from "../../mock/attendance/requests.mock";
import { useAuth } from "../../context/AuthContext";

export default function MyLeaves() {
  const { user } = useAuth();
  const isEmployee = user?.role === "EMPLOYEE";

  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <SectionHeader
        title="My Leaves"
        subtitle="View and manage your leave requests"
        action={
          isEmployee
            ? {
                label: "Apply Leave",
                onClick: () => setOpen(true),
              }
            : null
        }
      />

      {/* Leave requests list */}
      <section className="space-y-4">
        {leaveRequests.map((req) => (
          <LeaveRequestCard key={req.id} request={req} />
        ))}
      </section>

      {/* Apply Leave Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Apply Leave"
      >
        <LeaveRequestForm onCancel={() => setOpen(false)} />
      </Modal>
    </div>
  );
}
