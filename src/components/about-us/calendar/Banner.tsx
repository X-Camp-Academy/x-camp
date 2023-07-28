import React from "react";
import { Space, Row, Col, Image, Typography } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import styles from "./Banner.module.scss";

const { Title, Paragraph } = Typography;

const Banner: React.FC = () => {
  const { format: t } = useLang();

  return (
    <div className={styles.bannerContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={12} className={styles.col}>
            <Space direction="vertical">
              <Title className={styles.title}>{t("SchoolCalendar")}</Title>
              <Paragraph className={styles.paragraph}>
                {t("AboutUs.Achievements.Desc")}
              </Paragraph>
            </Space>
          </Col>
          <Col xs={24} sm={24} md={12} className={styles.col}>
            <Image
              alt="image"
              src="/image/about-us/banner-background.png"
              preview={false}
              className={styles.image}
            />
          </Col>
        </Row>
        <Space></Space>
      </div>
    </div>
  );
};

export default Banner;
