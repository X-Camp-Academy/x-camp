import { useLang } from '@/hoc/with-intl/define';
import { getLangResult, getTransResult, getWeeksDays } from '@/utils/public';
import { Empty, Space, Typography } from 'antd';
import React, { useContext } from 'react';
import CourseClassesContext from '../../CourseClassesContext';
import ClassCard from '../../class-card';
import styles from './index.module.scss';

const { Title } = Typography;

const ProgressionClasses: React.FC = () => {
  const { format: t, lang } = useLang();
  const courseData = useContext(CourseClassesContext);

  const data = courseData?.attributes?.recommendedClasses?.data;
  const recommendedCourses = data?.sort((a, b) => b?.attributes?.order - a?.attributes?.order);
  const exist = recommendedCourses && recommendedCourses?.length > 0;
  return (
    <div className={styles.content}>
      <div className="container">
        <Title className={styles.title}>{t('ProgressionClasses')}</Title>
        <Space size={24} wrap className={exist ? styles.betweenCards : styles.centerCards}>
          {exist ? (
            <>
              {recommendedCourses?.map((v, index) => {
                const { courseCode, courseTitleZh, courseTitleEn, courseShortDescriptionZh, courseShortDescriptionEn, lessonNum, frequency } = v?.attributes ?? {};
                return (
                  <ClassCard
                    key={v?.id}
                    border={'bottom'}
                    index={index}
                    animate={false}
                    title={`${courseCode}: ${getTransResult(lang, courseTitleZh, courseTitleEn)}`}
                    list={getLangResult(lang, courseShortDescriptionZh, courseShortDescriptionEn) as Array<string>}
                    time={`${lessonNum} ${getWeeksDays(frequency)}`}
                    href={`/courses-classes/detail/${v?.id}`}
                  />
                );
              })}
            </>
          ) : (
            <Empty />
          )}
        </Space>
      </div>
    </div>
  );
};

export default ProgressionClasses;
