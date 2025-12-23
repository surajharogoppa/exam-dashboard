export default function LedgerTable({ entries }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead className="text-gray-600">
          <tr>
            <th className="text-left py-2">Date</th>
            <th className="text-left">Type</th>
            <th className="text-left">Leave</th>
            <th className="text-right">Units</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((e, i) => (
            <tr key={i} className="border-t">
              <td className="py-2">{e.date}</td>
              <td>{e.type}</td>
              <td>{e.leaveType}</td>
              <td className="text-right font-semibold">
                {e.units > 0 ? `+${e.units}` : e.units}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
