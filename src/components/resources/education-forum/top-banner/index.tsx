import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { Carousel, Space } from "antd";
import { useLang } from "@/hoc/with-intl/define";
const cx = classNames.bind(styles);

const TopBanner = () => {
  const { format: t } = useLang();
  return (
    <div className={styles.banner}>
      <div className={cx("container", styles.content)}>
        <Space className={styles.carousel}>
          <div className={styles.item}>
            <div className={styles.title}>{t("EducationalForum")}</div>
            <div className={styles.description}>
              {t("EducationForum.Desc")}
            </div>
          </div>
          <img src="/image/resources/weekly-education-forum-banner.png"></img>
        </Space>
      </div>
    </div>
  );
};

export default TopBanner;
