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
    {
      title: "parent of 201D",
      rate: 5,
      comment:
        "Our goal for the kid is to develop problem solving skills, prepare as career skills X-Camp has good curriculum and professional staff…",
    },
    {
      title: "parent of 201E",
      rate: 5,
      comment:
        "Our goal for the kid is to develop problem solving skills, prepare as career skills X-Camp has good curriculum and professional staff…",
    },
    {
      title: "parent of 201F",
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
        <Carousel
          ref={carouselRef}
          dots={false}
          slidesToShow={3}
          slidesToScroll={1}
          swipeToSlide={true}
          infinite={false}
          responsive={[
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {comments.map((item, index) => {
            return (
              <ColorfulCard
                key={index}
                border="top"
                index={index}
                animate={false}
                className={styles.cardContainer}
              >
                <Card className={styles.card} bodyStyle={{
                  borderWidth: 2,
                }}>
                  <Space direction="vertical">
                    <Text className={styles.cardTitle}>{item?.title}</Text>
                    <Rate disabled defaultValue={item?.rate} />
                    <Paragraph className={styles.cardParagraph}>
                      {item?.comment}
                    </Paragraph>
                  </Space>
                </Card>
              </ColorfulCard>
            );
          })}
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
