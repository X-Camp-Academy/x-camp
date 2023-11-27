import dynamic from 'next/dynamic';
import { PageTitle, generateMetadata } from '../../utils/metadata';

const Login = dynamic(() => import('@/components/login'), { ssr: false });

export const metadata = {
  ...generateMetadata(PageTitle.Login)
};

const Page: React.FC = () => {
  return <Login />;
};

export default Page;
