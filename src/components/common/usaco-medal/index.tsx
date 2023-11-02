'use client';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { Col, Row, Space, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';
import CountUp from 'react-countup';
import styles from './index.module.scss';

const { Title, Text } = Typography;

interface USACOMedalProps {
  backgroundColor?: '#FFFFFF' | '#EFEFEF' | '#F5F5F5';
  showShadow?: boolean;
  showLogo?: boolean;
  showTitle?: boolean;
  spacePaddingTop?: number;
  rowStyle?: React.CSSProperties;
}

const USACOMedal: React.FC<USACOMedalProps> = ({ backgroundColor = '#FFFFFF', showShadow = true, showLogo = true, showTitle = true, spacePaddingTop = 25, rowStyle }) => {
  const router = useRouter();
  const { format: t } = useLang();
  const isMobile = useMobile();

  const data = [
    {
      count: 200,
      title: t('USACOSilverAndAbove'),
      color: '#050260',
      style: styles.bronzeMedal,
      suffix: true
    },
    {
      count: 30,
      title: t('USACOPlatinum'),
      color: '#050260',
      style: styles.silverMedal,
      suffix: true
    },
    {
      count: 12,
      title: t('USACOFinalist'),
      color: '#D46B14',
      style: styles.goldMedal
    },
    {
      count: 1,
      title: t('EGOIGoldMedalist'),
      color: '#FFAD11',
      style: styles.platinumMedal
    }
  ];

  return (
    <div className={showLogo ? `${styles.usacoBgContainer}` : `${styles.usacoContainer}`} style={{ backgroundColor, boxShadow: showShadow ? '0 6px 14px -2px rgb(216 216 216 / 30%)' : '' }}>
      {showTitle && (
        <Col span={24} className={styles.titleContainer}>
          <Title className={styles.title} onClick={() => router.push('/about-us/achievements')}>
            {t('Our')} {' USACO '}
            <Text className={styles.title} style={{ color: '#ffad11' }}>
              {t('Achievements')}
            </Text>
          </Title>
        </Col>
      )}
      <Row gutter={16} className={`container ${styles.row}`} style={rowStyle}>
        {data?.map((item) => (
          <Col key={item?.title} span={6} className={styles.col}>
            <div className={item?.style}>
              <Space direction="vertical" align="center" size={isMobile ? 0 : 8} style={{ paddingTop: spacePaddingTop }}>
                <CountUp className={styles.medalCount} style={{ color: item?.color }} end={item?.count} duration={10} suffix={item?.suffix ? '+' : undefined} />
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
