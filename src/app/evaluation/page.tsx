import dynamic from 'next/dynamic';
const Evaluation = dynamic(() => import('@/components/evaluation'));

export const metadata = {
  title: 'X-Camp Academy',
  description: 'X-Camp Academy | Programming and Education news from X-Camp'
};

export default function Page() {
  return <Evaluation />;
}
