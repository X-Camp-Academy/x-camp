import { generateMetadata } from '@/utils/metadata';
import dynamic from 'next/dynamic';

const Home = dynamic(() => import('@/components/home'));

export const metadata = {
  ...generateMetadata('home')
};

async function getData() {
  const res = await fetch('https://strapi.turingstar.com.cn/api/xc-course-level-types');

  return res.json();
}

const Page: React.FC = () => {
  const data = getData();
  console.log(data);

  return <Home />;
};

export default Page;
