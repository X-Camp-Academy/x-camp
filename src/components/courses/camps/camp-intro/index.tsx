import React from "react";
import styles from "./index.module.scss";
import { Col, Row, Space } from "antd";
import { useLang } from "@/hoc/with-intl/define";
const CampIntro = () => {
  const { format: t } = useLang();

  return (
    <div className={styles.campIntro}>
      <div className="container">
        <div className={styles.title}>{t("Camp.Title")}</div>
        <div className={styles.content}>
          <div className={styles.question}>{t("Camp.Problem1")}</div>
          <div className={styles.answer}>{t("Camp.Answer1")}</div>
          <div className={styles.question}>{t("Camp.Problem2")}</div>
          <div className={styles.answer}>{t("Camp.Answer2")}</div>
          <div className={styles.question}>{t("Camp.Problem3")}</div>
          <div className={styles.answer}>{t("Camp.Answer3")}</div>

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
