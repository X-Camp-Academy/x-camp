'use client';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import { Layout } from 'antd';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './index.module.scss';
import Banner from './banner';
import Introduction from './introduction';
import Reviews from '@/components/common/reviews';

const { Content } = Layout;

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
