import { PageTitle, generateMetadata } from '../../utils/metadata';
import Login from '@/components/login';

export const metadata = {
  ...generateMetadata(PageTitle.Login)
};

const Page: React.FC = () => {
  return <Login />;
};

export default Page;
