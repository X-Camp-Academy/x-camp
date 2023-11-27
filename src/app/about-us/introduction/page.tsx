import { PageTitle, generateMetadata } from '@/utils/metadata';
import dynamic from 'next/dynamic';

const Introduction = dynamic(() => import('@/components/about-us/introduction'));

export const metadata = {
  ...generateMetadata(PageTitle.Introduction)
};

const Page: React.FC = () => {
  return <Introduction />;
};

export default Page;
