"use client";
import React from "react";
import { Typography, Row, Col, Space, Image } from "antd";
import Texty from "rc-texty";
import MaskCard from "../common/mask-card";
import styles from "./DiscoverCourses.module.scss";

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
  const generateMaskChildren = (title: string, desc: string, link: string) => {
    return (
      <Space
        direction={"vertical"}
        style={{ height: "100%", justifyContent: "space-between" }}
      >
        <Space direction={"vertical"}>
          <Title className={styles.maskTitle}>APCS</Title>
          <Paragraph className={styles.maskDesc}>
            7th+ Graders Recommended. No coding background required. Target for
            APCS A, 3 courses in total.
          </Paragraph>
        </Space>

        <div className={styles.more}>{"More >"}</div>
      </Space>
    );
  };
  const courseCards = [
    {
      title: "Python Beginner",
      desc: "5th+ Graders",
      url: "/image/home/course-1.png",
      bgc: "#D8D8D8",
      maskBgc: "rgb(216 216 216 / 40%)",
      maskChildren: generateMaskChildren(
        "APCS",
        `7th+ Graders Recommended. No coding background required. Target for
      APCS A, 3 courses in total.`,
        ""
      ),
    },
    {
      title: "C++ Knowledge",
      desc: "6th+ Graders",
      url: "/image/home/course-2.png",
      bgc: "#FFD600",
      maskBgc: "rgb(255 214 0 / 40%)",
      maskChildren: generateMaskChildren(
        "APCS",
        `7th+ Graders Recommended. No coding background required. Target for
      APCS A, 3 courses in total.`,
        ""
      ),
    },
    {
      title: "USACO Grandmaster",
      desc: "7th+ Graders",
      url: "/image/home/course-3.png",
      bgc: "#FFAD11",
      maskBgc: "rgb(255 173 17 / 40%)",
      maskChildren: generateMaskChildren(
        "APCS",
        `7th+ Graders Recommended. No coding background required. Target for
      APCS A, 3 courses in total.`,
        ""
      ),
    },
    {
      title: "APCS",
      desc: "7th+ Graders",
      url: "/image/home/course-4.png",
      bgc: "#D46B14",
      maskBgc: "rgb(212 107 20 / 40%)",
      maskChildren: generateMaskChildren(
        "APCS",
        `7th+ Graders Recommended. No coding background required. Target for
      APCS A, 3 courses in total.`,
        ""
      ),
    },
  ];
  return (
    <div
      className={`${styles.discoverCourses} container`}
      style={{ alignItems: align }}
    >
      <Texty
        duration={100}
        type={"left"}
        interval={20}
        className={styles.title}
      >
        Discover Our Courses
      </Texty>
      {showSubTitle && (
        <div className={styles.subTitle}>Recent popular activities</div>
      )}
      {showBg && <Text className={styles.arc}></Text>}

      <Row className={styles.row} gutter={16} justify="center" align="middle">
        {courseCards.map((item) => {
          return (
            <Col key={item?.url} xs={24} sm={24} md={12} lg={6}>
              <MaskCard
                className={styles.card}
                bodyStyle={{
                  backgroundColor: item?.bgc,
                  borderRadius: 8,
                  paddingBottom: 0,
                }}
                maskChildren={item.maskChildren}
                maskBackGroundColor={item?.maskBgc}
              >
                <Space direction="vertical">
                  <Title className={styles.cardTitle}>{item?.title}</Title>
                  <Paragraph className={styles.cardParagraph}>
                    {item?.desc}
                  </Paragraph>
                </Space>
                <Image
                  src={item?.url}
                  alt="image"
                  preview={false}
                  className={styles.cardImage}
                />
              </MaskCard>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default DiscoverCourses;
