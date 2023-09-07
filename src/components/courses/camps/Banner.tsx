import React from "react";
import { Col, Row, Space, Typography } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import styles from "./Banner.module.scss";

const { Title, Text } = Typography;

const Banner: React.FC = () => {
  const { format: t } = useLang();

  return (
    <div className={styles.bannerContainer}>
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
                src="/image/about-us/banner-background.png"
                className={styles.image}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Banner;
