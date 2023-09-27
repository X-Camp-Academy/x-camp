import { Space, Timeline } from 'antd';
import React from 'react';
import styles from './index.module.scss';

interface Item {
  label: string;
  children: Item[] | string;
}

interface Props {
  items: Item[];
}

const TimelineComponent: React.FC<Props> = ({ items }) => {
  const renderTimelineItems = (items: Item[]) => {
    return items?.map((item, index) => (
      <Timeline.Item key={index} className={styles.timelineItem}>
        <div className={styles.month}>{item?.label}</div>
        {(item?.children as Item[])?.map((childrenEvent, index) => (
          <div key={index}>
            <Space>
              <div>
                <div className={styles.line} />
              </div>
              <div className={styles.circle} />
              <div className={styles.subTitle}>{childrenEvent?.label}</div>
            </Space>
            {!Array.isArray(childrenEvent?.children) && <div className={styles.subContent}>{childrenEvent?.children}</div>}
          </div>
        ))}
      </Timeline.Item>
    ));
  };

  return <Timeline className={styles.timeline}>{renderTimelineItems(items)}</Timeline>;
};

export default TimelineComponent;
