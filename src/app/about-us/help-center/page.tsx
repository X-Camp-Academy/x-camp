import dynamic from 'next/dynamic';
const HelpCenter = dynamic(() => import('@/components/about-us/help-center'));

export const metadata = {
  title: 'X-Camp Academy',
  description: 'X-Camp Academy | Programming and Education news from X-Camp'
};

const Page: React.FC = () => {
  return <HelpCenter />;
};

export default Page;
