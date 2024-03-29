import { PageTitle, generateMetadata } from '@/utils/metadata';
import PrivacyPolicy from '@/components/about-us/join-us/submit-resume/privacy-policy';

export const metadata = {
  ...generateMetadata(PageTitle.PrivacyPolicy)
};

const Page: React.FC = () => {
  return <PrivacyPolicy />;
};

export default Page;
