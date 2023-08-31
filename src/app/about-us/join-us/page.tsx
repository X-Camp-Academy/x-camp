import dynamic from "next/dynamic";
const JoinUs = dynamic(() => import('@/components/about-us/join-us'));

export const metadata = {
  title: "X-Camp Academy",
  description: "X-Camp Academy | Programming and Education news from X-Camp",
};

const Page: React.FC = () => {
  return <JoinUs />;
};

export default Page;
