import Card from "../ui/Card";

export default function LeaveBalanceCard({
  leaveType,
  available,
  used,
  pending,
  unit,
}) {
  return (
    <Card bg="#D9F5E3">
      <div className="text-sm font-semibold">{leaveType}</div>

      <div className="flex justify-between mt-2 text-xs text-gray-700">
        <span>Available</span>
        <span>{available} {unit}</span>
      </div>

      <div className="flex justify-between text-xs text-gray-600">
        <span>Used</span>
        <span>{used}</span>
      </div>

      <div className="flex justify-between text-xs text-gray-600">
        <span>Pending</span>
        <span>{pending}</span>
      </div>
    </Card>
  );
}
