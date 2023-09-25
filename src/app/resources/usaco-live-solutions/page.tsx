import { PageTitle, generateMetadata } from '@/app/metadata';
import dynamic from 'next/dynamic';

const UsacoLiveSolutions = dynamic(() => import('@/components/resources/usaco-live-solutions'));

export const metadata = {
  ...generateMetadata(PageTitle.UsacoLiveSolutions)
};

const Page: React.FC = () => {
  return <UsacoLiveSolutions />;
};

export default Page;
