import React from "react";
import { Space, Typography, Image, Row, Col } from "antd";
import dayjs from "dayjs";
import styles from "./index.module.scss";

const { Title, Paragraph } = Typography;

const History: React.FC = () => {
  const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017];
  const currentYear = dayjs().year();
  const images = [
    {
      src: "/image/about-us/camps-1.png",
    },
    {
      src: "/image/about-us/camps-1.png",
    },
    {
      src: "/image/about-us/camps-1.png",
    },
    {
      src: "/image/about-us/camps-1.png",
    },
    {
      src: "/image/about-us/camps-1.png",
    },
    {
      src: "/image/about-us/camps-1.png",
    },
  ];
  return (
    <div className={styles.historyContainer}>
      <div className="container">
        <Title className={styles.title}>History of X-Camp</Title>
        <Paragraph className={styles.paragraph}>{"With nearly 2,000 students trained in just six years, X-Camp's impact on their coding journeys remains unparalleled."}</Paragraph>


        <div className={styles.timeline}>
          {
            years?.map(item => (
              <Space direction="vertical" key={item}>
                <i className={item === currentYear ? styles.activeTimeLineIcon : styles.timelineIcon} />
                <span className={item === currentYear ? styles.activeTimelineText : styles.timelineText}>{item}</span>
              </Space>
            ))
          }
          <div className={styles.line} />
        </div>

        <Row gutter={[16, 16]} className={styles.timeImage}>
          <Col xs={24} sm={24} md={8} lg={4}>
            <Image
              alt=""
              preview={false}
              src={images[0].src}
              className={styles.image1}
            />
          </Col>
          <Col xs={24} sm={24} md={8} lg={4}>
            <Image
              alt=""
              preview={false}
              src={images[0].src}
              className={styles.image2}
            />
          </Col>
          <Col xs={24} sm={24} md={8} lg={4}>
            <Image
              alt=""
              preview={false}
              src={images[0].src}
              className={styles.image3}
            />
          </Col>
          <Col xs={24} sm={24} md={8} lg={4}>
            <Image
              alt=""
              preview={false}
              src={images[0].src}
              className={styles.image4}
            />
          </Col>
          <Col xs={24} sm={24} md={8} lg={4}>
            <Image
              alt=""
              preview={false}
              src={images[0].src}
              className={styles.image5}
            />
          </Col>
          <Col xs={24} sm={24} md={8} lg={4}>
            <Image
              alt=""
              preview={false}
              src={images[0].src}
              className={styles.image6}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default History;
