"use client";
import React from "react";
import { Space, Typography, Row, Col, Card, Image, Button } from "antd";
import styles from "./Partners.module.scss";
import { useMobile } from "@/utils";

const { Title, Paragraph, Text } = Typography;

const Partners: React.FC = () => {
  const isMobile = useMobile();
  const topImages = [
    "/image/home/partners-1.png",
    "/image/home/partners-2.png",
    "/image/home/partners-3.png",
  ];
  const bottomImages = [
    {
      src: "/image/home/partners-4.png",
      style: styles.bottomLeftImage,
    },
    {
      src: "/image/home/partners-5.png",
      style: styles.bottomCenterImage,
    },
    {
      src: "/image/home/partners-6.png",
      style: styles.bottomRightImage,
    },
  ];
  return (
    <div className={`${styles.partners} container`}>
      <Space direction="vertical" align="center">
        <Title className={styles.title}>Partners</Title>

        <Paragraph className={styles.paragraph}>
          X-Camp has its own Art of Python Programming contest 4.0 award and
          other projects and event every quarter to inspire students . It is a
          great opportunity for students to showcase what they have learned from
          classes .
        </Paragraph>

        <Row >
          <Col xs={24} sm={24} md={24} lg={12}>
            <Space>
              {topImages.map((item) => (
                <Image
                  key={item}
                  alt=""
                  src={item}
                  preview={false}
                  className={styles.topImage}
                />
              ))}
            </Space>
          </Col>
          <Col xs={24} sm={24} md={24} lg={{ span: 10, offset: 2 }}>
            <Space>
              {bottomImages.map((item, index) => (
                <Image
                  key={index}
                  alt=""
                  src={item?.src}
                  preview={false}
                  className={item.style}
                />
              ))}
            </Space>
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default Partners;
