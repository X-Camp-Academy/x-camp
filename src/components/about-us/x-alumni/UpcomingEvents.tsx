"use client";
import React from "react";
import { Space, Row, Col, Card, Image, Button, Typography } from "antd";
import styles from "./UpcomingEvents.module.scss";
import ColorfulCard from "@/components/common/colorful-card";
import {
  HistoryOutlined,
  LaptopOutlined,
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const UpcomingEvents: React.FC = () => {
  return (
    <div className={styles.upcomingEventsContainer}>
      <div className="container">
        <Space className={styles.topSpace}>
          <Space direction="vertical">
            <Title className={styles.title}>Upcoming Events</Title>
            <Paragraph className={styles.paragraph}>
              Peek at some alumni events happening just around the corner.
            </Paragraph>
          </Space>
          <button className={styles.button}>View More Events</button>
        </Space>

        <Row gutter={32} className={styles.row}>
          {[1, 2, 3].map((item, index) => (
            <Col key={index} xs={24} sm={24} md={8}>
              <ColorfulCard border="bottom" index={index}>
                <Card
                >
                  <Space direction="vertical">
                    <Text className={styles.cardMonth}>JUN</Text>
                    <Text className={styles.cardDay}>10</Text>
                    <Paragraph className={styles.cardParagraph}>
                      USACO Director Brian Dean's Q&A Session - Webinar
                      Recording
                    </Paragraph>
                    <Space direction="vertical">
                      <Text className={styles.cardText}>
                        <HistoryOutlined className={styles.cardIcon} />
                        Tuesday, June 13, 2023 | 6:00 PM - 7:00 PM PDT
                      </Text>
                      <Text className={styles.cardText}>
                        <LaptopOutlined className={styles.cardIcon} />
                        Zoom
                      </Text>
                      <Text className={styles.cardText}>
                        <UserOutlined className={styles.cardIcon} />
                        Organizer | X-Camp{" "}
                      </Text>
                    </Space>
                  </Space>
                </Card>
              </ColorfulCard>
            </Col>
          ))}
        </Row>
        <Row gutter={32} className={styles.row}>
          {[1, 2, 3].map((item, index) => (
            <Col key={index} xs={24} sm={24} md={8}>
              <ColorfulCard border="bottom" index={index}>
                <Card
                >
                  <Space direction="vertical">
                    <Text className={styles.cardMonth}>JUN</Text>
                    <Text className={styles.cardDay}>10</Text>
                    <Paragraph className={styles.cardParagraph}>
                      USACO Director Brian Dean's Q&A Session - Webinar
                      Recording
                    </Paragraph>
                    <Space direction="vertical">
                      <Text className={styles.cardText}>
                        <HistoryOutlined className={styles.cardIcon} />
                        Tuesday, June 13, 2023 | 6:00 PM - 7:00 PM PDT
                      </Text>
                      <Text className={styles.cardText}>
                        <LaptopOutlined className={styles.cardIcon} />
                        Zoom
                      </Text>
                      <Text className={styles.cardText}>
                        <UserOutlined className={styles.cardIcon} />
                        Organizer | X-Camp{" "}
                      </Text>
                    </Space>
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

export default UpcomingEvents;
