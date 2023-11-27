import { PageTitle, generateMetadata } from '@/utils/metadata';
import dynamic from 'next/dynamic';

const Partners = dynamic(() => import('@/components/about-us/partners'));

export const metadata = {
  ...generateMetadata(PageTitle.Partners)
};

const Page: React.FC = () => {
  return <Partners />;
};

export default Page;
