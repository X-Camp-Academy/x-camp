import React, { useContext } from 'react';
import { Space, Typography } from 'antd';
import { useLang } from '@/hoc/with-intl/define';
import { getLangResult } from '@/utils/public';
import CourseClassesContext from '../../CourseClassesContext';
import styles from './index.module.scss';

const { Title, Text } = Typography;

const CourseSyllabus: React.FC = () => {
  const { format: t, lang } = useLang();
  const courseData = useContext(CourseClassesContext);
  const courseSyllabus = getLangResult(lang, courseData?.attributes?.courseSyllabusZh, courseData?.attributes?.courseSyllabusEn);

  return (
    <div className={styles.content}>
      <div className="container">
        <Title className={styles.title}>{t('TopicsCovered')}</Title>
        <Space size={24} direction="vertical" className={styles.syllabus}>
          {
            courseSyllabus?.map((item, index) => (
              <Space key={item} align="center">
                <Text className={styles.text}>{index + 1}</Text>
                <Text className={styles.paragraph}>
                  {item}
                </Text>
              </Space>
            ))
          }
        </Space>
      </div>
    </div>
  );
};

export default CourseSyllabus;
