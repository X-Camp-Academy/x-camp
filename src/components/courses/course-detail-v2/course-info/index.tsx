import { FrequencyCategory } from '@/apis/strapi-client/define';
import { useLang } from '@/hoc/with-intl/define';
import { formatFinance, formatTimezone } from '@/utils/public';
import { Button } from 'antd';
import { useContext } from 'react';
import CourseClassesContext from '../../CourseClassesContext';
import styles from './index.module.scss';

const CourseInfo = () => {
  const { format: t } = useLang();
  const courseData = useContext(CourseClassesContext);
  const { frequency, registerLink, tuitionUSD, tuitionRMB, classes } = courseData?.attributes ?? {};

  const classesData = classes?.data?.map((classItem) => {
    const { classCode, isFull, startDateTime, endDateTime, timeSuffix, location } = classItem?.attributes;
    const { dayjsTime: utcStartDateTime } = formatTimezone(startDateTime);
    const { dayjsTime: utcEndDateTime, timezone } = formatTimezone(endDateTime);

    return {
      classCode,
      isFull,
      startTime: timeSuffix + ' ' + utcStartDateTime?.format('hh:mm a'),
      endTime: utcEndDateTime?.format('hh:mm a') + `（${timezone}）`,
      location
    };
  });

  return (
    <div className={styles.courseInfo}>
      <div className={`${styles.content} container`} style={{ height: '100%' }}>
        <div className={styles.pay}>
          <div className={styles.price}>{frequency === FrequencyCategory.Once ? 'Free' : tuitionUSD ? `$${formatFinance(tuitionUSD)}` : `￥${formatFinance(tuitionRMB)}`}</div>
          <div className={styles.register}>
            <Button type="primary" className={styles.btn} onClick={() => window.open(registerLink)}>
              {t('SignUpNow')}
            </Button>
            <span className={styles.tip}>{'Click to jump to the registration form'}</span>
          </div>
        </div>
        <div className={styles.times}>
          <div className={styles.title}>{t('ClassesTime')}</div>
          {classesData?.map((item) => {
            return (
              <div key={item?.classCode} className={item?.isFull ? `${styles.item} ${styles.full}` : styles.item}>
                {`${item?.classCode}: ${item?.startTime}-${item?.endTime}`} {item?.isFull ? '(Full)' : ''}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
