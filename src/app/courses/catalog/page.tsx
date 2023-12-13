import { PageTitle, generateMetadata } from '@/utils/metadata';
import CourseCatalog from '@/components/courses/catalog';

export const metadata = {
  ...generateMetadata(PageTitle.CoursesCatalog)
};

const Page: React.FC = () => {
  return <CourseCatalog />;
};

export default Page;
