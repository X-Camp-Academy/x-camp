import GoogleTracking from '@/components/common/google-tracking';
import { PageTitle, generateMetadata } from '@/utils/metadata';
import dynamic from 'next/dynamic';
const CourseCamps = dynamic(() => import('@/components/courses/camps'));

export const metadata = {
  ...generateMetadata(PageTitle.CourseCamps)
};

const Page: React.FC = () => {
  return (
    <>
      <GoogleTracking />
      <CourseCamps />
    </>
  );
};

export default Page;
