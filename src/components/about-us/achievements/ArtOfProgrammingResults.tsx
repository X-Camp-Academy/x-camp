import { Card, Typography, List } from "antd";
import styles from "./ArtOfProgrammingResults.module.scss";
import React from "react";
import { GetProjectsDemo } from "@/apis/strapi-client/define";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";
const { Title, Paragraph, Text } = Typography;

interface Props {
  data: StrapiResponseDataItem<GetProjectsDemo>[][] | undefined;
}

const ArtOfProgrammingResults = ({ data }: Props) => {
  const { lang, format: t } = useLang();

  const listData = [
    {
      title: t("Art.Contestants"),
      content: t("Art.Contestants.Desc"),
    },
    {
      title: t("Art.Rules"),
      content: t("Art.Rules.Desc"),
    },
  ];
  return (
    <>
      <div className={styles.ArtOfProgrammingResultsContainer}>
        <div className={`${styles.ArtOfProgrammingResults} container`}>
          <Title className={styles.firstTitle}>
            {t("ArtProgrammingResults")}
          </Title>
          <Text className={styles.intro}>
            {t("ArtProgrammingResults.Desc")}
          </Text>

          <List
            dataSource={listData}
            split={false}
            renderItem={(item) => (
              <List.Item className={styles.timeListItem}>
                <List.Item.Meta
                  title={
                    <Text className={styles.timeListTitle}>{item.title}</Text>
                  }
                  description={
                    <Paragraph className={styles.timeListDetail}>
                      {item.content}
                    </Paragraph>
                  }
                />
              </List.Item>
            )}
          />

          <div className={styles.projectDemo}>
            <Title className={styles.title}>{t("ProjectsDemo")}</Title>
            {data?.map((v, index) => (
              <React.Fragment key={index}>
                <Title className={styles.subTitle}>
                  {getTransResult(
                    lang,
                    v?.[0]?.attributes?.categoryZh,
                    v?.[0]?.attributes?.categoryEn
                  )}
                </Title>
                <List
                  grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 1,
                    md: 1,
                    lg: 3,
                    xl: 3,
                    xxl: 3,
                  }}
                  dataSource={v}
                  className={styles.videoList}
                  renderItem={(g) => (
                    <List.Item>
                      <Card className={styles.videoItem}>
                        <video
                          controls
                          src={g?.attributes?.url?.data?.attributes?.url}
                        ></video>
                        <div className={styles.videoTitle}>
                          {getTransResult(
                            lang,
                            g?.attributes?.titleZh,
                            g?.attributes?.titleEn
                          )}
                        </div>
                      </Card>
                    </List.Item>
                  )}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtOfProgrammingResults;
