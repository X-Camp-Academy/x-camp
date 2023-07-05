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
  // const data = [
  //   { title: "Leo Lin, Andrew Chen and George Sun", src: "/" },
  //   { title: "Leo Lin, Andrew Chen and George Sun", src: "/" },
  //   { title: "Leo Lin, Andrew Chen and George Sun", src: "/" },
  // ];
  const { lang } = useLang();

  const listData = [
    {
      title: "Prerequisites of contestants:",
      content: "students of CS100 who have no coding experience before.",
    },
    {
      title: "Rules:",
      content:
        "After 10-weeks learning Python, participants can create their own projects with Python by themselves or with classmates. All parents vote anonymously to select the Top 3 winning projects on demo day.",
    },
  ];
  return (
    <>
      <div className={styles.ArtOfProgrammingResultsContainer}>
        <div className={`${styles.ArtOfProgrammingResults} container`}>
          <Title className={styles.firstTitle}>
            Art of Programming Results
          </Title>
          <Text className={styles.intro}>
            X-Camp has created an Art of Python Programming contest every
            quarter to inspire students that are new to Python. It is a great
            opportunity for students to showcase what they have learned from
            classes by creating fun projects, and get rewarded!
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
            <Title className={styles.title}>Projects Demo</Title>
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
                        <video src="/"></video>
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
