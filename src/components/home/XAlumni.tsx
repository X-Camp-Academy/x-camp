"use client";
import React, { useRef } from "react";
import {
  Space,
  Row,
  Col,
  Card,
  Image,
  Rate,
  Typography,
  Carousel,
  Button,
  Avatar,
} from "antd";
import styles from "./XAlumni.module.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { CarouselRef } from "antd/es/carousel";
import { useMobile } from "@/utils";

const { Title, Text, Paragraph } = Typography;
const XAlumni: React.FC = () => {
  const alumniData = [
    {
      avatar: "/image/home/alumni-ryan.png",
      name: "Ryan",
      description:
        "Ryan is a computer science student and artificial intelligence researcher in Massachusetts. He has been programming for more than 10 years in a variety of programming languages including Clojure, Java, C++ and Python. With experience in software development and competitive programming, Ryan loves guiding people in understanding new concepts for themselves with a wide range of uses.",
    },
    {
      avatar: "/image/home/alumni-ryan.png",
      name: "Ryan",
      description:
        "Ryan is a computer science student and artificial intelligence researcher in Massachusetts. He has been programming for more than 10 years in a variety of programming languages including Clojure, Java, C++ and Python. With experience in software development and competitive programming, Ryan loves guiding people in understanding new concepts for themselves with a wide range of uses.",
    },
    {
      avatar: "/image/home/alumni-ryan.png",
      name: "Ryan",
      description:
        "Ryan is a computer science student and artificial intelligence researcher in Massachusetts. He has been programming for more than 10 years in a variety of programming languages including Clojure, Java, C++ and Python. With experience in software development and competitive programming, Ryan loves guiding people in understanding new concepts for themselves with a wide range of uses.",
    },
  ];
  const carouselRef = useRef<CarouselRef>(null);
  const computedStyle = (index: number) => {
    const defaultStyle = {
      borderRadius: 10,
      paddingTop: 6,
    };
    const colors = ["#D46B14", "#FFAD11", "#FFD600"];

    return { ...defaultStyle, backgroundColor: colors[index % 3] };
  };

  const onPrev = () => {
    carouselRef?.current?.prev();
  };
  const onNext = () => {
    carouselRef?.current?.next();
  };
  const isMobile = useMobile();
  return (
    <div className={styles.xalumniContainer}>
      <div className={`${styles.xalumni} container`}>
        <Space direction="vertical">
          <Title className={styles.title}>X-Alumni</Title>
          <Paragraph className={styles.paragraph}>
            Since its inception, X-Camp has had over 1,000 students and is
            currently enrolling over 500+ students in 250+ schools around the
            world. If you would like to find your classmates, please contact us!
          </Paragraph>
        </Space>

        <Button
          type="primary"
          shape="circle"
          className={styles.prev}
          onClick={onPrev}
        >
          <LeftOutlined />
        </Button>
        <Carousel ref={carouselRef} dots={{ className: styles.carouselDots }}>
          <div>
            <Row
              gutter={40}
              justify="center"
              align="middle"
              className={styles.row}
            >
              {alumniData.map((item, index) => {
                return (
                  <Col
                    key={index}
                    xs={24}
                    sm={24}
                    md={24}
                    lg={8}
                    className={styles.col}
                  >
                    <div style={computedStyle(index)}>
                      <Card>
                        <Space direction="vertical" align="center">
                          <Avatar src={item.avatar} className={styles.avatar} />
                          <Text className={styles.cardTitle}>{item?.name}</Text>
                          <Paragraph
                            ellipsis={isMobile ? { rows: 3 } : { rows: 5 }}
                            className={styles.cardParagraph}
                          >
                            {item?.description}
                          </Paragraph>
                        </Space>
                      </Card>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
          <div>
            <Row
              gutter={40}
              justify="center"
              align="middle"
              className={styles.row}
            >
              {alumniData.map((item, index) => {
                return (
                  <Col
                    key={index}
                    xs={24}
                    sm={24}
                    md={24}
                    lg={8}
                    className={styles.col}
                  >
                    <div style={computedStyle(index)}>
                      <Card>
                        <Space direction="vertical">
                          <Avatar src={item.avatar} className={styles.avatar} />
                          <Text className={styles.cardTitle}>{item?.name}</Text>
                          <Paragraph
                            ellipsis={{ rows: 5 }}
                            className={styles.cardParagraph}
                          >
                            {item?.description}
                          </Paragraph>
                        </Space>
                      </Card>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Carousel>
        <Button
          type="primary"
          shape="circle"
          className={styles.next}
          onClick={onNext}
        >
          <RightOutlined />
        </Button>
      </div>
    </div>
  );
};

export default XAlumni;