import React from "react";
import styles from "./index.module.scss";
import { Button, Col, Row, Space, Typography } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
const { Paragraph } = Typography;
const TopBanner = () => {
  return (
    <div className={styles.topBanner}>
      <div className={`${styles.content} container`}>
        <Row>
          <Col xs={24} sm={24} md={14}>
            <Space direction={"vertical"}>
              <div className={styles.title}>2023 Course Schedule</div>
              <div>
                <Paragraph className={styles.paragraph}>
                  We offer a variety of courses tailored to suit the student’s
                  academic goals and schedule.
                </Paragraph>
                <Paragraph className={styles.paragraph}>
                  Programming fundamentals and intensive classes and more
                  competition-related courses
                </Paragraph>
              </div>
              <div className={styles.contact}>
                *Any questions please contact us
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
                Trial Class
              </Button>
              <Button
                type={"primary"}
                className={styles.button}
                icon={<CaretRightOutlined />}
              >
                Placement Test
              </Button>
              <Button
                type={"primary"}
                className={styles.button}
                icon={<CaretRightOutlined />}
              >
                Trial Course
              </Button>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TopBanner;
