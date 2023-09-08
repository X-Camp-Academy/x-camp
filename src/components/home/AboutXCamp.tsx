"use client";
import React from "react";
import { Space, Row, Col, Card, Image, Typography } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import styles from "./AboutXCamp.module.scss";

const { Title, Paragraph, Text } = Typography;
const AboutXCamp: React.FC = () => {
  const { format: t } = useLang();
  const aboutContents = [
    {
      icon: "/image/home/icon-why-book.png",
      title: 'Comprehensive curriculum',
      desc: 'X-Camp Academy, a Silicon Valley-based coding institute, offers beginner-level to IOI level\'s.',
      url: '/about-us/introduction/#faculty'
    },
    {
      icon: "/image/home/icon-why-concat.png",
      title: 'Top-notch staff and coaches',
      desc: 'Prestigious students from CS top schools, Experienced in tech, contest medalists in world class.',
      url: '/about-us/introduction/#faculty'
    },
    {
      icon: "/image/home/icon-why-house.png",
      title: 'Sense of',
      title2: 'community',
      desc: 'Supportive, inclusive community for our students pursuing their coding aspirations.',
      url: '/about-us/achievements/'
    },
    {
      icon: "/image/home/icon-why-track.png",
      title: 'Customized learning track',
      desc: 'Weekly homework rate tracking, 24-hour online edu forum, make your learning time valued',
      url: '/about-us/x-alumni/'
    },
  ];
  return (
    <div className={styles.aboutXCampContainer}>
      <div className={`${styles.aboutXCamp} container`}>
        <Space
          direction="vertical"
          align="center"
          className={styles.aboutXCampTop}
        >
          <Title className={styles.title}>
            <span>Why</span> X-Camp
            <Text className={styles.titleBg} />
          </Title>

          <Paragraph className={styles.paragraph}>
            {t("X-Camp.Desc1")}
          </Paragraph>
        </Space>
        <Row className={styles.row} gutter={16} justify="center" align="middle">
          {aboutContents.map((item) => {
            return (
              <Col key={item?.icon} xs={24} sm={24} md={24} lg={6}>
                <Card
                  className={styles.card}
                  bodyStyle={{
                    borderRadius: 8,
                  }}
                >
                  <a href={item.url}>
                    <Space direction="vertical">
                      <Image
                        src={item?.icon}
                        alt="icon"
                        preview={false}
                        className={styles.cardIcon}
                      />
                      <Text className={styles.cardTitle}>
                        {item?.title}
                        {
                          !!item.title2 && <><br /> {item.title2}</>
                        }
                      </Text>
                      <Paragraph
                        ellipsis={{ rows: 3, tooltip: item?.desc }}
                        className={styles.cardParagraph}
                      >
                        {item?.desc}
                      </Paragraph>
                    </Space>
                  </a>
                </Card>

              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default AboutXCamp;
