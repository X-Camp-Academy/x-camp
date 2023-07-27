"use client";
import React, { useRef } from "react";
import { Space, Rate, Typography, Carousel, Button } from "antd";
import styles from "./index.module.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { CarouselRef } from "antd/es/carousel";
import classNames from "classnames/bind";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";
import { formatTimezone, getTransResult } from "@/utils/public";
import { GetReviews } from "@/apis/strapi-client/define";
import { useLang } from "@/hoc/with-intl/define";
import dayjs from "dayjs";

const { Title, Paragraph, Text } = Typography;

const cx = classNames.bind(styles);
interface Props {
  className?: string;
  reviewsData?: StrapiResponseDataItem<GetReviews>[] | undefined;
}

const Reviews = ({ className = "", reviewsData }: Props) => {
  const { format: t, lang } = useLang();
  const carouselRef = useRef<CarouselRef>(null);

  const onPrev = () => {
    carouselRef?.current?.prev();
  };
  const onNext = () => {
    carouselRef?.current?.next();
  };

  return (
    <div className={cx(className, styles.reviewsContainer)}>
      {
        reviewsData && reviewsData?.length > 0 &&
        <div className={cx(styles.reviews, "container")}>
          <Space direction="vertical" align="center">
            <Title className={styles.title}>{t("Reviews")}</Title>
            <div className={styles.reviewsBox}>
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
                {reviewsData?.map((item) => {
                  const reviews = item?.attributes;
                  const { utcTime } = formatTimezone(reviews?.datetime);
                  return (
                    <div key={item?.id} className={styles.reviewsContainer}>
                      <Space direction="vertical" style={{ width: "100%" }}>
                        <Text className={styles.reviewsTitle}>
                          {getTransResult(
                            lang,
                            reviews?.titleZh,
                            reviews?.titleEn
                          )}
                        </Text>
                        <Rate disabled defaultValue={reviews?.score} />
                        <Paragraph
                          className={styles.reviewsParagraph}
                          ellipsis={{
                            rows: 5,
                          }}
                        >
                          {getTransResult(
                            lang,
                            reviews?.descriptionZh,
                            reviews?.descriptionEn
                          )}
                        </Paragraph>
                        <Text className={styles.reviewsDate}>
                          {dayjs(utcTime).format("YYYY-MM-DD")}
                        </Text>
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
          </Space>
        </div>
      }
    </div>
  );
};

export default Reviews;
