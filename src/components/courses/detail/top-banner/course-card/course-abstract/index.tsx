import { Space } from "antd";
import React from "react";
import styles from "./index.module.scss";

const CourseAbstract = () => {
  return (
    <Space>
      <div className={styles.left}>
        <div className={styles.title}>{"CS100P+CS101P:"}</div>
        <div className={styles.title}>{"Introduce"}</div>
        <p className={styles.abstract}>
          {`Python with visualization and fun projects.
Learn basic abstraction, modularity and problem decomposition.
Creative group projects to connect all and inspire love in coding.
Final presentation for the project.`}
        </p>
      </div>
      <div className={styles.right}></div>
    </Space>
  );
};

export default CourseAbstract;
