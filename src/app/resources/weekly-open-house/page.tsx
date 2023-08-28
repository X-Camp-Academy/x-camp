import dynamic from "next/dynamic";
const WeeklyOpenHouse = dynamic(() => import('@/components/resources/weekly-open-house'));

export const metadata = {
  title: "X-Camp Academy",
  description: "X-Camp Academy | Programming and Education news from X-Camp",
};

export default function Page() {
  return <WeeklyOpenHouse />;
}
