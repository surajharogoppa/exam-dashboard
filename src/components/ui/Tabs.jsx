export default function Tabs({ tabs = [], active, onChange }) {
  return (
    <div className="flex gap-2 text-xs font-semibold">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-4 py-1 rounded-full transition
            ${
              active === tab
                ? "bg-black text-white"
                : "hover:bg-gray-100 text-gray-600"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
