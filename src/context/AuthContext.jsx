import { createContext, useContext, useState } from "react";
import { ROLES } from "../constants/roles";

const AuthContext = createContext(null);

const dummyUsers = {
  employee: {
    id: "E001",
    name: "Employee User",
    role: ROLES.EMPLOYEE,
  },
  manager: {
    id: "M001",
    name: "Manager User",
    role: ROLES.MANAGER,
  },
  hr: {
    id: "HR001",
    name: "HR Admin",
    role: ROLES.HR_ADMIN,
  },
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (type) => {
    setUser(dummyUsers[type]);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
