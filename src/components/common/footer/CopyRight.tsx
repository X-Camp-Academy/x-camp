"use client";
import React, { useState } from "react";
import { Space, Row, Col, Image, Typography } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "./CopyRight.module.scss";

const { Title, Paragraph, Text } = Typography;

const CopyRight: React.FC = () => {
  const icons = [
    {
      src: "/image/home/youtube.png",
      hoverSrc: "/image/home/youtube-hover.png",
      link: "https://www.youtube.com/channel/UCMVQsb_RSTuthiHbni9jfow",
    },
    {
      src: "/image/home/facebook.png",
      hoverSrc: "/image/home/facebook-hover.png",
      link: "https://www.facebook.com/XCampAcademy2017/",
    },
    {
      src: "/image/home/linkedin.png",
      hoverSrc: "/image/home/linkedin-hover.png",
      link: "https://www.linkedin.com/company/x-camp-academy",
    },
    {
      src: "/image/home/twitter.png",
      hoverSrc: "/image/home/twitter-hover.png",
      link: "https://twitter.com/CampacademyX",
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
  const source = icons.map((icon) => icon.src);
  const [imageSrc, setImageSrc] = useState(source);
  const onMouseOver = (index: number) => {
    const newImageSrc = [...imageSrc];
    newImageSrc[index] = icons[index].hoverSrc;
    setImageSrc(newImageSrc);
  };
  const onMouseLeave = () => {
    const newImageSrc = [...source];
    setImageSrc(newImageSrc);
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
                  src="/logo/logo.png"
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
              </Space>
            </Space>
          </Col>

          <Col xs={24} sm={24} md={24} lg={12}>
            <Space align="start" className={styles.spaceRight}>
              <Space direction="vertical">
                <Text className={styles.text}>X-Camp Academy</Text>
                <Link href={"/about-us/achievements"}>Achievements</Link>
                <Link href={"/about-us/introduction"}>About us</Link>
                <Link href={"/about-us/introduction"}>Faculty</Link>
              </Space>
              <Space direction="vertical">
                <Text className={styles.text}>Campus</Text>
                <Link href={"/"}>Main Campus</Link>
                <Link href={"/"}>Austin Branch</Link>
              </Space>
              <Space direction="vertical">
                <Text className={styles.text}>Quick Links</Text>
                <Link href={"/resources/contests"}>CS Competition</Link>
                <Link href={"/courses"}>Enroll</Link>
                <Link href={"/about-us/help-center"}>FAQs</Link>
              </Space>
            </Space>
          </Col>
        </Row>
        <div className={styles.bar}></div>

        <div className={styles.bottomContainer}>
          <Title className={styles.bottomTitle}>Copyright @ 2021 X-Camp</Title>
          <Space>
            {icons.map((item, index) => (
              <a href={item?.link} target="_blank" key={index}>
                <Image
                  alt=""
                  src={imageSrc[index]}
                  preview={false}
                  width={28}
                  height={28}
                  onMouseOver={() => onMouseOver(index)}
                  onMouseLeave={onMouseLeave}
                />
              </a>
            ))}
          </Space>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
