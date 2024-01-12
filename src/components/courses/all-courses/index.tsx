'use client';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import Reviews from '@/components/common/reviews';
import { Layout } from 'antd';
import { usePathname } from 'next/navigation';
import React from 'react';
import Banner from '../banner';
import styles from './index.module.scss';
import CourseList from './course-list';

const { Content } = Layout;

const AllCourses: React.FC = () => {
  const pathname = usePathname();
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname]
  });

  return (
    <Layout className={styles.courseCatalog}>
      <Content>
        <Banner />
        <CourseList />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default AllCourses;
