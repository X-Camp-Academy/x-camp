"use client";
import React from "react";
import { Space } from "antd";
import styles from "./index.module.scss";

const TopBanner = () => {
  return (
    <div className={styles.topBannerContainer}>
      <div className="container">
        <Space direction="vertical" className={styles.content}>
          <div className={styles.title}>Partners</div>
          <div className={styles.paragraph}>
            <span>
              If you are interested in becoming a X-Camp partner, please send
              your inquiry to
            </span>
            <a href="mailto:partner@x-camp.org">partner@x-camp.org</a>
          </div>
        </Space>
      </div>
    </div>
  );
};

export default TopBanner;
