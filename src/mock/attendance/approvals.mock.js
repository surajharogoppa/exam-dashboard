export const approvals = [
  {
    approvalId: "APR_001",
    requestId: "LR_101",
    employee: {
      id: "E001",
      name: "Suraj Harogoppa",
      role: "Software Engineer",
      team: "Engineering",
    },
    leave: {
      type: "Earned Leave",
      from: "2025-03-10",
      to: "2025-03-12",
      units: 3,
    },
    status: "PENDING",
    currentLevel: "L1_MANAGER",
    approvalFlow: ["L1_MANAGER", "HR"],
    approvers: {
      L1_MANAGER: {
        id: "MGR_01",
        name: "Rahul Mehta",
        status: "PENDING",
        actedOn: null,
        comment: null,
      },
      HR: {
        id: "HR_01",
        name: "Anita Sharma",
        status: "WAITING",
        actedOn: null,
        comment: null,
      },
    },
    appliedOn: "2025-03-01",
    sla: {
      dueBy: "2025-03-03",
      breached: false,
    },
  },
  {
    approvalId: "APR_002",
    requestId: "LR_102",
    employee: {
      id: "E002",
      name: "Aisha Khan",
      role: "HR Executive",
      team: "HR",
    },
    leave: {
      type: "Sick Leave",
      from: "2025-03-05",
      to: "2025-03-06",
      units: 2,
    },
    status: "APPROVED",
    currentLevel: "HR",
    approvalFlow: ["L1_MANAGER", "HR"],
    approvers: {
      L1_MANAGER: {
        id: "MGR_02",
        name: "Vikram Rao",
        status: "APPROVED",
        actedOn: "2025-03-02",
        comment: "Approved",
      },
      HR: {
        id: "HR_01",
        name: "Anita Sharma",
        status: "APPROVED",
        actedOn: "2025-03-03",
        comment: "Processed",
      },
    },
    appliedOn: "2025-03-01",
    sla: {
      dueBy: "2025-03-02",
      breached: false,
    },
  },
];
