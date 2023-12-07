import { GetSchoolCalendar } from '@/apis/strapi-client/define';
import { useGetSchoolCalendar } from '@/apis/strapi-client/strapi';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import TimelineComponent from '@/components/common/timeline';
import { useLang } from '@/hoc/with-intl/define';
import { getTransResult } from '@/utils/public';
import { ScheduleOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import React from 'react';
import styles from './index.module.scss';

const { Title } = Typography;

interface Item {
  label: string;
  children: Item[] | string;
}

const CalendarContent: React.FC = () => {
  const { lang, format: t } = useLang();
  dayjs.extend(isSameOrAfter);
  const { data: schoolCalendar } = useGetSchoolCalendar();

  const formatCalendar = (data: StrapiResponseDataItem<GetSchoolCalendar>[] | undefined): Item[] => {
    const currentMonth = dayjs().month();

    const groupedData: {
      [month: string]: Item[];
    } = {};

    // 从当前月份开始的12个月
    for (let i = 0; i < 12; i++) {
      const month = (currentMonth + i) % 12;
      groupedData[month] = [];
    }

    data?.forEach((item) => {
      const month = dayjs(item?.attributes?.startDate).month();
      if (!groupedData[(month + currentMonth) % 12]) {
        groupedData[(month + currentMonth) % 12] = [];
      }
      if (dayjs(item?.attributes.startDate).isSameOrAfter(dayjs(), 'month')) {
        groupedData[month].push({
          label: getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn)!,
          children: getTransResult(lang, item?.attributes?.descriptionZh, item?.attributes?.descriptionEn)!
        });
      }
    });

    const res = Object.entries(groupedData).map(([label], _, array) => {
      const month = (currentMonth + +label) % 12;

      return {
        label: dayjs().month(month).format('MMM'),
        children: array[month][1]
      };
    });

    return [...res, { label: '...', children: [] }];
  };

  return (
    <div className={styles.calendarContent}>
      <div className={`${styles.calendarContainer} container`}>
        <Title className={styles.title}>{t('XCampCalendar')}</Title>
        <div className={styles.listContainer}>
          <div className={styles.bookButton}>
            <ScheduleOutlined />
          </div>
          <TimelineComponent items={formatCalendar(schoolCalendar)} />
        </div>
      </div>
    </div>
  );
};

export default CalendarContent;
