import { Button, Space, Typography } from "antd";
import React, { useContext } from "react";
import styles from "./index.module.scss";
import CourseClassesContext from "../../../CourseClasses";
import { useLang } from "@/hoc/with-intl/define";
import { getTransResult } from "@/utils/public";

const { Title, Paragraph, Text } = Typography;

const CourseAbstract = () => {
  const { lang } = useLang();
  const courseData = useContext(CourseClassesContext);
  const {
    courseCode,
    courseLongDescriptionEn,
    courseLongDescriptionZh,
    tuitionUSD,
  } = courseData?.attributes ?? {};
  return (
    <Space className={styles.abstract} size={24}>
      <div className={styles.left}>
        <div className={styles.title}>{courseCode}</div>
        <div className={styles.title}>{"Description"}</div>
        <Paragraph className={styles.abstract} ellipsis={{ rows: 3 }}>
          {getTransResult(
            lang,
            courseLongDescriptionZh,
            courseLongDescriptionEn
          )}
        </Paragraph>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>{"One-Time Payment"}</div>
        <div className={styles.price}>{`$${tuitionUSD}`}</div>
        <Button type="primary" className={styles.btn}>
          {"Sign Up Now"}
        </Button>
        <div className={styles.tip}>
          {"$50 discount only applicable for bundle course"}
        </div>
      </div>
    </Space>
  );
};

export default CourseAbstract;
