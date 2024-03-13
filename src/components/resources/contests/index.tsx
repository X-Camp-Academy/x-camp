'use client';
import { useGetContests, useGetReviews } from '@/apis/strapi-client/strapi';
import Reviews from '@/components/common/reviews';
import { useSize } from 'ahooks';
import { Layout } from 'antd';
import dayjs from 'dayjs';
import { usePathname } from 'next/navigation';
import React from 'react';
import Banner from './banner';
import { filterContest, formatContestsByQuarter } from './define';
import styles from './index.module.scss';
import Introduction from './introduction';
import MonthlyContestMB from './monthly-contest-mb';
import MonthlyContestPC from './monthly-contest-pc';
import WhyContests from './why-contests';

const { Content } = Layout;

const Contests: React.FC = () => {
  const pathname = usePathname();
  const size = useSize(document.querySelector('body'));
  const { data: resourcesContest } = useGetContests();
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname]
  });
  const currentYear = dayjs().year();
  const currentYearData = resourcesContest?.filter((item) => {
    const startDateTime = dayjs(item.attributes.startDateTime);
    return startDateTime.year() === currentYear;
  });
  return (
    <Layout className={styles.main}>
      <Content>
        <Banner />
        {Number(size?.width) <= 992 ? (
          <MonthlyContestMB data={formatContestsByQuarter(filterContest(currentYearData!, false), 1)} />
        ) : (
          <MonthlyContestPC data={formatContestsByQuarter(filterContest(currentYearData!, false), Number(size?.width) <= 1200 ? 3 : 6)} />
        )}
        <Introduction data={filterContest(resourcesContest!, true)} />
        <WhyContests />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default Contests;
