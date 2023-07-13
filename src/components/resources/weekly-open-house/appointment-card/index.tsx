import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { Button } from "antd";
import { CarryOutOutlined } from "@ant-design/icons";
import { useLang } from "@/hoc/with-intl/define";

const AppointmentCard = () => {
  const { format: t } = useLang();
  return (
    <div className={"container"}>
      <div className={styles.card}>
        <div className={styles.left}>
          <div className={styles.title}>{t("OpenHouse.Conflict")}</div>
          <div className={styles.description}>
            {t("OpenHouse.Conflict.Desc")}
          </div>
          <Button className={styles.btn}>
            {t("MakeAnAppointment")}
            <CarryOutOutlined />
          </Button>
        </div>
        <div className={styles.right}>
          <div className={styles.imgContain}>
            <img src="/image/about-us/introduction/top-banner.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
