import React, { useRef } from "react";
import styles from "./index.module.scss";
import { Col, Row, Space } from "antd";
const CampIntro = () => {
  return (
    <div className={styles.campIntro}>
      <div className="container">
        <div className={styles.title}>
          {"Our Summer and Winter Onsite Camps"}
        </div>
        <div className={styles.content}>
          <div className={styles.question}>
            {"What our onsite camps provide?"}
          </div>
          <div
            className={styles.answer}
          >{`Every summer and winter, X-Camp will provide onsite camps to students. 
            From beginner level to USACO different levels. Through intensive training to 
            maximize their potential,and improve students’ comprehensive programming ability in a short time.`}</div>
          <div className={styles.question}>{"USACO Achievements"}</div>
          <div
            className={styles.answer}
          >{`X-Camp has accomplished impressive results in USACO since last 5 years: more than 200 
            X-Camp students have been qualified for USACO Silver division and above, including 30 in the 
            Platinum division and 12 selected in the US Camp, out of which 7 were fresh from the 2023 
            season. 1 student selected for US EGOI Team`}</div>
          <div className={styles.question}>{"Camp Introduction"}</div>
          <div
            className={styles.answer}
          >{`From 2021, X-Camp already held the onsite Summer and Winter Camps successfully, which achieved
           high ratings from our students and parents. Take a look at our short video of the Summer Camp to 
           give you a quick overview. `}</div>
          {/* <div className={styles.usacoTitle}>
            {'USACO Spotlight in last 5 years'}
          </div> */}
          {/* <UsacoCards /> */}
          <Row gutter={17}>
            <Col lg={18} md={24}>
              <video controls className={styles.videoBox}>
                <source
                  src="https://media.strapi.turingstar.com.cn/production/2023/5/_2cd2122d99.mp4?updated_at=2023-05-14T08:17:12.234Z"
                  type="video/mp4"
                />
              </video>
            </Col>
            <Col lg={6} md={24}>
              <Space direction="vertical" style={{ width: "100%" }}>
                <div className={styles.imgBox}>
                  <img
                    src="/image/about-us/introduction/top-banner.png"
                    alt="img"
                    className={styles.threeImages}
                  />
                </div>
                <div className={styles.imgBox}>
                  <img
                    src="/image/about-us/introduction/top-banner.png"
                    alt="img"
                    className={styles.threeImages}
                  />
                </div>
                <div className={styles.imgBox}>
                  <img
                    src="/image/about-us/introduction/top-banner.png"
                    alt="img"
                    className={styles.threeImages}
                  />
                </div>
              </Space>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default CampIntro;
