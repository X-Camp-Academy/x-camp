import dynamic from 'next/dynamic';
const XAlumni = dynamic(() => import('@/components/about-us/x-alumni'));

export const metadata = {
  title: 'X-Camp Academy',
  description: 'X-Camp Academy | Programming and Education news from X-Camp',
};

const Page: React.FC = () => {
  return <XAlumni />;
};

export default Page;
