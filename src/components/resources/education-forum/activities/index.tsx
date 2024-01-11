import { EventCategory, GetNewEvent, GetNewEventRequest, NewEventCategory } from '@/apis/strapi-client/define';
import { useGetNewEvent } from '@/apis/strapi-client/strapi';
import { AndOrFilters, FilterFields } from '@/apis/strapi-client/strapiDefine';
import ColorfulCard from '@/components/common/colorful-card';
import SegmentedRadioGroup, { useEventFacultyOptions } from '@/components/common/segmented-radio-group';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { formatTimezone, getTransResult } from '@/utils/public';
import { ClockCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Button, Col, Pagination, Row, Space, Typography } from 'antd';
import { SegmentedValue } from 'antd/es/segmented';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Link from 'next/link';

const { Title } = Typography;
const Activities: React.FC = () => {
  const isMobile = useMobile();
  const isiPad = useMobile('xl');
  const router = useRouter();
  const { lang } = useLang();
  const [current, setCurrent] = useState<number>(1);
  const tag = NewEventCategory.Events;
  const { data, runAsync: getNewEventData } = useGetNewEvent({
    tag,
    current,
    pageSize: 12,
    manual: true
  });
  const [segmented, setSegmented] = useState<EventCategory | SegmentedValue>(EventCategory.All);
  useEffect(() => {
    const commonParams: GetNewEventRequest = {
      populate: '*',
      sort: ['order:desc'],
      pagination: {
        page: current,
        pageSize: 12
      }
    };
    let filters: Partial<FilterFields<GetNewEvent>> | AndOrFilters<FilterFields<GetNewEvent>> = {
      tags: {
        $eq: tag
      }
    };
    if (segmented !== EventCategory.All) {
      filters = {
        ...filters,
        eventCategory: {
          $eq: segmented as EventCategory
        }
      };
    }
    getNewEventData({
      ...commonParams,
      filters
    });
  }, [tag, segmented, current]);

  const newEventData = data?.data?.sort((a, b) => {
    const dateA = new Date(a?.attributes?.startDateTime).toISOString();
    const dateB = new Date(b?.attributes?.startDateTime).toISOString();
    return dateB.localeCompare(dateA);
  });
  return (
    <div className={styles.content}>
      <div className="container">
        <SegmentedRadioGroup value={segmented} setValue={setSegmented} isRadioGroup={isiPad} options={useEventFacultyOptions('event')} />

        <Space className={styles.titleContain}>
          <div className={styles.activityTitle}>{segmented}</div>
          <div className={styles.pageTotal}>
            {data?.data?.length} {'forums'}
          </div>
        </Space>

        <Row gutter={isMobile ? [32, 24] : [32, 32]}>
          {newEventData?.map((v, index) => (
            <Col key={v?.id} xs={24} sm={24} md={12} lg={8}>
              <Link href={`/article-detail/${v?.id}`}>
                <ColorfulCard border={'bottom'} animate={false} index={index}>
                  <div className={styles.card} onClick={() => router.push(`/article-detail/${v?.id}`)}>
                    <div className={styles.imgContainer}>
                      <img src={getTransResult(lang, v?.attributes?.imgZh?.data?.attributes?.url, v?.attributes?.imgEn?.data?.attributes?.url)} alt="" />
                    </div>
                    <Space direction="vertical" size={isMobile ? 16 : 8} className={styles.cardContent}>
                      <Title className={styles.title} ellipsis={{ rows: 1 }}>
                        {getTransResult(lang, v?.attributes?.titleZh, v?.attributes?.titleEn)}
                      </Title>
                      <div className={styles.description}>
                        <div>
                          <ClockCircleOutlined className={styles.icon} />
                          {formatTimezone(v?.attributes?.startDateTime)?.utcTime.format('YYYY-MM-DD')}
                        </div>
                        <Button type="link" className={styles.btn} icon={<RightCircleOutlined />} href={`/article-detail/${v?.id}`} />
                      </div>
                    </Space>
                  </div>
                </ColorfulCard>
              </Link>
            </Col>
          ))}
        </Row>

        <Pagination className={styles.pagination} pageSize={12} current={current} total={data?.meta?.pagination?.total} onChange={(page) => setCurrent(page)} />
      </div>
    </div>
  );
};

export default Activities;
