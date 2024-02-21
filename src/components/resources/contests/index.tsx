'use client';
import { useGetContests, useGetReviews } from '@/apis/strapi-client/strapi';
import Reviews from '@/components/common/reviews';
import { Layout } from 'antd';
import { usePathname } from 'next/navigation';
import React from 'react';
import Banner from './banner';
import { filterContest, formatContestsByQuarter } from './define';
import styles from './index.module.scss';
import Introduction from './introduction';
import MonthlyContestPC from './monthly-contest-pc';
import MonthlyContestMB from './monthly-contest-mb';
import WhyContests from './why-contests';
import { useSize } from 'ahooks';

const { Content } = Layout;

const Contests: React.FC = () => {
  const pathname = usePathname();
  const size = useSize(document.querySelector('body'));
  const { data: resourcesContest } = useGetContests();
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname]
  });
  return (
    <Layout className={styles.main}>
      <Content>
        <Banner />
        {
          Number(size?.width) <= 992 ?
            <MonthlyContestMB data={formatContestsByQuarter(filterContest(resourcesContest!), 1)} />
            :
            <MonthlyContestPC data={formatContestsByQuarter(filterContest(resourcesContest!), Number(size?.width) <= 1200 ? 3 : 6)} />
        }
        <Introduction data={filterContest(resourcesContest!)} />
        <WhyContests />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default Contests;
