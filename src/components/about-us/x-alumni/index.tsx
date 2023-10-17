'use client';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import { Layout } from 'antd';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import styles from './index.module.scss';

const Banner = dynamic(() => import('./banner'));
const Map = dynamic(() => import('./map'));
const Flag = dynamic(() => import('./flag'));
const Stories = dynamic(() => import('./stories'));
const UpcomingEvents = dynamic(() => import('./upcoming-events'));
const Reviews = dynamic(() => import('@/components/common/reviews'));
const { Content } = Layout;

const XAlumni = () => {
  const pathname = usePathname();
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname]
  });

  return (
    <Layout className={styles.xalumniContainer}>
      <Content>
        <Banner />
        {/* <Map /> */}
        {/* <Flag /> */}
        <Stories />
        <UpcomingEvents />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default XAlumni;
