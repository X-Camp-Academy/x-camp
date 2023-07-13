import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { useLang } from "@/hoc/with-intl/define";
const cx = classNames.bind(styles);

const TopBanner = () => {
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

export default TopBanner;
