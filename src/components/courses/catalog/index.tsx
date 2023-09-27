'use client';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import Reviews from '@/components/common/reviews';
import { Layout } from 'antd';
import { usePathname } from 'next/navigation';
import React from 'react';
import Banner from '../banner';
import styles from './index.module.scss';
import ScheduleTable from './schedule-table';

const { Content } = Layout;

const CourseCatalog: React.FC = () => {
  const pathname = usePathname();
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname as string]
  });

  return (
    <Layout className={styles.courseCatalog}>
      <Content>
        <Banner />
        <ScheduleTable />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default CourseCatalog;
