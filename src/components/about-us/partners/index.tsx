'use client';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import { Layout } from 'antd';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './index.module.scss';

const { Content } = Layout;
const Banner = dynamic(() => import('./banner'));
const Introduction = dynamic(() => import('./introduction'));
const Reviews = dynamic(() => import('@/components/common/reviews'));

const Partners: React.FC = () => {
  const pathname = usePathname();
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname]
  });

  return (
    <Layout className={styles.content}>
      <Content>
        <Banner />
        <Introduction />
        <Reviews className={styles.comments} reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default Partners;
