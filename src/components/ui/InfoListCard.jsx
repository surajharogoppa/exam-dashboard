import Card from "./Card";

export default function InfoListCard({
  title,
  subtitle,
  items = [],
  bg,
}) {
  return (
    <Card bg={bg}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="text-sm font-semibold">{title}</div>

        {subtitle && (
          <span className="text-[11px] text-gray-500 sm:hidden">
            {subtitle}
          </span>
        )}
      </div>

      <ul className="list-disc list-inside text-xs text-gray-600 mt-3 space-y-2">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </Card>
  );
}
