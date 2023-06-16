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
} from "antd";
import styles from "./Comments.module.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { CarouselRef } from "antd/es/carousel";

const { Title, Text, Paragraph } = Typography;
const Comments: React.FC = () => {
  const comments = [
    {
      title: "parent of 201A",
      rate: 4,
      comment:
        "Our goal for the kid is to develop problem solving skills, prepare as career skills X-Camp has good curriculum and professional staff…",
    },
    {
      title: "parent of 201B",
      rate: 5,
      comment:
        "Our goal for the kid is to develop problem solving skills, prepare as career skills X-Camp has good curriculum and professional staff…",
    },
    {
      title: "parent of 201C",
      rate: 5,
      comment:
        "Our goal for the kid is to develop problem solving skills, prepare as career skills X-Camp has good curriculum and professional staff…",
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

  return (
    <div className={styles.commentsContainer}>
      <div className={`${styles.comments} container`}>
        <Button
          type="primary"
          shape="circle"
          className={styles.prev}
          onClick={onPrev}
        >
          <LeftOutlined />
        </Button>
        <Carousel ref={carouselRef} dots={false}>
          <div>
            <Row
              gutter={40}
              justify="center"
              align="middle"
              className={styles.row}
            >
              {comments.map((item, index) => {
                return (
                  <Col
                    key={index}
                    xs={24}
                    sm={24}
                    md={8}
                    className={styles.col}
                  >
                    <div style={computedStyle(index)}>
                      <Card>
                        <Space direction="vertical">
                          <Text className={styles.cardTitle}>
                            {item?.title}
                          </Text>
                          <Rate disabled defaultValue={item?.rate} />
                          <Paragraph className={styles.cardParagraph}>
                            {item?.comment}
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
              {comments.map((item, index) => {
                return (
                  <Col
                    key={index}
                    xs={24}
                    sm={24}
                    md={8}
                    className={styles.col}
                  >
                    <div style={computedStyle(index)}>
                      <Card>
                        <Space direction="vertical">
                          <Text className={styles.cardTitle}>
                            {item?.title}
                          </Text>
                          <Rate disabled defaultValue={item?.rate} />
                          <Paragraph className={styles.cardParagraph}>
                            {item?.comment}
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

export default Comments;
