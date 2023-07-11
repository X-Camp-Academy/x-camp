"use client";
import React from "react";
import { Space, Button, Image, Typography, Row, Col } from "antd";
import styles from "./index.module.scss";
import { CheckOutlined } from "@ant-design/icons";
import { useMobile } from "@/utils";

const { Title, Paragraph, Text } = Typography;

const XCampFounder = () => {
  const isMobile = useMobile();
  return (
    <div className={`${styles.XCampFounder} container`}>
      <Space direction="vertical" align="center">
        <Title className={styles.title}>X-Camp Founder</Title>
        <Paragraph className={styles.description}>
          Founded on August 22, 2017, 4 students currently trained have entered
          the US National Training Team, with more than 500 students currently
          studying in 300+ schools around the world.
        </Paragraph>

        <Row>
          <Col xs={24} sm={24} md={24} lg={12} className={styles.charlieImgCol}>
            <div className={styles.charlieImgBackground}></div>
            <Image
              src={"/image/home/charlie.png"}
              alt="image"
              preview={false}
              className={styles.charlieImg}
            />
          </Col>

          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            className={styles.founderDescription}
          >
            <Space direction="vertical">
              <Title className={styles.founderName}>Charlie</Title>

              <Paragraph className={styles.founderTag}>
                <Button
                  type="primary"
                  shape="circle"
                  size="small"
                  className={styles.founderTagButton}
                >
                  <CheckOutlined />
                </Button>
                Co-founder of X-Camp Academy
              </Paragraph>

              <Paragraph className={styles.founderTag}>
                <Button
                  type="primary"
                  shape="circle"
                  size="small"
                  className={styles.founderTagButton}
                >
                  <CheckOutlined />
                </Button>
                X-Camp Academy Principal
              </Paragraph>

              <Space direction="vertical">
                <Paragraph className={styles.paragraph}>
                  Charlie has been working in a large tech company for more than
                  <Text className={styles.keyText}> 10 years </Text>
                </Paragraph>
                <Paragraph className={styles.paragraph}>
                  He earned his PhD. in Artificial Intelligence from UCLA with
                  more than
                  <Text className={styles.keyText}> 20 papers </Text>
                  published in international journals and more than 10 patents
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
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            className={styles.founderDescription}
          >
            <Space direction="vertical">
              <Title className={styles.founderName}>Yuan</Title>

              <Paragraph className={styles.founderTag}>
                <Button
                  type="primary"
                  shape="circle"
                  size="small"
                  className={styles.founderTagButton}
                >
                  <CheckOutlined />
                </Button>
                Co-founder of X-Camp Academy
              </Paragraph>

              <Paragraph className={styles.founderTag}>
                <Button
                  type="primary"
                  shape="circle"
                  size="small"
                  className={styles.founderTagButton}
                >
                  <CheckOutlined />
                </Button>
                X-Camp Senior Coding Coach
              </Paragraph>

              <Space direction="vertical">
                <Paragraph className={styles.paragraph}>
                  {
                    "Head of Teaching at X-Camp. Senior Big Data Infrastructure Engineer,"
                  }
                </Paragraph>

                <Paragraph className={styles.paragraph}>
                  {
                    "Over the past 5 years, Yuan's teaching team has helped more than"
                  }{" "}
                  <Text className={styles.keyText}> 200 students </Text>
                  achieve the level of USACO Silver or higher,with 12 students
                  selected for the
                  <Text className={styles.keyText}>
                    {" "}
                    USACO USA National Training Team{" "}
                  </Text>
                  from 2020 to 2023 (only about
                  <Text className={styles.keyText}> 25-27 </Text>
                  players can be selected each year).
                </Paragraph>
              </Space>
            </Space>
          </Col>

          <Col xs={24} sm={24} md={24} lg={12} className={styles.yuanImgCol}>
            <div className={styles.yuanImgBackground}></div>
            <Image
              src={"/image/home/yuan.png"}
              alt="image"
              preview={false}
              className={styles.yuanImg}
            />
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default XCampFounder;
