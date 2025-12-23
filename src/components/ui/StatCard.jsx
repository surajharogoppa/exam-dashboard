import Card from "./Card";

export default function StatCard({ label, value, bg }) {
  return (
    <Card bg={bg}>
      <div className="text-xs text-gray-600">{label}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </Card>
  );
}
