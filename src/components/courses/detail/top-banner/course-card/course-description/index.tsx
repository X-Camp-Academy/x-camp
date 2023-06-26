import React from "react";
import styles from "./index.module.scss";
import { Carousel, Descriptions, Space } from "antd";

const CourseDescription = () => {
  return (
    <Space className={styles.description}>
      <div className={styles.left}>
        <Descriptions column={1}>
          <Descriptions.Item label="Class Mode">
            {"CS100P+CS101P"}
          </Descriptions.Item>
          <Descriptions.Item label="Code Language">
            {"Python"}
          </Descriptions.Item>
          <Descriptions.Item label="Classroom Language">
            {"English"}
          </Descriptions.Item>
          <Descriptions.Item label="Duration">
            {"2023/06/24 - 2023/12/03"}
          </Descriptions.Item>
          <Descriptions.Item label="Course Format">
            {"Offline(12280 Saratoga Sunnyvale Rd, #203 CA 95070)"}
          </Descriptions.Item>
          <Descriptions.Item label="Classes Time">
            <Space direction="vertical">
              <div>{"S100PA+CS101PA: Sat 1-3pm PT"}</div>
              <div className={styles.full}>
                {"CS100PB+CS101PB:Sat 3-5pm PT(Full)"}
              </div>
            </Space>
          </Descriptions.Item>
        </Descriptions>
      </div>
      <div className={styles.right}>
        <Carousel dots={{ className: styles.dots }}>
          <div className={styles.videoBox}>
            <video controls>
              <source
                src="https://media.strapi.turingstar.com.cn/production/2023/5/_2cd2122d99.mp4?updated_at=2023-05-14T08:17:12.234Z"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={styles.videoBox}>2</div>
          <div className={styles.videoBox}>3</div>
        </Carousel>
      </div>
    </Space>
  );
};

export default CourseDescription;
