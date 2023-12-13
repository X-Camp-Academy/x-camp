import { PageTitle, generateMetadata } from '@/utils/metadata';
import Partners from '@/components/about-us/partners';

export const metadata = {
  ...generateMetadata(PageTitle.Partners)
};

const Page: React.FC = () => {
  return <Partners />;
};

export default Page;
