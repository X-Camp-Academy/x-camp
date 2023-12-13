import { PageTitle, generateMetadata } from '@/utils/metadata';
import Introduction from '@/components/about-us/introduction';

export const metadata = {
  ...generateMetadata(PageTitle.Introduction)
};

const Page: React.FC = () => {
  return <Introduction />;
};

export default Page;
