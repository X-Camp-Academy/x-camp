import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { Space } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const WhyContests: React.FC = () => {
  const isMobile = useMobile();
  const { format: t } = useLang();
  const items = [
    {
      title: t('Contest.Title1'),
      description: t('Contest.Detail1')
    },
    {
      title: t('Contest.Title2'),
      description: t('Contest.Detail2')
    },
    {
      title: t('Contest.Title3'),
      description: t('Contest.Detail3')
    },
    {
      title: t('Contest.Title4'),
      description: t('Contest.Detail4')
    },
    {
      title: t('Contest.Title5'),
      description: t('Contest.Detail5')
    }
  ];

  return (
    <div className={`${styles.content} container`}>
      <div className={styles.top}>
        <div className={styles.title}>{t('WhyContest')}</div>
        <div className={styles.description}>{t('WhyContest.Desc')}</div>
      </div>
      <Space direction="vertical" size={isMobile ? 0 : 8} className={styles.intro}>
        {items?.map((v) => (
          <div key={v?.title}>
            <div className={styles.title}>{v?.title}:</div>
            <div className={styles.description}>{v?.description}</div>
          </div>
        ))}
      </Space>
    </div>
  );
};

export default WhyContests;
