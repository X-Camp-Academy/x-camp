import { PageTitle, generateMetadata } from '@/utils/metadata';
import ArticleDetail from '@/components/article-detail';

export const metadata = {
  ...generateMetadata(PageTitle.ArticleDetail)
};

const Page: React.FC = () => {
  return <ArticleDetail />;
};

export default Page;
