import { PageTitle, generateMetadata } from '@/utils/metadata';
import HelpCenter from '@/components/about-us/help-center';

export const metadata = {
  ...generateMetadata(PageTitle.HelpCenter)
};

const Page: React.FC = () => {
  return <HelpCenter />;
};

export default Page;
