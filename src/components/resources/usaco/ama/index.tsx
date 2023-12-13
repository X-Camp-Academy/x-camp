import { useGetUSACOAMA } from '@/apis/strapi-client/strapi';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { Image, Space, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Title, Paragraph, Text } = Typography;
const Banner: React.FC = () => {
  const { data } = useGetUSACOAMA();
  const { format: t } = useLang();
  const isMobile = useMobile();

  return (
    <div className={`${styles.amaContainer} container`}>
      <Space direction="vertical" size={isMobile ? 24 : 8} style={{ width: '100%' }}>
        <Title className={styles.title}>{t('AMA.Title')}</Title>
        <Paragraph className={styles.paragraph}>{t('AMA.desc')}</Paragraph>

        <Space direction={isMobile ? 'vertical' : 'horizontal'} size={isMobile ? 24 : 16} className={styles.spaceContainer}>
          {data?.map((item) => (
            <Space direction="vertical" key={item?.attributes?.title} className={styles.spaceBox} onClick={() => window.open(item?.attributes?.link, '_blank')}>
              <Image key={item?.attributes?.title} alt="" src={item?.attributes?.img?.data?.attributes?.url} preview={false} className={styles.image} />
              <Title className={styles.title}>{item?.attributes?.title}</Title>
              <Text className={styles.date}>{item?.attributes?.date}</Text>
            </Space>
          ))}
        </Space>
      </Space>
    </div>
  );
};

export default Banner;
