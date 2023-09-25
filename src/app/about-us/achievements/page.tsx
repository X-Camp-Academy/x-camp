import { PageTitle, generateMetadata } from '@/app/metadata';
import dynamic from 'next/dynamic';

const Achievements = dynamic(() => import('@/components/about-us/achievements'));

export const metadata = {
  ...generateMetadata(PageTitle.Achievements)
};

const Page: React.FC = () => {
  return <Achievements />;
};

export default Page;
