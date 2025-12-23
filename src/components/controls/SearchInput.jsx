import { Search } from "lucide-react";

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search",
}) {
  return (
    <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md">
      <Search size={14} className="text-gray-500" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent outline-none text-sm w-full"
      />
    </div>
  );
}
