export function checkEligibility({ employee, policy }) {
  if (!policy.active) {
    return { eligible: false, reason: "Policy inactive" };
  }

  if (employee.tenureMonths < policy.minTenureMonths) {
    return {
      eligible: false,
      reason: "Employee not eligible by tenure",
    };
  }

  return { eligible: true };
}
