"use client";
import React from "react";
import { Space, Row, Col, Image, Typography } from "antd";
import styles from "./TopBanner.module.scss";

const { Title, Paragraph } = Typography;

const TopBanner: React.FC = () => {
  return (
    <div className={styles.topBannerContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={14} className={styles.col}>
            <Space direction="vertical">
              <Title className={styles.title}>Help Center</Title>
              <Paragraph className={styles.paragraph}>
                {
                  "Here we provide helpful instructions to ensure a seamless and efficient resolution to any concerns or challenges you may encounter."
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
            <Image
              alt="image"
              src="/image/about-us/help-center/helpCenterTopBanner.png"
              preview={false}
              className={styles.image}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TopBanner;
