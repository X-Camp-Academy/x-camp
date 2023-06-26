'use client';
import { ConfigProvider, Layout } from 'antd';
import React from 'react';
import styles from './index.module.scss';
import TopBanner from './top-banner';
import CampIntro from './camp-intro';
import CampCarousel from './camp-carousel';
const { Content } = Layout;
const CourseCamps = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FFAD11',
        },
      }}
    >
      <Layout className={styles.courseCamps}>
        <Content>
          <TopBanner />
          <CampIntro />
          <CampCarousel />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default CourseCamps;
