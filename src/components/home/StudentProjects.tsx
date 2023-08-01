"use client";
import React, { useEffect } from "react";
import { Space, Typography, Row, Col, Card } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useLang } from "@/hoc/with-intl/define";
import { getTransResult } from "@/utils/public";
import { useGetHomeStudentProjects } from "@/apis/strapi-client/strapi";
import { StrapiMedia } from "@/apis/strapi-client/strapiDefine";
import styles from "./StudentProjects.module.scss";

const { Title, Paragraph, Text } = Typography;

const StudentProjects: React.FC = () => {
  const { format: t, lang } = useLang();
  const { hash } = window.location;
  const { data } = useGetHomeStudentProjects();

  const studentProjectsData = data?.sort(
    (a, b) => b?.attributes?.order - a?.attributes?.order
  );

  const getMediaUrl = (media: StrapiMedia) => {
    return `${media?.data?.attributes?.url}?autoplay=0`;
  };

  const scrollIntoView = (id: string) => {
    const dom = document.getElementById(id);
    dom?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  useEffect(() => {
    scrollIntoView(hash.slice(1))
  }, [hash])

  return (
    <div className={`${styles.studentProjects} container`} id="stu_project">
      <Space direction="vertical" align="center">
        <Title className={styles.title}>{t("StudentProjects")}</Title>
        <Paragraph className={styles.paragraph}>
          {t("StudentProjects.Desc1")}
          <Text className={styles.paragraphText}> {t("greatOpportunity")}</Text>
          {t("StudentProjects.Desc2")}
        </Paragraph>

        <Row gutter={16} className={styles.row}>
          <Col xs={24} sm={24} md={24} lg={24} xl={12}>
            {studentProjectsData && (
              <iframe src={getMediaUrl(studentProjectsData[0]?.attributes?.video)} width="100%" height="100%" sandbox=""></iframe>
              // <video width="100%" height={360} controls>
              //   <source src={getMediaUrl(studentProjectsData[0]?.attributes?.video)} type="video/mp4" />
              // </video>
            )}
          </Col>

          <Col xs={24} sm={24} md={24} lg={24} xl={12}>
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
                      <iframe src={getMediaUrl(item?.attributes?.video)} width="100%" height="100%" sandbox=""></iframe>
                      // <video width={311} height={175} controls>
                      //   <source src={getMediaUrl(item?.attributes?.video)} type="video/mp4" />
                      // </video>
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
                      <a href={item?.attributes?.link} className={styles.cardMore}>
                        {"More"} <RightOutlined />
                      </a>
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
