import { PageTitle, generateMetadata } from '@/utils/metadata';
import USACO from '@/components/resources/usaco';

export const metadata = {
  ...generateMetadata(PageTitle.USACO)
};

const Page: React.FC = () => {
  return <USACO />;
};

export default Page;
