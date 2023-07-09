"use client";
import React from "react";
import { Space, Typography, Carousel, Image } from "antd";
import styles from "./XAlumni.module.scss";
import { useMobile } from "@/utils";
import { useGetXAlumni } from "@/apis/strapi-client/strapi";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";

const { Title, Paragraph } = Typography;
const XAlumni = () => {
  const { lang, format: t } = useLang();
  const { data: xAlumni } = useGetXAlumni();

  console.log(xAlumni);

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
          <Carousel
            slidesToShow={4}
            slidesToScroll={1}
            swipeToSlide={true}
            infinite={true}
            autoplay={true}
            dots={false}
            responsive={[
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 4,
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
            {xAlumni?.map((item, index) => {
              return (
                <div key={index} className={styles.imageContainer}>
                  <Image
                    alt=""
                    preview={false}
                    className={styles.image}
                    src={item?.attributes?.img?.data?.attributes?.url}
                  />
                  <Title className={styles.cardTitle}>
                    {getTransResult(
                      lang,
                      item?.attributes?.titleZh,
                      item?.attributes?.titleEn
                    )}
                  </Title>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default XAlumni;
