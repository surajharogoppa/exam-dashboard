export default function SectionHeader({ title, subtitle, action }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      {/* LEFT */}
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        {subtitle && (
          <p className="text-sm text-gray-500">{subtitle}</p>
        )}
      </div>

      {/* RIGHT ACTION */}
      {action && (
        <button
          onClick={action.onClick}
          className="
            inline-flex items-center gap-2
            bg-black text-white
            px-4 py-2 rounded-md
            hover:bg-gray-800
            whitespace-nowrap
          "
        >
          {/* Icon (optional) */}
          {action.icon && <action.icon size={16} />}

          {/* Label */}
          <span>{action.label}</span>
        </button>
      )}
    </div>
  );
}
