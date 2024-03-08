import { useLang } from '@/hoc/with-intl/define';
import { formatTimezone, getTransResult, getWeeksDays } from '@/utils/public';
import { ClockCircleOutlined, ContainerOutlined, TranslationOutlined } from '@ant-design/icons';
import { Breadcrumb, Typography, message } from 'antd';
import dayjs from 'dayjs';
import { useContext } from 'react';
import CourseClassesContext from '../../CourseClassesContext';
import styles from './index.module.scss';
const { Title, Paragraph } = Typography;

const Banner = () => {
  const { format: t, lang } = useLang();
  message.config({
    top: 100
  });
  const courseData = useContext(CourseClassesContext);
  const { courseCode, spokenLang, startDateTime, endDateTime, courseTitleZh, courseTitleEn, lessonNum, frequency, courseLongDescriptionZh, courseLongDescriptionEn } = courseData?.attributes ?? {};

  const courseCodeTitle = `${courseCode}: ${getTransResult(lang, courseTitleZh, courseTitleEn)} (${lessonNum} ${getWeeksDays(frequency)})`;

  return (
    <div className={styles.banner}>
      <div className={`${styles.content} container`} style={{ height: '100%' }}>
        <Breadcrumb
          className={styles.breadcrumb}
          items={[
            {
              title: t('Home')
            },
            {
              title: <a href="/courses/all-courses">{t('Courses')}</a>
            },
            {
              title: courseCodeTitle
            }
          ]}
        />
        <Title className={styles.title}>{courseCodeTitle}</Title>
        <Paragraph className={styles.abstract} ellipsis={{ rows: 3, tooltip: getTransResult(lang, courseLongDescriptionZh, courseLongDescriptionEn) }}>
          {getTransResult(lang, courseLongDescriptionZh, courseLongDescriptionEn)}
        </Paragraph>
        <div className={styles.tags}>
          <div className={styles.item}>
            <ClockCircleOutlined />
            <span>{`${dayjs(startDateTime).format('DD/MM/YY')} - ${dayjs(endDateTime).format('DD/MM/YY')} (${formatTimezone(startDateTime).timezone})`}</span>
          </div>
          <div className={styles.item}>
            <ContainerOutlined />
            <span>{`${Math.ceil(dayjs(endDateTime).diff(dayjs(startDateTime), 'day') / 7)} weeks`}</span>
          </div>
          <div className={styles.item}>
            <TranslationOutlined />
            <span>{spokenLang}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
