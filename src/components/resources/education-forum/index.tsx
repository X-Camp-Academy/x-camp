'use client';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import { Layout } from 'antd';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './index.module.scss';
import Banner from './banner';
import UpcomingEvents from './upcoming-events';
import RecentActivities from './recent-activities';
import Activities from './activities';
import Reviews from '@/components/common/reviews';

const { Content } = Layout;

const EducationForum: React.FC = () => {
  const pathname = usePathname();
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname]
  });

  return (
    <Layout className={styles.main}>
      <Content>
        <Banner />
        <UpcomingEvents />
        <RecentActivities />
        <Activities />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default EducationForum;
