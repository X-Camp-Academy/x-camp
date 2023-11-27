import { PageTitle, generateMetadata } from '@/utils/metadata';
import dynamic from 'next/dynamic';

const Contests = dynamic(() => import('@/components/resources/contests'));

export const metadata = {
  ...generateMetadata(PageTitle.Contests)
};

const Page: React.FC = () => {
  return <Contests />;
};

export default Page;
