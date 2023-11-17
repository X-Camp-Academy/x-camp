import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { Image, Space } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const Introduction: React.FC = () => {
  const isMobile = useMobile();
  const { format: t } = useLang();
  const images = ['/image/courses/openHouse1.png', '/image/courses/openHouse2.png', '/image/courses/openHouse3.png'];

  return (
    <div className={`${styles.introduction} container`}>
      <div className={styles.title}>{t('DeepDiveIOfX-CampClass')}</div>
      <p className={styles.description}>{t('DeepDiveIOfX.Desc')}</p>
      <Space className={styles.images} wrap size={isMobile ? 24 : 8}>
        {images?.map((item) => <Image alt="" key={item} src={item} preview={isMobile} />)}
      </Space>
    </div>
  );
};

export default Introduction;
