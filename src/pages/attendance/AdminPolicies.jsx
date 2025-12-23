import SectionHeader from "../../components/ui/SectionHeader";
import PolicySummaryCard from "../../components/attendance/PolicySummaryCard";
import { policies } from "../../mock/attendance/policies.mock";
import EmptyState from "../../components/ui/EmptyState"
import { useAuth } from "../../context/AuthContext";      
export default function AdminPolicies() {

  const { user } = useAuth();

  // 🔒 ROLE CHECK
  if (user?.role !== "HR_ADMIN") {
    return (
      <EmptyState text="Access restricted to HR Admins." />
    );
  }
  return (
    <div className="space-y-8">
      {/* <SectionHeader
        title="Leave Policies"
        subtitle="Configure and manage leave rules"
        action={
          <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
            Create Policy
          </button>
        }
      /> */}

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {policies.map((policy) => (
          <PolicySummaryCard key={policy.id} policy={policy} />
        ))}
      </section>
    </div>
  );
}
