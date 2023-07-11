"use client";
import React, { useRef, useState } from "react";
import { Space, Rate, Typography, Carousel, Button } from "antd";
import styles from "./Testimony.module.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { CarouselRef } from "antd/es/carousel";
import classNames from "classnames/bind";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";

import { getTransResult } from "@/utils/public";

import { GetTestimony } from "@/apis/strapi-client/define";
import { useLang } from "@/hoc/with-intl/define";

const { Text, Paragraph } = Typography;

const cx = classNames.bind(styles);
interface Props {
  className?: string;
  testimonyData?: StrapiResponseDataItem<GetTestimony>[] | undefined;
}

const Testimony = ({ className = "", testimonyData }: Props) => {
  const { lang } = useLang();
  const carouselRef = useRef<CarouselRef>(null);

  console.log(testimonyData);

  const onPrev = () => {
    carouselRef?.current?.prev();
  };
  const onNext = () => {
    carouselRef?.current?.next();
  };

  return (
    <div className={cx(className, styles.testimoniesContainer)}>
      <div className={cx(styles.testimonies, "container")}>
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
          {testimonyData?.map((item) => {
            const testimony = item?.attributes;
            return (
              <div key={item?.id} className={styles.testimonyContainer}>
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Text className={styles.testimonyTitle}>
                    {getTransResult(
                      lang,
                      testimony?.titleZh,
                      testimony?.titleEn
                    )}
                  </Text>
                  <Rate disabled defaultValue={testimony?.score} />
                  <Paragraph
                    className={styles.testimonyParagraph}
                    ellipsis={{
                      rows: 5,
                    }}
                  >
                    {getTransResult(
                      lang,
                      testimony?.descriptionZh,
                      testimony?.descriptionEn
                    )}
                  </Paragraph>
                </Space>
              </div>
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
