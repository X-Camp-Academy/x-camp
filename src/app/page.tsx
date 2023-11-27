import dynamic from 'next/dynamic';
import { PageTitle, generateMetadata } from '../utils/metadata';

const Home = dynamic(() => import('@/components/home'));

export const metadata = {
  ...generateMetadata(PageTitle.Home)
};

const Page: React.FC = () => {
  return <Home />;
};

export default Page;
