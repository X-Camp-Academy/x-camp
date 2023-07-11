import React from "react";
import styles from "./index.module.scss";
import { Col, Row, Space, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
const { Text } = Typography;
const TopBanner = () => {
  return (
    <div className={styles.topBannerContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={14} className={styles.col}>
            <Space direction="vertical">
              <Title className={styles.title}>In-person Camps</Title>
              <div>
                <Text className={styles.paragraph}>X-Camp has two training camps every year</Text>
                <ul className={styles.paragraph}>
                  <li>Summer Onsite Camps </li>
                  <li>Winter Onsite Camps</li>
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
        <Space></Space>
      </div>
    </div >
  );
};

export default TopBanner;
