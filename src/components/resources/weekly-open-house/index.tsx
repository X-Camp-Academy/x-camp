'use client';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import Reviews from '@/components/common/reviews';
import { useMobile } from '@/utils';
import { Layout, Space } from 'antd';
import { usePathname } from 'next/navigation';
import AppointmentCard from './appointment-card';
import Banner from './banner';
import DeepDiveClasses from './deep-dive-classes';
import styles from './index.module.scss';

const { Content } = Layout;

const WeeklyOpenHouse = () => {
  const pathname = usePathname();
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname]
  });
  const isMobile = useMobile();
  return (
    <Layout className={styles.main}>
      <Content>
        <Banner />
        <Space direction="vertical" size={isMobile ? 24 : 100} className={styles.content}>
          <DeepDiveClasses />
          <AppointmentCard />
        </Space>
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default WeeklyOpenHouse;
