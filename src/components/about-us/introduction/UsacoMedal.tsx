"use client";
import React from "react";
import { Space, Row, Col, Card, Image, Typography } from "antd";
import styles from "./UsacoMedal.module.scss";
import UsacoCards from "@/components/common/usaco-cards";

const { Title, Paragraph, Text } = Typography;

const UsacoMedal: React.FC = () => {
  const cardsData = [
    {
      count: "200+",
      title: "USACO Silver and above",
      color: "#00A0E9",
    },
    {
      count: "30",
      title: "USACO Platinum",
      color: "#FFD600",
    },
    {
      count: "12",
      title: "USACO Finalist",
      color: "#FFAD11",
    },
    {
      count: "1",
      title: "USACO Team",
      color: "#D46B14",
    },
  ];

  return (
    <div className={`${styles.usacoMedal} container`}>
      <Title className={styles.title}>USACO Medal</Title>
      <Paragraph className={styles.paragraph}>
        Over the past five years of USACO results
      </Paragraph>
      <UsacoCards />
    </div>
  );
};

export default UsacoMedal;
