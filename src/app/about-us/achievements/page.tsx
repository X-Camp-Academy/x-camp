import dynamic from 'next/dynamic';
const Achievements = dynamic(() => import('@/components/about-us/achievements'));

export const metadata = {
  title: 'X-Camp Academy',
  description: 'X-Camp Academy | Programming and Education news from X-Camp'
};

const Page: React.FC = () => {
  return <Achievements />;
};

export default Page;
