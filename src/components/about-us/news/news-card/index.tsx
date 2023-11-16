import { EventCategory, GetNewEvent } from '@/apis/strapi-client/define';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import ColorfulCard from '@/components/common/colorful-card';
import SegmentedRadioGroup, { useEventOptions } from '@/components/common/segmented-radio-group';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { formatTimezone, getTransResult } from '@/utils/public';
import { RightCircleOutlined } from '@ant-design/icons';
import { Button, Col, Pagination, Row, Space, Typography } from 'antd';
import { SegmentedValue } from 'antd/es/segmented';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

const { Title, Text } = Typography;
interface NewsCardProps {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  newEventData: StrapiResponseDataItem<GetNewEvent>[] | undefined;
  pageSize: number;
  total?: number;
}

const NewsCard: React.FC<NewsCardProps> = ({ current, setCurrent, newEventData, pageSize, total }) => {
  const isMobile = useMobile();
  const isiPad = useMobile('xl');
  const router = useRouter();
  const { lang } = useLang();
  const [segmented, setSegmented] = useState<SegmentedValue>(EventCategory.All);
  const [data, setData] = useState<StrapiResponseDataItem<GetNewEvent>[]>();

  const handleLocaleCompare = (data: StrapiResponseDataItem<GetNewEvent>[] | undefined) => {
    return data?.sort((a, b) => {
      const dateA = new Date(a?.attributes?.startDateTime).toISOString();
      const dateB = new Date(b?.attributes?.startDateTime).toISOString();
      return dateB.localeCompare(dateA);
    });
  };

  useEffect(() => {
    if (segmented === EventCategory.All) {
      const compareData = handleLocaleCompare(newEventData);
      setData(compareData);
    } else {
      const filteredData = newEventData?.filter((item) => item?.attributes?.eventCategory === segmented);
      const compareData = handleLocaleCompare(filteredData);
      setData(compareData);
    }
  }, [segmented, newEventData]);

  return (
    <div className={`${styles.content} container`}>
      <SegmentedRadioGroup value={segmented} setValue={setSegmented} isRadioGroup={isiPad} options={useEventOptions('event')} />

      <div className={styles.newsCard}>
        <Row gutter={isMobile ? [24, 24] : [32, 48]}>
          {data?.map((item, index) => {
            const { utcTime: startTime } = formatTimezone(item?.attributes?.startDateTime);
            return (
              <Col key={item?.id} xs={24} sm={24} md={24} lg={8}>
                <ColorfulCard border={'bottom'} index={index} animate={false}>
                  <Space direction={'vertical'} className={styles.card} onClick={() => router.push(`/resources/education-forum/${item?.id}`)}>
                    <img alt="" src={getTransResult(lang, item.attributes?.imgZh?.data?.attributes?.url, item.attributes?.imgEn?.data?.attributes?.url)} />
                    <Title className={styles.title} ellipsis={{ rows: 1 }}>
                      {getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn)}
                    </Title>

                    <Space align="center" className={styles.space}>
                      <Text className={styles.date}>
                        {item?.attributes?.editor}
                        {startTime.format('YYYY-MM-DD')}
                      </Text>

                      <a href={`/resources/education-forum/${item?.id}`}>
                        <Button type="link" className={styles.btn} icon={<RightCircleOutlined />} />
                      </a>
                    </Space>
                  </Space>
                </ColorfulCard>
              </Col>
            );
          })}
        </Row>
      </div>

      <Pagination total={total} className={styles.pagination} pageSize={pageSize} current={current} onChange={(page) => setCurrent(page)} />
    </div>
  );
};

export default NewsCard;
