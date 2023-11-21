'use client';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import { Layout } from 'antd';
import dynamic from 'next/dynamic';
import React from 'react';
import styles from './index.module.scss';

const Banner = dynamic(() => import('./banner'));
const AssessmentForm = dynamic(() => import('./assessment-form'));
const Reviews = dynamic(() => import('../common/reviews'));

const { Content } = Layout;

const Assessment: React.FC = () => {
  const { data } = useGetReviews({
    ready: true,
    pageName: ['/home/']
  });

  const reviewsData = data?.sort((a, b) => b?.attributes?.order - a?.attributes?.order);

  return (
    <Layout className={styles.assessmentFormContainer}>
      <Content>
        <Banner />
        <AssessmentForm />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default Assessment;