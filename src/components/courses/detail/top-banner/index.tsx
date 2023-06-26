import React from "react";
import styles from "./index.module.scss";
import { Breadcrumb, Typography } from "antd";
import CourseCard from "./course-card";
import classNames from 'classnames/bind';
const { Title } = Typography;

const cx = classNames.bind(styles);

const TopBanner = () => {
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
              title:
                "CS100P+CS101P: Python Intro with Creative Projects (20 Weeks)",
            },
          ]}
        />
        <Title className={styles.title}>
          {"CS100P+CS101P: Python Intro with Creative Projects (20 Weeks)"}
        </Title>
        <CourseCard />
      </div>
    </div>
  );
};

export default TopBanner;
