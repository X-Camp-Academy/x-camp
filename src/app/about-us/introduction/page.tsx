import dynamic from 'next/dynamic';
const Introduction = dynamic(() => import('@/components/about-us/introduction'));

export const metadata = {
  title: 'X-Camp Academy',
  description: 'X-Camp Academy | Programming and Education news from X-Camp',
};

const Page: React.FC = () => {
  return <Introduction />;
};

export default Page;
