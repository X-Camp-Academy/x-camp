import { useModalVisible } from '@/hoc/WithModalVisible';
import { useLang } from '@/hoc/with-intl/define';
import { CaretRightOutlined } from '@ant-design/icons';
import { Button, Col, Row, Space, Typography } from 'antd';
import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';

const { Paragraph } = Typography;

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const { setWeeklyOpenHouseVisible } = useModalVisible();
  return (
    <div className={styles.banner}>
      <div className={`${styles.content} container`}>
        <Row>
          <Col xs={24} sm={24} md={14}>
            <Space direction={'vertical'}>
              <div className={styles.title}>{t('CourseSchedule')}</div>
              <div>
                <Paragraph className={styles.paragraph}>{t('CourseSchedule.Banner.Desc1')}</Paragraph>
                <Paragraph className={styles.paragraph}>{t('CourseSchedule.Banner.Desc2')}</Paragraph>
              </div>
              <div className={styles.contact}>
                <Link href="/about-us/contact-us" target="_blank">
                  {t('CourseSchedule.Question')}
                </Link>
              </div>
            </Space>
          </Col>
          <Col xs={24} sm={24} md={{ span: 8, offset: 2 }} className={styles.rightCol}>
            <Space direction={'vertical'} size={48}>
              <Button type={'primary'} className={styles.button} icon={<CaretRightOutlined />}>
                <Link href="/assessment" target="_blank">
                  {t('WhatWeProvide')}
                </Link>
              </Button>
              <Button
                type={'primary'}
                className={styles.button}
                icon={<CaretRightOutlined />}
                onClick={() => window.open('https://calendar.google.com/calendar/u/0/selfsched?sstoken=UURhaXVoUDNzQVlLfGRlZmF1bHR8ZjkwM2I4MzViZjVlNGE1ZGFkMzc1NDQwMDFiOTMzNDQ')}
              >
                {t('1On1Consultation')}
              </Button>
              <Button type={'primary'} className={styles.button} icon={<CaretRightOutlined />} onClick={() => setWeeklyOpenHouseVisible(true)}>
                {t('TuesdayOpenHouse')}
              </Button>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Banner;
