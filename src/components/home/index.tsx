'use client';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import { Layout } from 'antd';
import dynamic from 'next/dynamic';
import React from 'react';
import styles from './index.module.scss';

const CarouselContent = dynamic(() => import('./carousel-content'));
const DiscoverCourses = dynamic(() => import('@/components/common/discover-courses'));
const WhyXCamp = dynamic(() => import('./why-xcamp'));
const WeSupport = dynamic(() => import('./we-support'));
const Faculty = dynamic(() => import('@/components/common/faculty'));
const PublicCalendar = dynamic(() => import('./public-calendar'));
const StudentProjects = dynamic(() => import('./student-projects'));
const Community = dynamic(() => import('./community'));
const Reviews = dynamic(() => import('@/components/common/reviews'));
const FixedButtons = dynamic(() => import('@/components/common/fixed-buttons'));

const { Content } = Layout;

const Home: React.FC = () => {
  const { data } = useGetReviews({
    ready: true
  });

  const reviewsData = data?.sort((a, b) => b?.attributes?.order - a?.attributes?.order);
  return (
    <Layout className={styles.homeContainer}>
      <Content>
        <CarouselContent />
        <WhyXCamp />
        <DiscoverCourses />
        <Faculty />
        <WeSupport />
        <PublicCalendar />

        {/*<XCampFounders />*/}
        <StudentProjects />
        <Community />
        <Reviews reviewsData={reviewsData} />
        <FixedButtons />
        {/*<Partners />*/}
      </Content>
    </Layout>
  );
};

export default Home;
