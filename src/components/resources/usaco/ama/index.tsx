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
      src: '/image/resources/usaco-ama-1.png',
      title: 'USACO AMA by Dr. Brian Dean 2022',
      date: '2022-06-10'
    },
    {
      src: '/image/resources/usaco-ama-2.png',
      title: 'USACO AMA by X-Camp Teaching Lead ',
      date: '2022-09-20'
    },
    {
      src: '/image/resources/usaco-ama-3.png',
      title: 'USACO AMA by Dr. Brian Dean 2023',
      date: '2023-06-19'
    }
  ];
  return (
    <div className={`${styles.amaContainer} container`}>
      <Space direction="vertical" size={isMobile ? 24 : 8}>
        <Title className={styles.title}>{t('AMA.Title')}</Title>
        <Paragraph className={styles.paragraph}>{t('AMA.desc')}</Paragraph>

        <Space direction={isMobile ? 'vertical' : 'horizontal'} size={isMobile ? 24 : 16} className={styles.spaceContainer}>
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
