import { PageTitle, generateMetadata } from '@/utils/metadata';
import dynamic from 'next/dynamic';

const WeeklyOpenHouse = dynamic(() => import('@/components/resources/weekly-open-house'));

export const metadata = {
  ...generateMetadata(PageTitle.WeeklyOpenHouse)
};

const Page: React.FC = () => {
  return <WeeklyOpenHouse />;
};

export default Page;
