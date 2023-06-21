"use client";
import React, { useRef } from "react";
import { Typography, Row, Col, Card, Space, Image } from "antd";
import "animate.css";
import styles from "./DiscoverCourses.module.scss";
import { addAllAnimatePulse, removeAllAnimatePulse } from "@/utils";

const { Title, Paragraph, Text } = Typography;

const DiscoverCourses: React.FC = () => {
  const courseCards = [
    {
      title: "Python Beginner",
      desc: "Suitable for Year 6+",
      url: "/image/home/course-1.png",
      bgc: "#D8D8D8",
    },
    {
      title: "C++ Knowledge",
      desc: "Suitable for Year 7+",
      url: "/image/home/course-2.png",
      bgc: "#FFD600",
    },
    {
      title: "USACO Grandmaster",
      desc: "Suitable for Year 7+",
      url: "/image/home/course-3.png",
      bgc: "#FFAD11",
    },
    {
      title: "APCS",
      desc: "Suitable for Year 7+",
      url: "/image/home/course-4.png",
      bgc: "#D46B14",
    },
  ];

  const refs = Array.from({ length: courseCards.length }, () =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useRef<HTMLDivElement>(null)
  );

  return (
    <div className={`${styles.discoverCourses} container`}>
      {/* animate__bounceInLeft
      animate__fadeInLeft

      animate__fadeInTopLeft
      animate__fadeInBottomLeft
      animate__lightSpeedInLeft

      animate__zoomInLeft
      animate__slideInLeft */}
      <Title
        className={`${styles.title} animate__animated animate__backInLeft`}
      >
        Discover Our Courses
      </Title>
      <Row className={styles.row} gutter={16} justify="center" align="middle">
        {courseCards.map((item, index) => {
          return (
            <Col key={item?.url} xs={24} sm={24} md={12} lg={6}>
              <Card
                ref={refs[index]}
                onMouseEnter={() => addAllAnimatePulse(refs, index)}
                onMouseLeave={() => removeAllAnimatePulse(refs, index)}
                className={styles.card}
                bodyStyle={{
                  backgroundColor: item?.bgc,
                  borderRadius: 8,
                  paddingBottom: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Space direction="vertical">
                  <Title className={styles.cardTitle}>{item?.title}</Title>
                  <Paragraph className={styles.cardParagraph}>
                    {item?.desc}
                  </Paragraph>
                </Space>
                <Image
                  src={item?.url}
                  alt="image"
                  preview={false}
                  className={styles.cardImage}
                />
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default DiscoverCourses;
