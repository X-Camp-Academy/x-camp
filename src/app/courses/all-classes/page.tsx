import { PageTitle, generateMetadata } from '@/utils/metadata';
import AllClasses from '@/components/courses/all-classes';

export const metadata = {
  ...generateMetadata(PageTitle.AllClasses)
};

const Page: React.FC = () => {
  return <AllClasses />;
};
export default Page;
