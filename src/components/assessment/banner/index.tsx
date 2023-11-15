import { useLang } from '@/hoc/with-intl/define';
import { CaretRightOutlined } from '@ant-design/icons';
import { Button, Col, Row, Space, Typography } from 'antd';
import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';

const { Paragraph } = Typography;

const Banner: React.FC = () => {
  const { format: t } = useLang();
  return (
    <div className={styles.banner}>
      <div className={`${styles.content} container`}>
        <Row>
          <Col xs={24} sm={24} md={14}>
            <Space direction={'vertical'}>
              <div className={styles.title}>{t('WhatWeProvide')}</div>
              <div>
                <Paragraph className={styles.paragraph}>{t('Assessment.Banner.Description')}</Paragraph>
              </div>
            </Space>
          </Col>
          <Col xs={24} sm={24} md={{ span: 8, offset: 2 }} className={styles.rightCol}>
            <Space direction={'vertical'} size={32} className={styles.btnGroup}>
              <Button type={'primary'} className={styles.button} icon={<CaretRightOutlined />}>
                <Link href="https://calendar.google.com/calendar/u/0/selfsched?sstoken=UURhaXVoUDNzQVlLfGRlZmF1bHR8ZjkwM2I4MzViZjVlNGE1ZGFkMzc1NDQwMDFiOTMzNDQ" target="_blank">
                  {t('Schedule1On1Consultation')}
                </Link>
              </Button>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Banner;
