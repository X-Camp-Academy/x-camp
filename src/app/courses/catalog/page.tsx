import dynamic from 'next/dynamic';
const CourseCatalog = dynamic(() => import('@/components/courses/catalog'));

export const metadata = {
  title: 'X-Camp Academy',
  description: 'X-Camp Academy | Programming and Education news from X-Camp',
};

const Page: React.FC = () => {
  return <CourseCatalog />;
};

export default Page;
