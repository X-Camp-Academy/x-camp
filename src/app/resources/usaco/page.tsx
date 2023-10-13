import { PageTitle, generateMetadata } from '@/app/metadata';
import dynamic from 'next/dynamic';

const USACO = dynamic(() => import('@/components/resources/usaco'));

export const metadata = {
  ...generateMetadata(PageTitle.EducationForum)
};

const Page: React.FC = () => {
  return <USACO />;
};

export default Page;
