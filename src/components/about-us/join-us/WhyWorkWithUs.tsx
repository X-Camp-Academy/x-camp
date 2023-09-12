import React from "react";
import { Space, Typography, Card } from "antd";
import ColorfulCard from "@/components/common/colorful-card";
import { useLang } from "@/hoc/with-intl/define";
import styles from "./WhyWorkWithUs.module.scss";

const { Title, Paragraph } = Typography;

const WhyWorkWithUs: React.FC = () => {
  const { format: t } = useLang();
  return (
    <div className={styles.WhyWorkWithUsContainer}>
      <div className={`${styles.WhyWorkWithUs} container`}>
        <ColorfulCard border="bottom" index={1} animate={false}>
          <Card className={styles.card}>
            <Space direction="vertical" className={styles.cardContent}>
              <Title className={styles.title}>{t("WhyWorkWithUs")}</Title>
              <Paragraph className={styles.description}>
                {t("WhyWorkWithUs.Desc1")}
              </Paragraph>
              <Paragraph className={styles.description}>
                {t("WhyWorkWithUs.Desc2")}
              </Paragraph>
            </Space>
          </Card>
        </ColorfulCard>
      </div>
    </div>
  );
};

export default WhyWorkWithUs;
