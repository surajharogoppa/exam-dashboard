export default function EmptyState({ text = "No data available" }) {
  return (
    <div className="py-10 text-center text-sm text-gray-500">
      {text}
    </div>
  );
}
