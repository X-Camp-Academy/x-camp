import { GetProjectDemos } from '@/apis/strapi-client/define';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { Typography } from 'antd';
import { useEffect } from 'react';
import styles from './index.module.scss';

const { Title } = Typography;

interface Props {
  data: StrapiResponseDataItem<GetProjectDemos>[][] | undefined;
}

const ProjectDemos = ({ data }: Props) => {
  const { hash } = window.location;
  const { lang, format: t } = useLang();
  const isMobile = useMobile();
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
    <div className={`${styles.projectDemosContainer} container`}>
      {/* <div className={styles.projectDemos}>
        <Title className={styles.title}>{t('ProjectDemos')}</Title>
        {data?.map((v, index) => (
          <React.Fragment key={index}>
            <Title className={styles.subTitle}>{getTransResult(lang, v?.[0]?.attributes?.categoryZh, v?.[0]?.attributes?.categoryEn)}</Title>
            <List
              grid={{
                gutter: isMobile ? 0 : 16,
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
                    <iframe src={g?.attributes?.url?.data?.attributes?.url} width="100%" height={240} sandbox="" style={{ border: 'none' }} />
                    <Title
                      className={styles.videoTitle}
                      ellipsis={{
                        rows: 1,
                        tooltip: {
                          title: getTransResult(lang, g?.attributes?.titleZh, g?.attributes?.titleEn),
                          placement: 'bottom'
                        }
                      }}
                    >
                      {getTransResult(lang, g?.attributes?.titleZh, g?.attributes?.titleEn)}
                    </Title>
                  </Card>
                </List.Item>
              )}
            />
          </React.Fragment>
        ))}
      </div> */}

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
  );
};

export default ProjectDemos;
