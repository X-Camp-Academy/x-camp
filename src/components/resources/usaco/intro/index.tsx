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
      title: 'Bronze',
      desc: '(Knowledge Level)'
    },
    {
      title: 'Silver',
      desc: '(Knowledge & Ability Level Mix)'
    },
    {
      title: 'Gold',
      desc: '(Ability Level)'
    },
    {
      title: 'Platinum',
      desc: '(Ability Level)'
    },
    {
      title: '(US Camp)Finalist',
      desc: '(Ability Level)'
    }
  ];
  return (
    <div className={`${styles.introContainer} container`}>
      <Space direction="vertical">
        <Title className={styles.title}>Intro to USACO（USA Computing Olympiad）</Title>

        <Space direction="vertical">
          <Title className={styles.subTitle}>1. USACO Progression Path</Title>
          <Paragraph className={styles.subParagraph}>
            Bronze ➡️ Silver ➡️ Gold ➡️ Platinum ➡️ US Camp ➡️ US IOI Team
            <br />
            Four contests each season, typically from December to March
            <br />
            Contest Window: 4 hours, 5 hours for US Open (March)
          </Paragraph>
        </Space>

        <Space direction="vertical">
          <Title className={styles.subTitle}>2. USACO National Finalist Journey </Title>
          <Paragraph className={styles.subParagraph}>
            {'Platinum -> US Camp -> US IOI Team'}
            <br />
            Approximately 22 - 27 Finalists each season
            <br />
            The US team selects 4 representatives to compete in the yearly IOI (International Olympiad of Informatics).
          </Paragraph>
        </Space>

        <Space size={0} className={styles.space}>
          {images?.map((item) => <Image key={item} alt="" src={item} preview={false} className={styles.image} />)}
        </Space>

        <Title className={styles.chartTitle}>USACO Pre-college contestants in 2020 - 2023</Title>

        <Space direction={isMobile ? 'vertical' : 'horizontal'} size={48} className={styles.chart}>
          <Image alt="" preview={false} src={'/image/resources/bar-chart.png'} className={styles.barChart} />

          <Space direction="vertical" className={styles.chartRight}>
            <Title className={styles.subTitle}>Each level difficulties and abilities to master</Title>
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
