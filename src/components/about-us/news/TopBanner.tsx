"use client";
import React from "react";
import { Space, Typography, DatePicker, DatePickerProps, Row, Col } from "antd";
import styles from "./TopBanner.module.scss";
import dayjs from "dayjs";
import classNames from "classnames/bind";
import { useLang } from "@/hoc/with-intl/define";
import { getTransResult } from "@/utils/public";
const { Title, Paragraph } = Typography;

interface Props {
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
}

const TopBanner = ({ year, setYear }: Props) => {
  const { format: t, lang } = useLang();
  const onChange: DatePickerProps["onChange"] = (date) => {
    setYear(String(date?.get("year")));
  };

  //年份选择格式化
  const customFormat: DatePickerProps["format"] = (value) =>
    `${value.format("YYYY")}${getTransResult(lang, `${t("Year")}`, ` ${t("Year")}`)}`;

  return (
    <div className={styles.topBannerContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={14} className={styles.col}>
            <Space direction="vertical">
              <Title className={styles.title}>{t("News")}</Title>
              <Paragraph className={styles.paragraph}>{t("News.Desc")}</Paragraph>
              <DatePicker
                className={styles.date}
                picker="year"
                format={customFormat}
                onChange={onChange}
                defaultValue={dayjs(year)}
              />
            </Space>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={{ span: 8, offset: 2 }}
            className={styles.col}
          >
            <div className={styles.bannerImgContainer}>
              <div className={styles.colorSquare}></div>
              <img
                alt="image"
                src="/image/about-us/introduction/top-banner.png"
                className={styles.image}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TopBanner;
