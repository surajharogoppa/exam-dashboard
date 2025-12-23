import { useState } from "react";
import Select from "../controls/Select";
import DateRangePicker from "../controls/DateRangePicker";
import FileUpload from "../controls/FileUpload";
import Textarea from "../controls/Textarea";
import { LEAVE_UNIT_OPTIONS } from "../../constants/leaveUnits";
import { evaluateLeaveRequest } from "../../services/attendance/leaveCalculator";

export default function LeaveRequestForm({
  leaveTypes,
  employee,
  policy,
  onSubmit,
}) {
  const [form, setForm] = useState({
    leaveType: "",
    unit: "day",
    from: "",
    to: "",
    reason: "",
    file: null,
  });

  const [warnings, setWarnings] = useState([]);

  const handleSubmit = () => {
    const result = evaluateLeaveRequest({
      employee,
      leaveType: form.leaveType,
      dates: [form.from, form.to],
      policy,
    });

    if (!result.eligible) {
      alert(result.reason || "Not eligible for this leave");
      return;
    }

    setWarnings(result.warnings || []);
    onSubmit(form);
  };

  return (
    <div className="space-y-4">
      <Select
        label="Leave type"
        value={form.leaveType}
        options={leaveTypes}
        placeholder="Select leave type"
        onChange={(v) => setForm({ ...form, leaveType: v })}
      />

      <Select
        label="Leave unit"
        value={form.unit}
        options={LEAVE_UNIT_OPTIONS}
        onChange={(v) => setForm({ ...form, unit: v })}
      />

      <DateRangePicker
        from={form.from}
        to={form.to}
        onChange={({ from, to }) =>
          setForm({ ...form, from, to })
        }
      />

      <Textarea
        label="Reason"
        value={form.reason}
        onChange={(v) => setForm({ ...form, reason: v })}
        placeholder="Reason for leave"
      />

      <FileUpload onChange={(file) => setForm({ ...form, file })} />

      {/* WARNINGS */}
      {warnings.map((w, i) => (
        <div
          key={i}
          className="text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md"
        >
          ⚠ {w}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="bg-black text-white px-4 py-2 rounded-md text-sm"
      >
        Submit request
      </button>
    </div>
  );
}
