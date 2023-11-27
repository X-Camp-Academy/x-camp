import { PageTitle, generateMetadata } from '@/utils/public';

export const metadata = {
  ...generateMetadata(PageTitle.Forbidden)
};

const Page: React.FC = () => {
  return <div>403</div>;
};

export default Page;
