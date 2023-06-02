'use client';
import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ConfigProvider, Layout } from 'antd';
import styles from './index.module.scss';

const CarouselContent = dynamic(() => import('./CarouselContent'));
const DiscoverCourses = dynamic(() => import('./DiscoverCourses'));
const AboutXCamp = dynamic(() => import('./AboutXCamp'));
const FoundingTeam = dynamic(() => import('./FoundingTeam'));
const WeSupport = dynamic(() => import('./WeSupport'));
const StudentProjects = dynamic(() => import('./StudentProjects'));
const FacultyPartners = dynamic(() => import('./FacultyPartners'));
const Comments = dynamic(() => import('./Comments'));
const QuickAssessment = dynamic(() => import('../footer/QuickAssessment'));
const CopyRight = dynamic(() => import('../footer/CopyRight'));
const SubscribeNewsletter = dynamic(() => import('../footer/SubscribeNewsletter'));
const { Content } = Layout;

const Home: React.FC = () => {

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FFAD11',
        }
      }}
    >
      <Layout className={styles.homeContainer}>
        <Content>
          <CarouselContent />
          <DiscoverCourses />
          <AboutXCamp />
          <FoundingTeam />
          <WeSupport />
          <StudentProjects />
          <FacultyPartners />
          <Comments />
          <QuickAssessment />
          <CopyRight />
          <SubscribeNewsletter />
        </Content>
      </Layout>
    </ConfigProvider>
  )
}

export default Home;
