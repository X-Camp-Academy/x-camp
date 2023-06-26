import React from 'react';
import styles from './index.module.scss';
import { Button, Col, Row, Space, Typography } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
const { Paragraph } = Typography;
const TopBanner = () => {
  return (
    <div className={styles.topBanner}>
      <div className={'container'} style={{ height: '100%' }}>
        <Space className={styles.content} size={77}>
          <Space direction={'vertical'}>
            <div className={styles.title}>2023 Course Schedule</div>
            <div>
              <Paragraph className={styles.paragraph}>
                We offer a variety of courses tailored to suit the student’s
                academic goals and schedule.
              </Paragraph>
              <Paragraph className={styles.paragraph}>
                Programming fundamentals and intensive classes and more
                competition-related courses
              </Paragraph>
            </div>
            <div className={styles.contact}>
              *Any questions please contact us
            </div>
          </Space>
          <Space direction={'vertical'} size={32}>
            <Button
              type={'primary'}
              className={styles.button}
              icon={<CaretRightOutlined />}
            >
              Free Test
            </Button>
            <Button
              type={'primary'}
              className={styles.button}
              icon={<CaretRightOutlined />}
            >
              Trial Course
            </Button>
            <Button
              type={'primary'}
              className={styles.button}
              icon={<CaretRightOutlined />}
            >
              Entrance Test
            </Button>
          </Space>
        </Space>
      </div>
    </div>
  );
};

export default TopBanner;
