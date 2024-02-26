import { PageTitle, generateMetadata } from '@/utils/metadata';
import DisclaimerPrivacyPolicy from '@/components/about-us/disclaimer-privacy-policy';

export const metadata = {
  ...generateMetadata(PageTitle.HelpCenter)
};

const Page: React.FC = () => {
  return <DisclaimerPrivacyPolicy />;
};

export default Page;
