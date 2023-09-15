"use client";
import React from "react";
import { Space, Row, Col, Card, Image, Typography } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import styles from "./AboutXCamp.module.scss";
import TitleColor from "@/components/common/title-color";

const { Paragraph, Text } = Typography;
const AboutXCamp: React.FC = () => {
  const { format: t } = useLang();
  const aboutContents = [
    {
      icon: "/image/home/icon-why-book.png",
      title: t("XCamp.title1"),
      desc:  t("XCamp.Desc1"),
      url: '/about-us/introduction/#faculty'
    },
    {
      icon: "/image/home/icon-why-concat.png",
      title: t("XCamp.title2"),
      desc:  t("XCamp.Desc2"),
      url: '/about-us/introduction/#faculty'
    },
    {
      icon: "/image/home/icon-why-house.png",
      title: t("XCamp.title3"),
      desc:  t("XCamp.Desc3"),
      url: '/about-us/achievements/'
    },
    {
      icon: "/image/home/icon-why-track.png",
      title: t("XCamp.title4"),
      desc:  t("XCamp.Desc4"),
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
          <TitleColor title={t('AboutX-Camp')} config={[{ text: t('AboutX-Camp_Color') }]} className={styles.title} />
          <Text className={styles.titleBg} />
          <Paragraph className={styles.paragraph}>
            {t("X-Camp.Desc1")}
          </Paragraph>
        </Space>
        <Row className={styles.row} gutter={16} justify="center" align="middle">
          {aboutContents.map((item) => {
            return (
              <Col key={item?.icon} xs={12} sm={12} md={12} lg={6}>
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
                      <Paragraph
                        ellipsis={{ rows: 2 }}
                        className={styles.cardTitle}
                      >
                        {item?.title}
                      </Paragraph>
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
