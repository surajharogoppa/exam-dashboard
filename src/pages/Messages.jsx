import { useState } from "react";
import { Send, User, MessageCircle } from "lucide-react";

/* ---------------- DATA ---------------- */

const summary = [
  { label: "Unread", value: 4, bg: "#F9E6A7" },
  { label: "Conversations", value: 12, bg: "#D9D9F5" },
  { label: "Active Now", value: 3, bg: "#D9F5E3" },
  { label: "Archived", value: 2, bg: "#F8D3CC" },
];

const conversations = [
  {
    id: 1,
    name: "Aisha Khan",
    lastMessage: "Can we reschedule the meeting?",
    time: "10:24 AM",
    unread: true,
    bg: "#D9F5E3",
  },
  {
    id: 2,
    name: "HR Team",
    lastMessage: "Leave policy update shared.",
    time: "Yesterday",
    unread: false,
    bg: "#D9D9F5",
  },
  {
    id: 3,
    name: "Engineering",
    lastMessage: "Sprint demo at 4 PM.",
    time: "Mon",
    unread: false,
    bg: "#F9E6A7",
  },
];

const messages = [
  { from: "Aisha Khan", text: "Hi, can we reschedule the meeting?", mine: false },
  { from: "Me", text: "Sure, what time works for you?", mine: true },
  { from: "Aisha Khan", text: "Tomorrow afternoon would be good.", mine: false },
];

/* ---------------- PAGE ---------------- */

export default function Messages() {
  const [activeChat, setActiveChat] = useState(conversations[0]);

  return (
    <div className="space-y-10 select-none">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold">Messages</h1>
        <p className="text-sm text-gray-500">
          Communicate with team members and groups
        </p>
      </div>

    

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* CONVERSATION LIST */}
        <aside className="space-y-4">
          <h2 className="text-sm font-semibold text-gray-600">
            Conversations
          </h2>

          {conversations.map((c) => (
            <div
              key={c.id}
              onClick={() => setActiveChat(c)}
              className="rounded-xl p-4 cursor-pointer flex items-center justify-between hover:-translate-y-[1px] transition"
              style={{ backgroundColor: c.bg }}
            >
              <div>
                <div className="text-sm font-semibold flex items-center gap-2">
                  {c.name}
                  {c.unread && (
                    <span className="w-2 h-2 bg-black rounded-full" />
                  )}
                </div>
                <div className="text-xs text-gray-600 truncate max-w-[180px]">
                  {c.lastMessage}
                </div>
              </div>
              <span className="text-xs text-gray-500">{c.time}</span>
            </div>
          ))}
        </aside>

        {/* CHAT WINDOW */}
        <div className="xl:col-span-1 rounded-xl p-4 bg-[#EEF2FF] flex flex-col">
          <div className="text-sm font-semibold mb-4 flex items-center gap-2">
            <MessageCircle size={14} />
            {activeChat.name}
          </div>

          {/* MESSAGES */}
          <div className="flex-1 space-y-3 overflow-y-auto mb-4">
            {messages.map((m, i) => (
              <MessageBubble key={i} data={m} />
            ))}
          </div>

          {/* INPUT */}
          <div className="flex items-center gap-2">
            <input
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 rounded-xl text-sm outline-none"
            />
            <button className="bg-black text-white p-2 rounded-xl">
              <Send size={14} />
            </button>
          </div>
        </div>

        {/* INFO PANEL */}
        <aside className="space-y-6">
          <div className="rounded-xl p-4 bg-[#ECFDF3]">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Chat info
            </h3>
            <div className="text-xs text-gray-600 space-y-1">
              <div>Participants: 2</div>
              <div>Last active: Today</div>
              <div>Messages today: 5</div>
            </div>
          </div>

          <div className="rounded-xl p-4 bg-[#F9E6A7]">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Quick actions
            </h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Mark as unread</li>
              <li>• Mute conversation</li>
              <li>• Archive chat</li>
            </ul>
          </div>
        </aside>
      </div>
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
    </div>
    
  );
}

/* ---------------- COMPONENT ---------------- */

function MessageBubble({ data }) {
  return (
    <div
      className={`max-w-[80%] p-3 rounded-xl text-xs ${
        data.mine
          ? "bg-black text-white ml-auto"
          : "bg-white text-gray-700"
      }`}
    >
      {data.text}
    </div>
  );
}
