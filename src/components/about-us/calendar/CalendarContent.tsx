import { Button, Typography } from 'antd';

import React from 'react';

const { Title } = Typography;
import styles from './CalendarContent.module.scss';
import { ScheduleOutlined } from '@ant-design/icons';
import TimelineComponent from '@/components/common/timeline';

const CalendarContent: React.FC = () => {
  interface Item {
    label: string;
    children: Item[] | string;
  }

  const items: Item[] = [
    {
      label: 'Jan',
      children: [
        {
          label: 'In the 20/21 season',
          children:
            'four students from the USACO Grandmaster Class (Tier 5) simultaneously entered the USACO US Camp (USACO Finalist).',
        },
        {
          label: 'In the 20/21 season',
          children:
            'four students from the USACO Grandmaster Class (Tier 5) simultaneously entered the USACO US Camp (USACO Finalist).',
        },
      ],
    },
    {
      label: 'Feb',
      children: [
        {
          label: 'In the 20/21 season',
          children:
            'four students from the USACO Grandmaster Class (Tier 5) simultaneously entered the USACO US Camp (USACO Finalist).',
        },
        {
          label: 'In the 20/21 season',
          children:
            'four students from the USACO Grandmaster Class (Tier 5) simultaneously entered the USACO US Camp (USACO Finalist).',
        },
      ],
    },
    {
      label: 'Mar',
      children: [
        {
          label: 'In the 20/21 season',
          children:
            'four students from the USACO Grandmaster Class (Tier 5) simultaneously entered the USACO US Camp (USACO Finalist).',
        },
        {
          label: 'In the 20/21 season',
          children:
            'four students from the USACO Grandmaster Class (Tier 5) simultaneously entered the USACO US Camp (USACO Finalist).',
        },
      ],
    },
    {
      label: 'Jan',
      children: [
        {
          label: 'In the 20/21 season',
          children:
            'four students from the USACO Grandmaster Class (Tier 5) simultaneously entered the USACO US Camp (USACO Finalist).',
        },
        {
          label: 'In the 20/21 season',
          children:
            'four students from the USACO Grandmaster Class (Tier 5) simultaneously entered the USACO US Camp (USACO Finalist).',
        },
      ],
    },
    {
      label: 'Feb',
      children: [
        {
          label: 'In the 20/21 season',
          children:
            'four students from the USACO Grandmaster Class (Tier 5) simultaneously entered the USACO US Camp (USACO Finalist).',
        },
        {
          label: 'In the 20/21 season',
          children:
            'four students from the USACO Grandmaster Class (Tier 5) simultaneously entered the USACO US Camp (USACO Finalist).',
        },
      ],
    },
    {
      label: 'Mar',
      children: [
        {
          label: 'In the 20/21 season',
          children:
            'four students from the USACO Grandmaster Class (Tier 5) simultaneously entered the USACO US Camp (USACO Finalist).',
        },
        {
          label: 'In the 20/21 season',
          children:
            'four students from the USACO Grandmaster Class (Tier 5) simultaneously entered the USACO US Camp (USACO Finalist).',
        },
      ],
    },
    {
      label: 'New Year',
      children: [],
    },
  ];

  return (
    <>
      <div className={styles.calendarContent}>
        <div className={`${styles.calendarContainer} container`}>
          <Title className={styles.title}>2023 X-Camp Calendar</Title>
          <div className={styles.listContainer}>
            <Button className={styles.bookButton}>
              <ScheduleOutlined />
            </Button>
            <TimelineComponent items={items} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarContent;
