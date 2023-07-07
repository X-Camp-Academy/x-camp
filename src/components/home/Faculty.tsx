"use client";
import React, { useRef } from "react";
import { Space, Typography, Card, Image, Button, Carousel } from "antd";
import styles from "./Faculty.module.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import ColorfulCard from "../common/colorful-card";
import { CarouselRef } from "antd/es/carousel";
import { useGetCourses, useGetFaculty } from "@/apis/strapi-client/strapi";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";
import { StrapiMedia } from "@/apis/strapi-client/strapiDefine";

const { Title, Paragraph, Text } = Typography;

const Faculty: React.FC = () => {
  const { lang } = useLang();
  const { data: coursesData } = useGetCourses();

  const { data: facultyData } = useGetFaculty({
    pageName: ['/home']
  });

  console.log(facultyData);

  const computedStyle = (index: number) => {
    const iconDefaultStyle = {
      color: "#d46b14",
      borderColor: "#d46b14",
    };
    const colors = ["#D46B14", "#FFAD11", "#FFD600"];
    const iconStyle = {
      ...iconDefaultStyle,
      color: colors[index % 3],
      borderColor: colors[index % 3],
    };
    return iconStyle;
  };

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
        <Title className={styles.title}>Faculty</Title>
        <Paragraph className={styles.paragraph}>
          X-Camp has its own Art of Python Programming contest 4.0 award and
          other projects and event every quarter to inspire students . It is a
          great opportunity for students to showcase what they have learned from
          classes .
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
          dots={false}
        >
          {facultyData?.map((item, index) => {
            return (
              <ColorfulCard
                key={item?.id}
                border="bottom"
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
                      <Button
                        type="primary"
                        size="small"
                        ghost={true}
                        shape="circle"
                        style={computedStyle(index)}
                      >
                        <RightOutlined />
                      </Button>
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
