import { PageTitle, generateMetadata } from '@/utils/metadata';
import dynamic from 'next/dynamic';

const JoinUs = dynamic(() => import('@/components/about-us/join-us'));

export const metadata = {
  ...generateMetadata(PageTitle.JoinUs)
};

const Page: React.FC = () => {
  return <JoinUs />;
};

export default Page;
