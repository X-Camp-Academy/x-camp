import React, { useState } from 'react';
import styles from './index.module.scss';
import { Button, Col, Pagination, Row, Space, Typography } from 'antd';
import { ClockCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import ColorfulCard from '@/components/common/colorful-card';
import XCollapse from '@/components/common/collapse';
import { ActivityCategory, GetNewEvent } from '@/apis/strapi-client/define';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import { formatTimezone, getTransResult } from '@/utils/public';
import { useLang } from '@/hoc/with-intl/define';
import dayjs from 'dayjs';
const { Text } = Typography;
export type ActivityItemProps = StrapiResponseDataItem<GetNewEvent> & {
  index: number;
};

const ActivityItem = ({ attributes, index }: ActivityItemProps) => {
  const { lang } = useLang();
  const { img, titleZh, titleEn, startDateTime } = attributes;
  const { utcTime } = formatTimezone(startDateTime);
  return (
    <Col xs={24} sm={24} md={12} lg={8}>
      <ColorfulCard border={'bottom'} animate={false} index={index}>
        <div className={styles.card}>
          <img src={img?.data?.attributes?.url} alt="" />
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
              />
            </div>
          </Space>
        </div>
      </ColorfulCard>
    </Col>
  );
};

export default ActivityItem;
