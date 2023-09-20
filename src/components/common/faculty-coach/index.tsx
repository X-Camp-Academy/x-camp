"use client";
import React, { useEffect, useState } from "react";
import { Space, Row, Col, Card, Typography, Avatar } from "antd";
import { SegmentedValue } from "antd/es/segmented";
import SegmentedRadioGroup from "../segmented-radio-group";
import ColorfulCard from "../colorful-card";
import { useLang } from "@/hoc/with-intl/define";
import { getTransResult } from "@/utils/public";
import {
  StrapiResponseDataItem,
} from "@/apis/strapi-client/strapiDefine";
import { FacultyLevelCategory, GetFaculty } from "@/apis/strapi-client/define";
import styles from "./index.module.scss";


const { Title, Paragraph, Text } = Typography;

const FacultyCoach: React.FC<{ data: StrapiResponseDataItem<GetFaculty>[] | undefined; }> = ({ data }) => {
  const [segmented, setSegmented] = useState<SegmentedValue>(FacultyLevelCategory.All);
  const [facultyData, setFacultyData] = useState<StrapiResponseDataItem<GetFaculty>[]>();
  const { format: t, lang } = useLang();
  const { hash } = window.location;
  const LEVEL_TYPES = Object.values(FacultyLevelCategory);

  const sortData = data?.sort(
    (a, b) => b?.attributes?.order - a?.attributes?.order
  );

  const scrollIntoView = (id: string) => {
    const dom = document.getElementById(id);
    dom?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  useEffect(() => {
    scrollIntoView(hash.slice(1));
  }, [hash]);

  useEffect(() => {
    if (segmented === FacultyLevelCategory.All) {
      setFacultyData(sortData);
    } else {
      const filteredData = sortData?.filter(item => item?.attributes?.level === segmented);
      setFacultyData(filteredData);
    }
  }, [segmented, sortData]);
  return (
    <div className={`${styles.facultyCoach} container`} id="faculty">
      <Space direction="vertical" size={48}>
        <Space direction="vertical">
          <Title className={styles.title}>
            <Text className={styles.title} style={{ color: '#FFAD11' }}>{t("Faculty")}</Text>&nbsp;&&nbsp;
            {t("Coach")}
          </Title>
          <Paragraph className={styles.titleParagraph}>
            {t("Faculty.Desc")}
          </Paragraph>
        </Space>

        <SegmentedRadioGroup
          segmented={segmented}
          setSegmented={setSegmented}
          data={LEVEL_TYPES}
        />

        <Row
          justify="center"
          align="middle"
          gutter={48}
          className={styles.row}
        >
          {facultyData?.map((item, index) => (
            <Col
              key={item?.id}
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              className={styles.col}
            >
              <ColorfulCard border="bottom" split={4} index={index}>
                <Card bodyStyle={{ padding: 0 }}>
                  <Space direction="vertical" >
                    <Avatar
                      src={item?.attributes?.img?.data?.attributes?.url}
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
              </ColorfulCard>
            </Col>
          ))}
        </Row>
      </Space>
    </div>
  );
};

export default FacultyCoach;
