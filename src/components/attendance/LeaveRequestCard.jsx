import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { LEAVE_STATUS, LEAVE_STATUS_TONES } from "../../constants/leaveStatuses";
import { useAuth } from "../../context/AuthContext";

export default function LeaveRequestCard({
  request,
  showActions = false,
  onApprove,
  onReject,
  onCancel,
}) {
  // ✅ Hooks MUST be inside the component
  const { user } = useAuth();
  const isEmployee = user?.role === "EMPLOYEE";

  const canCancel =
    isEmployee &&
    request.status === "PENDING" &&
    new Date(request.from) > new Date();

  return (
    <Card bg="#EEF2FF">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-sm font-semibold">
            {request.leaveType}
          </div>
          <div className="text-xs text-gray-600">
            {request.from} → {request.to} ({request.units} days)
          </div>
        </div>

        <Badge
          label={LEAVE_STATUS[request.status]}
          tone={LEAVE_STATUS_TONES[LEAVE_STATUS[request.status]]}
        />
      </div>

      {/* ACTIONS */}
      <div className="flex gap-2 mt-3">
        {showActions && (
          <>
            <button
              onClick={() => onApprove?.(request.id)}
              className="text-xs px-3 py-1 bg-black text-white rounded-md"
            >
              Approve
            </button>
            <button
              onClick={() => onReject?.(request.id)}
              className="text-xs px-3 py-1 bg-gray-200 rounded-md"
            >
              Reject
            </button>
          </>
        )}

        {canCancel && (
          <button
            onClick={() => onCancel?.(request.id)}
            className="text-xs px-3 py-1 bg-gray-200 rounded-md ml-auto"
          >
            Cancel
          </button>
        )}
      </div>
    </Card>
  );
}
