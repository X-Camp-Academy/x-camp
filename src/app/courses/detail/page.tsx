import dynamic from 'next/dynamic';
const CourseDetail = dynamic(() => import('@/components/courses/detail'));

export const metadata = {
  title: 'X-Camp Academy',
  description: 'X-Camp Academy | Programming and Education news from X-Camp',
};

const Page: React.FC = () => {
  return <CourseDetail />;
};

export default Page;
