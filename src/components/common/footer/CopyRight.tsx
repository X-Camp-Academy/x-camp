"use client";
import React, { useState } from "react";
import { Space, Row, Col, Card, Image, Typography } from "antd";
import styles from "./CopyRight.module.scss";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Title, Paragraph, Text } = Typography;

const CopyRight: React.FC = () => {
  const icons = [
    {
      src: "/image/home/youtube.png",
      hoverSrc: "/image/home/youtube-hover.png",
    },
    {
      src: "/image/home/facebook.png",
      hoverSrc: "/image/home/facebook-hover.png",
    },
    {
      src: "/image/home/linkedin.png",
      hoverSrc: "/image/home/linkedin-hover.png",
    },
    {
      src: "/image/home/twitter.png",
      hoverSrc: "/image/home/twitter-hover.png",
    },
    {
      src: "/image/home/we-chat.png",
      hoverSrc: "/image/home/we-chat-hover.png",
    },
    {
      src: "/image/home/small-red-book.png",
      hoverSrc: "/image/home/small-red-book-hover.png",
    },
  ];
  const cloneSource = icons.map((item) => item.src);
  const [source, setSource] = useState(cloneSource);
  const onMouseOver = (index: number) => {
    const data = JSON.parse(JSON.stringify(source));
    data[index] = icons[index].hoverSrc;
    setSource(data);
  };
  const onMouseLeave = (index: number) => {
    const data = JSON.parse(JSON.stringify(source));
    data[index] = icons[index].src;
    setSource(data);
  };
  return (
    <div className={styles.copyRightContainer}>
      <div className={`${styles.copyRight} container`}>
        <Row justify="space-between" align="middle">
          <Col xs={24} sm={24} md={24} lg={12}>
            <Space direction="vertical" className={styles.spaceLeft} size={48}>
              <Space direction="vertical">
                <Image
                  alt=""
                  src="/image/home/footer-logo-1.png"
                  preview={false}
                  className={styles.image}
                />
                <Image
                  alt="slogan"
                  preview={false}
                  src="/image/home/footer-slogan.png"
                  width={220}
                  height={24}
                />
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
                  {icons.map((_, index) => (
                    <Link
                      key={index}
                      href="/"
                      onMouseOver={() => onMouseOver(index)}
                      onMouseLeave={() => onMouseLeave(index)}
                    >
                      <Image
                        alt=""
                        src={source[index]}
                        preview={false}
                        width={28}
                        height={28}
                      />
                    </Link>
                  ))}
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
