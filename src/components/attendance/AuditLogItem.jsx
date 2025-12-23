export default function AuditLogItem({ entry }) {
  return (
    <div className="text-xs text-gray-600">
      <div className="font-medium">{entry.action}</div>
      <div>{entry.by} • {entry.date}</div>
    </div>
  );
}
