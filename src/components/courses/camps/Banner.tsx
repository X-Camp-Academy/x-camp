import React from "react";
import { Col, Row, Space, Typography } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import styles from "./Banner.module.scss";
import CommonBanner from "@/components/common/common-banner";

const { Title, Text } = Typography;

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const paragraph = (
    <>
      {t("Camp.Des")}
      <br />
      <span>{t("SummerCamp")}</span>
      <br />
      <span>{t("WinterCamp")}</span>
    </>
  );

  return (
    <div className={styles.bannerContainer}>
      <CommonBanner
       image={"/image/about-us/achievements-banner.png"}
       title={t("In-personCamps")}
       paragraph={paragraph}
        />
    </div>
  );
};

export default Banner;
