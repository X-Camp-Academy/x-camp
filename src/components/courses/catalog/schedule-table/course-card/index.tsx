import { GetCourses } from '@/apis/strapi-client/define';
import { useLang } from '@/hoc/with-intl/define';
import { getTransResult, getWeeksDays } from '@/utils/public';
import { Col, Descriptions, Divider, Row, Typography } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import styles from './index.module.scss';

const { Text, Title } = Typography;

const CourseCard: React.FC<GetCourses> = (props) => {
  const { courseCode, courseTitleEn, courseTitleZh, classMode, recommendedLowerGrade, recommendedUpperGrade, classLang, startDateTime, endDateTime, lessonNum, frequency, tuitionRMB, tuitionUSD } =
    props;

  const { format: t, lang } = useLang();
  const recommendedGradeLevel = (recommendedLowerGrade: number, recommendedUpperGrade: number) => {
    let result = '';
    if (recommendedLowerGrade) {
      result += recommendedLowerGrade;
    }
    if (recommendedUpperGrade) {
      result = result + '-' + recommendedUpperGrade;
    }
    return result + ' Grade';
  };
  return (
    <>
      <Row className={styles.row}>
        <Col sm={24} lg={12} className={styles.col}>
          <Title className={styles.title}>
            {courseCode}：{getTransResult(lang, courseTitleZh, courseTitleEn)}
          </Title>
        </Col>
        <Col sm={24} lg={12} className={`${styles.col} ${styles.feeCol}`} style={{}}>
          <Title className={styles.title}>{`${lessonNum} ${getWeeksDays(frequency)}`}</Title>
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }} className={styles.row}>
        <Col lg={12} className={styles.col}>
          <Descriptions column={1}>
            <Descriptions.Item label={t('CourseStyle')}>{classMode}</Descriptions.Item>
            <Descriptions.Item label={t('Level')}>{recommendedGradeLevel(recommendedLowerGrade, recommendedUpperGrade)}</Descriptions.Item>
            <Descriptions.Item label={t('Language')}>{classLang}</Descriptions.Item>
            <Descriptions.Item label={t('ClassesTime')}>{`${dayjs(startDateTime)?.format('MM/DD/YYYY')} - ${dayjs(endDateTime)?.format('MM/DD/YYYY')}`}</Descriptions.Item>
          </Descriptions>
        </Col>
        <Col lg={12} className={styles.col} style={{ justifyContent: 'flex-end' }}>
          <Text className={styles.fee}>{getTransResult(lang, `￥${tuitionRMB}`, `$${tuitionUSD}`)}</Text>
        </Col>
      </Row>
      <Divider style={{ marginTop: 35 }} />
    </>
  );
};

export default CourseCard;
