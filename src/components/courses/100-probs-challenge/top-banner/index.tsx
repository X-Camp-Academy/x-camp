"use client";
import React from "react";
import { Space, Typography } from "antd";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const { Title, Paragraph } = Typography;

const TopBanner = () => {
  return (
    <div className={styles.topBannerContainer}>
      <div className={cx("container", styles.content)}>
        <Space direction="vertical">
          <Title className={styles.title}>100-Probs-Challenge</Title>
          <Paragraph className={styles.paragraph}>
            This is a <span>public welfare activity</span> aimed at helping
            students consolidate computer knowledge and prepare for USACO
            competitions. We welcome both X-Camp students and{" "}
            <span>non-X-Camp students</span> to join this challenge.
          </Paragraph>
        </Space>
        <img src="/image/about-us/introduction/top-banner.png" alt="" />
      </div>
    </div>
  );
};

export default TopBanner;
