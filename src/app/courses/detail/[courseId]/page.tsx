import GoogleTracking from '@/components/common/google-tracking';
import { PageTitle, generateMetadata } from '@/utils/metadata';
import dynamic from 'next/dynamic';

const CourseDetail = dynamic(() => import('@/components/courses/detail'));

export const metadata = {
  ...generateMetadata(PageTitle.CourseDetail)
};

const Page: React.FC = () => {
  return (
    <>
      <GoogleTracking />
      <CourseDetail />
    </>
  );
};

export default Page;
