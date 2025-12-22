import {
  Home,
  Megaphone,
  CheckSquare,
  CircleUserRound,
  Ribbon,
  CalendarHeart,
  Goal,
  MessageCircle,
  BarChart2,
  PieChart,
  Settings
} from "lucide-react";

export const IconOverview = (props) => <Home {...props} />;
export const IconClassPreparation = (props) => <Megaphone {...props} />;
export const IconAttendance = (props) => <CheckSquare {...props} />;
export const IconEmployee = (props) => <CircleUserRound {...props} />;
export const IconRewardsNav = (props) => <Ribbon {...props} />;
export const IconExamsNav = (props) => <CheckSquare {...props} />;
export const IconSchedule = (props) => <CalendarHeart {...props} />;
export const IconStudents = (props) => <Goal {...props} />;
export const IconMessages = (props) => <MessageCircle {...props} />;
export const IconAnalytics = (props) => <BarChart2 {...props} />;
export const IconReports = (props) => <PieChart {...props} />;
export const IconSettings = (props) => <Settings {...props} />;
export function IconNews(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
  );
}

export function IconActivities(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export function IconWhatsNew(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M12 4v16m8-8H4" />
    </svg>
  );
}
