import React from 'react';
import styles from './index.module.scss';
import ColorfulCard from '@/components/common/colorful-card';
import { Card, Typography } from 'antd';
const { Text } = Typography;
const RelateResources = () => {
  const QAData = [
    {
      title: 'USACO Public Mock Test',
      url: '/',
      description: 'From 2022 USACO Season, X-Camp teaching research team provide USACO authentic mock test to ALL before Dec real USACO contest comes. It’s a benifit for current students chasing new USACO achievements in upcoming seasons. It also benefits the competitive programming community due to the shortage of high-quality test problems.'
    },
    {
      title: 'USACO Enhancement Class',
      url: '/',
      description: 'The USACO Enhancement Class is offered from October to March targeting all four levels and US Camp. There will be a weekly mock test which students gather to finish in actual competition time settings. After mock test ends, our instructor will deliver live solution.'

    },
    {
      title: 'USACO Sharing Session',
      url: '/',
      description: 'X-Camp teaching team will invite distinguished speakers like USACO Director Dr. Brian Dean, our previous alumnis, and our current students deliver different topics about USACO. If you are interested in USACO, follow our social media platform or subscribe to our newsletter. Keep you posted. '
    }
  ]


  return (
    <div className={styles.relateResources}>
      <div className={`container`} >
        <ColorfulCard border={'bottom'} index={1} animate={false}>
          <Card className={styles.card}>
            <div className={styles.title}>{'More USACO Related Resources?'}</div>
            {QAData.map((item, index) => {
              return (
                <div key={index}>
                  <Text className={styles.question} underline><a href={item.url} style={{ color: 'inherit' }}>{item.title}</a></Text>
                  <div
                    className={styles.answer}
                  >{item.description}
                  </div>
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
