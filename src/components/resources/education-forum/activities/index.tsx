import { EventCategory, GetNewEvent, GetNewEventRequest, NewEventCategory } from '@/apis/strapi-client/define';
import { useGetNewEvent } from '@/apis/strapi-client/strapi';
import { AndOrFilters, FilterFields } from '@/apis/strapi-client/strapiDefine';
import ColorfulCard from '@/components/common/colorful-card';
import { EventOptionsProps } from '@/components/common/segmented-radio-group';
import { useLang } from '@/hoc/with-intl/define';
import { formatTimezone, getTransResult } from '@/utils/public';
import { ClockCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Button, Col, Pagination, Row, Space, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

const { Title } = Typography;
const Activities: React.FC = () => {
  const router = useRouter();
  const { format: t } = useLang();
  const { lang } = useLang();
  const [current, setCurrent] = useState<number>(1);
  const tag = NewEventCategory.Events;
  const { data, runAsync: getNewEventData } = useGetNewEvent({
    tag,
    current,
    pageSize: 12,
    manual: true
  });
  const [selectedItem, setSelectedItem] = useState<EventCategory>(EventCategory.SchoolLifeSharing);
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
    if (selectedItem !== EventCategory.All) {
      filters = {
        ...filters,
        eventCategory: {
          $eq: selectedItem
        }
      };
    }
    getNewEventData({
      ...commonParams,
      filters
    });
  }, [tag, selectedItem, current]);

  const items: EventOptionsProps[] = [
    {
      label: t('SchoolLifeSharing'),
      value: EventCategory.SchoolLifeSharing
    },
    {
      label: t('CodingEducation'),
      value: EventCategory.CodingEducation
    },
    {
      label: t('CareerPath'),
      value: EventCategory.CareerPath
    },
    {
      label: t('Research'),
      value: EventCategory.Research
    },
    {
      label: t('All'),
      value: EventCategory.All
    }
  ];

  const newEventData = data?.data?.sort((a, b) => {
    const dateA = new Date(a?.attributes?.startDateTime);
    const dateB = new Date(b?.attributes?.startDateTime);
    return dateB.getTime() - dateA.getTime();
  });
  return (
    <div className={styles.content}>
      <div className="container">
        <div className={styles.toolBar}>
          {items?.map((item) => {
            return (
              <div
                className={`${styles.toolBarItem} ${item?.value === selectedItem ? styles.selectedToolBarItem : ''}`}
                key={item?.value}
                onClick={() => {
                  setSelectedItem(item?.value);
                }}
              >
                {item?.label}
              </div>
            );
          })}
        </div>
        <Space className={styles.titleContain}>
          <div className={styles.activityTitle}>{selectedItem}</div>
          <div className={styles.pageTotal}>
            {data?.data?.length} {t('EducationForum')}
          </div>
        </Space>

        <Row gutter={[32, 32]} className={styles.row}>
          {newEventData?.map((v, index) => (
            <Col key={v?.id} xs={24} sm={24} md={12} lg={8}>
              <ColorfulCard border={'bottom'} animate={false} index={index}>
                <div className={styles.card}>
                  <div className={styles.imgContainer}>
                    <img src={getTransResult(lang, v?.attributes?.imgZh?.data?.attributes?.url, v?.attributes?.imgEn?.data?.attributes?.url)} alt="" />
                  </div>
                  <Space direction="vertical" className={styles.cardContent}>
                    <Title className={styles.title} ellipsis={{ rows: 1 }}>
                      {getTransResult(lang, v?.attributes?.titleZh, v?.attributes?.titleEn)}
                    </Title>
                    <div className={styles.description}>
                      <div>
                        <ClockCircleOutlined className={styles.icon} />
                        {formatTimezone(v?.attributes?.startDateTime)?.utcTime.format('YYYY-MM-DD')}
                      </div>
                      <Button
                        type="link"
                        className={styles.btn}
                        icon={<RightCircleOutlined />}
                        onClick={() => {
                          router.push(`/resources/education-forum/${v?.id}`);
                        }}
                      />
                    </div>
                  </Space>
                </div>
              </ColorfulCard>
            </Col>
          ))}
        </Row>

        <Pagination className={styles.pagination} pageSize={12} current={current} total={data?.meta?.pagination?.total} onChange={(page) => setCurrent(page)} />
      </div>
    </div>
  );
};

export default Activities;
