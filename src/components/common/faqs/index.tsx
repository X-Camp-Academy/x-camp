import React from "react";
import styles from "./index.module.scss";
import QACard from "@/components/common/q&a";
import { GetFaq } from "@/apis/strapi-client/define";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";

interface Props {
  title: string;
  data: StrapiResponseDataItem<GetFaq>[] | undefined;
}

const Faqs = ({ title, data }: Props) => {
  const { lang } = useLang();
  return (
    <div className={styles.campFAQS}>
      <div className="container">
        <div className={styles.title}>{title}</div>
        <div className={styles.cardContent}>
          {data?.map((item, index) => (
            <QACard
              key={"referral" + index}
              question={
                getTransResult(
                  lang,
                  item?.attributes.questionZh,
                  item?.attributes.questionEn
                )!
              }
              answer={
                getTransResult(
                  lang,
                  item?.attributes.answerZh,
                  item?.attributes.answerEn
                )!
              }
              index={index}
              className={styles.qaCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
