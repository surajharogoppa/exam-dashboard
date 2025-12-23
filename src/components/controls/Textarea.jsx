export default function Textarea({
  label,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="space-y-1">
      {label && (
        <div className="text-xs font-medium text-gray-700">
          {label}
        </div>
      )}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={3}
        className="w-full border rounded-md px-3 py-2 text-sm"
      />
    </div>
  );
}
