"use client";
import React from "react";
import { Space, Row, Col, Image, Typography } from "antd";
import styles from "./Banner.module.scss";
import { useLang } from "@/hoc/with-intl/define";

const { Title, Paragraph } = Typography;

const Banner: React.FC = () => {
  const { format: t } = useLang();
  return (
    <div className={styles.bannerContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={14} className={styles.col}>
            <Space direction="vertical">
              <Title className={styles.title}>{t("HelpCenter")}</Title>
              <Paragraph className={styles.paragraph}>
                {t("HelpCenter.Desc")}
              </Paragraph>
            </Space>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={{ span: 8, offset: 2 }}
            className={styles.col}
          >
            <Image
              alt="image"
              src="/image/about-us/help-center.png"
              preview={false}
              className={styles.image}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Banner;
