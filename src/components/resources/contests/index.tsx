'use client';
import { NewEventCategory } from '@/apis/strapi-client/define';
import { useGetNewEvent, useGetReviews } from '@/apis/strapi-client/strapi';
import Reviews from '@/components/common/reviews';
import { useSize } from 'ahooks';
import { Layout } from 'antd';
import { usePathname } from 'next/navigation';
import React from 'react';
import Banner from './banner';
import { filterContest, formatContestsByQuarter } from './define';
import styles from './index.module.scss';
import Introduction from './introduction';
import MonthlyContest from './monthly-contest';
import WhyContests from './why-contests';

const { Content } = Layout;

const Contests: React.FC = () => {
  const pathname = usePathname();
  const size = useSize(document.querySelector('body'));
  const { data: resourcesContest } = useGetNewEvent({
    tag: NewEventCategory.EventContest,
    current: 1,
    pageSize: 9999
  });

  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname]
  });
  return (
    <Layout className={styles.main}>
      <Content>
        <Banner />
        <MonthlyContest data={formatContestsByQuarter(resourcesContest?.data!, Number(size?.width) >= 992 ? 6 : 1)} />
        <Introduction data={filterContest(resourcesContest?.data)} />
        <WhyContests />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default Contests;
