import React from "react";
import classNames from "classnames/bind";
import { useLang } from "@/hoc/with-intl/define";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

const Banner: React.FC = () => {
  const { format: t } = useLang();
  return (
    <div className={styles.banner}>
      <div className={cx("container", styles.content)}>
        <div className={styles.left}>
          <div className={styles.title}>{t("Contests")}</div>
          <div className={styles.description}>{t("Contest.Desc")}</div>
        </div>
        <div className={styles.right}>
          <img src="/image/resources/contests-banner.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
