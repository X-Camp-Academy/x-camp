import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import ActivityItem from './activity-item';
import { useGetNewEvent } from '@/apis/strapi-client/strapi';
import {
  ActivityCategory,
  GetNewEvent,
  GetNewEventRequest,
  NewEventCategory,
} from '@/apis/strapi-client/define';
import {
  AndOrFilters,
  FilterFields,
  StrapiMedia,
} from '@/apis/strapi-client/strapiDefine';
import { Pagination, Row, Space } from 'antd';
interface ActivityItem {
  title: string;
  key: ActivityCategory | 'All Education Forums';
}
const Activities = () => {
  //useGetNewEvent
  const pageSize = 12;
  const [current, setCurrent] = useState<number>(1);
  const tag = NewEventCategory.Activity;
  const { data: newEventData, runAsync: getNewEventData } = useGetNewEvent({
    tag,
    current,
    pageSize,
    manual: true,
  });
  const [selectedItem, setSelectedItem] = useState<
    ActivityCategory | 'All Education Forums'
  >(ActivityCategory.SchoolLifeSharing);
  useEffect(() => {
    const commonParams: GetNewEventRequest = {
      populate: '*',
      sort: ['order:desc'],
      pagination: {
        page: current,
        pageSize,
      },
    };
    let filters:
      | Partial<FilterFields<GetNewEvent>>
      | AndOrFilters<FilterFields<GetNewEvent>> = {
      tags: {
        $eq: tag,
      },
    };
    if (selectedItem !== 'All Education Forums') {
      filters = {
        ...filters,
        activityCategory: {
          $eq: selectedItem,
        },
      };
    }
    getNewEventData({
      ...commonParams,
      filters,
    });
  }, [tag, selectedItem]);

  const items: ActivityItem[] = [
    {
      title: "School life's sharing",
      key: ActivityCategory.SchoolLifeSharing,
    },
    {
      title: 'Coding Education',
      key: ActivityCategory.CodingEducation,
    },
    {
      title: 'Career Path',
      key: ActivityCategory.CareerPath,
    },
    {
      title: 'Research',
      key: ActivityCategory.Research,
    },
    {
      title: 'All Education Forums',
      key: 'All Education Forums',
    },
  ];
  return (
    <div className={styles.content}>
      <div className="container">
        <div className={styles.toolBar}>
          {items.map((v) => {
            return (
              <div
                className={`${styles.toolBarItem} ${
                  v.key === selectedItem ? styles.selectedToolBarItem : ''
                }`}
                key={v.key}
                onClick={() => {
                  setSelectedItem(v.key);
                }}
              >
                {v.title}
              </div>
            );
          })}
        </div>
        <Space className={styles.titleContain}>
          <div className={styles.activityTitle}>{selectedItem}</div>
          <div className={styles.pageTotal}>
            {newEventData?.meta?.pagination?.pageCount} educational forum
          </div>
        </Space>
        <Row gutter={[32, 32]}>
          {newEventData?.data?.map((v, index) => (
            /* 新版UI的分页器待完成 */
            <ActivityItem {...v} key={index} index={index} />
          ))}
        </Row>

        <Pagination
          className={styles.pagination}
          pageSize={pageSize}
          current={current}
          total={newEventData?.meta?.pagination?.pageCount}
          onChange={(page) => setCurrent(page)}
        />
      </div>
    </div>
  );
};

export default Activities;
