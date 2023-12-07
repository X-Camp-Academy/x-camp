import { useGetTimeLine } from '@/apis/strapi-client/strapi';
import { useLang } from '@/hoc/with-intl/define';
import { getTransResult } from '@/utils/public';
import { setTwoToneColor } from '@ant-design/icons';
import { List, Space, Typography } from 'antd';
import React from 'react';
import { XStarMdViewer } from 'x-star-editor';
import styles from './index.module.scss';
const { Title, Text } = Typography;

const TimeLine: React.FC = () => {
  const { lang, format: t } = useLang();
  setTwoToneColor('#D46B14');
  const { data: timeLine } = useGetTimeLine();

  const downloadUSACOPackage = () => {
    fetch('https://media.strapi.turingstar.com.cn/production/2023/9/USACO_ced1822e5c.pdf?updated_at=2023-09-29T06:38:53.858Z')
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'USACO 学习礼包.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
      });
  };

  return (
    <div className={`${styles.timeLineContainer} container`}>
      <div className={styles.timeLine}>
        <Space direction="vertical" align="start">
          <Title className={styles.title}>{t('Timeline')}</Title>
        </Space>

        <div className={styles.listContainer}>
          <List
            dataSource={timeLine}
            split={false}
            renderItem={(item) => (
              <List.Item className={styles.listItem}>
                <List.Item.Meta
                  title={
                    <Text className={styles.itemTitle} style={{ fontSize: 20 }}>
                      {getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn)}
                    </Text>
                  }
                  description={<XStarMdViewer className={styles.itemDetail} value={getTransResult(lang, item?.attributes?.descriptionZh, item?.attributes?.descriptionEn)} />}
                />
              </List.Item>
            )}
          />
        </div>

        <Text className={styles.introduction}>{t('Timeline.Desc')}</Text>

        {/* <div
          className={styles.download}
          onClick={() => {
            message.info(
              getTransResult(
                lang,
                '点击页面下方subscribe newsletter ，获取X-Camp更多信息，领取USACO大礼包',
                "Click the 'Subscribe Newsletter' at the bottom of the page to receive more information from X-Camp and get the USACO gift package."
              )
            );
          }}
        >
          <Image alt="download" src="/image/about-us/download-outlined.png" preview={false} />
          <Text className={styles.downloadText} underline onClick={downloadUSACOPackage}>
            {t('USACO.DownloadPackage')}
          </Text>
        </div> */}
      </div>
    </div>
  );
};

export default TimeLine;
