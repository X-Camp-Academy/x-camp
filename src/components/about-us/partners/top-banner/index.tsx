"use client";
import React from "react";
import { Col, Row, Space, Typography } from "antd";
import styles from "./index.module.scss";
import Link from "next/link";
const { Title, Paragraph, Text } = Typography;

const TopBanner: React.FC = () => {
  return (
    <div className={styles.topBannerContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={14} className={styles.col}>
            <Space direction="vertical">
              <Title className={styles.title}>Partners</Title>
              <Paragraph className={styles.paragraph}>
                {
                  "X-Camp aims to create a supportive and inclusive coding community that encourages knowledge sharing, skill development, and collaboration with our dedicated partners. We welcome new partner, please send your inquiry to   "
                } {
                  <a href="/" style={{
                    fontSize: 24,
                    fontWeight: 500,
                    color: '#D46B14',
                    lineHeight: "42px"
                  }}>info @x-camp.org.</a>
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
              <img
                alt="image"
                src="/image/about-us/introduction/top-banner.png"

                className={styles.image}
              />
            </div>
          </Col>
        </Row>
        <Space></Space>
      </div>
    </div >
  );
};

export default TopBanner;
