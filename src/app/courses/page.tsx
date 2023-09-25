import { PageTitle, generateMetadata } from '@/app/metadata';
import dynamic from 'next/dynamic';

const Courses = dynamic(() => import('@/components/courses'), { ssr: false });

export const metadata = {
  ...generateMetadata(PageTitle.Courses)
};

const Page: React.FC = () => {
  return <Courses />;
};
export default Page;
