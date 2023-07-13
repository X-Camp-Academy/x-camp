"use client";
import React from "react";
import { Space, Row, Col, Typography } from "antd";
import styles from "./ISPI.module.scss";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useMobile } from "@/utils";
import { useLang } from "@/hoc/with-intl/define";

const { Title, Text } = Typography;

const ISPI = () => {
  const isMobile = useMobile();
  const { format: t } = useLang();
  return (
    <div className={styles.ispiContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={14} className={styles.col}>
            <Space direction="vertical" size={96}>
              <Title className={styles.title}>{t("ISPI.Title")}</Title>
              <Space size={isMobile ? 8 : 48} direction="vertical">
                <Space
                  size={isMobile ? 8 : 48}
                  direction={isMobile ? "vertical" : "horizontal"}
                >
                  <Text className={styles.text}>
                    <CheckCircleOutlined className={styles.textIcon} />
                    {t("ISPI.Text1")}
                  </Text>
                  <Text className={styles.text}>
                    <CheckCircleOutlined className={styles.textIcon} />
                    {"Unleash Students' Potential"}
                  </Text>
                </Space>
                <Space
                  size={isMobile ? 8 : 48}
                  direction={isMobile ? "vertical" : "horizontal"}
                >
                  <Text className={styles.text}>
                    <CheckCircleOutlined className={styles.textIcon} />
                    {t("ISPI.Text2")}
                  </Text>
                  <Text className={styles.text}>
                    <CheckCircleOutlined className={styles.textIcon} />
                    {t("ISPI.Text3")}
                  </Text>
                </Space>
              </Space>
            </Space>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={{ span: 8, offset: 2 }}
            className={styles.col}
          >
            <div className={styles.cards}>
              <div className={styles.interest}>{t("Interest")}</div>
              <div className={styles.skills}>{t("Skills")}</div>
              <div className={styles.potential}>{t("Potential")}</div>
              <div className={styles.independent}>{t("Independent")}</div>
            </div>
          </Col>
        </Row>
        <Space></Space>
      </div>
    </div>
  );
};

export default ISPI;
