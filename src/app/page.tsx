import { PageTitle, generateMetadata } from '@/utils/metadata';
import Home from '@/components/home';

export const metadata = {
  ...generateMetadata(PageTitle.Home)
};

const Page: React.FC = () => {
  return <Home />;
};

export default Page;
