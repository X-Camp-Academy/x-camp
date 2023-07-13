import React from "react";
import styles from "./index.module.scss";
import { Col, Row, Typography, Descriptions, Divider } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import { GetCourses } from "@/apis/strapi-client/define";
import { getTransResult } from "@/utils/public";
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
    startDate,
    endDate,
    lessonNum,
    frequency,
    tuitionRMB,
    tuitionUSD,
  } = props;
  const { format: t, lang } = useLang();
  return (
    <>
      <Row className={styles.row}>
        <Col sm={24} lg={12} className={styles.col}>
          <Title className={styles.title}>
            {courseCode}：{getTransResult(lang, courseTitleZh, courseTitleEn)}
          </Title>
        </Col>
        <Col
          sm={24}
          lg={12}
          className={`${styles.col} ${styles.feeCol}`}
          style={{}}
        >
          <Title className={styles.title}>{`${lessonNum} ${
            frequency === "Weekly" ? "weeks" : "days"
          }`}</Title>
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }} className={styles.row}>
        <Col lg={12} className={styles.col}>
          <Descriptions column={1}>
            <Descriptions.Item label={t("CourseStyle")}>
              {classMode}
            </Descriptions.Item>
            <Descriptions.Item label={t("Level")}>
              {recommendedLowerGrade}
            </Descriptions.Item>
            <Descriptions.Item label={t("Language")}>
              {classLang}
            </Descriptions.Item>
            <Descriptions.Item label={t("ClassesTime")}>
              {`${startDate} ${endDate}`}
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col
          lg={12}
          className={styles.col}
          style={{ justifyContent: "flex-end" }}
        >
          <Text className={styles.fee}>
            {getTransResult(lang, `￥${tuitionRMB}`, `$${tuitionUSD}`)}
          </Text>
        </Col>
      </Row>
      <Divider style={{ marginTop: 35 }} />
    </>
  );
};

export default CourseCard;
