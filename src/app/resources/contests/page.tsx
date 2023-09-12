import dynamic from "next/dynamic";
const Contests = dynamic(() => import('@/components/resources/contests'));

export const metadata = {
  title: 'X-Camp Academy',
  description: 'X-Camp Academy | Programming and Education news from X-Camp',
};

const Page: React.FC = () => {
  return <Contests />;
};

export default Page;
