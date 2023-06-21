"use client";
import React from "react";
import { Space, Row, Col, Card, Image, Typography } from "antd";
import styles from "./Banner.module.scss";

const { Title, Paragraph, Text } = Typography;

const Banner: React.FC = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className="container">
        <Title className={styles.title}>All X-Campers, All Together</Title>
        <Paragraph className={styles.paragraph}>
          Since its inception, X-Camp has had over 1,000 students and is
          currently enrolling over 500+ students in 250+ schools around the
          world. If you would like to find your classmates, please contact us!
        </Paragraph>
      </div>
    </div>
  );
};

export default Banner;
