'use client';
import { Layout } from 'antd';
import React from 'react';
import styles from './index.module.scss';
import Banner from './banner';
import FacultyCoaches from '@/components/common/faculty-coaches';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import { usePathname } from 'next/navigation';
import Reviews from '@/components/common/reviews';

const { Content } = Layout;

const Faculty: React.FC = () => {
  const pathname = usePathname();
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname]
  });
  return (
    <Layout className={styles.introductionContainer}>
      <Content>
        <Banner />
        <FacultyCoaches />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default Faculty;
