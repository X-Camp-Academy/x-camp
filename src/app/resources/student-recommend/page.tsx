import { PageTitle, generateMetadata } from '@/utils/metadata';
import StudentRecommend from '@/components/resources/student-recommend';

export const metadata = {
  ...generateMetadata(PageTitle.StudentRecommend)
};

const Page: React.FC = () => {
  return <StudentRecommend />;
};

export default Page;
