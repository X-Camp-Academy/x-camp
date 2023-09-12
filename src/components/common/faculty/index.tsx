"use client";
import React, { useMemo } from "react";
import { Space, Typography } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import { useMobile } from "@/utils";
import CardListMobile from "@/components/common/faculty/CardListMobile";
import CarouselWithButton from "@/components/common/faculty/CarouselWithButton";
import CardItem, { IItem } from "@/components/common/faculty/CardItem";
import { useGetFaculty } from "@/apis/strapi-client/strapi";
import { StrapiMedia } from "@/apis/strapi-client/strapiDefine";
import styles from "./index.module.scss";

const { Title, Paragraph, Text } = Typography;

const Faculty: React.FC = () => {
  const { format: t } = useLang();
  const isMobile = useMobile();
  const { data } = useGetFaculty({});

  const getImgUrl = (img: StrapiMedia) => {
    return img?.data?.attributes?.url;
  };

  const facultyData: IItem[] | undefined = useMemo(() => {
    return data?.sort(
      (a, b) => b?.attributes?.order - a?.attributes?.order
    ).map(item => ({ id: item.id, attributes: { ...item?.attributes, imgUrl: getImgUrl(item?.attributes?.img) } }));
  }, [data]);

  return (
    <div className={`${styles.faculty} container`}>
      <Space direction="vertical" align="center">
        <Title className={styles.title}> <span>{t("Founders")}</span> & {t("Faculty")}</Title>
        <Text className={styles.titleBg} />
        <Paragraph className={styles.paragraph}>{t("Faculty.Desc")}</Paragraph>
      </Space>

      <div className={styles.carouselContainer}>
        {
          !isMobile ? <CarouselWithButton>
            {facultyData?.map((item, index) => {
              return <CardItem item={item} index={index} key={item.id} />;
            })}
          </CarouselWithButton> : <CardListMobile>
            {facultyData?.map((item, index) => {
              return <CardItem item={item} index={index} key={item.id} />;
            })}
          </CardListMobile>
        }
      </div>
    </div>
  );
};

export default Faculty;
