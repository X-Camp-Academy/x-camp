'use client';
import React from 'react';
import styles from './index.module.scss';
import { ConfigProvider, Layout } from 'antd';
import TopBanner from './top-banner';
import ScheduleTable from './schedule-table';
import Comments from '@/components/home/Comments';
const { Content } = Layout;
const CourseCatalog = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FFAD11',
        },
      }}
    >
      <Layout className={styles.courseCatalog}>
        <Content>
          <TopBanner />
          <ScheduleTable />
          <Comments />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default CourseCatalog;
