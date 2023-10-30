'use client';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import { useModelVisible } from '@/hoc/WithModelVisible';
import { Layout } from 'antd';
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import styles from './index.module.scss';

const CarouselContent = dynamic(() => import('./carousel-content'));
const DiscoverOurCourses = dynamic(() => import('./discover-our-courses'));
const WhyXCamp = dynamic(() => import('./why-xcamp'));
const WeSupport = dynamic(() => import('./we-support'));
const Faculty = dynamic(() => import('@/components/common/faculty'));
const PublicCalendar = dynamic(() => import('./public-calendar'));
const StudentProjects = dynamic(() => import('./student-projects'));
const Community = dynamic(() => import('./community'));
const Reviews = dynamic(() => import('@/components/common/reviews'));

const { Content } = Layout;

const Home: React.FC = () => {
  const { hash } = window.location;
  const { setModelVisible } = useModelVisible();
  const { data } = useGetReviews({
    ready: true
  });

  useEffect(() => {
    if (hash === '#appointment') {
      setModelVisible(true);
    }
  }, [hash]);

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

        {/*<XCampFounders />*/}
        <StudentProjects />
        <Community />
        <Reviews reviewsData={reviewsData} />
        {/*<Partners />*/}
      </Content>
    </Layout>
  );
};

export default Home;
