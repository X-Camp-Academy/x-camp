"use client";
import React from "react";
import { Space, Typography, DatePicker, DatePickerProps } from "antd";
import styles from "./TopBanner.module.scss";
import dayjs from "dayjs";
import { getTransResult } from "@/utils/public";
import classNames from "classnames/bind";
import { useLang } from "@/hoc/with-intl/define";
const cx = classNames.bind(styles);
const { Title, Paragraph } = Typography;

interface Props {
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
}

const TopBanner = ({ year, setYear }: Props) => {
  const { lang } = useLang();
  const onChange: DatePickerProps["onChange"] = (date) => {
    setYear(String(date?.get("year")));
  };

  //年份选择格式化
  const customFormat: DatePickerProps["format"] = (value) =>
    `${value.format("YYYY")}${getTransResult(lang, "年", "Year")}`;

  return (
    <div className={styles.topBannerContainer}>
      <div className={cx("container", styles.content)}>
        <Space direction="vertical">
          <Title className={styles.title}>News</Title>
          <Paragraph className={styles.paragraph}>
            {"Check out our most updated info from our school and students."}
          </Paragraph>
          <DatePicker
            className={styles.date}
            picker="year"
            format={customFormat}
            onChange={onChange}
            defaultValue={dayjs(year)}
          />
        </Space>
        <img src="/image/about-us/introduction/top-banner.png" alt="" />
      </div>
    </div>
  );
};

export default TopBanner;
