import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { Col, Image, Row, Space, Typography } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import styles from './index.module.scss';

const { Title, Paragraph } = Typography;

const History: React.FC = () => {
  const { format: t } = useLang();
  const isMobile = useMobile();
  const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017];
  const currentYear = dayjs().year();
  const images = [
    {
      src: '/image/about-us/camps-1.png'
    },
    {
      src: '/image/about-us/camps-1.png'
    },
    {
      src: '/image/about-us/camps-1.png'
    },
    {
      src: '/image/about-us/camps-1.png'
    },
    {
      src: '/image/about-us/camps-1.png'
    },
    {
      src: '/image/about-us/camps-1.png'
    }
  ];
  return (
    <div className={styles.historyContainer}>
      <div className="container">
        <Title className={styles.title}>{t('HistoryOfXCamp.Title')}</Title>
        <Paragraph className={styles.paragraph}>{t('HistoryOfXCamp.Desc')}</Paragraph>

        <div className={styles.timeline}>
          {years?.map((item) => (
            <Space direction="vertical" key={item}>
              <i className={item === currentYear ? styles.activeTimeLineIcon : styles.timelineIcon} />
              <span className={item === currentYear ? styles.activeTimelineText : styles.timelineText}>{item}</span>
            </Space>
          ))}
          <div className={styles.line} />
        </div>

        <Row gutter={[16, 16]} className={styles.timeImage}>
          <Col xs={8} sm={8} md={8} lg={4}>
            <Image alt="" preview={false} src={images[0].src} className={isMobile ? styles.mobileImage : styles.image1} />
          </Col>
          <Col xs={8} sm={8} md={8} lg={4}>
            <Image alt="" preview={false} src={images[0].src} className={isMobile ? styles.mobileImage : styles.image2} />
          </Col>
          <Col xs={8} sm={8} md={8} lg={4}>
            <Image alt="" preview={false} src={images[0].src} className={isMobile ? styles.mobileImage : styles.image3} />
          </Col>
          <Col xs={8} sm={8} md={8} lg={4}>
            <Image alt="" preview={false} src={images[0].src} className={isMobile ? styles.mobileImage : styles.image4} />
          </Col>
          <Col xs={8} sm={8} md={8} lg={4}>
            <Image alt="" preview={false} src={images[0].src} className={isMobile ? styles.mobileImage : styles.image5} />
          </Col>
          <Col xs={8} sm={8} md={8} lg={4}>
            <Image alt="" preview={false} src={images[0].src} className={isMobile ? styles.mobileImage : styles.image6} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default History;