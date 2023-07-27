import React from "react";
import { Space } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import styles from "./index.module.scss";

const Introduction: React.FC = () => {
  const { format: t } = useLang();
  return (
    <div className={"container"}>
      <div className={styles.title}>{t("DeepDiveIOfX-CampClass")}</div>
      <p className={styles.description}>{t("DeepDiveIOfX.Desc")}</p>
      <Space className={styles.images} wrap>
        {[1, 2, 3]?.map((_, index) => (
          <img key={index} src="/image/about-us/banner-background.png" alt="" />
        ))}
      </Space>
    </div>
  );
};

export default Introduction;
