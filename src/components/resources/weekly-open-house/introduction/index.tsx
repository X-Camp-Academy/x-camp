import React from "react";
import styles from "./index.module.scss";
import { Space } from "antd";

const Introduction = () => {
  return (
    <div className={"container"}>
      <div className={styles.title}>{"Deep Dive of X-Camp Class"}</div>
      <p className={styles.description}>
        {
          "X-Camp has created an Art of Python Programming contest every quarter to inspire students that are new to Python. It is a great opportunity for students to showcase what they have learned from classes by creating fun projects, and get rewarded!"
        }
      </p>
      <Space size={50} className={styles.images} wrap>
        {[1, 2, 3]?.map((v, index) => (
          <img key={index} src="/image/about-us/introduction/top-banner.png" />
        ))}
      </Space>
    </div>
  );
};

export default Introduction;
