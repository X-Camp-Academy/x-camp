'use client';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import Reviews from '@/components/common/reviews';
import { Layout, Space } from 'antd';
import { usePathname } from 'next/navigation';
import AppointmentCard from './appointment-card';
import Banner from './banner';
import styles from './index.module.scss';
import Introduction from './introduction';

const { Content } = Layout;

const WeeklyOpenHouse = () => {
  const pathname = usePathname();
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname]
  });

  return (
    <Layout className={styles.main}>
      <Content>
        <Banner />
        <Space direction="vertical" size={100} className={styles.content}>
          {/* <JoinWay /> */}
          <Introduction />
          <AppointmentCard />
        </Space>
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default WeeklyOpenHouse;
