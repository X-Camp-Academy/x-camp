import { PageTitle, generateMetadata } from '@/utils/metadata';
import dynamic from 'next/dynamic';

const NewsPage = dynamic(() => import('@/components/about-us/news'));

export const metadata = {
  ...generateMetadata(PageTitle.News)
};

const Page: React.FC = () => {
  return <NewsPage />;
};

export default Page;
