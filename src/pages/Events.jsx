import { CalendarDays, MapPin, Users, Plus } from "lucide-react";

/* ---------------- DATA ---------------- */

const summary = [
  { label: "Upcoming", value: 5, bg: "#D9D9F5" },
  { label: "This Month", value: 8, bg: "#D9F5E3" },
  { label: "Total Events", value: 24, bg: "#F9E6A7" },
  { label: "Most Popular", value: "Townhall", bg: "#F8D3CC" },
];

const featuredEvent = {
  title: "Company Townhall – Q1",
  date: "25 Feb, 10:00 AM",
  location: "Main Auditorium",
  attendees: 180,
  description:
    "Leadership will discuss company performance, roadmap, and upcoming initiatives.",
  bg: "#EEF2FF",
};

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

/* ---------------- PAGE ---------------- */

export default function Events() {
  return (
    <div className="space-y-10 select-none">
      {/* HEADER */}
      {/* <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Events</h1>
          <p className="text-sm text-gray-500">
            Discover and participate in upcoming company events
          </p>
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 flex items-center gap-2">
          <Plus size={16} />
          Create event
        </button>
      </div> */}

      {/* SUMMARY */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {summary.map((s) => (
          <div
            key={s.label}
            className="rounded-xl p-4"
            style={{ backgroundColor: s.bg }}
          >
            <div className="text-xs text-gray-600">{s.label}</div>
            <div className="text-2xl font-semibold">{s.value}</div>
          </div>
        ))}
      </section>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* LEFT CONTENT */}
        <div className="xl:col-span-2 space-y-6">
          {/* FEATURED EVENT */}
          <section>
            <h2 className="text-sm font-semibold text-gray-600 mb-3">
              Featured event
            </h2>

            <div
              className="rounded-xl p-6 space-y-3"
              style={{ backgroundColor: featuredEvent.bg }}
            >
              <h3 className="text-lg font-semibold">
                {featuredEvent.title}
              </h3>

              <p className="text-sm text-gray-700">
                {featuredEvent.description}
              </p>

              <div className="flex flex-wrap gap-6 text-xs text-gray-600 pt-2">
                <span className="flex items-center gap-1">
                  <CalendarDays size={12} /> {featuredEvent.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} /> {featuredEvent.location}
                </span>
                <span className="flex items-center gap-1">
                  <Users size={12} /> {featuredEvent.attendees} attending
                </span>
              </div>
            </div>
          </section>

          {/* EVENTS LIST */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-gray-600">
              Upcoming events
            </h2>

            {events.map((e, i) => (
              <EventCard key={i} data={e} />
            ))}
          </section>
        </div>

        {/* RIGHT PANEL */}
        <aside className="space-y-6">
          {/* MINI CALENDAR */}
          <div className="rounded-xl p-4 bg-[#EEF2FF]">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              February
            </h3>
            <div className="grid grid-cols-7 gap-1 text-xs text-gray-600">
              {Array.from({ length: 28 }).map((_, i) => (
                <div
                  key={i}
                  className="p-2 rounded-full text-center hover:bg-gray-300 cursor-pointer"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* STATS */}
          <div className="rounded-xl p-4 bg-[#ECFDF3]">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Event stats
            </h3>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Avg attendance: 36</li>
              <li>• Most active team: Engineering</li>
              <li>• Events hosted this month: 8</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* ---------------- CARD ---------------- */

function EventCard({ data }) {
  return (
    <div
      className="rounded-xl p-4 flex items-start justify-between gap-4 hover:-translate-y-[1px] transition"
      style={{ backgroundColor: data.bg }}
    >
      <div className="space-y-1">
        <h3 className="text-sm font-semibold">{data.title}</h3>

        <div className="flex flex-wrap gap-4 text-xs text-gray-600">
          <span className="flex items-center gap-1">
            <CalendarDays size={12} /> {data.date}, {data.time}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={12} /> {data.location}
          </span>
        </div>
      </div>

      <div className="text-xs font-semibold text-gray-600 whitespace-nowrap">
        {data.attendees} attending
      </div>
    </div>
  );
}
