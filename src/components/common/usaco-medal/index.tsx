'use client';
import React from 'react';
import { Space, Row, Col, Typography } from 'antd';
import CountUp from 'react-countup';
import { useLang } from '@/hoc/with-intl/define';
import styles from './index.module.scss';

const { Title, Text } = Typography;

interface USACOMedalProps {
  showTitle?: boolean;
}

const USACOMedal: React.FC<USACOMedalProps> = ({ showTitle = true }) => {
  const { format: t } = useLang();

  const data = [
    {
      count: 200,
      title: t('USACOSilverAndAbove'),
      color: '#00A0E9',
      style: styles.bronzeMedal,
      suffix: true
    },
    {
      count: 30,
      title: t('USACOPlatinum'),
      color: '#FFD600',
      style: styles.silverMedal,
    },
    {
      count: 12,
      title: t('USACOFinalist'),
      color: '#FFAD11',
      style: styles.goldMedal,
    },
    {
      count: 1,
      title: t('EGOIGoldMedalist'),
      color: '#D46B14',
      style: styles.platinumMedal,
    },
  ];

  return (
    <div className={`${styles.usacoContainer} `}>
      {
        showTitle && <Col span={24} className={styles.titleContainer}>
          <Title className={styles.title}>
            Our&nbsp;
            <Text className={styles.title} style={{ color: '#ffad11' }}>Achievements</Text>
          </Title>
        </Col>
      }
      <Row gutter={16} className={`container ${styles.row}`}>
        {data?.map(item => (
          <Col
            key={item?.title}
            span={6}
            className={styles.col}
          >
            <div className={item?.style}>
              <Space direction="vertical">
                <CountUp
                  className={styles.medalCount}
                  style={{ color: item?.color }}
                  end={item?.count}
                  duration={20}
                  suffix={item?.suffix ? '+' : undefined}
                  scrollSpyDelay={1000}
                  enableScrollSpy
                />
                <Text className={styles.medalTitle}>{item?.title}</Text>
              </Space>
            </div>
          </Col>
        ))}
      </Row>

    </div>
  );
};

export default USACOMedal;
