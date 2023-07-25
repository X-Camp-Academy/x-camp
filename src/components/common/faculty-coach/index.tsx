"use client";
import React, { useEffect } from "react";
import { Space, Row, Col, Card, Typography, Avatar } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import { getTransResult } from "@/utils/public";
import {
  StrapiMedia,
  StrapiResponseDataItem,
} from "@/apis/strapi-client/strapiDefine";
import { GetFaculty } from "@/apis/strapi-client/define";
import styles from "./index.module.scss";

const { Title, Paragraph, Text } = Typography;

const FacultyCoach: React.FC<{ data: StrapiResponseDataItem<GetFaculty>[] | undefined; }> = ({ data }) => {
  const { format: t, lang } = useLang();

  const sortData = data?.sort(
    (a, b) => b?.attributes?.order - a?.attributes?.order
  );

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

  const { hash } = window.location;
  const scrollIntoView = (id: string) => {
    const dom = document.getElementById(id);
    dom?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  // 监听hash
  useEffect(() => {
    scrollIntoView(hash.slice(1));
  }, [hash]);
  return (
    <div className={`${styles.facultyCoach} container`} id="faculty">
      <Space direction="vertical" size={48}>
        <Space direction="vertical">
          <Title className={styles.title}>{t("Faculty&Coach")}</Title>
          <Paragraph className={styles.titleParagraph}>
            {t("Faculty.Desc")}
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
