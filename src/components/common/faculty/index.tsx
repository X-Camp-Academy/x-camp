"use client";
import React, { useRef } from "react";
import { Space, Typography, Card, Image, Button, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { CarouselRef } from "antd/es/carousel";
import Link from "next/link";
import { useLang } from "@/hoc/with-intl/define";
import { getTransResult } from "@/utils/public";
import ColorfulCard from "../colorful-card";
import { useGetFaculty } from "@/apis/strapi-client/strapi";
import { StrapiMedia } from "@/apis/strapi-client/strapiDefine";
import styles from "./index.module.scss";

const { Title, Paragraph, Text } = Typography;

const Faculty: React.FC = () => {
  const { format: t, lang } = useLang();
  const { data } = useGetFaculty({});

  const facultyData = data?.sort(
    (a, b) => b?.attributes?.order - a?.attributes?.order
  );

  const carouselRef = useRef<CarouselRef>(null);
  const onPrev = () => {
    carouselRef?.current?.prev();
  };
  const onNext = () => {
    carouselRef?.current?.next();
  };

  const getImgUrl = (img: StrapiMedia) => {
    return img?.data?.attributes?.url;
  };

  return (
    <div className={`${styles.faculty} container`}>
      <Space direction="vertical" align="center">
        <Title className={styles.title}> <span>{t("Founders")}</span> & {t("Faculty")}</Title>
        <Text className={styles.titleBg}></Text>
        <Paragraph className={styles.paragraph}>{t("Faculty.Desc")}</Paragraph>
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
          infinite={true}
          responsive={[
            {
              breakpoint: 1200,
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
          dots={false}
        >
          {facultyData?.map((item, index) => {
            return (
              <ColorfulCard
                key={item?.id}
                border={"bottom"}
                index={index}
                className={styles.cardContainer}
              >
                <Card>
                  <Space align="center">
                    <Space direction="vertical">
                      <Text className={styles.name}>
                        {getTransResult(
                          lang,
                          item?.attributes?.titleZh,
                          item?.attributes?.titleEn
                        )}
                      </Text>
                      <Paragraph
                        ellipsis={{ rows: 3 }}
                        className={styles.description}
                      >
                        {getTransResult(
                          lang,
                          item?.attributes?.descriptionZh,
                          item?.attributes?.descriptionEn
                        )}
                      </Paragraph>
                      <Link href="/" className={styles.more}>
                        {t("More")} <RightOutlined />
                      </Link>
                    </Space>
                    <Image
                      src={getImgUrl(item?.attributes?.img)}
                      alt="avatar"
                      preview={false}
                      className={styles.cardImage}
                    />
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

export default Faculty;
