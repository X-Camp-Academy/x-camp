'use client';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import { Layout } from 'antd';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import React from 'react';
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
    pageName: [pathname]
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
