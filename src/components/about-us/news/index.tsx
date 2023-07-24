'use client';
import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import styles from './index.module.scss';
import dynamic from 'next/dynamic';
import { useGetNewEvent } from '@/apis/strapi-client/strapi';
import { NewEventCategory } from '@/apis/strapi-client/define';
import dayjs from 'dayjs';

const TopBanner = dynamic(() => import('./TopBanner'));
const Partners = dynamic(() => import('@/components/home/Partners'));
const BecomePartner = dynamic(() => import('./BecomePartner'));
const NewsCard = dynamic(() => import('./news-card'));

const { Content } = Layout;

const NewsPage = () => {
  const [year, setYear] = useState('2023');
  const [current, setCurrent] = useState(1);
  const PAGE_SIZE = 15;
  const { data: newEventData, run: getNewEvent } = useGetNewEvent({
    current,
    pageSize: PAGE_SIZE,
    manual: true,
  });

  const total = newEventData?.meta?.pagination?.total;

  useEffect(() => {
    if (year) {
      setCurrent(1);
    }
  }, [year]);

  useEffect(() => {
    if (current && year) {
      getNewEvent({
        populate: '*',
        sort: ['order:desc'],
        filters: {
          tags: {
            $eq: NewEventCategory.News,
          },
          startDateTime: {
            $gte: String(dayjs(year).valueOf()),
            $lte: String(dayjs(String(+year + 1)).valueOf()),
          },
        },
        pagination: {
          page: current,
          pageSize: PAGE_SIZE,
        },
      });

    }
  }, [current, year]);

  return (
    <Layout className={styles.QAContainer}>
      <Content>
        <TopBanner year={year} setYear={setYear} />
        <NewsCard
          newEventData={newEventData?.data}
          current={current}
          setCurrent={setCurrent}
          pageSize={PAGE_SIZE}
          total={total}
        />
        <Partners />
        <BecomePartner />
      </Content>
    </Layout>
  );
};

export default NewsPage;
