'use client';
import React from 'react';
import { Layout } from 'antd';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import styles from './index.module.scss';

const TopBanner = dynamic(() => import('./banner'));
const Reviews = dynamic(() => import('@/components/common/reviews'));
const QAPart = dynamic(() => import('./qa-part'));
const ContactUs = dynamic(() => import('./contact-us'));

const { Content } = Layout;

const HelpCenter: React.FC = () => {
  const pathname = usePathname();
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname as string],
  });

  return (
    <Layout className={styles.QAContainer}>
      <Content>
        <TopBanner />
        <QAPart />
        <ContactUs />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default HelpCenter;
