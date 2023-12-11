import { PageTitle, generateMetadata } from '@/utils/metadata';
import CourseCamps from '@/components/courses/camps';

export const metadata = {
  ...generateMetadata(PageTitle.CourseCamps)
};

const Page: React.FC = () => {
  return <CourseCamps />;
};

export default Page;
