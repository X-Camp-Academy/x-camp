import dynamic from "next/dynamic";
const Partners = dynamic(() => import("@/components/about-us/partners"));

export const metadata = {
  title: "X-Camp Academy",
  description: "X-Camp Academy | Programming and Education news from X-Camp",
};

const Page: React.FC = () => {
  return <Partners />;
};

export default Page;
