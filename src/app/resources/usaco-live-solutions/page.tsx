import dynamic from 'next/dynamic';
const UsacoLiveSolutions = dynamic(() => import('@/components/resources/usaco-live-solutions'));

export const metadata = {
  title: 'X-Camp Academy',
  description: 'X-Camp Academy | Programming and Education news from X-Camp',
};

const Page: React.FC = () => {
  return <UsacoLiveSolutions />;
};

export default Page;
