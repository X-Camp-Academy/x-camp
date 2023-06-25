import ColorfulCard from "@/components/common/colorful-card";
import { Divider, Space } from "antd";
import React from "react";
import CourseAbstract from "./course-abstract";
import styles from "./index.module.scss";

const CourseCard = () => {
  return (
    <div className={styles.courseCard}>
      <div className="container">
        <ColorfulCard border={"bottom"} index={1} animate={false}>
          <Space
            className={styles.cardContent}
            direction="vertical"
            split={<Divider />}
          >
            <CourseAbstract />
          </Space>
        </ColorfulCard>
      </div>
    </div>
  );
};

export default CourseCard;
