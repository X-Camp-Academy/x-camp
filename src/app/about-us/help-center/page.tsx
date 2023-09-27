import { PageTitle, generateMetadata } from '@/app/metadata';
import dynamic from 'next/dynamic';

const HelpCenter = dynamic(() => import('@/components/about-us/help-center'));

export const metadata = {
  ...generateMetadata(PageTitle.HelpCenter)
};

const Page: React.FC = () => {
  return <HelpCenter />;
};

export default Page;
