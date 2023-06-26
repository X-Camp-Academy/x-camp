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
import { useMobile } from "@/utils";
import ColorfulCard from "../common/colorful-card";
import classNames from "classnames/bind";

const { Title, Text, Paragraph } = Typography;

const cx = classNames.bind(styles);
interface Props {
  className?: string;
}

const Comments = ({ className = "" }: Props) => {
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

  const onPrev = () => {
    carouselRef?.current?.prev();
  };
  const onNext = () => {
    carouselRef?.current?.next();
  };

  return (
    <div className={cx(className, styles.commentsContainer)}>
      <div className={cx(styles.comments, "container")}>
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
                    md={24}
                    lg={8}
                    className={styles.col}
                  >
                    <ColorfulCard border="top" index={index} animate={false}>
                      <Card
                        bodyStyle={{
                          borderWidth: 2,
                        }}
                        className={styles.colCard}
                      >
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
                    </ColorfulCard>
                  </Col>
                );
              })}

              {}
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
                    md={24}
                    lg={8}
                    className={styles.col}
                  >
                    <ColorfulCard border="top" index={index} animate={false}>
                      <Card
                        bodyStyle={{
                          borderWidth: 2,
                        }}
                        className={styles.colCard}
                      >
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
                    </ColorfulCard>
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
