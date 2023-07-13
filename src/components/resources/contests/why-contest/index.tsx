import React from "react";
import styles from "./index.module.scss";
import { Space } from "antd";
import { useLang } from "@/hoc/with-intl/define";

const WhyContest = () => {
  const { format: t } = useLang();
  const items = [
    {
      title: t("Contest.Title1"),
      description: t("Contest.Detail1"),
    },
    {
      title: t("Contest.Title2"),
      description: t("Contest.Detail2"),
    },
    {
      title: t("Contest.Title3"),
      description: t("Contest.Detail3"),
    },
    {
      title: t("Contest.Title4"),
      description: t("Contest.Detail4"),
    },
    {
      title: t("Contest.Title5"),
      description: t("Contest.Detail5"),
    },
  ];

  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.title}>{t("WhyContest")}</div>
          <div className={styles.description}>{t("WhyContest.Desc")}</div>
        </div>
        <Space direction="vertical" className={styles.intro} size={20}>
          {items?.map((v, index) => (
            <div key={index}>
              <div className={styles.title}>{v?.title}</div>
              <div className={styles.description}>{v?.description}</div>
            </div>
          ))}
        </Space>
        <div className={styles.bottom}>
          <div className={styles.description}>{t("WhyContest.Desc1")}</div>
        </div>
      </div>
    </div>
  );
};

export default WhyContest;
