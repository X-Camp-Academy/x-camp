import { PageTitle, generateMetadata } from '@/app/metadata';
import dynamic from 'next/dynamic';

const EducationForum = dynamic(() => import('@/components/resources/education-forum'));

export const metadata = {
  ...generateMetadata(PageTitle.EducationForum)
};

const Page: React.FC = () => {
  return <EducationForum />;
};

export default Page;
