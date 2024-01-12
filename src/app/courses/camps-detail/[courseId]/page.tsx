import { PageTitle, generateMetadata } from '@/utils/metadata';
import CampsDetail from '@/components/courses/camps-detail';

export const metadata = {
  ...generateMetadata(PageTitle.CampsDetail)
};

const Page: React.FC = () => {
  return <CampsDetail />;
};

export default Page;
