'use client';
import { FaqCategory } from '@/apis/strapi-client/define';
import { useGetFaq, useGetReviews } from '@/apis/strapi-client/strapi';
import { Layout } from 'antd';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './index.module.scss';
import Banner from './banner';
import ReferralAndEarn from './referral-and-earn';
import GetCredit from './referral-program-work';
import Faq from '@/components/common/faqs';
import Reviews from '@/components/common/reviews';

const { Content } = Layout;

const StudentRecommend: React.FC = () => {
  const pathname = usePathname();
  const { data: faq } = useGetFaq({
    ready: true,
    category: FaqCategory.ReferralQA,
    pageName: [pathname]
  });
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname]
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
