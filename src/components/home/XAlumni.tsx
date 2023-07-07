"use client";
import React, { useRef } from "react";
import { Space, Card, Typography, Carousel, Button, Avatar } from "antd";
import styles from "./XAlumni.module.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { CarouselRef } from "antd/es/carousel";
import { useMobile } from "@/utils";
import ColorfulCard from "../common/colorful-card";
import { useGetXAlumni } from "@/apis/strapi-client/strapi";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";

const { Title, Text, Paragraph } = Typography;
const XAlumni = () => {
  const { lang, format: t } = useLang();
  const { data: xAlumni } = useGetXAlumni();

  const carouselRef = useRef<CarouselRef>(null);

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
          <Title className={styles.title}>{t("X_ALUMNI")}</Title>
          <Paragraph className={styles.paragraph}>
            {t("X_ALUMNI_INTRODUCTION")}
          </Paragraph>
        </Space>

        <div className={styles.carouselContainer}>
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
            dots={{ className: styles.carouselDots }}
          >
            {xAlumni?.map((item, index) => {
              return (
                <ColorfulCard
                  key={index}
                  border="top"
                  index={index}
                  className={styles.cardContainer}
                >
                  <Card>
                    <Space direction="vertical" align="center">
                      <Avatar
                        src={item?.attributes?.img?.data?.[0]?.attributes?.url}
                        className={styles.avatar}
                      />
                      <Text className={styles.cardTitle}>
                        {getTransResult(
                          lang,
                          item?.attributes?.titleZh,
                          item?.attributes?.titleEn
                        )}
                      </Text>
                      <Paragraph
                        ellipsis={isMobile ? { rows: 3 } : { rows: 5 }}
                        className={styles.cardParagraph}
                      >
                        {getTransResult(
                          lang,
                          item?.attributes?.descriptionZh,
                          item?.attributes?.descriptionEn
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
    </div>
  );
};

export default XAlumni;
