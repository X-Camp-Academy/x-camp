"use client";
import React, { useState } from "react";
import { Space, Row, Col, Image, Typography, Popover } from "antd";
import { HistoryOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "./CopyRight.module.scss";
import { useLang } from "@/hoc/with-intl/define";

const { Title, Paragraph, Text } = Typography;

const CopyRight: React.FC = () => {
  const { format: t } = useLang();
  const icons = [
    {
      src: "/image/home/youtube.png",
      hoverSrc: "/image/home/youtube-hover.png",
      link: "https://www.youtube.com/@xcampacademy",
    },
    {
      src: "/image/home/facebook.png",
      hoverSrc: "/image/home/facebook-hover.png",
      link: "https://www.facebook.com/XCampAcademy2017",
    },
    {
      src: "/image/home/linkedin.png",
      hoverSrc: "/image/home/linkedin-hover.png",
      link: "https://www.linkedin.com/company/x-camp-academy/",
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

  const QRcodeImg = ["/image/QRCode/weChatQR.jpg", "/image/QRCode/xiaoRedBookQR.png"]

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
                  <Text className={styles.text} style={{ textDecoration: 'underline' }}>{t("Tel")}+1 - 510-708-8390</Text>
                </Paragraph>
                <Paragraph className={styles.paragraph}>
                  <MailOutlined />
                  <Text className={styles.text} style={{ textDecoration: 'underline' }}>
                    Email: info@x-camp.academy
                  </Text>
                </Paragraph>
                <Paragraph className={styles.paragraph}>
                  <HistoryOutlined />
                  <Text className={styles.text}>
                    Office Hour: Tue - Sun (Monday Off)
                  </Text>
                </Paragraph>
              </Space>
            </Space>
          </Col>

          <Col xs={24} sm={24} md={24} lg={12}>
            <Space align="start" className={styles.spaceRight}>
              <Space direction="vertical">
                <Text className={styles.text}>X-Camp Academy</Text>
                <Link href={"/about-us/calendar"}>{t('SchoolCalendar')}</Link>
                {/* ! TODO */}
                <Link href={"/courses#classify0"}>{'Online Courses'}</Link>
                <Link href={"/courses/camps"}>{t('In-personCamps')}</Link>
              </Space>
              <Space direction="vertical">
                <Text className={styles.text}>Activity</Text>
                <Link href={"/resources/weekly-open-house"}>{t('WeeklyOpenHouse')}</Link>
                {/* ! TODO */}
                <Link href={"/resources/weekly-education-forum"}>{'Event Calendar'}</Link>
                <a href={"http://usaco.org/"}>{'USACO'}</a>
              </Space>
              <Space direction="vertical">
                <Text className={styles.text}>{'Help Center'}</Text>
                <Link href={"/about-us/contact-us"}>{'Contact Us'}</Link>
                <Link href={"/about-us/contact-us"}>{'Join Us'}</Link>
                <Link href={"/about-us/help-center"}>{'Q&A'}</Link>
              </Space>
            </Space>
          </Col>
        </Row>
        <div className={styles.bar}></div>

        <div className={styles.bottomContainer}>
          <Title className={styles.bottomTitle}>Copyright @ 2023 X-Camp</Title>
          <Space>
            {icons.map((item, index) => {
              if (index <= 2) {
                return (
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
                )
              }
              else {
                return (
                  <Popover content={<img src={QRcodeImg[index - 3]} alt="" style={{ width: '100px', height: '100px' }} />} key={index}>
                    <Image
                      alt=""
                      src={imageSrc[index]}
                      preview={false}
                      width={28}
                      height={28}
                      onMouseOver={() => onMouseOver(index)}
                      onMouseLeave={onMouseLeave}
                    />
                  </Popover>
                )
              }
            })}
          </Space>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
