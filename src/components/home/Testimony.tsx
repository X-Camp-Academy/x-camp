"use client";
import React, { useRef } from "react";
import { Space, Card, Rate, Typography, Carousel, Button } from "antd";
import styles from "./Testimony.module.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { CarouselRef } from "antd/es/carousel";
import ColorfulCard from "../common/colorful-card";
import classNames from "classnames/bind";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";

import { getTransResult } from "@/utils/public";

import { GetTestimony } from "@/apis/strapi-client/define";
import { useLang } from "@/hoc/with-intl/define";

const { Text, Paragraph } = Typography;

const cx = classNames.bind(styles);
interface Props {
  className?: string;
  testimonyData?: StrapiResponseDataItem<GetTestimony>[];
}

const Testimony = ({ className = "", testimonyData }: Props) => {
  const { lang } = useLang();
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
          infinite={true}
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
          {testimonyData?.map((item, index) => {
            const comment = item?.attributes;
            return (
              <ColorfulCard
                key={index}
                border="top"
                index={index}
                className={styles.cardContainer}
              >
                <Card
                  className={styles.card}
                  bodyStyle={{
                    borderWidth: 2,
                  }}
                >
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <Text className={styles.cardTitle}>
                      {getTransResult(lang, comment.titleZh, comment.titleEn)}
                    </Text>
                    <Rate disabled defaultValue={comment.score} />
                    <Paragraph
                      className={styles.cardParagraph}
                      ellipsis={{
                        rows: 4,
                        tooltip: getTransResult(
                          lang,
                          comment.descriptionZh,
                          comment.descriptionEn
                        ),
                      }}
                    >
                      {getTransResult(
                        lang,
                        comment.descriptionZh,
                        comment.descriptionEn
                      )}
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

export default Testimony;
