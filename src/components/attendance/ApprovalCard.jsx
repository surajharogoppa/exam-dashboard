import { useState } from "react";
import LeaveRequestCard from "./LeaveRequestCard";
import Textarea from "../controls/Textarea";

export default function ApprovalCard({ request, onApprove, onReject }) {
  const [comment, setComment] = useState("");

  const handleApprove = () => {
    onApprove(request.id, comment);
    setComment("");
  };

  const handleReject = () => {
    if (!comment.trim()) {
      alert("Comment is required for rejection");
      return;
    }
    onReject(request.id, comment);
    setComment("");
  };

  return (
    <div className="space-y-3">
      <LeaveRequestCard request={request} />

      <Textarea
        label="Comment"
        value={comment}
        onChange={setComment}
        placeholder="Add comment (required for rejection)"
      />

      <div className="flex gap-2">
        <button
          onClick={handleApprove}
          className="text-xs px-3 py-1 bg-black text-white rounded-md"
        >
          Approve
        </button>
        <button
          onClick={handleReject}
          className="text-xs px-3 py-1 bg-gray-200 rounded-md"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
