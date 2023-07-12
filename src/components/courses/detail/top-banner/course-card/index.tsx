import ColorfulCard from "@/components/common/colorful-card";
import { Divider, Space } from "antd";
import React from "react";
import CourseAbstract from "./course-abstract";
import styles from "./index.module.scss";
import CourseDescription from "./course-description";


const CourseCard:React.FC = () => {
  return (
    <div className={styles.courseCard}>

        <Space
          className={styles.cardContent}
          direction="vertical"
          split={<Divider className={styles.divider} />}
        >
          <CourseAbstract />
          <CourseDescription />
        </Space>

    </div>
  );
};

export default CourseCard;
