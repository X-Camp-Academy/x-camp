"use client";
import React from "react";
import { Space, Row, Col, Card, Image, Typography } from "antd";
import styles from "./ISPI.module.scss";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useMobile } from "@/utils";

const { Title, Paragraph, Text } = Typography;

const ISPI: React.FC = () => {
  const isMobile = useMobile();
  return (
    <div className={styles.ispiContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={14} className={styles.col}>
            <Space direction="vertical" size={96}>
              <Title className={styles.title}>
                Let ’s change the world with coding
              </Title>
              <Space size={isMobile ? 8 : 48} direction="vertical">
                <Space
                  size={isMobile ? 8 : 48}
                  direction={isMobile ? "vertical" : "horizontal"}
                >
                  <Text className={styles.text}>
                    <CheckCircleOutlined className={styles.textIcon} />
                    Inspire Interest
                  </Text>
                  <Text className={styles.text}>
                    <CheckCircleOutlined className={styles.textIcon} />
                    {"Unleash Students' Potential"}
                  </Text>
                </Space>
                <Space
                  size={isMobile ? 8 : 48}
                  direction={isMobile ? "vertical" : "horizontal"}
                >
                  <Text className={styles.text}>
                    <CheckCircleOutlined className={styles.textIcon} />
                    Cultivate Soft Skills
                  </Text>
                  <Text className={styles.text}>
                    <CheckCircleOutlined className={styles.textIcon} />
                    Fster Independent Individuals
                  </Text>
                </Space>
              </Space>
            </Space>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={{ span: 8, offset: 2 }}
            className={styles.col}
          >
            <div className={styles.cards}>
              <div className={styles.interest}>Interest</div>
              <div className={styles.skills}>Skills</div>
              <div className={styles.potential}>Potential</div>
              <div className={styles.independent}>Independent</div>
            </div>
          </Col>
        </Row>
        <Space></Space>
      </div>
    </div>
  );
};

export default ISPI;
