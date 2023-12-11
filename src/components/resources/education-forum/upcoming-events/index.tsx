import { EventLanguage, NewEventCategory } from '@/apis/strapi-client/define';
import { useGetNewEvent } from '@/apis/strapi-client/strapi';
import { useLang } from '@/hoc/with-intl/define';
import { formatTimezone, getTransResult } from '@/utils/public';
import { ClockCircleOutlined, GlobalOutlined, LaptopOutlined, RightCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Descriptions, Row, Typography } from 'antd';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './index.module.scss';
import ColorfulCard from '@/components/common/colorful-card';
import XCollapse from '@/components/common/collapse';

const { Title, Paragraph } = Typography;
const UpcomingEvents: React.FC = () => {
  const { lang, format: t } = useLang();
  const pathname = usePathname();
  const { data } = useGetNewEvent({
    tag: NewEventCategory.Events,
    current: 1,
    pageSize: 25,
    pageName: [pathname]
  });

  const newEventData = data?.data?.filter((item) => {
    return item?.attributes?.startDateTime && new Date(item?.attributes?.startDateTime).getTime() - new Date().getTime() > 0;
  });

  const upComingEvent = newEventData?.sort((a, b) => {
    const dateA = new Date(a?.attributes?.startDateTime).toISOString();
    const dateB = new Date(b?.attributes?.startDateTime).toISOString();
    return dateA.localeCompare(dateB);
  });

  const renderDateText = (startTime: string, endTime: string) => {
    const { utcTime: startUTCTime } = formatTimezone(startTime);
    const { utcTime: endUTCTime, timezone: endTimeZone } = formatTimezone(endTime);

    if (!endTime) {
      return `${startUTCTime.format('dddd, MMMM DD, YYYY hh:mm A')} ${endTimeZone}`;
    } else {
      return `${startUTCTime.format('dddd, MMMM DD, YYYY hh:mm A')} - ${endUTCTime.format('dddd, MMMM DD, YYYY hh:mm A')} ${endTimeZone}`;
    }
  };

  return (
    <>
      {upComingEvent && upComingEvent.length > 0 && (
        <div className={styles.content}>
          <div className="container">
            <XCollapse
              header={{
                title: t('UpcomingEvents'),
                description: t('UpcomingEvents.Desc')
              }}
            >
              <Row className={styles.cards} gutter={[32, 32]}>
                {upComingEvent?.slice(0, 3).map((item, index) => {
                  const { utcTime: startTime } = formatTimezone(item?.attributes?.startDateTime);
                  return (
                    <Col key={item?.id} xs={24} sm={24} md={12} lg={8}>
                      <ColorfulCard border={'bottom'} animate={false} index={index}>
                        <div className={styles.card}>
                          <div className={styles.date}>
                            <div className={styles.month}>{startTime.format('MMMM')}</div>
                            <div className={styles.day}>{startTime.format('DD')}</div>
                          </div>
                          <Title className={styles.title} ellipsis={{ rows: 1, tooltip: getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn) }}>
                            {getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn)}
                          </Title>
                          <Descriptions column={1} className={styles.descriptions}>
                            <Descriptions.Item label={<ClockCircleOutlined />}>
                              <Paragraph ellipsis={{ rows: 3, tooltip: renderDateText(item?.attributes?.startDateTime, item?.attributes?.endDateTime || '') }}>
                                {renderDateText(item?.attributes?.startDateTime, item?.attributes?.endDateTime || '')}
                              </Paragraph>
                            </Descriptions.Item>
                            <Descriptions.Item label={<UserOutlined />}>{`Organizer ${item?.attributes?.organizer ? '| ' + item?.attributes?.organizer : ''} `}</Descriptions.Item>

                            <Descriptions.Item label={<GlobalOutlined />}>{item?.attributes?.eventLanguage === EventLanguage.Chinese ? 'Chinese' : 'English'}</Descriptions.Item>

                            <Descriptions.Item label={<LaptopOutlined />}>
                              {!item.attributes.geographicallyAddress && item.attributes.link && item.attributes.onlinePlatform ? (
                                <a href={item.attributes.link} style={{ color: '#666666' }}>
                                  {item.attributes.onlinePlatform}
                                </a>
                              ) : (
                                item.attributes.geographicallyAddress
                              )}
                              {item.attributes.link && <Button type="link" className={styles.btn} icon={<RightCircleOutlined />} href={item.attributes.link} />}
                            </Descriptions.Item>
                          </Descriptions>
                        </div>
                      </ColorfulCard>
                    </Col>
                  );
                })}
              </Row>
            </XCollapse>
          </div>
        </div>
      )}
    </>
  );
};

export default UpcomingEvents;
