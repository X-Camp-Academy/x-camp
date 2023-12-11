'use client';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import { Layout } from 'antd';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './index.module.scss';
import Banner from './banner';
import Reviews from '@/components/common/reviews';
import QAPart from './qa-part';
import ContactUs from './contact-us';

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
        <Banner />
        <QAPart />
        <ContactUs />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default HelpCenter;
