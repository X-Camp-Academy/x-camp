'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Layout } from 'antd';
import { useSize } from 'ahooks';
import Banner from './banner';
import MonthlyContest from './monthly-contest';
import Introduction from './introduction';
import WhyContest from './why-contest';
import Reviews from '@/components/common/reviews';
import { useGetNewEvent, useGetReviews } from '@/apis/strapi-client/strapi';
import { formatContestsByQuarter } from './define';
import { NewEventCategory } from '@/apis/strapi-client/define';
import styles from './index.module.scss';

const { Content } = Layout;

const Contests: React.FC = () => {
  const { data: resourcesContest } = useGetNewEvent({
    tag: NewEventCategory.EventContest,
    current: 1,
    pageSize: 9999,
  });
  const pathname = usePathname();
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname],
  });
  const size = useSize(document.querySelector('body'));

  return (
    <Layout className={styles.main}>
      <Content>
        <Banner />
        <MonthlyContest
          data={formatContestsByQuarter(
            resourcesContest?.data!,
            Number(size?.width) >= 992 ? 6 : 1
          )}
        />
        <Introduction data={resourcesContest?.data} />
        <WhyContest />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default Contests;
