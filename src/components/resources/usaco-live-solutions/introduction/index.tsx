import { GetResourcesLiveSolution, LiveSolutionCategory } from '@/apis/strapi-client/define';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { getTransResult, swapArrayElements } from '@/utils/public';
import { ClockCircleOutlined, DownOutlined } from '@ant-design/icons';
import { Collapse, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';

const { Panel } = Collapse;
const { Text } = Typography;

interface Props {
  data: StrapiResponseDataItem<GetResourcesLiveSolution>[][] | undefined;
}

interface sortDataProps {
  category: LiveSolutionCategory;
  categoryData: StrapiResponseDataItem<GetResourcesLiveSolution>[];
}
[];

const UsacoIntro = ({ data }: Props) => {
  const { format: t, lang } = useLang();
  const defaultVideoUrl = 'https://media.strapi.turingstar.com.cn/production/2023/7/20230726_162259_bac67c1a78.mp4?autoplay=0';

  const isMobile = useMobile();
  const getVideoByLang = (attributes: GetResourcesLiveSolution) => {
    const { video, videoZh, videoEn } = attributes;
    return video?.data ? video?.data?.attributes?.url : videoZh || videoEn ? getTransResult(lang, videoZh, videoEn) : defaultVideoUrl;
  };
  const Categories = Object.values(LiveSolutionCategory);
  const [sortData, setSortData] = useState<sortDataProps[]>([]);

  useEffect(() => {
    if (data) {
      const sortData = swapArrayElements(data, 1, 2)?.map((item, index) => {
        const orderData = item?.sort((a, b) => b?.attributes?.order - a?.attributes?.order);
        return {
          category: Categories[index],
          categoryData: orderData
        };
      });
      setSortData(sortData);
    }
  }, [data]);

  return (
    <div className={styles.introduction}>
      <div className={'container'}>
        <div className={styles.description}>
          {t('USACOSolution.Intro1')}
          {t('USACOSolution.Intro2')}
          {t('USACOSolution.Intro3')}
        </div>
        {sortData?.map((v, index) => {
          return (
            <div key={'video' + index} style={{ marginBottom: isMobile ? 40 : 88 }}>
              <Collapse
                ghost
                defaultActiveKey={index}
                expandIconPosition={'end'}
                expandIcon={({ isActive }) => (
                  <div className={styles.changeBtn}>
                    <DownOutlined rotate={isActive ? 0 : 180} className={styles.icon} />
                  </div>
                )}
              >
                <Panel key={index} header={<div className={styles.title}>{v?.category}</div>}>
                  <Space className={styles.videoPane}>
                    {v?.categoryData?.map((g) => {
                      return (
                        <Space direction={'vertical'} className={styles.videoPanel} key={g?.id}>
                          <video className={styles.videoBox} src={getVideoByLang(g?.attributes)} width="100%" height="100%" controls autoPlay={false} />
                          <div className={styles.videoTitle}>{getTransResult(lang, g?.attributes?.titleZh, g?.attributes?.titleEn)}</div>
                          <Space>
                            <ClockCircleOutlined className={styles.icon} />
                            <div className={styles.videoDate}>{g?.attributes?.date}</div>
                          </Space>
                        </Space>
                      );
                    })}
                  </Space>
                </Panel>
              </Collapse>
            </div>
          );
        })}
        <div className={styles.MoreUSACO}>
          <a href="https://www.youtube.com/playlist?list=PLaGrjYdzFQBtJBaopC8QW9G3Sv39eeifT" target={'_blank'} rel="noreferrer">
            <Text underline className={styles.title}>
              {t('MoreUSACOSolution')}
            </Text>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UsacoIntro;
