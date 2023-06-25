import React from "react";
import styles from "./index.module.scss";
import { Breadcrumb, Typography } from "antd";
import CourseCard from "./course-card";
const { Title } = Typography;

const TopBanner = () => {
  return (
    <div className={styles.topBanner}>
      <div className={"container"} style={{ height: "100%" }}>
        <div className={styles.content}>
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
    </div>
  );
};

export default TopBanner;
