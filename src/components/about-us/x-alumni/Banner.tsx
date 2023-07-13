"use client";
import React from "react";
import { Space, Row, Col, Typography } from "antd";
import styles from "./Banner.module.scss";
import { useLang } from "@/hoc/with-intl/define";

const { Title, Paragraph } = Typography;

const Banner = () => {
  const { format: t } = useLang();
  return (
    <div className={styles.topBannerContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={14} className={styles.col}>
            <Space direction="vertical">
              <Title className={styles.title}>{t("XAlumni")}</Title>
              <Paragraph className={styles.paragraph}>
                {t("XAlumni.Desc")}
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
              <img
                alt="image"
                src="/image/about-us/x-alumni/XAlumniBanner.png"
                className={styles.image}
              />
            </div>
          </Col>
        </Row>
        <Space></Space>
      </div>
    </div>
  );
};

export default Banner;
