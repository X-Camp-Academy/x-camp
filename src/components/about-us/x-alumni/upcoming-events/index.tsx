'use client';
import { NewEventCategory } from '@/apis/strapi-client/define';
import { useGetNewEvent } from '@/apis/strapi-client/strapi';
import ColorfulCard from '@/components/common/colorful-card';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { formatTimezone, getTransResult } from '@/utils/public';
import { GlobalOutlined, HistoryOutlined, LaptopOutlined, RightCircleOutlined, RightOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Space, Typography } from 'antd';
import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';

const { Title, Paragraph, Text } = Typography;

const UpcomingEvents: React.FC = () => {
  const { lang, format: t } = useLang();
  const isMobile = useMobile();

  const { data: newEventData } = useGetNewEvent({
    tag: NewEventCategory.Events,
    current: 1,
    pageSize: 25
  });

  const upComingEvent = newEventData?.data?.filter((item) => {
    return item?.attributes?.startDateTime && new Date(item?.attributes?.startDateTime).getTime() - new Date().getTime() > 0;
  });

  return (
    <div className={styles.upcomingEventsContainer}>
      <div className="container">
        <Space className={styles.topSpace} direction={isMobile ? 'vertical' : 'horizontal'}>
          <Space direction="vertical">
            <Title className={styles.title}>{t('UpcomingEvents')}</Title>
            <Paragraph className={styles.paragraph}>{t('UpcomingEvents.Desc')}</Paragraph>
          </Space>
          <button className={styles.button}>
            <Link href="/resources/education-forum">{t('ViewMoreEvents')}</Link>
            <RightOutlined />
          </button>
        </Space>

        <Row gutter={32} className={styles.row}>
          {upComingEvent?.slice(0, 6)?.map((item, index) => {
            const { dayjsTime: startTime } = formatTimezone(item?.attributes?.startDateTime);
            const { dayjsTime: endTime, timezone: endTimeZone } = formatTimezone(item?.attributes?.endDateTime);
            const isLinked = !item.attributes.geographicallyAddress && item.attributes.link && item.attributes.onlinePlatform;
            return (
              <Col key={item?.id} xs={24} sm={24} md={8} style={{ marginTop: 20 }}>
                <ColorfulCard border="bottom" index={index}>
                  <Card>
                    <Space direction="vertical">
                      <Text className={styles.cardMonth}>{startTime.format('MMMM')}</Text>
                      <Text className={styles.cardDay}>{startTime.format('DD')}</Text>
                      <Paragraph
                        ellipsis={{
                          rows: 2,
                          tooltip: getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn)
                        }}
                        className={styles.cardParagraph}
                      >
                        {getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn)}
                        {isLinked && <Button href={item.attributes.link} icon={<RightCircleOutlined />} className={styles.link} type="link" />}
                      </Paragraph>
                      <Space direction="vertical">
                        <Text className={styles.cardText}>
                          <HistoryOutlined className={styles.cardIcon} />
                          {`${startTime.format('dddd, MMMM DD, YYYY hh:mm A')} - ${endTime.format('dddd, MMMM DD, YYYY hh:mm A')} ${endTimeZone}`}
                        </Text>
                        <Text className={styles.cardText}>
                          <LaptopOutlined className={styles.cardIcon} />
                          {isLinked ? (
                            <a href={item.attributes.link} style={{ color: '#666666' }}>
                              {item.attributes.onlinePlatform}
                            </a>
                          ) : (
                            item.attributes.geographicallyAddress
                          )}
                        </Text>
                        <Text className={styles.cardText}>
                          <GlobalOutlined className={styles.cardIcon} />
                          {item?.attributes?.eventLanguage || 'English'}
                        </Text>
                        <Text className={styles.cardText}>
                          <UserOutlined className={styles.cardIcon} />
                          {`Organizer ${item?.attributes?.organizer ? '| ' + item?.attributes?.organizer : ''} `}
                        </Text>
                      </Space>
                    </Space>
                  </Card>
                </ColorfulCard>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default UpcomingEvents;
