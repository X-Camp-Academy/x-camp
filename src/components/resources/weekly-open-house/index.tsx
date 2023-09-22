'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Layout, Space } from 'antd';
import Banner from './banner';
import Introduction from './introduction';
import AppointmentCard from './appointment-card';
import Reviews from '@/components/common/reviews';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import styles from './index.module.scss';


const { Content } = Layout;

const WeeklyOpenHouse = () => {
  const pathname = usePathname();
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname],
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
