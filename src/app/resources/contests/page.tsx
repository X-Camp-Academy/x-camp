import { PageTitle, generateMetadata } from '@/utils/metadata';
import Contests from '@/components/resources/contests';

export const metadata = {
  ...generateMetadata(PageTitle.Contests)
};

const Page: React.FC = () => {
  return <Contests />;
};

export default Page;
