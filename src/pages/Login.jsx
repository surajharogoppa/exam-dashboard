import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (type) => {
    login(type);
    navigate("/", { replace: true }); // ✅ redirect after login
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md space-y-4 w-80">
        <h1 className="text-xl font-semibold text-center">
          Login (Dummy)
        </h1>

        <button
          onClick={() => handleLogin("employee")}
          className="w-full bg-gray-100 py-2 rounded-md hover:bg-gray-200"
        >
          Login as Employee
        </button>

        <button
          onClick={() => handleLogin("manager")}
          className="w-full bg-gray-100 py-2 rounded-md hover:bg-gray-200"
        >
          Login as Manager
        </button>

        <button
          onClick={() => handleLogin("hr")}
          className="w-full bg-gray-100 py-2 rounded-md hover:bg-gray-200"
        >
          Login as HR Admin
        </button>
      </div>
    </div>
  );
}
