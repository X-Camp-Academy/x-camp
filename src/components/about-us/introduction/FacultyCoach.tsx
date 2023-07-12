"use client";
import React from "react";
import { Space, Row, Col, Card, Typography, Avatar } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import { getTransResult } from "@/utils/public";
import {
  StrapiMedia,
  StrapiResponseDataItem,
} from "@/apis/strapi-client/strapiDefine";
import { GetFaculty } from "@/apis/strapi-client/define";
import { useGetFaculty } from "@/apis/strapi-client/strapi";

import styles from "./FacultyCoach.module.scss";

const { Title, Paragraph, Text } = Typography;

const FacultyCoach: React.FC = () => {
  const { lang } = useLang();

  const { data } = useGetFaculty({
    pageName: ["/introduction"],
  });

  const sortData = data?.sort(
    (a, b) => b?.attributes?.order - a?.attributes?.order
  );

  console.log(sortData);

  const splitIntoGroups = (
    arr: StrapiResponseDataItem<GetFaculty>[] | undefined,
    groupSize: number
  ) => {
    const groups = [];
    for (let i = 0; arr && i < arr.length; i += groupSize) {
      groups.push(arr?.slice(i, i + groupSize));
    }
    return groups;
  };
  const facultyData = splitIntoGroups(sortData, 3);
  console.log(facultyData);

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
    <div className={`${styles.facultyCoach} container`} id="faculty">
      <Space direction="vertical" size={48}>
        <Space direction="vertical">
          <Title className={styles.title}>Faculty & Coach</Title>
          <Paragraph className={styles.titleParagraph}>
            World-class faculties comprise experienced senior engineers from
            leading tech companies, accomplished students from prestigious
            computer science majors, and top-ranking members of competitive
            programming contests like IOI, ICPC, and USACO.
          </Paragraph>
        </Space>

        {facultyData?.map((faculty, facultyIndex) => (
          <Row
            key={facultyIndex}
            justify="center"
            align="middle"
            gutter={48}
            className={styles.row}
          >
            {faculty?.map((item, index) => (
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
                      <Avatar
                        src={getImgUrl(item?.attributes?.img)}
                        className={styles.avatar}
                      />
                      <Text className={styles.name}>
                        {getTransResult(
                          lang,
                          item?.attributes?.titleZh,
                          item?.attributes?.titleEn
                        )}
                      </Text>
                      <Paragraph
                        ellipsis={{
                          rows: 3,
                          tooltip: getTransResult(
                            lang,
                            item?.attributes?.descriptionZh,
                            item?.attributes?.descriptionEn
                          ),
                        }}
                        className={styles.description}
                      >
                        {getTransResult(
                          lang,
                          item?.attributes?.descriptionZh,
                          item?.attributes?.descriptionEn
                        )}
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
