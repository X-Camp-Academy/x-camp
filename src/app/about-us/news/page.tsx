import { PageTitle, generateMetadata } from '@/utils/metadata';
import NewsPage from '@/components/about-us/news';

export const metadata = {
  ...generateMetadata(PageTitle.News)
};

const Page: React.FC = () => {
  return <NewsPage />;
};

export default Page;
