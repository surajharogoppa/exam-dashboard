import { useState } from "react";
import {
  CalendarDays,
  MapPin,
  Users,
  Plus,
} from "lucide-react";

import SectionHeader from "../components/ui/SectionHeader";
import StatCard from "../components/ui/StatCard";
import Card from "../components/ui/Card";
import InfoCard from "../components/ui/InfoCard";
import InfoListCard from "../components/ui/InfoListCard";
import MiniCalendar from "../components/ui/MiniCalendar";

/* ---------------- STATIC DATA ---------------- */

// summary cards
const summary = [
  { label: "Upcoming", value: 5, bg: "#D9D9F5" },
  { label: "This Month", value: 8, bg: "#D9F5E3" },
  { label: "Total Events", value: 24, bg: "#F9E6A7" },
  { label: "Most Popular", value: "Townhall", bg: "#F8D3CC" },
];

// featured event
const featuredEvent = {
  title: "Company Townhall – Q1",
  date: "25 Feb, 10:00 AM",
  location: "Main Auditorium",
  attendees: 180,
  description:
    "Leadership will discuss company performance, roadmap, and upcoming initiatives.",
  bg: "#EEF2FF",
};

// upcoming events
const events = [
  {
    title: "Tech Talk: AI Trends",
    date: "22 Feb",
    time: "4:00 PM",
    location: "Conference Room A",
    attendees: 42,
    bg: "#D9F5E3",
  },
  {
    title: "Design Review Meetup",
    date: "24 Feb",
    time: "3:00 PM",
    location: "Design Lab",
    attendees: 18,
    bg: "#F9E6A7",
  },
  {
    title: "Wellness Yoga Session",
    date: "26 Feb",
    time: "7:30 AM",
    location: "Open Terrace",
    attendees: 30,
    bg: "#F8D3CC",
  },
];

// MiniCalendar helpers
const DAYS_IN_FEB = Array.from({ length: 28 }, (_, i) => i + 1);
const SPECIAL_DAYS = [5, 12, 18];

/* ---------------- PAGE ---------------- */

export default function Events() {
  // ✅ HOOK INSIDE COMPONENT (CORRECT)
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className="space-y-10 select-none">
      {/* HEADER */}
      <SectionHeader
        title="Events"
        subtitle="Discover and participate in upcoming company events"
        action={{
          label: "Create event",
          onClick: () => {},
          icon: Plus,
        }}
      />

      {/* SUMMARY */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {summary.map((s) => (
          <StatCard
            key={s.label}
            label={s.label}
            value={s.value}
            bg={s.bg}
          />
        ))}
      </section>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="xl:col-span-2 space-y-6">
          {/* FEATURED EVENT */}
          <section>
            <h2 className="text-sm font-semibold text-gray-600 mb-3">
              Featured event
            </h2>

            <Card bg={featuredEvent.bg} className="p-6 space-y-3">
              <h3 className="text-lg font-semibold">
                {featuredEvent.title}
              </h3>

              <p className="text-sm text-gray-700">
                {featuredEvent.description}
              </p>

              <div className="flex flex-wrap gap-6 text-xs text-gray-600 pt-2">
                <span className="flex items-center gap-1">
                  <CalendarDays size={12} />
                  {featuredEvent.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} />
                  {featuredEvent.location}
                </span>
                <span className="flex items-center gap-1">
                  <Users size={12} />
                  {featuredEvent.attendees} attending
                </span>
              </div>
            </Card>
          </section>

          {/* UPCOMING EVENTS */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-gray-600">
              Upcoming events
            </h2>

            {events.map((e, i) => (
              <InfoCard
                key={i}
                badge="class"
                variant="announcement"
                title={e.title}
                subtitle={`${e.date}, ${e.time}`}
                meta={
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} /> {e.location}
                  </span>
                }
                rightText={`${e.attendees} attending`}
                bgColor={e.bg}
              />
            ))}
          </section>
        </div>

        {/* RIGHT */}
        <aside className="space-y-6">
          <MiniCalendar
            month="February"
            days={DAYS_IN_FEB}
            selectedDay={selectedDay}
            specialDays={SPECIAL_DAYS}
            onSelect={setSelectedDay}
          />

          <InfoListCard
            title="Event stats"
            bg="#ECFDF3"
            items={[
              "Avg attendance: 36",
              "Most active team: Engineering",
              "Events hosted this month: 8",
            ]}
          />
        </aside>
      </div>
    </div>
  );
}
