import { PageTitle, generateMetadata } from '@/utils/metadata';
import dynamic from 'next/dynamic';

const Article = dynamic(() => import('@/components/resources/article-detail'));

export const metadata = {
  ...generateMetadata(PageTitle.Detail)
};

const Page: React.FC = () => {
  return <Article />;
};

export default Page;
