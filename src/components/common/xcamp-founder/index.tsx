"use client";
import React from "react";
import { Space, Button, Image, Typography, Row, Col } from "antd";
import styles from "./index.module.scss";
import { StarOutlined } from "@ant-design/icons";
import { useMobile } from "@/utils";
import { useLang } from "@/hoc/with-intl/define";

const { Title, Paragraph, Text } = Typography;

const XCampFounder = () => {
  const { format: t } = useLang();
  return (
    <div className={`${styles.XCampFounder} container`}>
      <Space direction="vertical" align="center">
        <Title className={styles.title}>{t("X-CampFounder")}</Title>
        <Paragraph className={styles.description}>
          {t("X-CampFounder.description")}
        </Paragraph>

        <Row>
          <Col xs={24} sm={24} md={24} lg={12} className={styles.charlieImgCol}>
            <div className={styles.charlieImgBackground}></div>
            <Image
              src={"/image/home/charlie.png"}
              alt="image"
              preview={false}
              className={styles.charlieImg}
            />
          </Col>

          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            className={styles.founderDescription}
          >
            <Space direction="vertical">
              <Title className={styles.founderName}>{t("Charlie")}</Title>

              <Paragraph className={styles.founderTag}>
                <Button
                  type="primary"
                  shape="circle"
                  size="small"
                  className={styles.founderTagButton}
                >
                  <StarOutlined />
                </Button>
                {t("Co-Founder")}
              </Paragraph>

              <Paragraph className={styles.founderTag}>
                <Button
                  type="primary"
                  shape="circle"
                  size="small"
                  className={styles.founderTagButton}
                >
                  <StarOutlined />
                </Button>
                {t("X-CampAcademyPrincipal")}
              </Paragraph>

              <Space direction="vertical" size={0}>
                <Paragraph className={styles.paragraph} style={{ marginBottom: 0 }}>
                  {t("Charlie.Desc1")}
                  <Text className={styles.keyText}>{t("Charlie.years")}</Text>
                  {t("Charlie.Desc2")}
                  <Text className={styles.keyText}>{t("Charlie.paper")}</Text>
                  {t("Charlie.Desc3")}
                </Paragraph>
                <Paragraph className={styles.paragraph}>
                  {t("Charlie.Desc4")}
                </Paragraph>
              </Space>
            </Space>
          </Col>
        </Row>

        <Row style={{ marginTop: 120 }}>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            className={styles.founderDescription}
          >
            <Space direction="vertical">
              <Title className={styles.founderName}>{t("Yuan")}</Title>

              <Paragraph className={styles.founderTag}>
                <Button
                  type="primary"
                  shape="circle"
                  size="small"
                  className={styles.founderTagButton}
                >
                  <StarOutlined />
                </Button>
                {t("Co-Founder")}
              </Paragraph>

              <Paragraph className={styles.founderTag}>
                <Button
                  type="primary"
                  shape="circle"
                  size="small"
                  className={styles.founderTagButton}
                >
                  <StarOutlined />
                </Button>
                {t("X-CampSeniorCodingCoach")}
              </Paragraph>

              <Space direction="vertical">
                <Paragraph className={styles.paragraph}>
                  {t("Yuan.Desc1")}
                </Paragraph>

                <Paragraph className={styles.paragraph}>
                  {t("Yuan.Desc2")}
                  <Text className={styles.keyText}> {t("Yuan.Student")} </Text>
                  {t("Yuan.Desc3")}
                  <Text className={styles.keyText}> {t("Yuan.Desc4")} </Text>
                  {t("Yuan.Desc5")}
                  <Text className={styles.keyText}> 25-27 </Text>
                  {t("Yuan.Desc6")}
                </Paragraph>
              </Space>
            </Space>
          </Col>

          <Col xs={24} sm={24} md={24} lg={12} className={styles.yuanImgCol}>
            <div className={styles.yuanImgBackground}></div>
            <Image
              src={"/image/home/yuan.png"}
              alt="image"
              preview={false}
              className={styles.yuanImg}
            />
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default XCampFounder;
