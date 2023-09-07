'use client';
import React from 'react';
import { Layout } from 'antd';
import dynamic from 'next/dynamic';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import styles from './index.module.scss';

const Banner = dynamic(() => import('./banner'));
const EvaluationForm = dynamic(() => import('./evaluation-form'));
const Reviews = dynamic(() => import('../common/reviews'));

const { Content } = Layout;

const Evaluation: React.FC = () => {
  const { data } = useGetReviews({
    ready: true,
    pageName: ["/home/"],
  });

  const reviewsData = data?.sort((a, b) => b?.attributes?.order - a?.attributes?.order);

  return (
    <Layout className={styles.evaluationFormContainer}>
      <Content>
        <Banner />
        <EvaluationForm />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  )
}

export default Evaluation;
