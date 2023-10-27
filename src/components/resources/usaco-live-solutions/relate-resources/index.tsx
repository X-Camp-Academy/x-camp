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
      title: t('USACOPublicMockTest.Title'),
      url: 'https://tinyurl.com/23-24USACOFreeMockTest',
      description: t('USACOPublicMockTest.Desc')
    },
    {
      title: t('USACOMockTestClass.Title'),
      url: '/courses/#mock-test-classes',
      description: t('USACOMockTestClass.Desc')
    },
    {
      title: t('USACOSharingSession.Title'),
      url: 'https://www.youtube.com/watch?v=K2PWgYHZWbw&t=3s',
      description: t('USACOSharingSession.Desc')
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
