"use client";
import React from "react";
import {
  Space,
  Row,
  Col,
  Image,
  Typography,
  Select,
  DatePicker,
  DatePickerProps,
  Card,
} from "antd";
import styles from "./TopBanner.module.scss";
import dayjs from "dayjs";
import { getTransResult } from "@/utils/public";

const { Title, Paragraph } = Typography;

const TopBanner: React.FC = () => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  //年份选择格式化
  const customFormat: DatePickerProps["format"] = (value) =>
    `${value.format("YYYY")}${getTransResult("zh", "年", " ")}`;
  return (
    <div className={styles.topBannerContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={14} className={styles.col}>
            <Space direction="vertical">
              <Title className={styles.title}>News</Title>
              <Paragraph className={styles.paragraph}>
                {
                  "X-Camp Academy focuses on improving the coding abilities and problem."
                }
              </Paragraph>
              <DatePicker
                picker="year"
                format={customFormat}
                onChange={onChange}
                defaultValue={dayjs()}
              />
            </Space>
          </Col>
          <Col xs={24} sm={24} md={{ span: 10 }} className={styles.col}>
            <Row gutter={[32, 32]}>
              <Col span={12}>
                <Space size="large" direction="vertical">
                  <Card />
                  <Card />
                </Space>
              </Col>

              <Col span={12} style={{ marginTop: 20 }}>
                <Space size="large" direction="vertical">
                  <Card />
                  <Card />
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TopBanner;
