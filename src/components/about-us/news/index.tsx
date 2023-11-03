'use client';
import { NewEventCategory } from '@/apis/strapi-client/define';
import { useGetNewEvent } from '@/apis/strapi-client/strapi';
import { Layout } from 'antd';
import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import SubscribeNewsletter from './subscribe-news-letter';

const Banner = dynamic(() => import('./banner'));
const NewsCard = dynamic(() => import('./news-card'));

const { Content } = Layout;

const NewsPage = () => {
  const [year, setYear] = useState('2023');
  const [current, setCurrent] = useState(1);

  const pathname = usePathname();
  const PAGE_SIZE = 15;
  const { data: newEventData, run: getNewEvent } = useGetNewEvent({
    current,
    pageSize: PAGE_SIZE,
    manual: true,
    pageName: [pathname]
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
            $eq: NewEventCategory.News
          },
          startDateTime: {
            $gte: String(dayjs(year).valueOf()),
            $lte: String(dayjs(String(+year + 1)).valueOf())
          }
        },
        pagination: {
          page: current,
          pageSize: PAGE_SIZE
        }
      });
    }
  }, [current, year]);

  return (
    <Layout className={styles.QAContainer}>
      <Content>
        <Banner />
        <NewsCard newEventData={newEventData?.data} current={current} setCurrent={setCurrent} pageSize={PAGE_SIZE} total={total} />
        <SubscribeNewsletter />
      </Content>
    </Layout>
  );
};

export default NewsPage;
