import React from "react";
import styles from "./index.module.scss";
import { Space } from "antd";
import { useLang } from "@/hoc/with-intl/define";

const Introduction = () => {
  const { format: t } = useLang();
  return (
    <div className={"container"}>
      <div className={styles.title}>{t("DeepDiveIOfX-CampClass")}</div>
      <p className={styles.description}>{t("DeepDiveIOfX.Desc")}</p>
      <Space size={50} className={styles.images} wrap>
        {[1, 2, 3]?.map((v, index) => (
          <img key={index} src="/image/about-us/introduction/top-banner.png" />
        ))}
      </Space>
    </div>
  );
};

export default Introduction;
