import dynamic from 'next/dynamic';
const SubmitResume = dynamic(() => import('@/components/about-us/join-us/submit-resume'));

export const metadata = {
  title: 'X-Camp Academy',
  description: 'X-Camp Academy | Programming and Education news from X-Camp'
};

const Page: React.FC = () => {
  return <SubmitResume />;
};

export default Page;
