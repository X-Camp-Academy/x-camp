"use client";
import React from "react";
import { Space, Typography } from "antd";
import styles from "./index.module.scss";

const { Title, Paragraph } = Typography;

const TopBanner = () => {
  return (
    <div className={styles.topBannerContainer}>
      <div className="container">
        <Space direction="vertical" className={styles.content}>
          <Title className={styles.title}>Partners</Title>
          <Paragraph className={styles.paragraph}>
            If you are interested in becoming a X-Camp partner, please send your
            inquiry to
          </Paragraph>
        </Space>
      </div>
    </div>
  );
};

export default TopBanner;
