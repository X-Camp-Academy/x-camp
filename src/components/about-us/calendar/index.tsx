'use client';
import React from 'react';
import { Layout } from 'antd';
import dynamic from 'next/dynamic';
import Reviews from '@/components/common/reviews';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import styles from './index.module.scss';

const Banner = dynamic(() => import('./banner'));
const CalendarContent = dynamic(() => import('./calendar-content'));
const RecentActivities = dynamic(
  () =>
    import('@/components/resources/education-forum/recent-activities')
);

const { Content } = Layout;

const Calendar: React.FC = () => {
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: ['/home/'],
  });
  return (
    <Layout className={styles.introductionContainer}>
      <Content>
        <Banner />
        <CalendarContent />
        <RecentActivities />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default Calendar;
