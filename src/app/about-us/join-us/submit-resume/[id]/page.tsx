import { PageTitle, generateMetadata } from '@/app/metadata';
import dynamic from 'next/dynamic';

const SubmitResume = dynamic(() => import('@/components/about-us/join-us/submit-resume'));

export const metadata = {
  ...generateMetadata(PageTitle.SubmitResume)
};

const Page: React.FC = () => {
  return <SubmitResume />;
};

export default Page;
