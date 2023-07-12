"use client";
import React from "react";
import { Space, Row, Col, Card, Image, Typography } from "antd";
import styles from "./AboutXCamp.module.scss";
import { useLang } from "@/hoc/with-intl/define";

const { Title, Paragraph, Text } = Typography;
const AboutXCamp: React.FC = () => {
  const { format: t } = useLang();
  const aboutContents = [
    {
      icon: "/image/home/faculty-icon.png",
      title: t("Faculty"),
      desc: t("Faculty.Des"),
    },
    {
      icon: "/image/home/achievement-icon.png",
      title: t("Achievements"),
      desc: t("Achievements.Des"),
    },
    {
      icon: "/image/home/community-icon.png",
      title: t("Community"),
      desc: t("Community.Des"),
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

            <Text className={styles.paragraphText}>{t("USACOClasses")}</Text>
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
                  <Space direction="vertical">
                    <Image
                      src={item?.icon}
                      alt="icon"
                      preview={false}
                      className={styles.cardIcon}
                    />
                    <Text className={styles.cardTitle}>{item?.title}</Text>
                    <Paragraph
                      ellipsis={{ rows: 5 }}
                      className={styles.cardParagraph}
                    >
                      {item?.desc}
                    </Paragraph>
                  </Space>
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
