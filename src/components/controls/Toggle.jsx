export default function Toggle({
  checked,
  onChange,
  disabled = false,
}) {
  return (
    <button
      onClick={() => !disabled && onChange(!checked)}
      className={`w-10 h-5 rounded-full relative transition
        ${checked ? "bg-black" : "bg-gray-300"}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      <span
        className={`absolute top-1 w-3 h-3 bg-white rounded-full transition
          ${checked ? "left-6" : "left-1"}`}
      />
    </button>
  );
}
