import React from "react";
import styles from "./index.module.scss";
import { Button, Col, Row, Space, Typography } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { useLang } from "@/hoc/with-intl/define";
const { Paragraph } = Typography;
const TopBanner = () => {
  const { format: t } = useLang();
  return (
    <div className={styles.topBanner}>
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
                {t("CourseSchedule.Question")}
              </div>
            </Space>
          </Col>
          <Col xs={24} sm={24} md={{ span: 8, offset: 2 }}>
            <Space direction={"vertical"} size={32}>
              <Button
                type={"primary"}
                className={styles.button}
                icon={<CaretRightOutlined />}
              >
                {t("TrialClass")}
              </Button>
              <Button
                type={"primary"}
                className={styles.button}
                icon={<CaretRightOutlined />}
              >
                {t("PlacementTest")}
              </Button>
              <Button
                type={"primary"}
                className={styles.button}
                icon={<CaretRightOutlined />}
              >
                {t("TrialCourse")}
              </Button>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TopBanner;
