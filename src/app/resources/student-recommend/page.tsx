import { PageTitle, generateMetadata } from '@/utils/metadata';
import dynamic from 'next/dynamic';

const StudentRecommend = dynamic(() => import('@/components/resources/student-recommend'));

export const metadata = {
  ...generateMetadata(PageTitle.StudentRecommend)
};

const Page: React.FC = () => {
  return <StudentRecommend />;
};

export default Page;
