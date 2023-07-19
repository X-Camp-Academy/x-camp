import React from 'react';
import styles from './index.module.scss';
import { Button, Col, Space } from 'antd';
import { ClockCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import ColorfulCard from '@/components/common/colorful-card';
import { GetNewEvent } from '@/apis/strapi-client/define';
import { StrapiMedia, StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import { formatTimezone, getTransResult } from '@/utils/public';
import { useLang } from '@/hoc/with-intl/define';
import { useRouter } from 'next/navigation';
export type ActivityItemProps = StrapiResponseDataItem<GetNewEvent> & {
  index: number;
};

const ActivityItem = ({ attributes, index, id }: ActivityItemProps) => {
  const router = useRouter();
  const { lang } = useLang();
  const { imgZh, imgEn, titleZh, titleEn, startDateTime, } = attributes;
  const { utcTime } = formatTimezone(startDateTime);

  const getTranslateImg = (imgZh: StrapiMedia, imgEn: StrapiMedia) => {
    return getTransResult(
      lang,
      imgZh.data?.attributes.url,
      imgEn.data?.attributes.url,
    )
  }
  return (
    <Col xs={24} sm={24} md={12} lg={8}>
      <ColorfulCard border={'bottom'} animate={false} index={index}>
        <div className={styles.card}>
          <div className={styles.imgBox}>
            <img src={getTranslateImg(imgZh, imgEn)} alt="" />
          </div>
          <Space direction="vertical" className={styles.cardContent}>
            <div className={styles.title}>
              {getTransResult(lang, titleZh, titleEn)}
            </div>
            <div className={styles.description}>
              <div>
                <ClockCircleOutlined className={styles.icon} />
                {utcTime.format('YYYY-MM-DD')}
              </div>
              <Button
                type="link"
                className={styles.btn}
                icon={<RightCircleOutlined />}
                onClick={() => { router.push(`/resources/${id}`) }}
              />
            </div>
          </Space>
        </div>
      </ColorfulCard>
    </Col>
  );
};

export default ActivityItem;
