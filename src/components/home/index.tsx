'use client';
import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ConfigProvider, Layout } from 'antd';
import styles from './index.module.scss';

const CarouselContent = dynamic(() => import('./CarouselContent'));
const DiscoverCourses = dynamic(() => import('./DiscoverCourses'));
const About = dynamic(() => import('./About'));
const { Content } = Layout;

const Home: React.FC = () => {

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#fabb07',
        }
      }}
    >
      <Layout className={styles.homeContainer}>
        <Content>
          <CarouselContent />
          <DiscoverCourses />
          <About />
        </Content>
      </Layout>
    </ConfigProvider>
  )
}

export default Home;
