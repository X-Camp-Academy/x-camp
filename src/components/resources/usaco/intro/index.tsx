import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { Image, Space, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Title, Paragraph, Text } = Typography;
const Intro: React.FC = () => {
  const { format: t } = useLang();
  const isMobile = useMobile();
  const images = ['/image/resources/usaco-intro-1.png', '/image/resources/usaco-intro-2.png', '/image/resources/usaco-intro-3.png', '/image/resources/usaco-intro-4.png'];

  const levels = [
    {
      title: t('Bronze'),
      desc: t('Knowledge.Level1')
    },
    {
      title: t('Silver'),
      desc: t('Knowledge.Level2')
    },
    {
      title: t('Gold'),
      desc: t('Knowledge.Level3')
    },
    {
      title: t('Platinum'),
      desc: t('Knowledge.Level3')
    },
    {
      title: t('USCamp'),
      desc: t('Knowledge.Level3')
    }
  ];
  return (
    <div className={`${styles.introContainer} container`}>
      <Space direction="vertical">
        <Title className={styles.title}>{t('USACO.Intro.Title')}</Title>

        <Space direction="vertical">
          <Title className={styles.subTitle}>1. {t('USACO.Intro.Progression.Path')}</Title>
          <Paragraph className={styles.subParagraph}>
            {t('USACO.Intro.Desc1')}
            <br />
            {t('USACO.Intro.Desc2')}
            <br />
            {t('USACO.Intro.Desc3')}
          </Paragraph>
        </Space>

        <Space direction="vertical">
          <Title className={styles.subTitle}>2. {t('USACO.National.Finalist')}</Title>
          <Paragraph className={styles.subParagraph}>
            {t('USACO.Intro.Desc4')}
            <br />
            {t('USACO.Intro.Desc5')}
            <br />
            {t('USACO.Intro.Desc6')}
          </Paragraph>
        </Space>

        <Space size={0} className={styles.space}>
          {images?.map((item) => <Image key={item} alt="" src={item} preview={false} className={styles.image} />)}
        </Space>

        <Title className={styles.chartTitle}>{t('USACO.PreCollege.Title')}</Title>

        <Space direction={isMobile ? 'vertical' : 'horizontal'} size={48} className={styles.chart}>
          <Image alt="" preview={false} src={'/image/resources/bar-chart.png'} className={styles.barChart} />

          <Space direction="vertical" className={styles.chartRight}>
            <Title className={styles.subTitle}>{t('USACO.Chart.Title')}</Title>
            {levels?.map((item) => (
              <div key={item?.title} className={styles.spaceItem}>
                <Space>
                  <div className={styles.circle} />
                  <Text className={styles.text}>{item?.title}</Text>
                </Space>
                <Text className={styles.text}>{item?.desc}</Text>
              </div>
            ))}
          </Space>
        </Space>
      </Space>
    </div>
  );
};

export default Intro;
