import { PageTitle, generateMetadata } from '@/app/metadata';
import dynamic from 'next/dynamic';

const CourseDetail = dynamic(() => import('@/components/courses/detail'));

export const metadata = {
  ...generateMetadata(PageTitle.CourseDetail)
};

const Page: React.FC = () => {
  return <CourseDetail />;
};

export default Page;
