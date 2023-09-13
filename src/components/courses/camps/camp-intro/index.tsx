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

          <Row gutter={16} style={{ marginTop: 100 }}>
            <Col xs={24} sm={24} md={24} lg={18}>
              <video controls className={styles.videoBox}>
                <source
                  src="https://media.strapi.turingstar.com.cn/production/2023/7/X_Camp2023_Intro_07_12_6306a9d6bd.mp4?updated_at=2023-07-20T01:53:34.680Z"
                  type="video/mp4"
                />
              </video>
            </Col>
            <Col xs={24} sm={24} md={24} lg={6}>
              <Space direction="vertical" style={{ width: "100%" }}>
                <div className={styles.imgBox}>
                  <img
                    src="/image/courses/camps-1.png"
                    alt="img"
                    className={styles.threeImages}
                  />
                </div>
                <div className={styles.imgBox}>
                  <img
                    src="/image/courses/camps-2.png"
                    alt="img"
                    className={styles.threeImages}
                  />
                </div>
                <div className={styles.imgBox}>
                  <img
                    src="/image/courses/camps-3.png"
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
