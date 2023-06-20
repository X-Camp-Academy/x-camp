"use client";
import React from "react";
import { Space, Row, Col, Card, Image, Typography } from "antd";
import styles from "./TopBanner.module.scss";

const { Title, Paragraph, Text } = Typography;

const TopBanner: React.FC = () => {
  return (
    <div className={styles.topBannerContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={14} className={styles.col}>
            <Space direction="vertical">
              <Title className={styles.title}>X-Camp Academy</Title>
              <Paragraph className={styles.paragraph}>
                A Silicon Valley based coding institute, offers programming
                classes to 5-12th grade students from beginner to USACO US Camp
                level.
              </Paragraph>
            </Space>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={{ span: 8, offset: 2 }}
            className={styles.col}
          >
            <Image
              alt="image"
              src="/image/about-us/introduction/carousel-bg.png"
              preview={false}
              className={styles.image}
            />
          </Col>
        </Row>
        <Space></Space>
      </div>
    </div>
  );
};

export default TopBanner;
