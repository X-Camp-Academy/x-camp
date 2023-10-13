import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { Image, Space, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Title, Paragraph, Text } = Typography;
const Banner: React.FC = () => {
  const { format: t } = useLang();
  const isMobile = useMobile();
  const data = [
    {
      src: '/image/courses/camps-1.png',
      title: 'USACO 2023 Feb Gold Problem 3 Live Solution1',
      date: '2023-04-10'
    },
    {
      src: '/image/courses/camps-2.png',
      title: 'USACO 2023 Feb Gold Problem 3 Live Solution2',
      date: '2023-04-10'
    },
    {
      src: '/image/courses/camps-3.png',
      title: 'USACO 2023 Feb Gold Problem 3 Live Solution3',
      date: '2023-04-10'
    }
  ];
  return (
    <div className={`${styles.amaContainer} container`}>
      <Space direction="vertical">
        <Title className={styles.title}>USACO AMA</Title>
        <Paragraph className={styles.paragraph}>We are privileged to feature an annual Q&A session with USACO Director Dr. Brian Dean. our internal team will host an open Q&A for all.</Paragraph>

        <Space direction={isMobile ? 'vertical' : 'horizontal'} size={16} className={styles.spaceContainer}>
          {data?.map((item) => (
            <Space direction="vertical" key={item?.title} className={styles.spaceBox}>
              <Image key={item?.title} alt="" src={item?.src} preview={false} className={styles.image} />
              <Title className={styles.title}>{item?.title}</Title>
              <Text className={styles.date}>{item?.date}</Text>
            </Space>
          ))}
        </Space>
      </Space>
    </div>
  );
};

export default Banner;
