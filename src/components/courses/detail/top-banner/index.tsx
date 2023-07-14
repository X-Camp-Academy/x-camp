import React, { useContext } from "react";
import styles from "./index.module.scss";
import { Breadcrumb, Typography } from "antd";
import CourseCard from "./course-card";
import classNames from "classnames/bind";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";
import CourseClassesContext from "../CourseClasses";
const { Title } = Typography;

const cx = classNames.bind(styles);

const TopBanner: React.FC = () => {
  const { format: t, lang } = useLang();
  const courseData = useContext(CourseClassesContext);
  const courseCodeTitle = `${
    courseData?.attributes?.courseCode
  }: ${getTransResult(
    lang,
    courseData?.attributes?.courseTitleZh,
    courseData?.attributes?.courseTitleEn
  )}`;
  return (
    <div className={styles.topBanner}>
      <div className={styles.banner} />
      <div
        className={cx("container", styles.content)}
        style={{ height: "100%" }}
      >
        <Breadcrumb
          className={styles.breadcrumb}
          items={[
            {
              title: t("Home"),
            },
            {
              title: <a href="/courses">{t("Courses")}</a>,
            },
            {
              title: courseCodeTitle,
            },
          ]}
        />
        <Title className={styles.title}>{courseCodeTitle}</Title>
        <CourseCard />
      </div>
    </div>
  );
};

export default TopBanner;
