import React from "react";
import styles from "./index.module.scss";
import QACard from "@/components/common/q&a";

interface Props {
  title: string;
}

const CampFAQS = ({ title }: Props) => {
  const QAData = [
    {
      question: "How can I refer friends.How can I refer friends",
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
  ];

  return (
    <div className={styles.campFAQS}>
      <div className="container">
        <div className={styles.title}>{title}</div>
        <div className={styles.cardContent}>
          {QAData.map((item, index) => (
            <QACard
              key={"referral" + index}
              question={item.question}
              answer={item.answer}
              index={index}
              className={styles.qaCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampFAQS;
