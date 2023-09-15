"use client";
import React from "react";
import { Row, Col, Typography, Image } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import styles from "./index.module.scss";

const { Title, Text } = Typography;

const Flag: React.FC = () => {
  const { format: t } = useLang();

  const topImages = [
    '/image/about-us/x-alumni/china.png',
    '/image/about-us/x-alumni/usa.png',
    '/image/about-us/x-alumni/switzerland.png',
    '/image/about-us/x-alumni/australia.png',
  ];
  const bottomImages = [
    '/image/about-us/x-alumni/singapore.png',
    '/image/about-us/x-alumni/india.png',
    '/image/about-us/x-alumni/canada.png',
  ];
  return (
    <div className={`${styles.flag} container`}>
      <Title className={styles.title}>{t("OneBigFamily")}</Title>
      <Text className={styles.text}>{t("JoinBigFamily")}</Text>

      <Row gutter={[32, 32]} className={styles.topRow}>
        {
          topImages?.map(item => (
            <Col key={item} xs={24} sm={24} md={6}>
              <Image
                alt=""
                preview={false}
                src={item}
                className={styles.image}
              />
            </Col>
          ))
        }
      </Row>
      <Row gutter={[32, 32]} className={styles.bottomRow}>
        {
          bottomImages?.map(item => (
            <Col key={item} xs={24} sm={24} md={8}>
              <Image
                alt=""
                preview={false}
                src={item}
                className={styles.image}
              />
            </Col>
          ))
        }
      </Row>
    </div>
  );
};

export default Flag;