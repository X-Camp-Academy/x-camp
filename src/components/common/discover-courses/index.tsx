"use client";
import React from "react";
import { Typography, Row, Col, Space } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import MaskCard from "../mask-card";
import styles from "./index.module.scss";

const { Title, Paragraph, Text } = Typography;
interface DiscoverCoursesProps {
  showSubTitle?: boolean;
  align?: "center" | "flex-start" | "flex-end";
  showBg?: boolean;
}
const DiscoverCourses = ({
  showSubTitle = false,
  align = "center",
  showBg = true,
}: DiscoverCoursesProps) => {
  const { format: t } = useLang();
  const generateMaskChildren = (title: string, desc: string, link: string) => {
    return (
      <Space
        direction={"vertical"}
        style={{ height: "100%", justifyContent: "space-between" }}
      >
        <Space direction={"vertical"}>
          <Title className={styles.maskTitle}>{title}</Title>
          <Paragraph className={styles.maskDesc}>{desc}</Paragraph>
        </Space>

        <div className={styles.more}>
          <a href={link}>{t("More>")}</a>
        </div>
      </Space>
    );
  };

  const courseCards = [
    {
      title: t("Python.Title"),
      desc: t("Python.Grade"),
      url: "/image/home/course-1.png",
      bgc: "#D8D8D8",
      maskBgc: "rgb(216 216 216 / 40%)",
      maskChildren: generateMaskChildren(
        t("Python.Title"),
        t("Python.Mask.Desc"),
        "/courses/#classify0"
      ),
    },
    {
      title: t("USACOK.Title"),
      desc: t("USACOK.Grade"),
      url: "/image/home/course-2.png",
      bgc: "#FFAD11",
      maskBgc: "rgb(255 173 17 / 40%)",
      maskChildren: generateMaskChildren(
          t("USACO.Title"),
          t("USACO.Mask.Desc"),
          "/courses/#classify3"
      ),
    },
    {
      title: t("USACO.Title"),
      desc: t("USACO.Grade"),
      url: "/image/home/course-3.png",
      bgc: "#FFAD11",
      maskBgc: "rgb(255 173 17 / 40%)",
      maskChildren: generateMaskChildren(
          t("USACO.Title"),
          t("USACO.Mask.Desc"),
          "/courses/#classify3"
      ),
    },

    // {
    //   title: t("C++.Title"),
    //   desc: t("C++.Grade"),
    //   url: "/image/home/course-2.png",
    //   bgc: "#FFD600",
    //   maskBgc: "rgb(255 214 0 / 40%)",
    //   maskChildren: generateMaskChildren(
    //     t("C++.Title"),
    //     t("C++.Mask.Desc"),
    //     "/courses/#classify1"
    //   ),
    // },
    {
      title: "Java & APCS",
      desc: t("APCS.Grade"),
      url: "/image/home/course-4.png",
      bgc: "#D46B14",
      maskBgc: "rgb(212 107 20 / 40%)",
      maskChildren: generateMaskChildren(
        "APCS",
        t("APCS.Mask.Desc"),
        "/courses/#apcs"
      ),
    },
  ];
  return (
    <div
      style={{ alignItems: align }}
    >
      <div className={`${styles.discoverCourses} container`}>
        <Text
          className={styles.title}
        >
          Discover Our <span>Courses</span>
        </Text>
        {showSubTitle && (
        <div className={styles.subTitle}>{t("RecentPopularEvents")}</div>
        )}
        {showBg && <Text className={styles.titleBg} />}

        <Row className={styles.row} gutter={16} align="middle">
          {courseCards.map((item) => {
            return (
              <Col key={item?.url} xs={12} sm={12} md={12} lg={12} xl={6}>
                <MaskCard
                  className={styles.card}
                  bodyStyle={{
                        padding: 0,
                        borderRadius: 8,
                        paddingBottom: 0,
                      }}
                  maskChildren={item.maskChildren}
                  maskBackGroundColor={item?.maskBgc}
                >
                  <div className={styles.infoContainer} style={{ background: `url('${item?.url}')  no-repeat`, backgroundSize: 'cover' }}>
                    <div className={styles.info}>
                      <Title className={styles.cardTitle}>{item?.title}</Title>
                      <Paragraph className={styles.cardParagraph}>
                        {item?.desc}
                      </Paragraph>
                    </div>
                  </div>

                </MaskCard>
              </Col>
            );
          })}
        </Row>
      </div>

    </div>
  );
};

export default DiscoverCourses;
