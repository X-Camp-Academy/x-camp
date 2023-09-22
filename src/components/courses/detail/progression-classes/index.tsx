import ClassCard from '@/components/common/class-card';
import { useLang } from '@/hoc/with-intl/define';
import { getLangResult, getTransResult } from '@/utils/public';
import { Space, Typography } from 'antd';
import React, { useContext } from 'react';
import CourseClassesContext from '../../CourseClassesContext';
import styles from './index.module.scss';

const { Title } = Typography;

const ProgressionClasses: React.FC = () => {
  const { format: t, lang } = useLang();
  const courseData = useContext(CourseClassesContext);

  const data = courseData?.attributes?.recommendedClasses?.data;
  const recommendedCourses = data?.sort((a, b) => b?.attributes?.order - a?.attributes?.order);

  return (
    <div className={styles.content}>
      <div className="container">
        <Title className={styles.title}>{t('ProgressionClasses')}</Title>
        <Space size={24} wrap className={styles.cards}>
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
                time={`${lessonNum} ${frequency === 'Weekly' ? 'weeks' : 'days'}`}
                href={`/courses/detail/${v?.id}`}
              />
            );
          })}
        </Space>
      </div>
    </div>
  );
};

export default ProgressionClasses;
