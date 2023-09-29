import { ClassMode, GetClasses } from '@/apis/strapi-client/define';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import { useLang } from '@/hoc/with-intl/define';
import { formatTimezone, getTransResult } from '@/utils/public';
import { Button, Descriptions, Modal, Space, Typography } from 'antd';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import styles from './index.module.scss';

const { Paragraph } = Typography;

interface CourseAbstractProps {
  courseCode?: string;
  classMode?: ClassMode;
  courseLongDescriptionEn?: string;
  courseLongDescriptionZh?: string;
  tuitionUSD?: number;
  classes?: {
    data: StrapiResponseDataItem<GetClasses>[];
  };
  startDate?: string;
  registerLink?: string;
  isBundle?: boolean;
  bundleRegisterLink?: string;
}

const CourseAbstract: React.FC<CourseAbstractProps> = ({
  courseCode,
  classMode,
  courseLongDescriptionEn,
  courseLongDescriptionZh,
  tuitionUSD,
  classes,
  startDate,
  registerLink,
  isBundle,
  bundleRegisterLink
}) => {
  const { format: t, lang } = useLang();
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const judgeInWeek = (openDate: string) => {
    const currentDate = dayjs();
    const diff = currentDate.diff(openDate, 'day');
    return diff <= 7;
  };

  const handlerSighUp = (startDate: string) => {
    if (judgeInWeek(startDate) && registerLink) {
      isBundle ? window.open(bundleRegisterLink) : window.open(registerLink);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <Space className={styles.abstract} size={24}>
      <div className={styles.left}>
        <div className={styles.title}>{courseCode}:</div>
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
        <div className={styles.price}>{`$${tuitionUSD}`}</div>
        <Button type="primary" className={styles.btn} onClick={() => handlerSighUp(startDate || '')}>
          {t('SignUpNow')}
        </Button>
        <Modal open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}>
          <img src="/image/qr-code/whats-app.png" alt="whatsAppAssistance" width={'50%'} height={'100%'} />
          <img src="/image/qr-code/we-chat-assistance.jpg" alt="weChatAssistance" width={'50%'} height={'100%'} />
        </Modal>
        {classMode !== ClassMode.InPerson && <div className={styles.tip}>{t('Discount')}</div>}
      </div>
    </Space>
  );
};

export default CourseAbstract;
