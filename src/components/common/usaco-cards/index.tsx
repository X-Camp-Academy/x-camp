"use client";
import React from "react";
import { Space, Row, Col, Card, Image, Typography } from "antd";
import styles from "./index.module.scss";
import ColorfulCard from "@/components/common/colorful-card";

const { Title, Paragraph, Text } = Typography;

const UsacoCards: React.FC = () => {
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
    <Row gutter={16} className={styles.row}>
      {cardsData.map((item, index) => (
        <Col
          key={index}
          xs={24}
          sm={24}
          md={12}
          lg={6}
          className={index === 3 ? styles.col4 : styles.col}
        >
          <ColorfulCard
            border="bottom"
            index={index}
            total={4}
            className={styles.cardContainer}
          >
            <Card>
              <Space direction="vertical">
                <Text className={styles.count} style={{ color: item?.color }}>
                  {item?.count}
                </Text>
                <Text className={styles.cardTitle}>{item?.title}</Text>
              </Space>
            </Card>
          </ColorfulCard>
        </Col>
      ))}
    </Row>
  );
};

export default UsacoCards;
