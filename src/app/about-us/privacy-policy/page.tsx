import dynamic from 'next/dynamic';
const PrivacyPolicy = dynamic(() => import('@/components/common/privacy-policy'));

export const metadata = {
  title: 'X-Camp Academy',
  description: 'X-Camp Academy | Programming and Education news from X-Camp'
};

const Page: React.FC = () => {
  return <PrivacyPolicy />;
};

export default Page;
