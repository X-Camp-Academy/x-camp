import { PageTitle, generateMetadata } from '@/utils/metadata';
import WeeklyOpenHouse from '@/components/resources/weekly-open-house';

export const metadata = {
  ...generateMetadata(PageTitle.WeeklyOpenHouse)
};

const Page: React.FC = () => {
  return <WeeklyOpenHouse />;
};

export default Page;
