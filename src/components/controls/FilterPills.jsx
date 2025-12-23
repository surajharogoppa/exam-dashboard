import Card from "../ui/Card";
import Badge from "../ui/Badge";

export default function TeamAvailabilityCard({ name, offCount }) {
  return (
    <Card bg="#F9E6A7">
      <div className="text-sm font-semibold">{name}</div>
      <div className="flex justify-between mt-2">
        <span className="text-xs text-gray-600">
          Employees off
        </span>
        <Badge
          label={`${offCount}`}
          tone={offCount > 2 ? "warning" : "success"}
        />
      </div>
    </Card>
  );
}
