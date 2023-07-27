'use client';
import React from 'react';
import { Layout } from 'antd';
import dynamic from 'next/dynamic';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import styles from './index.module.scss';

const EvaluationForm = dynamic(() => import('./evaluation-form'));
const { Content } = Layout;
const TopBanner = dynamic(() => import('./top-banner'));
const Reviews = dynamic(() => import('../common/reviews'));

const Evalation: React.FC = () => {
  //获取师生评价数据
  const { data } = useGetReviews({
    ready: true,
    pageName: ["/home/"], // 因为首页的路由是空字符串，约定用/home/表示
  });

  const reviewsData = data?.sort((a, b) => b?.attributes?.order - a?.attributes?.order);

  return (
    <Layout className={styles.evaluationFormContainer}>
      <Content>
        <TopBanner />
        <EvaluationForm />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  )
}

export default Evalation;
