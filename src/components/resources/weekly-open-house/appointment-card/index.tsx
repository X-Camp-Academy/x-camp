import React from "react";
import styles from "./index.module.scss";
import { Button } from "antd";
import { CarryOutOutlined } from "@ant-design/icons";
import { useLang } from "@/hoc/with-intl/define";
import { useRouter } from "next/navigation";

const AppointmentCard: React.FC = () => {
  const { format: t } = useLang();
  const router = useRouter();
  return (
    <div className={"container"}>
      <div className={styles.card}>
        <div className={styles.left}>
          <div className={styles.title}>{t("OpenHouse.Conflict")}</div>
          <div className={styles.description}>
            {t("OpenHouse.Conflict.Desc")}
          </div>
          <Button className={styles.btn} onClick={() => { router.push('/') }}>
            {t("MakeAnAppointment")}
            <CarryOutOutlined />
          </Button>
        </div>
        <div className={styles.right}>
          <div className={styles.imgContain}>
            <img src="/image/about-us/banner-background.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
