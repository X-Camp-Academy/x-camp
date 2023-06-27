"use client";
import React from "react";
import { Typography } from "antd";
import styles from "./QAPart.module.scss";
import QACard from "@/components/common/q&a";

const { Title, Text } = Typography;

const QAPart: React.FC = () => {
  const QAData = [
    {
      question:
        "How can I refer friends.How can I refer friends.How can I refer friends.How can I refer friends",
      answer:
        "I don't know it. But you can ask for your parents.I don't know it. But you can ask for your parents.I don't know it. But you can ask for your parents.",
    },
    {
      question: "How can I refer friends",
      answer: "I don't know it. But you can ask for your parents.",
    },
    {
      question: "How can I refer friends",
      answer: "I don't know it. But you can ask for your parents.",
    },
    {
      question: "How can I refer friends",
      answer: "I don't know it. But you can ask for your parents.",
    },
    {
      question: "How can I refer friends",
      answer: "I don't know it. But you can ask for your parents.",
    },
  ];

  return (
    <div className={`${styles.qaContent} container`}>
      <Title className={styles.title}>Referral QA</Title>
      {QAData.map((item, index) => (
        <QACard
          key={"referral" + index}
          question={item.question}
          answer={item.answer}
          index={index}
        />
      ))}

      <Title className={styles.title}>Courses QA</Title>

      {QAData.map((item, index) => (
        <QACard
          key={"referral" + index}
          question={item.question}
          answer={item.answer}
          index={index}
        />
      ))}
    </div>
  );
};

export default QAPart;
