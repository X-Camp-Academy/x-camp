import dynamic from 'next/dynamic';
import { PageTitle, generateMetadata } from '../metadata';

const Assessment = dynamic(() => import('@/components/assessment'));

export const metadata = {
  ...generateMetadata(PageTitle.Assessment)
};

export default function Page() {
  return <Assessment />;
}
