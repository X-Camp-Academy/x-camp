import { PageTitle, generateMetadata } from '@/app/metadata';
import dynamic from 'next/dynamic';

const CourseCatalog = dynamic(() => import('@/components/courses/catalog'));

export const metadata = {
  ...generateMetadata(PageTitle.CoursesCatalog)
};

const Page: React.FC = () => {
  return <CourseCatalog />;
};

export default Page;
