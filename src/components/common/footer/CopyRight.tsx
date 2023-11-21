'use client';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { CommentOutlined, HistoryOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Col, Image, Row, Space, Typography } from 'antd';
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
            <Space direction="vertical" className={styles.spaceLeft} size={isMobile ? 16 : 48}>
              {isMobile ? (
                <>
                  <div className={styles.bar} />
                  <CopyRightIcons />
                </>
              ) : (
                <Space direction="vertical">
                  <Image alt="logo" src="/assets/logo.png" preview={false} className={styles.image} />
                  <Image alt="slogan" preview={false} src="/image/home/footer-slogan.svg" style={{ marginTop: 15 }} />
                </Space>
              )}

              <Space direction="vertical">
                <Paragraph className={styles.paragraph}>
                  <PhoneOutlined rotate={90} />
                  <Text className={styles.text} style={{ textDecoration: 'underline' }}>
                    {t('Tel')}+1 - 510-708-8390
                  </Text>
                </Paragraph>
                <Paragraph className={styles.paragraph}>
                  <CommentOutlined />
                  <Text className={styles.text} style={{ textDecoration: 'underline' }}>
                    {t('Text')}+1 - 408-634-0218
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
                  <Text className={styles.text}>9:00 AM - 8:00 PM PT (Monday Off)</Text>
                </Paragraph>
              </Space>
            </Space>
          </Col>

          <Col xs={24} sm={24} md={24} lg={12} order={isMobile ? 1 : 2}>
            <Space align="start" className={styles.spaceRight}>
              <div>
                <Title className={styles.text}>X-Camp Academy</Title>
                <Space direction="vertical">
                  <a href={'/about-us/calendar'}>{t('SchoolCalendar')}</a>
                  <a href={'/courses#weekly'}>{t('WeeklyClasses')}</a>
                  <a href={'/courses#camps'}>{t('In-personCamps')}</a>
                </Space>
              </div>

              <div>
                <Title className={styles.text}>{t('Activity')}</Title>
                <Space direction="vertical">
                  <a href={'/courses/weekly-open-house'}>{t('WeeklyOpenHouse')}</a>
                  <a href={'/resources/education-forum'}>{t('EducationForum')}</a>
                  <a href={'/courses/student-recommend'}>{t('ReferralProgram')}</a>
                </Space>
              </div>

              <div>
                <Title className={styles.text}>{t('HelpCenter')}</Title>
                <Space direction="vertical">
                  <a href={'/about-us/contact-us'}>{t('ContactUs')}</a>
                  <a href={'/about-us/join-us'}>{t('JoinUs')}</a>
                  <a href={'/about-us/help-center'}>{t('FAQs')}</a>
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
      {isMobile && <div className={styles.mobileCopyRight}>Copyright @ 2017-2023 X-Camp</div>}
    </div>
  );
};

export default CopyRight;
