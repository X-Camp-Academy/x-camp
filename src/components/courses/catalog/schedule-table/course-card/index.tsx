import { GetCourses } from '@/apis/strapi-client/define';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { getTransResult, getWeeksDays } from '@/utils/public';
import { Col, Descriptions, Divider, Row, Space, Typography } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import styles from './index.module.scss';

const { Text, Title } = Typography;
const CourseCard: React.FC<GetCourses> = (props) => {
  const {
    courseCode,
    courseTitleEn,
    courseTitleZh,
    classMode,
    recommendedLowerGrade,
    recommendedUpperGrade,
    classLang,
    startDateTime,
    endDateTime,
    lessonNum,
    frequency,
    tuitionRMB,
    tuitionUSD,
    isBilingual
  } = props;
  const isMobile = useMobile();
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
          <Space direction="vertical" align="end">
            <Title className={styles.title}>{`${lessonNum} ${getWeeksDays(frequency)}`}</Title>
          </Space>
        </Col>
      </Row>
      <Row style={{ marginTop: isMobile ? 0 : 20 }} className={styles.row}>
        <Col lg={12} className={styles.col}>
          <Descriptions column={1}>
            <Descriptions.Item label={t('CourseStyle')}>{classMode}</Descriptions.Item>
            <Descriptions.Item label={t('Level')}>{recommendedGradeLevel(recommendedLowerGrade, recommendedUpperGrade)}</Descriptions.Item>
            <Descriptions.Item label={t('Language')}>{classLang}</Descriptions.Item>
            <Descriptions.Item label={t('ClassesTime')}>{`${dayjs(startDateTime)?.format('MM/DD/YYYY')} - ${dayjs(endDateTime)?.format('MM/DD/YYYY')}`}</Descriptions.Item>
          </Descriptions>
        </Col>
        <Col lg={12} className={styles.col} style={{ justifyContent: 'flex-end' }}>
          <Text className={styles.fee}>{isBilingual ? `￥${tuitionRMB}` : `$${tuitionUSD}`}</Text>
        </Col>
      </Row>
      <Divider style={{ marginTop: isMobile ? 16 : 35 }} />
    </>
  );
};

export default CourseCard;
