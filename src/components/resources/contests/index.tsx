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
import { useMobile } from '@/utils';

const { Content } = Layout;

const Contests: React.FC = () => {
  const pathname = usePathname();
  const { data: resourcesContest } = useGetContests();
  const isMobile = useMobile();
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname]
  });
  return (
    <Layout className={styles.main}>
      <Content>
        <Banner />
        {
          isMobile ? <MonthlyContestMB data={formatContestsByQuarter(resourcesContest!, 1)} /> : <MonthlyContestPC data={formatContestsByQuarter(resourcesContest!, 6)} />
        }
        <Introduction data={filterContest(resourcesContest!)} />
        <WhyContests />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default Contests;
