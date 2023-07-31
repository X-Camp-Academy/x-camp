import React from "react";
import styles from "./index.module.scss";
import { Button, Col, Row, Space, Typography } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { useLang } from "@/hoc/with-intl/define";
import Link from "next/link";

const { Paragraph } = Typography;

const Banner: React.FC = () => {
  const { format: t } = useLang();
  return (
    <div className={styles.topBanner}>
      <div className={`${styles.content} container`}>
        <Row>
          <Col xs={24} sm={24} md={14}>
            <Space direction={"vertical"}>
              <div className={styles.title}>{t('WhatWeProvide')}</div>
              <div>
                <Paragraph className={styles.paragraph}>
                  {t('Evaluation.topBanner.description')}
                </Paragraph>
              </div>
            </Space>
          </Col>
          <Col xs={24} sm={24} md={{ span: 8, offset: 2 }} className={styles.rightCol}>
            <Space direction={"vertical"} size={32} className={styles.btnGroup}>
              <Button
                type={"primary"}
                className={styles.button}
                icon={<CaretRightOutlined />}
              >
                <Link href="/about-us/contact-us#trial-class" target="_blank">
                  {t("TrialClass")}
                </Link>
              </Button>
              {/*               <Button
                type={"primary"}
                className={styles.button}
                icon={<CaretRightOutlined />}
              >
                {t("PlacementTest")}
              </Button> */}
              <Button
                type={"primary"}
                className={styles.button}
                icon={<CaretRightOutlined />}
              >
                <Link href="/" target="_blank">
                  {t("1On1Consultation")}
                </Link>
              </Button>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Banner;
