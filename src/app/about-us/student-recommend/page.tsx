import dynamic from 'next/dynamic';
const StudentRecommend = dynamic(() => import('@/components/about-us/student-recommend'));

export const metadata = {
  title: 'X-Camp Academy',
  description: 'X-Camp Academy | Programming and Education news from X-Camp',
};

const Page: React.FC = () => {
  return <StudentRecommend />;
};

export default Page;