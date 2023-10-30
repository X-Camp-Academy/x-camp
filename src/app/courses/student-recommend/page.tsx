import { PageTitle, generateMetadata } from '@/app/metadata';
import dynamic from 'next/dynamic';

const StudentRecommend = dynamic(() => import('@/components/courses/student-recommend'));

export const metadata = {
  ...generateMetadata(PageTitle.StudentRecommend)
};

const Page: React.FC = () => {
  return <StudentRecommend />;
};

export default Page;
