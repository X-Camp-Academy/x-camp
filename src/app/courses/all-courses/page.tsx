import { PageTitle, generateMetadata } from '@/utils/metadata';
import AllCourses from '@/components/courses/all-courses';

export const metadata = {
  ...generateMetadata(PageTitle.AllCourses)
};

const Page: React.FC = () => {
  return <AllCourses />;
};

export default Page;
