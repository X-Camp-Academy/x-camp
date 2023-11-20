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
  const isiPad = useMobile('xl');
  const { format: t } = useLang();
  return (
    <div className={`${styles.aboutXcamp} container`}>
      <Title className={styles.title}>
        {t('About')} <span>{t('XCamp')}</span>
      </Title>
      <Paragraph className={styles.paragraph}>
        {t('AboutXCamp.Desc1')} {t('AboutXCamp.SubTitle')}
      </Paragraph>

      <Space direction={isiPad ? 'vertical' : 'horizontal'} size={isMobile ? 24 : 48} className={styles.space}>
        <Image preview={false} alt="" src={'/image/courses/camps-3.png'} className={styles.leftImage} />
        <Space direction="vertical" size={16} className={styles.rightSpace}>
          <Paragraph className={styles.rightParagraph}>{t('AboutXCamp.Desc2')}</Paragraph>
          <UsacoMedal style={{ backgroundColor: '#F5F5F5', paddingTop: isMobile ? 8 : 16 }} showLogo={false} showTitle={false} spacePaddingTop={0} rowStyle={{ padding: 0 }} />
        </Space>
      </Space>
    </div>
  );
};

export default AboutXCamp;
