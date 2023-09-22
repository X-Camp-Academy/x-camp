'use client';
import { NewEventCategory } from '@/apis/strapi-client/define';
import { useGetNewEvent, useGetReviews } from '@/apis/strapi-client/strapi';
import Reviews from '@/components/common/reviews';
import { useSize } from 'ahooks';
import { Layout } from 'antd';
import { usePathname } from 'next/navigation';
import React from 'react';
import Banner from './banner';
import { formatContestsByQuarter } from './define';
import styles from './index.module.scss';
import Introduction from './introduction';
import MonthlyContest from './monthly-contest';
import WhyContest from './why-contest';

const { Content } = Layout;

const Contests: React.FC = () => {
  const { data: resourcesContest } = useGetNewEvent({
    tag: NewEventCategory.EventContest,
    current: 1,
    pageSize: 9999
  });
  const pathname = usePathname();
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname]
  });
  const size = useSize(document.querySelector('body'));

  return (
    <Layout className={styles.main}>
      <Content>
        <Banner />
        <MonthlyContest data={formatContestsByQuarter(resourcesContest?.data!, Number(size?.width) >= 992 ? 6 : 1)} />
        <Introduction data={resourcesContest?.data} />
        <WhyContest />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default Contests;
