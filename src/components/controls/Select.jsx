export default function Select({
  label,
  value,
  options = [],
  onChange,
  placeholder = "Select option",
  disabled = false,
}) {
  return (
    <div className="space-y-1">
      {/* Label */}
      {label && (
        <label className="text-xs font-medium text-gray-700">
          {label}
        </label>
      )}

      {/* Select */}
      <select
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className={`
          w-full rounded-md px-3 py-2 text-sm
          border border-gray-300
          focus:outline-none focus:ring-2 focus:ring-black
          ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
        `}
      >
        {/* Placeholder */}
        <option value="" disabled>
          {placeholder}
        </option>

        {/* Options */}
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
          >
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
