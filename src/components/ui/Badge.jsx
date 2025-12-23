export default function Badge({ label, tone = "default" }) {
  const tones = {
    default: "bg-gray-200 text-gray-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-700",
    info: "bg-blue-100 text-blue-700",
  };

  return (
    <span
      className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${tones[tone]}`}
    >
      {label}
    </span>
  );
}


