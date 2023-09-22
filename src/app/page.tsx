import dynamic from 'next/dynamic';
const Home = dynamic(() => import('@/components/home'));

export const metadata = {
  title: 'X-Camp Academy',
  description: 'X-Camp Academy | Programming and Education news from X-Camp'
};

const Page: React.FC = () => {
  return <Home />;
};

export default Page;
