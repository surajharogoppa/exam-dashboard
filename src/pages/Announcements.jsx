import { Megaphone, Pin } from "lucide-react";
import FilterPills from "../components/controls/FilterPills";
import InfoCard from "../components/ui/InfoCard";
import InfoListCard from "../components/ui/InfoListCard";
import StatCard from "../components/ui/StatCard";

/* ---------------- DATA ---------------- */

const summaryCards = [
  { label: "Total", value: 18, bg: "#D9D9F5" },
  { label: "Pinned", value: 3, bg: "#F9E6A7" },
  { label: "HR", value: 7, bg: "#D9F5E3" },
  { label: "Engineering", value: 4, bg: "#F8D3CC" },
];

const announcements = [
  {
    id: 1,
    title: "Company Townhall – Q3 Updates",
    description:
      "Leadership will share Q3 performance, roadmap updates, and answer questions.",
    date: "20 Feb",
    author: "HR Team",
    category: "HR",
    daysLeft: 2,
    pinned: true,
    bg: "#D9D9F5",
  },
  {
    id: 2,
    title: "Updated Leave Policy",
    description:
      "The leave policy has been revised. Please review the updated guidelines.",
    date: "15 Feb",
    author: "HR Team",
    category: "HR",
    daysLeft: 7,
    pinned: false,
    bg: "#D9F5E3",
  },
];

export default function Announcements() {
  return (
    <div className="space-y-10 select-none">
      {/* Filters */}
      <FilterPills
        items={["All", "HR", "Engineering", "Design", "Important"]}
        active="All"
        onChange={() => {}}
      />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="xl:col-span-2 space-y-8">
          {/* PINNED */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-gray-600 flex items-center gap-2">
              <Pin size={14} /> Pinned
            </h2>

            {announcements
              .filter((a) => a.pinned)
              .map((a) => (
                <InfoCard
                  key={a.id}
                  layout="horizontal"
                  title={a.title}
                  subtitle={a.description}
                  meta={[a.date, a.author, a.category]}
                  left={<Megaphone size={14} className="text-gray-600" />}
                  right={`${a.daysLeft} days left`}
                  bgColor={a.bg}
                />
              ))}
          </section>

          {/* ALL */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-gray-600">
              All announcements
            </h2>

            {announcements.map((a) => (
              <InfoCard
                key={a.id}
                layout="horizontal"
                title={a.title}
                subtitle={a.description}
                meta={[a.date, a.author, a.category]}
                left={<Megaphone size={14} className="text-gray-600" />}
                right={`${a.daysLeft} days left`}
                bgColor={a.bg}
              />
            ))}
          </section>
        </div>

        {/* RIGHT */}
        <aside className="space-y-6">
          <InfoListCard
            title="Upcoming announcements"
            bg="#EEF2FF"
            items={announcements.map(
              (a) => `${a.title} · ${a.daysLeft} days left`
            )}
          />

          <InfoListCard
            title="Announcement stats"
            bg="#ECFDF3"
            items={[
              "18 total announcements",
              "3 pinned",
              "5 published this month",
            ]}
          />
        </aside>
      </div>

      {/* SUMMARY */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {summaryCards.map((c) => (
          <StatCard
            key={c.label}
            label={c.label}
            value={c.value}
            bg={c.bg}
          />
        ))}
      </section>
    </div>
  );
}
