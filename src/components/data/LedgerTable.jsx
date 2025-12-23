export default function LedgerTable({ entries }) {
  const typeBg = {
    ACCRUAL: "#EEF2FF",
    USAGE: "#FEE2E2",
    ADJUSTMENT: "#FEF3C7",
    CARRY_FORWARD: "#ECFDF3",
  };

  return (
    <div className="space-y-3">
      {/* TABLE HEADER */}
      <div className="hidden sm:grid grid-cols-4 text-xs text-gray-600 px-4">
        <span>Date</span>
        <span>Type</span>
        <span>Leave</span>
        <span className="text-right">Units</span>
      </div>

      

      {/* ROW CARDS */}
      {entries.map((e, i) => (
        <div
          key={i}
          className="rounded-xl p-4 flex flex-col sm:grid sm:grid-cols-4 gap-2
                     shadow-sm hover:shadow-md transition-shadow text-xs"
          style={{ backgroundColor: typeBg[e.type] || "#FFFFFF" }}
        >
          <div>
            <div className="text-gray-500 sm:hidden">Date</div>
            <div className="font-medium">{e.date}</div>
          </div>

          <div>
            <div className="text-gray-500 sm:hidden">Type</div>
            <div className="font-semibold">{e.type}</div>
          </div>

          <div>
            <div className="text-gray-500 sm:hidden">Leave</div>
            <div>{e.leaveType}</div>
          </div>

          <div className="text-right">
            <div className="text-gray-500 sm:hidden">Units</div>
            <div
              className={`font-semibold ${
                e.units > 0 ? "text-green-700" : "text-red-700"
              }`}
            >
              {e.units > 0 ? `+${e.units}` : e.units}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
