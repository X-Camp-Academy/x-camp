import { PageTitle, generateMetadata } from '@/app/metadata';
import dynamic from 'next/dynamic';

const StudentRecommend = dynamic(() => import('@/components/about-us/student-recommend'));

export const metadata = {
  ...generateMetadata(PageTitle.StudentRecommend)
};

const Page: React.FC = () => {
  return <StudentRecommend />;
};

export default Page;
