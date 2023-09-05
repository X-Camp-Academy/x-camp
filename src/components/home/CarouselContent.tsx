"use client";
import React from "react";
import {
  Carousel,
  Space,
  Typography,
  Row,
  Col,
} from "antd";
import classNames from "classnames";
import { useLang } from "@/hoc/with-intl/define";
import styles from "./CarouselContent.module.scss";
import dynamic from "next/dynamic";

const { Title, Paragraph, Text } = Typography;

const UsacoMedal = dynamic(
    () => import("@/components/common/usaco-medal")
);
const CarouselContent: React.FC = () => {
  const { format: t } = useLang();
  const cx = classNames.bind(styles);
  return (
    <div className={styles.bannerContainer}>
      <Carousel autoplay={false} dots={{ className: styles.carouselDots }}>
        <div className={styles.content}>
          <div className="container">
            <Row>
              <Col xs={24} sm={24} md={24} lg={14}>
                <Space direction="vertical" className={styles.space} size={24}>
                  <Title className={styles.title}>{t("WeeklyOpenHouse")}</Title>
                  <div>
                    <Paragraph className={styles.paragraph}>
                      <span className={styles.dot}></span>
                      {t("OpenHouse.Dec1")}
                    </Paragraph>
                    <Paragraph className={styles.paragraph}>
                      <span className={styles.dot}></span>
                      {t("OpenHouse.Dec2")}
                    </Paragraph>
                    <Paragraph className={styles.paragraph}>
                      <span className={styles.dot}></span>
                      {t("OpenHouse.Dec3")}
                    </Paragraph>
                  </div>
                  <button className={styles.button} onClick={() => { window.open('https://us02web.zoom.us/j/89284761432?pwd=VXJvQjRPN3I4TXhlUk9SdXM0KzJqQT09') }}>{t("ZoomLink")}</button>
                  <Text className={styles.date}>{t("OpenTime")}</Text>
                </Space>
              </Col>
            </Row>
          </div>
        </div>

        <div className={styles.content}>
          <div className="container">
            <Row>
              <Col xs={24} sm={24} md={24} lg={14}>
                <Space direction="vertical" className={styles.space} size={20}>
                  <Title className={styles.title} style={{ fontSize: 32 }}>{t("USACO.enhancement.register")}</Title>
                  <div>
                    <Paragraph className={cx(styles.paragraph, styles.mb8)}>
                      <span className={styles.dot}></span>
                      {t("USACO.mock.test")}
                    </Paragraph>
                    <Paragraph className={cx(styles.paragraph, styles.mb8)}>
                      <span className={styles.dot}></span>
                      {t("USACO.live.lecture")}
                    </Paragraph>
                    <Paragraph className={cx(styles.paragraph, styles.mb8)}>
                      <span className={styles.dot}></span>
                      {t("USACO.community.recap")}
                    </Paragraph>
                    <Paragraph className={cx(styles.paragraph, styles.mb8)}>
                      <span className={styles.dot}></span>
                      {t("USACO.upsolve")}
                    </Paragraph>
                  </div>
                  <button className={styles.button} onClick={() => { window.open('https://tinyurl.com/XCamp23-24FallUSACO') }}>{t("JoinUs")}</button>
                  <Text className={styles.date}>{t("USACO.no.class")}</Text>
                </Space>
              </Col>
            </Row>
          </div>
        </div>

        <div className={styles.content}>
          <div className="container">
            <Row>
              <Col xs={24} sm={24} md={24} lg={14}>
                <Space direction="vertical" className={styles.space} size={20}>
                  <Title className={styles.title} style={{ fontSize: 32 }}>{t("Fall.weekend.class")}</Title>
                  <div>
                    <Paragraph className={styles.paragraph}>
                      <span className={styles.dot}></span>
                      {t("Fall.tutorial.forum")}
                    </Paragraph>
                    <Paragraph className={styles.paragraph}>
                      <span className={styles.dot}></span>
                      {t("Fall.launch.classes")}
                    </Paragraph>
                    <Paragraph className={styles.paragraph}>
                      <span className={styles.dot}></span>
                      {t("Fall.worldwide.coding")}
                    </Paragraph>
                  </div>
                  <button className={styles.button} onClick={() => { window.open('https://docs.google.com/forms/d/e/1FAIpQLScNm1Mf4lgvdXUObuJu3wl-_wEcYU9N8ao6PGv8RnANNGE_xw/viewform?usp=sf_link') }}>{t("Fall.register.link")}</button>
                  <Text className={styles.date}>{t("Fall.weekend.class")}</Text>
                </Space>
              </Col>
            </Row>
          </div>
        </div>

        <div className={styles.content}>
          <div className="container">
            <Row>
              <Col xs={24} sm={24} md={24} lg={14}>
                <Space direction="vertical" className={styles.space} size={24}>
                  <Title className={styles.title}>{t("USACO.Director.BrianDean")}</Title>
                  <button className={styles.button} onClick={() => { window.open('https://www.youtube.com/watch?v=K2PWgYHZWbw') }}>{t("USACO.youtube.recap")}</button>
                  <Text className={styles.date}>{t("Fall.Director.noclass")}</Text>
                </Space>
              </Col>
            </Row>
          </div>
        </div>
      </Carousel>

      <UsacoMedal showTitle={false}></UsacoMedal>
    </div>
  );
};

export default CarouselContent;
