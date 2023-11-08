import { useLang } from '@/hoc/with-intl/define';
import { List, Typography } from 'antd';
import React, { useEffect } from 'react';
import styles from './index.module.scss';

const { Title, Paragraph, Text } = Typography;

const ArtOfProgrammingResults: React.FC = () => {
  const { hash } = window.location;
  const { format: t } = useLang();
  const listData = [
    {
      title: t('Art.Contestants'),
      content: t('Art.Contestants.Desc')
    },
    {
      title: t('Art.Rules'),
      content: t('Art.Rules.Desc')
    }
  ];
  const scrollIntoView = (id: string) => {
    const dom = document.getElementById(id);
    dom?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  useEffect(() => {
    scrollIntoView(hash.slice(1));
  }, [hash]);
  return (
    <div className={`${styles.artOfProgrammingResults} container`} id="art-of-programming-results">
      <Title className={styles.title}>{t('ArtProgrammingResults')}</Title>
      <Text className={styles.introduction}>{t('ArtProgrammingResults.Desc')}</Text>

      <div className={styles.listContainer}>
        <List
          dataSource={listData}
          split={false}
          renderItem={(item) => (
            <List.Item className={styles.listItem}>
              <List.Item.Meta title={<Text className={styles.itemTitle}>{item.title}</Text>} description={<Paragraph className={styles.itemDetail}>{item.content}</Paragraph>} />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default ArtOfProgrammingResults;
