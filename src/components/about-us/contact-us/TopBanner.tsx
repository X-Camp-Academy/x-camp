"use client";
import React from "react";
import { Space, Row, Col, Image, Typography } from "antd";
import styles from "./TopBanner.module.scss";
import { useLang } from "@/hoc/with-intl/define";

const { Title, Paragraph } = Typography;

const TopBanner: React.FC = () => {
  const { format: t } = useLang();
  return (
    <div className={styles.topBannerContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={14} className={styles.col}>
            <Space direction="vertical">
              <Title className={styles.title}>{t("ContactXCamp")}</Title>
              <Paragraph className={styles.paragraph}>
                {t("ContactXCamp.Desc")}
              </Paragraph>
            </Space>
          </Col>
          <Image
            alt="image"
            src="/image/home/course-3.png"
            preview={false}
            className={styles.image}
          />
        </Row>
      </div>
    </div>
  );
};

export default TopBanner;
