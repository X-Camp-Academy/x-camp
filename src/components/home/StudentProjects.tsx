"use client";
import React from "react";
import { Space, Typography, Row, Col, Card, Image, Button } from "antd";
import styles from "./StudentProjects.module.scss";
import { RightOutlined } from "@ant-design/icons";
import { useMobile } from "@/utils";
import { useGetHomeStudentProjects } from "@/apis/strapi-client/strapi";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";
import { StrapiMedia } from "@/apis/strapi-client/strapiDefine";
import Link from "next/link";

const { Title, Paragraph, Text } = Typography;

const StudentProjects: React.FC = () => {
  const { format: t, lang } = useLang();

  const { data } = useGetHomeStudentProjects();

  const studentProjectsData = data?.sort(
    (a, b) => b?.attributes?.order - a?.attributes?.order
  );

  const getMediaUrl = (media: StrapiMedia) => {
    return media?.data?.attributes?.url;
  };
  return (
    <div className={`${styles.studentProjects} container`}>
      <Space direction="vertical" align="center">
        <Title className={styles.title}>{t("StudentProjects")}</Title>
        <Paragraph className={styles.paragraph}>
          {t("StudentProjects.Desc1")}
          <Text className={styles.paragraphText}> {t("greatOpportunity")}</Text>
          {t("StudentProjects.Desc2")}
        </Paragraph>

        <Row gutter={16} className={styles.row}>
          <Col xs={24} sm={24} md={24} lg={12}>
            {studentProjectsData && (
              <iframe
                width="100%"
                height="100%"
                src={getMediaUrl(studentProjectsData[0]?.attributes?.video)}
                title="X-Camp Academy Intro - 2023"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </Col>

          <Col xs={24} sm={24} md={24} lg={12}>
            <div className={styles.cardContainer}>
              {studentProjectsData &&
                studentProjectsData.slice(1).map((item) => (
                  <Card
                    key={item?.id}
                    className={styles.card}
                    bodyStyle={{
                      overflow: "hidden",
                      padding: 16,
                    }}
                    cover={
                      <iframe
                        width="100%"
                        src={getMediaUrl(item?.attributes?.video)}
                        title="X-Camp Academy Intro - 2023"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    }
                  >
                    <Space direction="vertical" size={24}>
                      <Text className={styles.cardTitle}>
                        {getTransResult(
                          lang,
                          item?.attributes?.titleZh,
                          item?.attributes?.titleEn
                        )}
                      </Text>
                      <Paragraph
                        ellipsis={{ rows: 3 }}
                        className={styles.cardParagraph}
                      >
                        {getTransResult(
                          lang,
                          item?.attributes?.descriptionZh,
                          item?.attributes?.descriptionEn
                        )}
                      </Paragraph>
                      <Link href="/" className={styles.cardMore}>
                        {"More"} <RightOutlined />
                      </Link>
                    </Space>
                  </Card>
                ))}
            </div>
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default StudentProjects;
