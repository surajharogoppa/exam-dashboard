export const ROLES = {
  EMPLOYEE: "EMPLOYEE",
  MANAGER: "MANAGER",
  HR_ADMIN: "HR_ADMIN",
  FINANCE: "FINANCE",
  AUDITOR: "AUDITOR",
};

export const ROLE_LABELS = {
  EMPLOYEE: "Employee",
  MANAGER: "Manager",
  HR_ADMIN: "HR Admin",
  FINANCE: "Finance / Payroll",
  AUDITOR: "Auditor",
};
export const ROLE_GROUPS = {
  APPROVERS: ["MANAGER", "HR_ADMIN"],
  ADMINS: ["HR_ADMIN"],
};