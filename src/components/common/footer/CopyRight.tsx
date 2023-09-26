'use client';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { CommentOutlined, HistoryOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Col, Image, Row, Space, Typography } from 'antd';
import Link from 'next/link';
import React from 'react';
import CopyRightIcons from '../copy-right-icons';
import styles from './CopyRight.module.scss';

const { Title, Paragraph, Text } = Typography;

const CopyRight: React.FC = () => {
  const { format: t } = useLang();
  const isMobile = useMobile();
  return (
    <div className={styles.copyRightContainer}>
      <div className={`${styles.copyRight} container`}>
        <Row justify="space-between" align="middle">
          <Col xs={24} sm={24} md={24} lg={12} order={isMobile ? 2 : 1}>
            <Space direction="vertical" className={styles.spaceLeft} size={48}>
              {isMobile ? (
                <>
                  <div className={styles.bar} />
                  <CopyRightIcons />
                </>
              ) : (
                <Space direction="vertical">
                  <Image alt="logo" src="/logo/logo.png" preview={false} className={styles.image} />
                  <Image alt="slogan" preview={false} src="/image/home/footer-slogan.png" width={220} height={24} />
                </Space>
              )}

              <Space direction="vertical">
                <Paragraph className={styles.paragraph}>
                  <PhoneOutlined />
                  <Text className={styles.text} style={{ textDecoration: 'underline' }}>
                    {t('Tel')}+1 - 510-708-8390
                  </Text>
                </Paragraph>
                <Paragraph className={styles.paragraph}>
                  <CommentOutlined />
                  <Text className={styles.text} style={{ textDecoration: 'underline' }}>
                    {t('Text')}408-634-0218
                  </Text>
                </Paragraph>
                <Paragraph className={styles.paragraph}>
                  <MailOutlined />
                  <Text className={styles.text} style={{ textDecoration: 'underline' }}>
                    <a href="mailto:info@x-camp.academy" style={{ color: 'inherit' }}>
                      Email: info@x-camp.academy
                    </a>
                  </Text>
                </Paragraph>
                <Paragraph className={styles.paragraph}>
                  <HistoryOutlined />
                  <Text className={styles.text}>Office Hour: Tue - Sun (Monday Off)</Text>
                </Paragraph>
              </Space>
            </Space>
          </Col>

          <Col xs={24} sm={24} md={24} lg={12} order={isMobile ? 1 : 2}>
            <Space align="start" className={styles.spaceRight}>
              <div>
                <Title className={styles.text}>X-Camp Academy</Title>
                <Space direction="vertical">
                  <Link href={'/about-us/calendar'}>{t('SchoolCalendar')}</Link>
                  <Link href={'/courses#classify0'}>{'Online Courses'}</Link>
                  <Link href={'/courses#camps'}>{t('In-personCamps')}</Link>
                </Space>
              </div>

              <div>
                <Title className={styles.text}>Activity</Title>
                <Space direction="vertical">
                  <Link href={'/resources/weekly-open-house'}>{t('WeeklyOpenHouse')}</Link>
                  <Link href={'/about-us/calendar'}>{'Event Calendar'}</Link>
                  <a href={'/resources/usaco-live-solutions'}>{'USACO Live Solution'}</a>
                </Space>
              </div>

              <div>
                <Title className={styles.text}>{'Help Center'}</Title>
                <Space direction="vertical">
                  <Link href={'/about-us/contact-us'}>{'Contact Us'}</Link>
                  <Link href={'/about-us/contact-us'}>{'Join Us'}</Link>
                  <Link href={'/about-us/help-center'}>{'FAQ'}</Link>
                </Space>
              </div>
            </Space>
          </Col>
        </Row>

        {!isMobile && (
          <>
            <div className={styles.bar} />
            <div className={styles.bottomContainer}>
              <Title className={styles.bottomTitle}>Copyright @ 2023 X-Camp</Title>
              <CopyRightIcons />
            </div>
          </>
        )}
      </div>
      {isMobile && <div className={styles.mobileCopyRight}>Copyright @ 2023 X-Camp</div>}
    </div>
  );
};

export default CopyRight;
