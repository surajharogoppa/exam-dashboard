import Badge from "../ui/Badge";

export default function CalendarLegend() {
  return (
    <div className="flex flex-wrap gap-4 text-xs text-gray-600">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-sm bg-[#F5F7FF]" />
        <span>Leaves present</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-sm bg-[#FFF7ED]" />
        <span>High overlap</span>
      </div>

      <div className="flex items-center gap-2">
        <Badge label="High overlap" tone="warning" />
        <span>Team capacity risk</span>
      </div>
    </div>
  );
}
