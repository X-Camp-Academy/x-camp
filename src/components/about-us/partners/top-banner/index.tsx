"use client";
import React from "react";
import { Col, Row, Space, Image, Typography } from "antd";
import styles from "./index.module.scss";
import { useLang } from "@/hoc/with-intl/define";
const { Title, Paragraph } = Typography;

const TopBanner = () => {
  const { format: t } = useLang();
  return (
    <div className={styles.topBannerContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={14} className={styles.col}>
            <Space direction="vertical">
              <Title className={styles.title}>{t("Partners")}</Title>
              <Paragraph className={styles.paragraph}>
                {t("Partner.Desc")}
                {
                  <a
                    href="/"
                    style={{
                      fontSize: 24,
                      fontWeight: 500,
                      color: "#D46B14",
                      lineHeight: "42px",
                    }}
                  >
                    mailto info@x-camp.org
                  </a>
                }
              </Paragraph>
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
              <Image
                alt="image"
                src="/image/about-us/partners-banner.jpg"
                preview={false}
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
