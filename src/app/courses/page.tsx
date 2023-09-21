import dynamic from 'next/dynamic';
const Courses = dynamic(() => import('@/components/courses'), { ssr: false });

export const metadata = {
  title: 'X-Camp Academy',
  description: 'X-Camp Academy | Programming and Education news from X-Camp',
};

const Page: React.FC = () => {
  return <Courses />;
};
export default Page;