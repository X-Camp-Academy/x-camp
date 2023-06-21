"use client";
import React from "react";
import { Space, Row, Col, Card, Image, Typography } from "antd";
import styles from "./UsacoMedal.module.scss";

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

        <Row gutter={16} className={styles.row}>
          {cardsData.map((item, index) => (
            <Col key={index} xs={24} sm={24} md={12} lg={6} className={index === 3 ? styles.col4 : styles.col}>
              <div
                className={styles.cardContainer}
                style={{ backgroundColor: item?.color }}
              >
                <Card>
                  <Space direction="vertical">
                    <Text
                      className={styles.count}
                      style={{ color: item?.color }}
                    >
                      {item?.count}
                    </Text>
                    <Text className={styles.cardTitle}>{item?.title}</Text>
                  </Space>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
  );
};

export default UsacoMedal;
