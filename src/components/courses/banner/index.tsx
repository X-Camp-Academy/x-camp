import React from "react";
import Link from "next/link";
import { Button, Col, Row, Space, Typography } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { useLang } from "@/hoc/with-intl/define";
import styles from "./index.module.scss";

const { Paragraph } = Typography;

const Banner: React.FC = () => {
  const { format: t } = useLang();
  return (
    <div className={styles.banner}>
      <div className={`${styles.content} container`}>
        <Row>
          <Col xs={24} sm={24} md={14}>
            <Space direction={"vertical"}>
              <div className={styles.title}>2023 {t("CourseSchedule")}</div>
              <div>
                <Paragraph className={styles.paragraph}>
                  {t("CourseSchedule.Desc1")}
                </Paragraph>
                <Paragraph className={styles.paragraph}>
                  {t("CourseSchedule.Desc2")}
                </Paragraph>
              </div>
              <div className={styles.contact}>
                <Link href="/about-us/contact-us" target="_blank">
                  {t("CourseSchedule.Question")}
                </Link>
              </div>
            </Space>
          </Col>
          <Col xs={24} sm={24} md={{ span: 8, offset: 2 }} className={styles.rightCol}>
            <Space direction={"vertical"} size={32}>
              <Button
                type={"primary"}
                className={styles.button}
                icon={<CaretRightOutlined />}
              >
                <Link href="/about-us/contact-us#trial-class" target="_blank">
                  {t("TrialClass")}
                </Link>
              </Button>
              <Button
                type={"primary"}
                className={styles.button}
                icon={<CaretRightOutlined />}
              >
                <Link href="/evaluation" target="_blank">
                  {t("PlacementTest")}
                </Link>
              </Button>
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
