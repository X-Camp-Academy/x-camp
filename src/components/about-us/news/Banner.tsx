"use client";
import React from "react";
import { Space, Typography, DatePicker, DatePickerProps, Image } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useLang } from "@/hoc/with-intl/define";
import { getTransResult } from "@/utils/public";
import CommonBanner from "@/components/common/common-banner";
import styles from "./Banner.module.scss";

const { Title, Paragraph } = Typography;

interface Props {
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
}

const Banner = ({ year, setYear }: Props) => {
  const { format: t, lang } = useLang();
  const onChange: DatePickerProps["onChange"] = (date) => {
    setYear(String(date?.get("year")));
  };

  //年份选择格式化
  const customFormat: DatePickerProps["format"] = (value) =>
    `${value.format("YYYY")}${getTransResult(lang, `${t("Year")}`, ` ${t("Year")}`)}`;

  const disabledDate = (current: Dayjs) => {
    const year = current.year();
    return year < 2017 || year > 2023;
  };

  const leftNode = (
    <Space direction="vertical">
      <Title className={styles.title}>{t("News")}</Title>
      <Paragraph className={styles.paragraph}>{t("News.Desc")}</Paragraph>
      <DatePicker
        className={styles.date}
        picker="year"
        disabledDate={disabledDate}
        format={customFormat}
        onChange={onChange}
        defaultValue={dayjs(year)}
      />
    </Space>
  );
  const rightNode = (
    <div className={styles.imgContain}>
      <Image
        alt="image"
        src="/image/about-us/news-banner.png"
        preview={false}
        className={styles.image}
      />
    </div>
  );
  return (
    // <CommonBanner leftNode={leftNode} rightNode={rightNode} />
    <></>
  );
};

export default Banner;
