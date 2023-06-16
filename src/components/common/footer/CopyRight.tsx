"use client";
import React from "react";
import { Space, Row, Col, Card, Image, Typography } from "antd";
import styles from "./CopyRight.module.scss";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Title, Paragraph, Text } = Typography;

const CopyRight: React.FC = () => {
  return (
    <div className={styles.copyRightContainer}>
      <div className={`${styles.copyRight} container`}>
        <Row justify="space-between" align="middle">
          <Col xs={24} sm={24} md={24} lg={12}>
            <Space direction="vertical" className={styles.spaceLeft}>
              <Space>
                <Image
                  alt=""
                  src="/image/home/footer-logo-1.png"
                  preview={false}
                  className={styles.image}
                />
                <Text className={styles.text}>Let’s change the world with coding!</Text>
              </Space>

              <Space direction="vertical">
                <Paragraph className={styles.paragraph}>
                  <PhoneOutlined />
                  <Text className={styles.text}>Tel: 510-708-8390</Text>
                </Paragraph>
                <Paragraph className={styles.paragraph}>
                  <MailOutlined />
                  <Text className={styles.text}>
                    Email: info@x-camp.academy
                  </Text>
                </Paragraph>

                <Space>
                  <Link href="/">
                    <Image
                      alt=""
                      preview={false}
                      src="/image/home/youtube.png"
                      className={styles.icon}
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      alt=""
                      preview={false}
                      src="/image/home/facebook.png"
                      className={styles.icon}
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      alt=""
                      preview={false}
                      src="/image/home/linkedin.png"
                      className={styles.icon}
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      alt=""
                      preview={false}
                      src="/image/home/twitter.png"
                      className={styles.icon}
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      alt=""
                      preview={false}
                      src="/image/home/we-chat.png"
                      className={styles.icon}
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      alt=""
                      preview={false}
                      src="/image/home/small-red-book.png"
                      className={styles.icon}
                    />
                  </Link>
                </Space>
              </Space>
            </Space>
          </Col>

          <Col xs={24} sm={24} md={24} lg={12}>
            <Space align="start" className={styles.spaceRight}>
              <Space direction="vertical">
                <Text className={styles.text}>X-Camp Academy</Text>
                <Link href={"/"}>Achievements</Link>
                <Link href={"/"}>About us</Link>
                <Link href={"/"}>Faculty</Link>
              </Space>
              <Space direction="vertical">
                <Text className={styles.text}>Campus</Text>
                <Link href={"/"}>Main Campus</Link>
                <Link href={"/"}>Austin Branch</Link>
              </Space>
              <Space direction="vertical">
                <Text className={styles.text}>Quick Links</Text>
                <Link href={"/"}>CS Competition</Link>
                <Link href={"/"}>Enroll</Link>
                <Link href={"/"}>FAQs</Link>
              </Space>
            </Space>
          </Col>
        </Row>
        <div className={styles.bar}></div>
        <Title className={styles.bottomTitle}>Copyright @ 2021 X-Camp</Title>
      </div>
    </div>
  );
};

export default CopyRight;
