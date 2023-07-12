import React from "react";
import styles from "./index.module.scss";
import { Col, Row, Space, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { useLang } from "@/hoc/with-intl/define";
const { Text } = Typography;
const TopBanner = () => {
  const { format: t } = useLang();
  return (
    <div className={styles.topBannerContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={14} className={styles.col}>
            <Space direction="vertical">
              <Title className={styles.title}>{t("In-personCamps")}</Title>
              <div>
                <Text className={styles.paragraph}>{t("Camp.Des")}</Text>
                <ul className={styles.paragraph}>
                  <li>{t("SummerCamp")}</li>
                  <li>{t("WinterCamp")}</li>
                </ul>
              </div>
            </Space>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={{ span: 8, offset: 2 }}
            className={styles.col}
          >
            <div className={styles.bannerImgContainer}>
              <div className={styles.colorSquare}></div>
              <img
                alt="image"
                src="/image/about-us/introduction/top-banner.png"
                className={styles.image}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TopBanner;
