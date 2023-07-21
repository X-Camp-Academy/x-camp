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
    "/image/home/python.png",
    "/image/home/java.png",
    "/image/home/C++.png",


    /* "/image/home/we-support-1.png",
    "/image/home/we-support-2.png",
    "/image/home/we-support-3.png", */
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
              src="https://media.strapi.turingstar.com.cn/production/2023/7/1st_Tic_Tac_toe_d73c6e87d5.mp4?updated_at=2023-07-11T17:26:59.659Z"
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
              <Space direction="horizontal" size={48}>
                {images.map((item, index) => {
                  return (
                    <div key={index} >
                      <AnimateBox className={styles.imageBox}>
                        <Image src={item} alt="image" preview={false} />
                      </AnimateBox>
                    </div>
                  );
                })}
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default WeSupport;
