import React from "react";
import { Space, Typography, Image } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import styles from "./History.module.scss";
import dayjs from "dayjs";

const { Title, Paragraph, Text } = Typography;

const History: React.FC = () => {
  const { format: t } = useLang();

  const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017];
  const currentYear = dayjs().year();
  const images = [
    {
      src: "/image/about-us/introduction-banner.png",
      styles: {
        top: 50,
        bottom: 100
      }
    },
    {
      src: "/image/about-us/introduction-banner.png",
      styles: {
        top: 50,
        bottom: 100
      }
    },
    {
      src: "/image/about-us/introduction-banner.png",
      styles: {
        top: 50,
        bottom: 100
      }
    },
    {
      src: "/image/about-us/introduction-banner.png",
      styles: {
        top: 50,
        bottom: 100
      }
    },
    {
      src: "/image/about-us/introduction-banner.png",
      styles: {
        top: 50,
        bottom: 100
      }
    },
    {
      src: "/image/about-us/introduction-banner.png",
      styles: {
        top: 50,
        bottom: 100
      }
    },
  ]
  return (
    <div className={styles.historyContainer}>
      <div className="container">
        <Title className={styles.title}>History of X-Camp</Title>
        <Paragraph className={styles.paragraph}>{"With nearly 2,000 students trained in just six years, X-Camp's impact on their coding journeys remains unparalleled."}</Paragraph>


        <div className={styles.timeline}>
          {
            years?.map(item => (
              <Space direction="vertical" key={item}>
                <i className={item === currentYear ? styles.activeTimeLineIcon : styles.timelineIcon}></i>
                <span className={item === currentYear ? styles.activeTimelineText : styles.timelineText}>{item}</span>
              </Space>
            ))
          }
          <div className={styles.line}></div>
        </div>

        {/* 
        <div className={styles.timeImage}>
          {
            images?.map((item, index) => (
              <Image
                key={index}
                alt=""
                preview={false}
                src={item?.src}
                className={`${styles.image}${item?.styles}`}
              />
            ))
          }
        </div> */}
      </div>
    </div>
  );
};

export default History;
