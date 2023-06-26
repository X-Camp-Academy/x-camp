"use client";
import React from "react";
import { Space, Row, Col, Card, Image, Button, Typography } from "antd";
import styles from "./Stories.module.scss";
import ColorfulCard from "@/components/common/colorful-card";
import { RightOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const Stories: React.FC = () => {
  return (
    <div className={styles.storiesContainer}>
      <div className="container">
        <Space className={styles.topSpace}>
          <Space direction="vertical">
            <Title className={styles.title}>Stories</Title>
            <Paragraph className={styles.paragraph}>
              Explore news, views and perspectives from Stanford and your alumni
              community.
            </Paragraph>
          </Space>
          <button className={styles.button}>Explore More Stories</button>
        </Space>

        <Row gutter={32} className={styles.row}>
          {[1, 2, 3].map((item, index) => (
            <Col key={index} xs={24} sm={24} md={8}>
              <ColorfulCard border="bottom" index={index}>
                <Card bodyStyle={{
                  padding: 0,
                }}>
                  <Space direction="vertical" size={32}>
                    <Image
                      alt=""
                      preview={false}
                      src="/image/about-us/introduction/top-banner.png"
                      className={styles.cardImage}
                    />
                    <Text className={styles.cardTitle}>
                      2023 Spring APCS Class series are now open for story title
                      <Button
                        type="primary"
                        size="small"
                        ghost={true}
                        shape="circle"
                        className={styles.cardButton}
                      >
                        <RightOutlined />
                      </Button>
                    </Text>

                    <Paragraph className={styles.cardParagraph}>
                      Introduction to the story Introduction to the story
                      Introduction to the story Introduction to the story
                    </Paragraph>
                  </Space>
                </Card>
              </ColorfulCard>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Stories;
