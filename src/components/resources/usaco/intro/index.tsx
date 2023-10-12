import { useLang } from '@/hoc/with-intl/define';
import { Image, Space, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Title, Paragraph, Text } = Typography;
const Banner: React.FC = () => {
  const { format: t } = useLang();

  const images = ['/image/courses/camps-1.png', '/image/courses/camps-2.png', '/image/courses/camps-3.png', '/image/courses/camps-1.png'];
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
      </Space>
    </div>
  );
};

export default Banner;
