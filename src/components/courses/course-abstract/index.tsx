import { ClassMode, GetClasses } from '@/apis/strapi-client/define';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import { useLang } from '@/hoc/with-intl/define';
import { formatTimezone, getTransResult } from '@/utils/public';
import { Button, Descriptions, Space, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Paragraph } = Typography;

interface CourseAbstractProps {
  courseCode?: string;
  classMode?: ClassMode;
  courseLongDescriptionEn?: string;
  courseLongDescriptionZh?: string;
  tuitionUSD?: number;
  tuitionRMB?: number;
  classes?: {
    data: StrapiResponseDataItem<GetClasses>[];
  };
  startDate?: string;
  registerLink?: string;
  isBundle?: boolean;
  bundleRegisterLink?: string;
  isBilingual?: boolean;
}

const CourseAbstract: React.FC<CourseAbstractProps> = ({ courseCode, classMode, courseLongDescriptionEn, courseLongDescriptionZh, tuitionUSD, tuitionRMB, classes, registerLink, isBilingual }) => {
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
    <Space className={styles.abstract} size={24}>
      <div className={styles.left}>
        {/* <div className={styles.title}>{courseCode}:</div> */}
        <div className={styles.title}>{t('Description')}</div>
        <Paragraph className={styles.abstract} ellipsis={{ rows: 3 }}>
          {getTransResult(lang, courseLongDescriptionZh, courseLongDescriptionEn)}
        </Paragraph>
        <Descriptions column={1} layout="vertical">
          <Descriptions.Item label={t('ClassesTime')}>
            <Space direction="vertical">
              {classesData?.map((item, index) => {
                return (
                  <div key={index} className={item?.isFull ? `${styles.full}` : ''}>
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
        <div className={styles.price}>{isBilingual ? `￥${tuitionRMB}` : `$${tuitionUSD}`}</div>
        <Button type="primary" className={styles.btn} onClick={() => window.open(registerLink)}>
          {t('SignUpNow')}
        </Button>
        {classMode !== ClassMode.InPerson && <div className={styles.tip}>{t('Discount')}</div>}
        {isBilingual && <div className={styles.bilingual}>BILINGUAL</div>}
      </div>
    </Space>
  );
};

export default CourseAbstract;
