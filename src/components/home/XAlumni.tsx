"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Space, Typography, Carousel, Image, Row, Col } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";
import { useLang } from "@/hoc/with-intl/define";
import { getTransResult } from "@/utils/public";
import { useGetXAlumni } from "@/apis/strapi-client/strapi";
import styles from "./XAlumni.module.scss";
import MaskCard from "../common/mask-card";

const { Title, Paragraph } = Typography;

const XAlumni: React.FC = () => {
  const { lang, format: t } = useLang();
  const { data } = useGetXAlumni();
  const xAlumni = data?.sort((a, b) => b?.attributes?.order - a?.attributes?.order);
  const router = useRouter();
  const generateMaskChildren = (title?: string, description?: string) => {
    return (
      <Space direction="vertical">
        <Title className={styles.maskCardTitle}>
          {title}
        </Title>
        <Paragraph
          ellipsis={{ rows: 5 }}
          className={styles.maskCardParagraph}
        >
          {description}
        </Paragraph>
      </Space>
    );
  };

  return (
    <div className={styles.xalumniContainer}>
      <div className={`${styles.xalumni} container`}>
        <Space direction="vertical">
          <Title className={styles.title}>{t("X_ALUMNI")}</Title>
          <Paragraph className={styles.paragraph}>
            {t("X_Alumni.Desc")}
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
                breakpoint: 1400,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {xAlumni?.map((item, index) => {
              return (
                <div key={index}>
                  <MaskCard
                    className={styles.maskCard}
                    bodyStyle={{
                      padding: 0,
                    }}
                    maskChildren={generateMaskChildren(getTransResult(
                      lang,
                      item?.attributes?.titleZh,
                      item?.attributes?.titleEn
                    ), getTransResult(
                      lang,
                      item?.attributes?.descriptionZh,
                      item?.attributes?.descriptionEn
                    ))}
                    maskBackGroundColor={"rgb(23 33 66 / 80%)"}
                    maskBorderRadius={12}
                  >
                    <Image
                      src={item?.attributes?.img?.data?.attributes?.url}
                      alt="image"
                      preview={false}
                      className={styles.image}
                    />
                    <Title className={styles.cardTitle}>{getTransResult(
                      lang,
                      item?.attributes?.titleZh,
                      item?.attributes?.titleEn
                    )}</Title>
                  </MaskCard>
                </div>
              );
            })}
          </Carousel>
        </div>

        <button
          className={styles.moreAlumniInfo}
          onClick={() => router.push("/about-us/x-alumni")}
        >
          {t("MoreAlumniInformation")}
          <AppstoreAddOutlined className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default XAlumni;
