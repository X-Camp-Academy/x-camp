"use client";
import React from "react";
import { Space, Row, Col, Card, Image, Typography } from "antd";
import styles from "./Map.module.scss";

const { Title, Paragraph, Text } = Typography;

const Map: React.FC = () => {
  return (
    <div className={`${styles.map} container`}>
      <Title className={styles.title}>We are one big family</Title>
      <Text className={styles.text}>All X-Campers, All Together</Text>
    </div>
  );
};

export default Map;
