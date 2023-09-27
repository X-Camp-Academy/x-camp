import ColorfulCard from '@/components/common/colorful-card';
import { useLang } from '@/hoc/with-intl/define';
import { Card, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Text } = Typography;

const RelateResources: React.FC = () => {
  const { format: t } = useLang();
  const QAData = [
    {
      title: t('USACO.Activity1'),
      url: '/about-us/contact-us/',
      description: t('USACO.Desc1')
    },
    {
      title: t('USACO.Activity2'),
      url: '/',
      description: t('USACO.Desc2')
    },
    {
      title: t('USACO.Activity3'),
      url: 'https://www.youtube.com/watch?v=K2PWgYHZWbw&t=3s',
      description: t('USACO.Desc3')
    }
  ];

  return (
    <div className={styles.relateResources}>
      <div className={'container'}>
        <ColorfulCard border={'bottom'} index={1} animate={false}>
          <Card className={styles.card}>
            <div className={styles.title}>{t('MoreUSACORelatedResources')}</div>
            {QAData.map((item) => {
              return (
                <div key={item.title}>
                  <Text className={styles.question} underline>
                    <a href={item.url} style={{ color: 'inherit' }}>
                      {item.title}
                    </a>
                  </Text>
                  <div className={styles.answer}>{item.description}</div>
                </div>
              );
            })}
          </Card>
        </ColorfulCard>
      </div>
    </div>
  );
};

export default RelateResources;
