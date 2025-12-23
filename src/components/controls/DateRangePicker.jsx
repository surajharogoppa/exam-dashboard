export default function DateRangePicker({ from, to, onChange }) {
  return (
    <div className="flex gap-3">
      <input
        type="date"
        value={from}
        onChange={(e) => onChange({ from: e.target.value, to })}
        className="border rounded-md px-3 py-2 text-sm"
      />
      <input
        type="date"
        value={to}
        onChange={(e) => onChange({ from, to: e.target.value })}
        className="border rounded-md px-3 py-2 text-sm"
      />
    </div>
  );
}
