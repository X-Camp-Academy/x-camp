"use client";
import React from "react";
import { Space, Row, Col, Card, Image, Typography } from "antd";
import { useRouter } from "next/navigation";
import { useLang } from "@/hoc/with-intl/define";
import { getTransResult } from "@/utils/public";
import styles from "./AboutXCamp.module.scss";

const { Title, Paragraph, Text } = Typography;
const AboutXCamp: React.FC = () => {
  const { format: t, lang } = useLang();
  const router = useRouter();
  const aboutContents = [
    {
      icon: "/image/home/faculty-icon.png",
      title: t("Faculty"),
      desc: t("Faculty.Des"),
      url: '/about-us/introduction/#faculty'
    },
    {
      icon: "/image/home/achievement-icon.png",
      title: t("Achievements"),
      desc: t("Achievements.Des"),
      url: '/about-us/achievements/'
    },
    {
      icon: "/image/home/community-icon.png",
      title: t("Community"),
      desc: t("Community.Des"),
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
          <Title className={styles.title}>{t("AboutX-Camp")}</Title>
          <Paragraph className={styles.paragraph}>
            {t("X-Camp.Desc1")}
            <Text className={styles.paragraphText} onClick={() => { router.push("/courses") }}> {t("USACOClasses")}</Text>
            {getTransResult(lang, '。', ' here.')}
          </Paragraph>
        </Space>
        <Row className={styles.row} gutter={16} justify="center" align="middle">
          {aboutContents.map((item) => {
            return (
              <Col key={item?.icon} xs={24} sm={24} md={24} lg={8}>
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
                      <Text className={styles.cardTitle}>{item?.title}</Text>
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
