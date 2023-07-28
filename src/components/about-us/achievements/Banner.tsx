import React from "react";
import { Space, Image, Typography } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import CommonBanner from "@/components/common/common-banner";
import styles from "./Banner.module.scss";

const { Title, Paragraph } = Typography;

const Banner: React.FC = () => {
  const { format: t } = useLang();
  const leftNode = (
    <Space direction="vertical">
      <Title className={styles.title}>{t("Achievements")}</Title>
      <Paragraph className={styles.paragraph}>
        {t("AboutUs.Achievements.Desc")}
      </Paragraph>
    </Space>
  );

  const rightNode = (
    <div className={styles.imgContain}>
      <Image
        alt="image"
        src="/image/about-us/achievements-banner.png"
        preview={false}
        className={styles.image}
      />
    </div>
  );
  return (
    <CommonBanner leftNode={leftNode} rightNode={rightNode} />
  );
};

export default Banner;
