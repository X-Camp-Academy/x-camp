"use client";
import React from "react";
import { Space, Row, Col, Card, Image, Typography } from "antd";
import styles from "./Results.module.scss";

const { Title, Paragraph, Text } = Typography;

const Results: React.FC = () => {
  const resultsData = [
    {
      title: "Art of Programming Results",
      description:
        "X-Camp has created an Art of Python Programming contest every quarter to inspire students that are new to Python. It is a great opportunity for students to showcase what they have learned from classes by creating fun projects, and get rewarded!",
      images: [
        "/image/about-us/introduction/top-banner.png",
        "/image/about-us/introduction/top-banner.png",
        "/image/about-us/introduction/top-banner.png",
      ],
    },
    {
      title: "Algorithms Project Results",
      description:
        "X-Camp has created an Art of Python Programming contest every quarter to inspire students that are new to Python. It is a great opportunity for students to showcase what they have learned from classes by creating fun projects, and get rewarded!",
      images: [
        "/image/about-us/introduction/top-banner.png",
        "/image/about-us/introduction/top-banner.png",
        "/image/about-us/introduction/top-banner.png",
      ],
    },
  ];
  return (
    <div className="container">
      {resultsData.map((item, index) => (
        <Space key={index} direction="vertical" size={16} className={styles.space}>
          <Title className={styles.title}>{item?.title}</Title>
          <Paragraph className={styles.paragraph}>
            {item?.description}
          </Paragraph>
          <Row gutter={16} className={styles.row}>
            {item?.images?.map((image, index) => (
              <Col key={index} xs={24} sm={24} md={8}>
                <Image
                  alt="image"
                  src={image}
                  preview={false}
                  className={styles.image}
                />
              </Col>
            ))}
          </Row>
        </Space>
      ))}

      <Space></Space>
    </div>
  );
};

export default Results;
