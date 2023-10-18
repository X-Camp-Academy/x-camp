import { GetProjectsDemo } from '@/apis/strapi-client/define';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import { useLang } from '@/hoc/with-intl/define';
import { getTransResult } from '@/utils/public';
import { Card, List, Typography } from 'antd';
import React, { useEffect } from 'react';
import styles from './index.module.scss';

const { Title, Paragraph, Text } = Typography;
interface Props {
  data: StrapiResponseDataItem<GetProjectsDemo>[][] | undefined;
}

const ArtOfProgrammingResults = ({ data }: Props) => {
  const { hash } = window.location;
  const { lang, format: t } = useLang();

  const listData = [
    {
      title: t('Art.Contestants'),
      content: t('Art.Contestants.Desc')
    },
    {
      title: t('Art.Rules'),
      content: t('Art.Rules.Desc')
    }
  ];
  const scrollIntoView = (id: string) => {
    const dom = document.getElementById(id);
    dom?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  useEffect(() => {
    scrollIntoView(hash.slice(1));
  }, [hash]);
  return (
    <div className={styles.ArtOfProgrammingResultsContainer} id="art-of-programming-results">
      <div className={`${styles.ArtOfProgrammingResults} container`}>
        <Title className={styles.firstTitle}>{t('ArtProgrammingResults')}</Title>
        <Text className={styles.intro}>{t('ArtProgrammingResults.Desc')}</Text>

        <List
          dataSource={listData}
          split={false}
          renderItem={(item) => (
            <List.Item className={styles.timeListItem}>
              <List.Item.Meta title={<Text className={styles.timeListTitle}>{item.title}</Text>} description={<Paragraph className={styles.timeListDetail}>{item.content}</Paragraph>} />
            </List.Item>
          )}
        />

        <div className={styles.projectDemo}>
          <Title className={styles.title}>{t('ProjectsDemo')}</Title>
          {data?.map((v, index) => (
            <React.Fragment key={index}>
              <Title className={styles.subTitle}>{getTransResult(lang, v?.[0]?.attributes?.categoryZh, v?.[0]?.attributes?.categoryEn)}</Title>
              <List
                grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 1,
                  md: 1,
                  lg: 3,
                  xl: 3,
                  xxl: 3
                }}
                dataSource={v}
                className={styles.videoList}
                renderItem={(g) => (
                  <List.Item>
                    <Card className={styles.videoItem}>
                      <iframe src={g?.attributes?.url?.data?.attributes?.url} width="100%" height={240} sandbox="" />
                      <div className={styles.videoTitle}>{getTransResult(lang, g?.attributes?.titleZh, g?.attributes?.titleEn)}</div>
                    </Card>
                  </List.Item>
                )}
              />
            </React.Fragment>
          ))}
        </div>

        {/* ! TDOO: 先隐藏 */}
        {/* <div className={styles.projectDemo}>
          <Title className={styles.title}>{'Game Design'}</Title>
          {data?.map((v, index) => (
            <React.Fragment key={index}>
              <Title className={styles.subTitle}>{getTransResult(lang, v?.[0]?.attributes?.categoryZh, v?.[0]?.attributes?.categoryEn)}</Title>
              <List
                grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 1,
                  md: 1,
                  lg: 3,
                  xl: 3,
                  xxl: 3
                }}
                dataSource={v}
                className={styles.videoList}
                renderItem={(g) => (
                  <List.Item>
                    <Card className={styles.videoItem}>
                      <iframe src={g?.attributes?.url?.data?.attributes?.url} width="100%" height={240} sandbox="" />
                      <div className={styles.videoTitle}>{getTransResult(lang, g?.attributes?.titleZh, g?.attributes?.titleEn)}</div>
                    </Card>
                  </List.Item>
                )}
              />
            </React.Fragment>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ArtOfProgrammingResults;
