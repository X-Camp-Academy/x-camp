import React from "react";
import { Space, Image, Typography, Row, Col } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import CommonBanner from "@/components/common/common-banner";
import styles from "./Banner.module.scss";

const { Title, Paragraph, Text } = Typography;

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const leftNode = (
    <Space direction="vertical" className={styles.left}>
      <Title className={styles.title}>
        {t("AboutUs.Introduction")}
      </Title>
      <Text className={styles.titleBg}></Text>
      <Paragraph className={styles.paragraph}>
        {t("AboutUs.Introduction.Desc")}
      </Paragraph>
    </Space>
  );
  const rightNode = (
    <div className={styles.imgContain}>
      <Image
        alt="image"
        src="/image/about-us/introduction-banner.png"
        preview={false}
        className={styles.image}
      />
    </div>
  );
  return (
    <Image
      src="/image/about-us/introduction-banner.png"
      alt=""
      width={"100%"}
      preview={false}
    >
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={14}>
            {leftNode}
          </Col>
          <Col
            xs={24}
            sm={24}
            md={{ span: 8, offset: 2 }}
            className={styles.right}
          >
            {rightNode}
          </Col>
        </Row>
      </div>
    </Image>
  );
};

export default Banner;
