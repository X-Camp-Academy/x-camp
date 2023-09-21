import dynamic from 'next/dynamic';
const NewsPage = dynamic(() => import('@/components/about-us/news'));

export const metadata = {
  title: 'X-Camp Academy',
  description: 'X-Camp Academy | Programming and Education news from X-Camp',
};

const Page: React.FC = () => {
  return <NewsPage />;
};

export default Page;
