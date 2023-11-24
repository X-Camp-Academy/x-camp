import { Space } from 'antd';
import styles from './index.module.scss';

const Levels = () => {
  const levels = [
    {
      level: 'Silver',
      description: 'Plan to pass the USACO Silver this season. X-Camp CS302+ Students.'
    },
    {
      level: 'Gold',
      description: 'Plan to pass the USACO Gold this season. X-Camp CS402+ Students.'
    },
    {
      level: 'Platinum',
      description: 'Plan to Join the USACO US Camp this season. X-Camp CS602+ Students.'
    },
    {
      level: 'Pre-Bronze',
      description: 'X-Camp CS102, CS200, CS201 Students. One year coding experience for non-X-Camp students.'
    },
    {
      level: 'Bronze',
      description: 'Plan to pass the USACO Silver this season. X-Camp CS302+ Students.'
    }
  ];

  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.title}>100-Probs-Challenge Divided into 5 levels</div>
        <Space size={36} wrap className={styles.cards}>
          {levels?.map((v) => (
            <div key={v?.level} className={styles.card}>
              <div className={styles.level}>{v?.level}</div>
              <div className={styles.description}>{v?.description}</div>
            </div>
          ))}
        </Space>
      </div>
    </div>
  );
};

export default Levels;
