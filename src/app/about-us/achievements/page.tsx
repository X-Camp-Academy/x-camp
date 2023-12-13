import { PageTitle, generateMetadata } from '@/utils/metadata';
import Achievements from '@/components/about-us/achievements';

export const metadata = {
  ...generateMetadata(PageTitle.Achievements)
};

const Page: React.FC = () => {
  return <Achievements />;
};

export default Page;
