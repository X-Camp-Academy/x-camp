'use client';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import Reviews from '@/components/common/reviews';
import { Layout } from 'antd';
import { usePathname } from 'next/navigation';
import React from 'react';
import Banner from './banner';
import styles from './index.module.scss';
import Introduction from './introduction';
import RelateResources from './relate-resources';

const { Content } = Layout;

const UsacoLiveSolutions: React.FC = () => {
  const pathname = usePathname();
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname]
  });
  return (
    <Layout className={styles.usacoLiveSolutions}>
      <Content>
        <Banner />
        <Introduction />
        <RelateResources />
        <Reviews className={styles.comments} reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default UsacoLiveSolutions;
