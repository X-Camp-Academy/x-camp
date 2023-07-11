"use client";
import React from "react";
import { Space, Row, Col, Card, Image, Typography } from "antd";
import styles from "./Banner.module.scss";

const { Title, Paragraph, Text } = Typography;

const Banner: React.FC = () => {
  return (
    <div className={styles.topBannerContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={14} className={styles.col}>
            <Space direction="vertical">
              <Title className={styles.title}>X-Alumni</Title>
              <Paragraph className={styles.paragraph}>
                {
                  "Since its inception, X-Camp has had over 1,000 students and is currently enrolling over 500+ students in 250+ schools around the world. If you would like to find your classmates, please contact us!"
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
