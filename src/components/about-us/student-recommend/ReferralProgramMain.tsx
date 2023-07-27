import { Typography, Card } from "antd";
import styles from "./ReferralProgramMain.module.scss";
import React from "react";
import ColorfulCard from "@/components/common/colorful-card";
import { useLang } from "@/hoc/with-intl/define";
import CopyRightIcons from "@/components/common/copy-right-icons";
import { getTransResult } from "@/utils/public";
const { Title, Paragraph } = Typography;

const ReferralProgramMain: React.FC = () => {
  const { format: t, lang } = useLang();
  return (
    <>
      <div className={styles.referralProgramMainContainer}>
        <div className={`${styles.referralProgramMain} container`}>
          <ColorfulCard border="bottom" index={1} animate={false}>
            <Card className={styles.giveAndGetCard}>
              <Title className={styles.title}>{t("Refer.Title")}</Title>
              <Paragraph className={styles.description}>
                {t("Refer.Desc")}
              </Paragraph>
              <Title className={styles.subTitle}>
                {t("Earn")}<span>{getTransResult(lang, '$50', ' $50 ')}</span>
                {t("ForYouAnd")}
                <span>{getTransResult(lang, '$50', '$50 ')}</span>
                {t("ForYourFriend")}
              </Title>
              <CopyRightIcons />
            </Card>
          </ColorfulCard>
        </div>
      </div>
    </>
  );
};

export default ReferralProgramMain;
