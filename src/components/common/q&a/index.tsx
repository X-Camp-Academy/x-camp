"use client";
import React from "react";
import styles from "./index.module.scss";
import { Collapse, Space } from "antd";
import { DownCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

interface Props {
  question: string;
  answer: string;
  index: number;
  className?: string;
}
const QACard: React.FC<Props> = ({
  question,
  answer,
  index,
  className = "",
}) => {
  const threeColors = ["#FFD600", "#FFAD11", "#D46B14"];
  const computedStyle = (index: number) => {
    const defaultStyle = {
      borderRadius: 12,
    };
    return {
      ...defaultStyle,
      backgroundColor: threeColors[index % 3],
    };
  };

  return (
    <Collapse
      expandIconPosition="end"
      expandIcon={({ isActive }) => (
        <DownCircleOutlined
          rotate={isActive ? 180 : 0}
          style={{ color: "#FFAD11", fontSize: 24 }}
        />
      )}
      className={`${styles.collapse} ${className}`}
      style={computedStyle(index)}
    >
      <Panel
        header={
          <Space size={12}>
            <div
              className={`${styles.questionAndAnswerIcon} ${styles.question}`}
            >
              Q
            </div>
            <strong>{question}</strong>
          </Space>
        }
        key={question + answer}
        className={styles.panel}
        style={{ borderRadius: 12 }}
      >
        <Space size={12} align="start">
          <div className={`${styles.questionAndAnswerIcon} ${styles.answer}`}>
            A
          </div>
          {answer}
        </Space>
      </Panel>
    </Collapse>
  );
};

export default QACard;