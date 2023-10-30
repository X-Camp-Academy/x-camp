'use client';
import { useMobile } from '@/utils';
import { DownCircleOutlined } from '@ant-design/icons';
import { Collapse, Space } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Panel } = Collapse;

interface QACardProps {
  question: string;
  answer: string;
  index: number;
  className?: string;
}
const QACard: React.FC<QACardProps> = ({ question, answer, index, className = '' }) => {
  const isMobile = useMobile();
  const threeColors = ['#FFD600', '#FFAD11', '#D46B14'];
  const computedStyle = (index: number) => {
    const defaultStyle = {
      borderRadius: 12
    };
    return {
      ...defaultStyle,
      backgroundColor: threeColors[index % 3]
    };
  };

  return (
    <Collapse
      expandIconPosition="end"
      expandIcon={({ isActive }) => <DownCircleOutlined rotate={isActive ? 180 : 0} style={{ color: '#FFAD11', fontSize: isMobile ? 16 : 24 }} />}
      className={`${styles.collapse} ${className}`}
      style={computedStyle(index)}
    >
      <Panel
        header={
          <Space size={12} direction={isMobile ? 'vertical' : 'horizontal'}>
            <div className={`${styles.questionAndAnswerIcon} ${styles.question}`}>Q</div>
            <strong>{question}</strong>
          </Space>
        }
        key={question + answer}
        className={styles.panel}
        style={{ borderRadius: 12 }}
      >
        <Space size={12} align="start">
          <div className={`${styles.questionAndAnswerIcon} ${styles.answer}`}>A</div>
          <span className={styles.answerContent}>{answer}</span>
        </Space>
      </Panel>
    </Collapse>
  );
};

export default QACard;
