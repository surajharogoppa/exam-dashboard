import Card from "../ui/Card";

export default function PolicySummaryCard({ policy }) {
  return (
    <Card bg="#ECFDF3">
      <div className="text-sm font-semibold">{policy.name}</div>
      <ul className="text-xs text-gray-600 mt-2 space-y-1">
        <li>Accrual: {policy.accrual}</li>
        <li>Carry forward: {policy.carryForward}</li>
        <li>Eligibility: {policy.eligibility}</li>
      </ul>
    </Card>
  );
}
