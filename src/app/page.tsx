import GoogleTracking from '@/components/common/google-tracking';
import { PageTitle, generateMetadata } from '@/utils/metadata';
import dynamic from 'next/dynamic';
const Home = dynamic(() => import('@/components/home'));

export const metadata = {
  ...generateMetadata(PageTitle.Home)
};

const Page: React.FC = () => {
  return (
    <>
      <GoogleTracking />
      <Home />;
    </>
  );
};

export default Page;
