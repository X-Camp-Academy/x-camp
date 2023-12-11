import { PageTitle, generateMetadata } from '@/utils/metadata';
import UsacoLiveSolutions from '@/components/resources/usaco-live-solutions';

export const metadata = {
  ...generateMetadata(PageTitle.UsacoLiveSolutions)
};

const Page: React.FC = () => {
  return <UsacoLiveSolutions />;
};

export default Page;
