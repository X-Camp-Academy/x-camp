import { PageTitle, generateMetadata } from '@/utils/metadata';
import CalendarPage from '@/components/about-us/calendar';

export const metadata = {
  ...generateMetadata(PageTitle.Calendar)
};

const Calendar: React.FC = () => {
  return <CalendarPage />;
};

export default Calendar;
