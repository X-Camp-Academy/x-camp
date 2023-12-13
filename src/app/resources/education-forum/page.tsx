import { PageTitle, generateMetadata } from '@/utils/metadata';
import EducationForum from '@/components/resources/education-forum';

export const metadata = {
  ...generateMetadata(PageTitle.EducationForum)
};

const Page: React.FC = () => {
  return <EducationForum />;
};

export default Page;
