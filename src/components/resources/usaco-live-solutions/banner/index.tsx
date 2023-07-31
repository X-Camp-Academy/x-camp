import React from "react";
import styles from "./index.module.scss";
import { Col, Row, Space, Image } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { useLang } from "@/hoc/with-intl/define";

const Banner: React.FC = () => {
  const { format: t } = useLang();
  return (
    <div className={styles.topBannerContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={14} className={styles.col}>
            <Space direction="vertical">
              <Title className={styles.title}>{t("USACOLiveSolution")}</Title>
              <Paragraph className={styles.paragraph}>
                {t("USACOLiveSolution.Desc")}
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
              src="/image/resources/usaco-live-banner.png"
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
