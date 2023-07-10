import React from 'react';
import styles from './index.module.scss';
import { Button, Col, Descriptions, Row } from 'antd';
import {
  ClockCircleOutlined,
  LaptopOutlined,
  RightCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import ColorfulCard from '@/components/common/colorful-card';
import XCollapse from '@/components/common/collapse';

const UpcomingEvents = () => {
  return (
    <div className={styles.content}>
      <div className="container">
        <XCollapse
          header={{
            title: 'Upcoming Events',
            description:
              'Peek at some alumni events happening just around the corner.',
          }}
        >
          <Row className={styles.cards} gutter={[32, 32]}>
            {[1, 2, 3]?.map((v, index) => (
              <Col key={index} md={24} lg={8}>
                <ColorfulCard border={'bottom'} animate={false} index={index}>
                  <div className={styles.card}>
                    <div className={styles.date}>
                      <div className={styles.month}>{'JUN'}</div>
                      <div className={styles.day}>{'10'}</div>
                    </div>
                    <div className={styles.title}>
                      {
                        "USACO Director Brian Dean's Q&A Session - Webinar Recording"
                      }
                      <Button
                        type="link"
                        className={styles.btn}
                        icon={<RightCircleOutlined />}
                      />
                    </div>
                    <Descriptions column={1} className={styles.descriptions}>
                      <Descriptions.Item label={<ClockCircleOutlined />}>
                        {'Tuesday, June 13, 2023 | 6:00 PM - 7:00 PM PDT'}
                      </Descriptions.Item>
                      <Descriptions.Item label={<LaptopOutlined />}>
                        {'Zoom'}
                      </Descriptions.Item>
                      <Descriptions.Item label={<UserOutlined />}>
                        {'Organizer | X-Camp '}
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                </ColorfulCard>
              </Col>
            ))}
          </Row>
        </XCollapse>
      </div>
    </div>
  );
};

export default UpcomingEvents;
