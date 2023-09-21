import dynamic from 'next/dynamic';
const EducationForum = dynamic(() => import('@/components/resources/education-forum'));

export const metadata = {
  title: 'X-Camp Academy',
  description: 'X-Camp Academy | Programming and Education news from X-Camp',
};


const Page: React.FC = () => {
  return <EducationForum />;
};

export default Page;