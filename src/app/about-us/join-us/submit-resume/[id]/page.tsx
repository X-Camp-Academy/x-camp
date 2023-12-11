import { PageTitle, generateMetadata } from '@/utils/metadata';
import SubmitResume from '@/components/about-us/join-us/submit-resume';

export const metadata = {
  ...generateMetadata(PageTitle.SubmitResume)
};

const Page: React.FC = () => {
  return <SubmitResume />;
};

export default Page;
