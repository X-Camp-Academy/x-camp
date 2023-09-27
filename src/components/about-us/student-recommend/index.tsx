'use client';
import { FaqCategory } from '@/apis/strapi-client/define';
import { useGetFaq, useGetReviews } from '@/apis/strapi-client/strapi';
import { Layout } from 'antd';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './index.module.scss';

const { Content } = Layout;

const Banner = dynamic(() => import('./banner'));
const ReferralAndEarn = dynamic(() => import('./referral-and-earn'));
const GetCredit = dynamic(() => import('./referral-program-work'));
const Faq = dynamic(() => import('@/components/common/faqs'));
const Reviews = dynamic(() => import('@/components/common/reviews'));

const StudentRecommend: React.FC = () => {
  const pathname = usePathname();
  const { data: faq } = useGetFaq({
    ready: true,
    category: FaqCategory.ReferralQA,
    pageName: [pathname as string]
  });
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname as string]
  });
  return (
    <Layout className={styles.stuRecommendContainer}>
      <Content>
        <Banner />
        <ReferralAndEarn />
        <GetCredit />
        <Faq title={FaqCategory.ReferralQA} data={faq} />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default StudentRecommend;
