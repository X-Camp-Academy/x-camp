'use client';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import { Layout } from 'antd';
import { usePathname } from 'next/navigation';
import styles from './index.module.scss';
import Banner from './banner';
import Map from './map';
import Story from './story';
import UpcomingEvents from './upcoming-events';
import Reviews from '@/components/common/reviews';
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
        <Map />
        <Story />
        <UpcomingEvents />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default XAlumni;
