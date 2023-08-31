import dynamic from "next/dynamic";
const CalendarPage = dynamic(() => import("@/components/about-us/calendar"));


export const metadata = {
  title: "X-Camp Academy",
  description: "X-Camp Academy | Programming and Education news from X-Camp",
};

const Calendar: React.FC = () => {
  return <CalendarPage />;
};

export default Calendar;
