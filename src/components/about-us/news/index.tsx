'use client';
import { NewEventCategory } from '@/apis/strapi-client/define';
import { useGetNewEvent } from '@/apis/strapi-client/strapi';
import { Layout } from 'antd';
import dayjs from 'dayjs';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import SubscribeNewsletter from './subscribe-news-letter';
import Banner from './banner';
import NewsCard from './news-card';

const { Content } = Layout;

const NewsPage = () => {
  const year = dayjs().format('YYYY');
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
            $gte: String(dayjs(String(+year - 1)).valueOf()),
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
