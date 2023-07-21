'use client';
import { ConfigProvider, Layout, Space } from 'antd';
import React from 'react';
import styles from './index.module.scss';
import TopBanner from './top-banner';
import Reviews from '@/components/common/reviews';
import Introduction from './introduction';
import AppointmentCard from './appointment-card';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import { usePathname } from 'next/navigation';
const { Content } = Layout;

const WeeklyOpenHouse = () => {
  const pathname = usePathname();
  //获取师生评价数据
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname],
  });

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FFAD11',
        },
      }}
    >
      <Layout className={styles.main}>
        <Content>
          <TopBanner />
          <Space direction="vertical" size={100} className={styles.content}>
            {/* <JoinWay /> */}
            <Introduction />
            <AppointmentCard />
          </Space>
          <Reviews reviewsData={reviewsData} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default WeeklyOpenHouse;
