import { PageTitle, generateMetadata } from '@/app/metadata';
import dynamic from 'next/dynamic';

const CalendarPage = dynamic(() => import('@/components/about-us/calendar'));

export const metadata = {
  ...generateMetadata(PageTitle.Calendar)
};

const Calendar: React.FC = () => {
  return <CalendarPage />;
};

export default Calendar;
