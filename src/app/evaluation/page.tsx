import dynamic from 'next/dynamic';
import { PageTitle, generateMetadata } from '../metadata';

const Evaluation = dynamic(() => import('@/components/evaluation'));

export const metadata = {
  ...generateMetadata(PageTitle.Evaluation)
};

export default function Page() {
  return <Evaluation />;
}
