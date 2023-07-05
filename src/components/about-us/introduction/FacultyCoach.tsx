"use client";
import React, { useEffect, useState } from "react";
import { Space, Row, Col, Card, Image, Typography, Tag, Avatar } from "antd";
import { useGetIntroductionFacultyCoach } from "@/apis/strapi-client/strapi";
import styles from "./FacultyCoach.module.scss";
import { useLang } from "@/hoc/with-intl/define";
import { GetIntroductionFacultyCoachResponse } from "@/apis/strapi-client/define";
import { getTransResult } from "@/utils/public";
import { StrapiMedia } from "@/apis/strapi-client/strapiDefine";

const { Title, Paragraph, Text } = Typography;


const FacultyCoach: React.FC = () => {
  const { lang } = useLang();

  const { data: facultyCoachData } = useGetIntroductionFacultyCoach();
  console.log(facultyCoachData);

  const getImgUrl = (img: StrapiMedia) => {
    return img?.data?.attributes?.url;
  };

  const computedStyle = (index: number) => {
    const defaultStyle = {
      borderRadius: 10,
      paddingBottom: 6,
      marginTop: 16,
    };

    const colors = ["#D46B14", "#FFAD11", "#FFD600"];
    const cardStyle = {
      ...defaultStyle,
      backgroundColor: colors[index % 3],
    };

    return cardStyle;
  };
  return (
    <div className={`${styles.facultyCoach} container`}>
      <Space direction="vertical" size={48}>
        <Space direction="vertical">
          <Title className={styles.title}>Faculty & Coach</Title>
          <Paragraph className={styles.titleParagraph}>
            教师团队是由各大厂及各名校毕业生组建
          </Paragraph>
        </Space>

        {facultyCoachData?.map((faculty, facultyIndex) => (
          <Row
            key={facultyIndex}
            justify="center"
            align="middle"
            gutter={48}
            className={styles.row}
          >

            {faculty.map((item, index) => (


              <Col
                key={index}
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
              >
                <div style={computedStyle(index)}>
                  <Card>
                    <Space direction="vertical">
                      <Avatar src={getImgUrl(item?.attributes?.avatar)} className={styles.avatar} />
                      <Text className={styles.name}>{
                        getTransResult(
                          lang,
                          item?.attributes?.titleZh,
                          item?.attributes?.titleEn
                        )
                      }</Text>
                      <Paragraph
                        ellipsis={{
                          rows: 3,
                          tooltip: getTransResult(
                            lang,
                            item?.attributes?.descriptionZh,
                            item?.attributes?.descriptionEn
                          )
                        }}
                        className={styles.description}

                      >
                        {
                          getTransResult(
                            lang,
                            item?.attributes?.descriptionZh,
                            item?.attributes?.descriptionEn
                          )
                        }
                      </Paragraph>
                    </Space>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        ))}
      </Space>
    </div>
  );
};

export default FacultyCoach;
