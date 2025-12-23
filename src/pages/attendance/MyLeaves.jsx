import { useState } from "react";
import SectionHeader from "../../components/ui/SectionHeader";
import LeaveRequestCard from "../../components/attendance/LeaveRequestCard";
import { leaveRequests } from "../../mock/attendance/requests.mock";
import { useAuth } from "../../context/AuthContext";

export default function MyLeaves() {
  const { user } = useAuth();              // ✅ hook inside component
  const isEmployee = user?.role === "EMPLOYEE";

  const [open, setOpen] = useState(false); // ✅ state added

  return (
    <div className="space-y-8">
      <SectionHeader
        title="My Leaves"
        subtitle="View and manage your leave requests"
        action={
          isEmployee ? (
            <button
              onClick={() => setOpen(true)}
              className="bg-black text-white px-4 py-2 rounded-md"
            >
              Apply Leave
            </button>
          ) : null
        }
      />

      <section className="space-y-4">
        {leaveRequests.map((req) => (
          <LeaveRequestCard key={req.id} request={req} />
        ))}
      </section>

      {/* MODAL (placeholder for now) */}
      {open && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-96 space-y-4">
            <h3 className="font-semibold">Apply Leave</h3>

            <p className="text-sm text-gray-600">
              Leave request form will go here
            </p>

            <button
              onClick={() => setOpen(false)}
              className="text-sm px-3 py-1 bg-gray-200 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
