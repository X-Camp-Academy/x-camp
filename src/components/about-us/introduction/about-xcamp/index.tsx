'use client';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { Image, Space, Typography } from 'antd';
import dynamic from 'next/dynamic';
import React from 'react';
import styles from './index.module.scss';
const UsacoMedal = dynamic(() => import('@/components/common/usaco-medal'));

const { Title, Paragraph } = Typography;

const AboutXCamp: React.FC = () => {
  const isMobile = useMobile();
  const { format: t } = useLang();
  return (
    <div className={`${styles.aboutXcamp} container`}>
      <Title className={styles.title}>
        {t('About')} <span>{t('XCamp')}</span>
      </Title>
      <Paragraph className={styles.paragraph}>{t('AboutXCamp.Desc1')}</Paragraph>

      <Space direction={isMobile ? 'vertical' : 'horizontal'} size={48} className={styles.space}>
        <Image preview={false} alt="" src={'/image/courses/camps-3.png'} className={styles.leftImage} />
        <Space direction="vertical" size={32} className={styles.rightSpace}>
          <Title className={styles.rightTitle}>{t('AboutXCamp.SubTitle')}</Title>
          <Paragraph className={styles.rightParagraph}>{t('AboutXCamp.Desc2')}</Paragraph>

          <UsacoMedal showLogo={false} showTitle={false} rowStyle={{ padding: 0 }} />
        </Space>
      </Space>
    </div>
  );
};

export default AboutXCamp;
