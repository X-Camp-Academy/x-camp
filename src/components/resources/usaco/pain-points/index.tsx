import ColorfulCard from '@/components/common/colorful-card';
import { useMobile } from '@/utils';
import { Space, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Title, Paragraph, Text } = Typography;
const Banner: React.FC = () => {
  const isMobile = useMobile();
  const list = [
    'Unsure of where to start or what to focus on?',
    'Concepts seem graspable, but execution falters in tests?',
    'Covered relevant topics, yet struggling to progress through USACO levels?',
    'Learning alone online and feeling isolated without support?',
    'Practice makes perfect, but real USACO tests remain a challenge?',
    'Love programming but frustrated by your progress, contemplating giving up?',
    'Uncertain about your current standing and what to expect for upcoming USACO seasons?'
  ];
  return (
    <div className={`${styles.painPointsContainer} container`}>
      <ColorfulCard border="bottom" index={1} className={styles.colorfulCard}>
        <Space direction="vertical" className={styles.space}>
          <Title className={styles.title}>USACO Common Pain Points</Title>
          <Space direction="vertical" className={styles.list}>
            {list?.map((item) => (
              <Space key={item} align={isMobile ? 'baseline' : 'center'}>
                <div className={styles.circle} />
                <Text className={styles.text}>{item}</Text>
              </Space>
            ))}
          </Space>

          <Paragraph className={styles.paragraph}>
            {"If these resonate with you, don't hesitate to reach out to X-Camp! Our dedicated teaching team is here to help you make the most of your learning journey."}
          </Paragraph>
        </Space>
      </ColorfulCard>
    </div>
  );
};

export default Banner;
