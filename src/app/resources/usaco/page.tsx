import { PageTitle, generateMetadata } from '@/utils/metadata';
import dynamic from 'next/dynamic';

const USACO = dynamic(() => import('@/components/resources/usaco'));

export const metadata = {
  ...generateMetadata(PageTitle.USACO)
};

const Page: React.FC = () => {
  return <USACO />;
};

export default Page;
