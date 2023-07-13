import React, { useContext } from "react";
import styles from "./index.module.scss";
import { Breadcrumb, Typography } from "antd";
import CourseCard from "./course-card";
import classNames from "classnames/bind";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";
import CourseClassesContext from "../CourseClasses";
import { getWeeksDays } from "../../utils";
const { Title } = Typography;

const cx = classNames.bind(styles);

const TopBanner: React.FC = () => {
  const { lang } = useLang();
  const courseData = useContext(CourseClassesContext);
  console.log(courseData);
  const { courseCode, courseTitleZh, courseTitleEn, lessonNum, frequency } =
    courseData?.attributes ?? {};

  const courseCodeTitle = `${courseCode}: ${getTransResult(
    lang,
    courseTitleZh,
    courseTitleEn
  )} (${lessonNum} ${getWeeksDays(frequency)})`;
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
              title: "Home",
            },
            {
              title: <a href="/courses">{"Courses"}</a>,
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
