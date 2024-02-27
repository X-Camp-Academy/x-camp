import CourseDetail from '@/components/courses/course-detail-v2';
import { PageTitle, generateMetadata } from '@/utils/metadata';

export const metadata = {
  ...generateMetadata(PageTitle.CourseDetail)
};

const Page: React.FC = () => {
  return <CourseDetail />;
};
export default Page;
