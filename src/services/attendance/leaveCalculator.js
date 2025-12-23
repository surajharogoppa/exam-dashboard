export function evaluateLeaveRequest({
  employee,
  leaveType,
  dates,
  policy,
}) {
  const totalDays = dates.filter(Boolean).length;

  const warnings = [];

  if (totalDays > 5) {
    warnings.push("Long leave duration may need manager approval");
  }

  return {
    eligible: true,
    totalDays,
    payableDays: totalDays,
    unpaidDays: 0,
    warnings,
  };
}
