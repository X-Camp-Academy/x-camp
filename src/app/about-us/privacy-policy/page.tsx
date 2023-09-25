import { PageTitle, generateMetadata } from '@/app/metadata';
import dynamic from 'next/dynamic';

const PrivacyPolicy = dynamic(() => import('@/components/common/privacy-policy'));

export const metadata = {
  ...generateMetadata(PageTitle.PrivacyPolicy)
};

const Page: React.FC = () => {
  return <PrivacyPolicy />;
};

export default Page;
