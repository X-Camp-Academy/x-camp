import React from "react";
import styles from "./index.module.scss";
import { Button, Space } from "antd";
import classNames from "classnames/bind";
import { useLang } from "@/hoc/with-intl/define";
const cx = classNames.bind(styles);

const TopBanner = () => {
  const { format: t } = useLang();
  return (
    <div className={styles.banner}>
      <div className={cx("container", styles.content)}>
        <Space className={styles.bannerContent}>
          <Space direction={"vertical"}>
            <div className={styles.title}>{t("WeeklyOpenHouse")}</div>
            <div className={styles.description}>{t("OpenHouse.Desc")}</div>
            <Button className={styles.btn}>
              <span>{"Join The Meeting"}</span>
              <img src="/image/resources/weekly-open-house-btn.png" alt="" />
            </Button>
            <div className={styles.dateTime}>{t("JoinWay.Time")}</div>
          </Space>

          <img src="/image/resources/weekly-open-house-banner.png"></img>
        </Space>
      </div>
    </div>
  );
};

export default TopBanner;
