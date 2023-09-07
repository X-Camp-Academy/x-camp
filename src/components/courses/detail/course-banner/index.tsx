import React, { useContext } from "react";
import { Breadcrumb, Divider, Space, Typography } from "antd";
import classNames from "classnames/bind";
import { useLang } from "@/hoc/with-intl/define";
import { getTransResult, getWeeksDays } from "@/utils/public";
import CourseClassesContext from "../../CourseClassesContext";
import CourseAbstract from "@/components/common/course-abstract";
import CourseDescription from "./course-description";
import styles from "./index.module.scss";

const { Title } = Typography;
const cx = classNames.bind(styles);

const CourseBanner: React.FC = () => {
  const { format: t, lang } = useLang();
  const courseData = useContext(CourseClassesContext);

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

        <div className={styles.courseCard}>
          <Space
            className={styles.cardContent}
            direction="vertical"
            split={<Divider className={styles.divider} />}
          >
            <CourseAbstract {...courseData?.attributes} />

            <CourseDescription />
          </Space>
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;
