import { PageTitle, generateMetadata } from '@/utils/metadata';
import dynamic from 'next/dynamic';

const XAlumni = dynamic(() => import('@/components/about-us/x-alumni'));

export const metadata = {
  ...generateMetadata(PageTitle.XAlumni)
};

const Page: React.FC = () => {
  return <XAlumni />;
};

export default Page;
