import Card from "../ui/Card";

export default function ChartCard({
  title,
  subtitle,
  bg = "#EEF2FF",
  actions,
  children,
}) {
  return (
    <Card bg={bg} className="p-6">
      {/* HEADER */}
      {(title || actions) && (
        <div className="flex items-start justify-between mb-4">
          <div>
            {title && (
              <h3 className="text-sm font-semibold text-gray-700">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-xs text-gray-500">
                {subtitle}
              </p>
            )}
          </div>

          {/* Optional right-side actions (filters, menus, etc.) */}
          {actions && <div>{actions}</div>}
        </div>
      )}

      {/* CHART CONTAINER */}
      <div className="relative h-64 min-h-[240px] w-full">
        {children}
      </div>
    </Card>
  );
}
