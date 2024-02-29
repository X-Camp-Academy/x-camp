import { PageTitle, generateMetadata } from '@/utils/metadata';
import Faculty from '@/components/about-us/faculty';

export const metadata = {
  ...generateMetadata(PageTitle.ContactUs)
};

const Page: React.FC = () => {
  return <Faculty />;
};

export default Page;
