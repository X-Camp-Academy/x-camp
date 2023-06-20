"use client";
import React from "react";
import { Space, Row, Col, Card, Image, Typography, Tag } from "antd";
import styles from "./Founder.module.scss";

const { Title, Paragraph, Text } = Typography;

const TopBanner: React.FC = () => {
  return (
    <div className={styles.founderContainer}>
      <div className="container">
        <Space direction="vertical" size={96}>
          <Space direction="vertical">
            <Title className={styles.title}>X-Camp Founder</Title>
            <Paragraph className={styles.titleParagraph}>
              日创立，现如今培养的4名学生进入美国国家集训队，在读学生超过500名，遍及全球300+学校。7名学生进入美国国家集训队（US
              Camp），占据本赛季进入国家集训队名额的近1/4比例
            </Paragraph>
          </Space>

          <Row>
            <Col xs={24} sm={24} md={24} lg={8}>
              <Image
                alt="image"
                src="/image/about-us/introduction/charlie.png"
                preview={false}
                className={styles.image}
              />
            </Col>
            <Col xs={24} sm={24} md={24} lg={16}>
              <Space direction="vertical" className={styles.descriptionSpace}>
                <Title className={styles.name}>Charlie</Title>
                <Tag color="#FFAD11" className={styles.tag}>
                  Co-founder & Principal of X-Camp Academy
                </Tag>
                <Space direction="vertical">
                  <Paragraph className={styles.paragraph}>
                    Charlie has been working in a large tech company for more
                    than
                    <Text className={styles.keyText}> 10 years </Text>
                  </Paragraph>
                  <Paragraph className={styles.paragraph}>
                    He earned his PhD. in Artificial Intelligence from UCLA with
                    more than
                    <Text className={styles.keyText}> 20 papers </Text>
                    published in international journals and more than10 patents
                    granted.
                  </Paragraph>

                  <Paragraph className={styles.paragraph}>
                    Dr. Guo is also a founding partner of the H Founders Angel
                    Fund, his investment areas include big data, artificial
                    intelligence and augmented reality.
                  </Paragraph>
                </Space>
              </Space>
            </Col>
          </Row>

          <Row>
            <Col xs={24} sm={24} md={24} lg={8}>
              <Image
                alt="image"
                src="/image/about-us/introduction/yuan.png"
                preview={false}
                className={styles.image}
              />
            </Col>
            <Col xs={24} sm={24} md={24} lg={16}>
              <Space direction="vertical" className={styles.descriptionSpace}>
                <Title className={styles.name}>Charlie</Title>
                <Tag color="#FFAD11" className={styles.tag}>
                  Co-founder of X-Camp Academy
                </Tag>
                <Space direction="vertical">
                  <Paragraph className={styles.paragraph}>
                    Head of Teaching at X-Camp. Senior Big Data Infrastructure
                    Engineer.
                  </Paragraph>
                  <Paragraph className={styles.paragraph}>
                    {
                      "Over the past 5 years, Yuan's teaching team has helped more than "
                    }
                    <Text className={styles.keyText}> 200 students </Text>
                    achieve the level of USACO Silver or higher,with 12 students
                    selected for the
                    <Text className={styles.keyText}>
                      {" "}
                      USACO USA National Training Team{" "}
                    </Text>
                    from 2020 to 2023 (only about{" "}
                    <Text className={styles.keyText}>25-27</Text> players can be
                    selected each year).
                  </Paragraph>
                </Space>
              </Space>
            </Col>
          </Row>
        </Space>
      </div>
    </div>
  );
};

export default TopBanner;
