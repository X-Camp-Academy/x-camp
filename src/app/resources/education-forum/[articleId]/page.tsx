import { PageTitle, generateMetadata } from '@/app/metadata';
import dynamic from 'next/dynamic';

const Article = dynamic(() => import('@/components/resources/education-forum-detail'));

export const metadata = {
  ...generateMetadata(PageTitle.EducationForumDetail)
};

const Page: React.FC = () => {
  return <Article />;
};

export default Page;
