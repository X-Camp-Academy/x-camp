import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { Image, Space, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Title } = Typography;
const DeepDiveClasses: React.FC = () => {
  const isMobile = useMobile();
  const { format: t } = useLang();
  const images = ['/image/courses/openHouse1.png', '/image/courses/openHouse2.png', '/image/courses/openHouse3.png'];

  return (
    <div className={`${styles.deepDiveClasses} container`}>
      <Title className={styles.title}>{t('DeepDiveIOfX-CampClass')}</Title>
      <p className={styles.description}>{t('DeepDiveIOfX.Desc')}</p>
      <Space className={styles.images} wrap size={isMobile ? 24 : 8}>
        {images?.map((item) => <Image alt="" key={item} src={item} />)}
      </Space>
    </div>
  );
};

export default DeepDiveClasses;
