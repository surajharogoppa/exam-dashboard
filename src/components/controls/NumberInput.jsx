export default function NumberInput({
  label,
  value,
  onChange,
  min,
  max,
}) {
  return (
    <div className="space-y-1">
      {label && (
        <div className="text-xs font-medium text-gray-700">
          {label}
        </div>
      )}
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full border rounded-md px-3 py-2 text-sm"
      />
    </div>
  );
}
