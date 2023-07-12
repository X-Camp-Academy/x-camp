"use client";
import React from "react";
import { Space, Typography, Row, Col, Image, Carousel } from "antd";
import AnimateBox from "../common/animate-box";
import styles from "./WeSupport.module.scss";
import { useLang } from "@/hoc/with-intl/define";

const { Title, Paragraph } = Typography;

const WeSupport: React.FC = () => {
  const { format: t } = useLang();
  const images = [
    "/image/home/we-support-1.png",
    "/image/home/we-support-2.png",
    "/image/home/we-support-3.png",
    "/image/home/we-support-1.png",
    "/image/home/we-support-2.png",
    "/image/home/we-support-3.png",
  ];
  return (
    <div className={`${styles.weSupport} container`}>
      <Row>
        <Col
          xs={{ span: 24, order: 2 }}
          sm={{ span: 24, order: 2 }}
          md={{ span: 12, order: 1 }}
        >
          <div className={styles.video}>
            <iframe
              width="100%"
              height="350"
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
              title="X-Camp Academy Intro - 2023"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
        <Col
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          md={{ span: 11, order: 2, offset: 1 }}
        >
          <Row>
            <Col
              xs={{ span: 24, order: 2 }}
              sm={{ span: 24, order: 2 }}
              md={{ span: 24, order: 1 }}
            >
              <Space size={24} direction="vertical">
                <Title className={styles.title}>{t("WeSupport")}</Title>
                <Paragraph className={styles.paragraph}>
                  {t("WeSupport.Desc")}
                </Paragraph>
              </Space>
            </Col>

            <Col
              xs={{ span: 24, order: 1 }}
              sm={{ span: 24, order: 1 }}
              md={{ span: 24, order: 2 }}
            >
              <Carousel
                slidesToShow={3}
                autoplay={true}
                infinite={true}
                dots={false}
              >
                {images.map((item, index) => {
                  return (
                    <div key={index}>
                      <AnimateBox className={styles.imageBox}>
                        <Image src={item} alt="image" preview={false} />
                      </AnimateBox>
                    </div>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default WeSupport;
