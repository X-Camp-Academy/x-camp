import { NewEventCategory } from '@/apis/strapi-client/define';
import { useGetNewEvent } from '@/apis/strapi-client/strapi';
import { useLang } from '@/hoc/with-intl/define';
import { getTransResult } from '@/utils/public';
import { AlignRightOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Col, Row, Space, Typography } from 'antd';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';

const ColorfulCard = dynamic(() => import('@/components/common/colorful-card'));
const XCollapse = dynamic(() => import('@/components/common/collapse'));
const { Title, Text } = Typography;

const RecentActivities: React.FC = () => {
  const { format: t, lang } = useLang();
  const { data: newEventData } = useGetNewEvent({
    tag: NewEventCategory.Events,
    current: 1,
    pageSize: 25
  });

  const RecentActivities = newEventData?.data?.filter((item) => {
    if (item?.attributes?.endDateTime) {
      return new Date(item?.attributes?.endDateTime).getTime() < new Date().getTime();
    } else {
      return new Date(item?.attributes?.startDateTime).getTime() < new Date().getTime();
    }
  });

  return (
    <>
      {RecentActivities && RecentActivities.length > 0 && (
        <div className={styles.content}>
          <div className="container">
            <XCollapse
              header={{
                title: t('RecentPopularEvents'),
                description: t('RecentPopularEvents.Desc')
              }}
            >
              <Row className={styles.cards} gutter={[32, 32]}>
                {RecentActivities?.slice(0, 3)?.map((item, index) => (
                  <Col key={item?.id} xs={24} sm={24} md={12} lg={8}>
                    <ColorfulCard border={'bottom'} animate={false} index={index}>
                      <Space direction="vertical" className={styles.card}>
                        <img alt="img" src={getTransResult(lang, item.attributes?.imgZh?.data?.attributes?.url, item.attributes?.imgEn?.data?.attributes?.url)} />
                        <Title className={styles.title} ellipsis={{ rows: 1 }}>
                          {getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn)}
                        </Title>
                        <div className={styles.description}>
                          <Text
                            ellipsis={{
                              tooltip: `${getTransResult(lang, item?.attributes?.descriptionZh, item?.attributes?.descriptionEn)}`
                            }}
                            className={styles.descriptionText}
                          >
                            <AlignRightOutlined className={styles.icon} />
                            {getTransResult(lang, item?.attributes?.descriptionZh, item?.attributes?.descriptionEn)}
                          </Text>

                          <Link className={styles.arrow} href={`/resources/education-forum/${item?.id}`}>
                            <RightCircleOutlined />
                          </Link>
                        </div>
                      </Space>
                    </ColorfulCard>
                  </Col>
                ))}
              </Row>
            </XCollapse>
          </div>
        </div>
      )}
    </>
  );
};

export default RecentActivities;
