'use client';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import Faculty from '@/components/common/faculty';
import Reviews from '@/components/common/reviews';
import { Layout } from 'antd';
import React from 'react';
import CarouselContent from './carousel-content';
import Community from './community';
import DiscoverOurCourses from './discover-our-courses';
import styles from './index.module.scss';
import PublicCalendar from './public-calendar';
import StudentProjects from './student-projects';
import WeSupport from './we-support';
import WhyXCamp from './why-xcamp';

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
        <DiscoverOurCourses />
        <Faculty />
        <WeSupport />
        <PublicCalendar />
        <StudentProjects />
        <Community />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default Home;
