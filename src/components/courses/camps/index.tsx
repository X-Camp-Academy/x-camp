'use client';
import { ConfigProvider, Layout, Space } from 'antd';
import React from 'react';
import styles from './index.module.scss';
import TopBanner from './top-banner';
import CampIntro from './camp-intro';
import CampCarousel from './camp-carousel';
import CourseAbstract from '../detail/top-banner/course-card/course-abstract';
import ColorfulCard from '@/components/common/colorful-card';
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
          <div className={styles.courseCard}>
            <div className="container">
              <ColorfulCard border={'bottom'} index={1} animate={false}>
                <CourseAbstract />
              </ColorfulCard>
            </div>
          </div>
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default CourseCamps;
