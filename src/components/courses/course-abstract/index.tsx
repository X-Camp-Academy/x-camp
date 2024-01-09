import { ClassMode, FrequencyCategory, GetClasses } from '@/apis/strapi-client/define';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { formatFinance, formatTimezone, getTransResult } from '@/utils/public';
import { Button, Descriptions, Space, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Paragraph } = Typography;

interface CourseAbstractProps {
  classMode?: ClassMode;
  courseLongDescriptionEn?: string;
  courseLongDescriptionZh?: string;
  tuitionUSD?: number;
  tuitionRMB?: number;
  classes?: {
    data: StrapiResponseDataItem<GetClasses>[];
  };
  registerLink?: string;
  isBilingual?: boolean;
  frequency?: FrequencyCategory;
}

const CourseAbstract: React.FC<CourseAbstractProps> = ({ classMode, courseLongDescriptionEn, courseLongDescriptionZh, tuitionUSD, tuitionRMB, classes, registerLink, isBilingual, frequency }) => {
  const isMobile = useMobile();
  const { format: t, lang } = useLang();

  const classesData = classes?.data?.map((classItem) => {
    const { classCode, isFull, startDateTime, endDateTime, timeSuffix, location } = classItem?.attributes;
    const { utcTime: utcStartDateTime } = formatTimezone(startDateTime);
    const { utcTime: utcEndDateTime, timezone } = formatTimezone(endDateTime);

    return {
      classCode,
      isFull,
      startTime: timeSuffix + ' ' + utcStartDateTime?.format('hh:mm a'),
      endTime: utcEndDateTime?.format('hh:mm a') + `（${timezone}）`,
      location
    };
  });
  return (
    <Space className={styles.abstract} size={isMobile ? 8 : 24}>
      <div className={styles.left}>
        <div className={styles.title}>{t('Description')}</div>
        <Paragraph className={styles.abstract} ellipsis={{ rows: 3, tooltip: getTransResult(lang, courseLongDescriptionZh, courseLongDescriptionEn) }}>
          {getTransResult(lang, courseLongDescriptionZh, courseLongDescriptionEn)}
        </Paragraph>
        <Descriptions column={1} layout="vertical">
          <Descriptions.Item label={t('ClassesTime')}>
            <Space direction="vertical">
              {classesData?.map((item) => {
                return (
                  <div key={item?.classCode} className={item?.isFull ? `${styles.full}` : ''}>
                    {`${item?.classCode}: ${item?.startTime}-${item?.endTime}`} {item?.isFull ? '(Full)' : ''}
                  </div>
                );
              })}
            </Space>
          </Descriptions.Item>
        </Descriptions>
      </div>

      <div className={styles.right}>
        <div className={styles.title}>{t('One-TimePayment')}</div>
        <div className={styles.price}>{frequency === FrequencyCategory.Once ? 'Free' : tuitionUSD ? `$${formatFinance(tuitionUSD)}` : `￥${formatFinance(tuitionRMB)}`}</div>
        <Button type="primary" className={styles.btn} onClick={() => window.open(registerLink)}>
          {t('SignUpNow')}
        </Button>
        {classMode !== ClassMode.InPerson && frequency !== FrequencyCategory.Once && <div className={styles.tip}>{t('Discount')}</div>}
        {isBilingual && <div className={styles.bilingual}>BILINGUAL</div>}
      </div>
    </Space>
  );
};

export default CourseAbstract;
