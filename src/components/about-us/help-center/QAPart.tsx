"use client";
import React from "react";
import { Typography } from "antd";
import styles from "./QAPart.module.scss";
import QACard from "@/components/common/q&a";
import { useGetFaq } from "@/apis/strapi-client/strapi";
import { useLang } from "@/hoc/with-intl/define";
import { getTransResult } from "@/utils/public";

const { Title, Text } = Typography;

const QAPart = () => {
  const { lang } = useLang();
  const { data: faq } = useGetFaq({ category: true, courseId: ["1", "2"] });

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
      {faq?.map((v, index) => (
        <React.Fragment key={index}>
          <Title className={styles.title}>{v?.[0]?.attributes?.category}</Title>
          {v.map((g, index) => (
            <QACard
              key={"referral" + index}
              question={
                getTransResult(
                  lang,
                  g?.attributes.questionZh,
                  g?.attributes.questionEn
                )!
              }
              answer={
                getTransResult(
                  lang,
                  g?.attributes.answerZh,
                  g?.attributes.answerEn
                )!
              }
              index={index}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default QAPart;
