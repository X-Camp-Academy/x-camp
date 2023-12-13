import { PageTitle, generateMetadata } from '@/utils/metadata';
import Courses from '@/components/courses';

export const metadata = {
  ...generateMetadata(PageTitle.Courses)
};

const Page: React.FC = () => {
  return <Courses />;
};
export default Page;
