import CustomizedLearningTracks from '@/components/about-us/customized-learning-tracks';
import { PageTitle, generateMetadata } from '@/utils/metadata';

export const metadata = {
  ...generateMetadata(PageTitle.JoinUs)
};

const Page: React.FC = () => {
  return <CustomizedLearningTracks />;
};

export default Page;
