import { PageTitle, generateMetadata } from '@/utils/metadata';
import CourseDetail from '@/components/courses/detail';

export const metadata = {
  ...generateMetadata(PageTitle.CourseDetail)
};

const Page: React.FC = () => {
  return <CourseDetail />;
};
export default Page;
