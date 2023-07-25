"use client";
import React from "react";
import { Space, Typography, Row, Col, Image } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import { useMobile } from "@/utils";
import AnimateBox from "../common/animate-box";
import styles from "./WeSupport.module.scss";

const { Title, Paragraph } = Typography;

const WeSupport: React.FC = () => {
  const { format: t } = useLang();
  const isMobile = useMobile();
  const images = [
    "/image/home/python.png",
    "/image/home/java.png",
    "/image/home/c++.png",
  ];
  return (
    <div className={`${styles.weSupport} container`}>
      <Row>
        <Col
          xs={{ span: 24, order: 2 }}
          sm={{ span: 24, order: 2 }}
          md={{ span: 12, order: 1 }}
        >
          <video className={styles.video} controls>
            <source src="https://media.strapi.turingstar.com.cn/production/2023/7/1st_Tic_Tac_toe_d73c6e87d5.mp4?updated_at=2023-07-11T17:26:59.659Z" type="video/mp4" />
          </video>
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
              <Space direction="horizontal" size={isMobile ? 8 : 48}>
                {images?.map((item, index) => {
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
