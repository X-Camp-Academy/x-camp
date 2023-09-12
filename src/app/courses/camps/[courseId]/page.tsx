import dynamic from "next/dynamic";
const CourseCamps = dynamic(() => import('@/components/courses/camps'));

export const metadata = {
  title: 'X-Camp Academy',
  description: 'X-Camp Academy | Programming and Education news from X-Camp',
};

const Page: React.FC = () => {
  return <CourseCamps />;
};

export default Page;
