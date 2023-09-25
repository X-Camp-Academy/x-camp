import { PageTitle, generateMetadata } from '@/app/metadata';
import dynamic from 'next/dynamic';

const Article = dynamic(() => import('@/components/resources/article'));

export const metadata = {
  ...generateMetadata(PageTitle.ArticleDetail)
};

const Page: React.FC = () => {
  return <Article />;
};

export default Page;
