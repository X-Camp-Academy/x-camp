import { PageTitle, generateMetadata } from '@/utils/metadata';
import XAlumni from '@/components/about-us/x-alumni';

export const metadata = {
  ...generateMetadata(PageTitle.XAlumni)
};

const Page: React.FC = () => {
  return <XAlumni />;
};

export default Page;
