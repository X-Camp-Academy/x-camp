import { PageTitle, generateMetadata } from '@/utils/metadata';
import USACOReport from '@/components/usaco-report';

export const metadata = {
  ...generateMetadata(PageTitle.USACOReport)
};

const Page: React.FC = () => {
  return <USACOReport />;
};

export default Page;
